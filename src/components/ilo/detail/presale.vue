<template>
    <div class="row justify-content-center">
        <div class="col-12 mt-4 mb-3 text-center">
            <h3 >Round 1 Requirements</h3>
            <p>To participate in round 1 you need to hold at least the specified amount of ONE of the following
                tokens.</p>
        </div>
        <div v-for="(item, idx) in whiteListToken" :key="idx" class="col-12 col-lg-8">
            <div class="ilo_detail_presale_item">
                <img width="40" v-if="item.avatar" :src="item.avatar" alt="">
                <img width="40" v-else src="@/assets/images/push.svg" alt="">
                <div class="d-flex">
                    <strong>{{ item.token_symbol }} on {{ item.platform }}</strong>
                    <strong class="ml-auto">{{ item.token_amount + ' ' + item.token_symbol }}</strong>
                </div>
                <div class="d-flex">
                    <a target="_blank" :href="urlExchange(item)"
                       class="text-secondary">{{ exchange ? exchange['exchange_name'] : '' }} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <span v-show="loaded"
                          class="ms-auto text-secondary">Your balance: {{ balanceUser && balanceUser[item.token_symbol] ? balanceUser[item.token_symbol] : ' ' }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex';
    import axios from "axios";
    import Web3 from "web3"
    import BigNumber from "@/utils/bignumber.min.js";
    import {settingsContract} from "@/utils/const";

    export default {
    name: "presale",
    props: {
        presale: Object
    },
    computed: {
        ...mapState(['web3Modal']),
        ...mapGetters({
            exchange: 'exchange'
        }),
        connectInfo() {
            return this.$store.state.connect;
        },
    },
    data() {
        return {
            whiteListToken: [],
            balanceUser: {},
            loaded: false,
        }
    },
    methods: {
        connectWallet() {
            this.$store.dispatch('connect')
        },
        async getWhiteListToken() {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = `/api/registry/whitelist-token?network=${network}&platform=${platform}`;
            const respWhiteListToken = await axios.get(url);
            if (respWhiteListToken.data.data) {
                this.whiteListToken = respWhiteListToken.data.data;
                this.fetchBalanceUser();
            }
        },
        async fetchBalanceUser() {
            let web3 = new Web3(window.ethereum);
            let address = this.web3Modal.account;
            for (let i = 0; i < this.whiteListToken.length; i++) {
                let walletAddress = this.whiteListToken[i]['token_address'].trim();
                let web3Contract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], walletAddress);
                await web3Contract.methods.balanceOf(address).call().then(
                    resp => {
                        let dicimalsMul = (new BigNumber(10)).pow(this.whiteListToken[i]['token_decimals']);
                        this.balanceUser[this.whiteListToken[i]['token_symbol']] = (new BigNumber(resp)).div(dicimalsMul).toString();
                    }
                )
            }
            this.loaded = true;
        },
        urlExchange(item) {
            let url = '';
            if (item.platform === 'bsc') {
                if (item.network === 'test') {
                    url = 'https://testnet.bscscan.com/address/' + item.contract_address
                } else {
                    url = 'https://bscscan.com/address/' + item.contract_address
                }
            } else if (item.platform === 'eth') {
                if (item['network'] === 'main') {
                    url = 'https://etherscan.io/address/' + item.contract_address
                } else {
                    url = 'https://ropsten.etherscan.io/address/' + item.contract_address
                }
            } else if (item.platform === 'polygon') {
                if (item['network'] === 'main') {
                    url = 'https://polygonscan.com/address/' + item.contract_address;
                } else {
                    url = 'https://mumbai.polygonscan.com/address/' + item.contract_address;
                }
            } else if (item['platform'] === 'fantom') {
                if (item['network'] === 'main') {
                    url = 'https://ftmscan.com/address/' + item.contract_address;
                } else {
                    url = 'https://testnet.ftmscan.com/address/' + item.contract_address;
                }
            }
            return url;
        }
    },
    mounted() {
        // console.log(this.web3Modal.account)
    },
    created() {
        this.getWhiteListToken();
    }
}
</script>

<style scoped>
div[class^="col-"] {
    padding: 0 15px 0 15px;
}

.row {
    margin: 0 -15px 0 -15px;
}
</style>
