<template>
    <main class="ilopage py-5 ">
        <section id="ilo_detail1">
            <div class="container">
                <div class="row ">

                    <div class="col-12 mb-3">
                        <router-link :to="`/your-project/${presale.contract_address}`" class="text-green">
                            <i class="fa-solid fa-arrow-left"></i>
                            Back
                        </router-link>
                    </div>

                    <div class="col-12">
                        <div class="card card-teacup">

                            <div class="card-header align-items-center justify-content-between d-flex ">

                                <div class="ilo_coinname">
                                    <img v-if="presale.avatar_url" width="62" :src="presale.avatar_url"
                                         :alt="presale.sale_token_name">
                                    <img v-else width="62" src="@/assets/images/ilo/ava_ant.svg"
                                         :alt="presale.sale_token_name">
                                    <h3>{{ presale.sale_token_name }}</h3>
                                </div>

                                <div class="thelinks">
                                    <a class="text-dark copylink text-14" href="javascript:void(0)"
                                       v-clipboard:copy="presale.sale_token_address" v-clipboard:success="onCopy"
                                       v-clipboard:error="onError">
                                        {{ contractCompact }}
                                        <i class="fa-regular fa-copy"></i>
                                    </a>&nbsp;
                                    <a target="_blank" :href="presale.website_url || ''" class="text-dark text-14">
                                        Website
                                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>&nbsp;
                                    <a target="_blank"
                                       :href="urlExchange()['url']"
                                       class="text-dark text-14">
                                        {{ urlExchange()['platform'] }}
                                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>

                            </div>
                            <div class="card-body">
                                <div class="row  justify-content-center">
                                    <div class="col-12 col-lg-10">
                                        <div class="row">

                                            <div class="col-6 mb-3">
                                                Whitelist Address
                                                <i class="icofont-simple-down"></i>
                                            </div>

                                            <div class="col-6 mb-3 text-end">
                                                <label class="h3">
                                                    <div class="form-check form-switch" @click="showModalWhitelistOn = true">
                                                        <input type="checkbox" :checked="whitelist"
                                                               class="form-check-input" id="switch1">
                                                        <div class="form-check-label" for="switch1">
                                                            {{ !whitelist ? 'Whitelist Off' : 'Whitelist On' }}
                                                        </div>
                                                    </div>

                                                </label>
                                            </div>


                                            <div class="col-12 mb-3">

                                                <div class="alert alert-primary text-center" role="alert">
                                                    Address management allows you to save and write memos for each of
                                                    your withdrawl address. The optional Whitelist function helps
                                                    protect your funds by allowing withdrawals to whitelisted addresses.
                                                </div>

                                            </div>

                                            <div class="col-12 mb-3">
                                                <div class="card card-body">
                                                    <div class="row row-small-gutter align-items-center">

                                                        <div class="col col-md pr-0 mb-3">
                                                            <button
                                                                v-show="!web3Modal || !web3Modal.account || selected.length === 0"
                                                                class="btn small p-2 btn-danger" disabled>
                                                                <i class="fa fa-trash"></i>
                                                                &nbsp;
                                                                <span class="d-none d-md-inline-block">
                                                                        Remove
                                                                    </span>
                                                            </button>
                                                            <button v-show="web3Modal.account && selected.length > 0"
                                                                    @click="whitelistConfirm = true"
                                                                    class="btn small btn-danger p-2"
                                                                    :disabled="selected.length <= 0">
                                                                <i class="fa fa-trash"></i>
                                                                &nbsp;
                                                                <span class="d-none d-md-inline-block">
                                                                        Remove
                                                                    </span>
                                                            </button>
                                                            &nbsp;
                                                            <button :disabled="!web3Modal || !web3Modal.account"
                                                                    class="btn btn-success small p-2"
                                                                    @click="addWhiteList = true">
                                                                <i class="fa fa-plus"></i>
                                                                &nbsp;
                                                                <span class="d-none d-md-inline-block">
                                                                Add to Whitelist
                                                            </span>
                                                            </button>
                                                        </div>

                                                        <div class="col-8 col-md-5 mb-3">
                                                            <div class="formwrapper searchform">

                                                                <input type="text" v-model="searchQuery"
                                                                       class="form-control bg-white"
                                                                       :placeholder="$t('placeholder.06')">
                                                                <button type="button" name="button"
                                                                        class="btn btn-link rounder thesubdata">
                                                                    <img src="@/assets/images/icon/searchicon.png"
                                                                         alt="">
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div class="col-12">
                                                            <div class="table-responsive tableFixHead">
                                                                <table class="table table-borderless table-striped">
                                                                    <thead>
                                                                    <tr>
                                                                        <th class="text-white p-2">
                                                                            <label
                                                                                class="custom-control custom-checkbox mx-auto my-0">
                                                                                <input type="checkbox"
                                                                                       v-model="selectAll"
                                                                                       class="custom-control-input">
                                                                                <div class="custom-control-label"></div>
                                                                            </label>
                                                                        </th>
                                                                        <th class="text-white  p-2">No.</th>
                                                                        <th class="text-white  p-2">
                                                                            Address&nbsp;
                                                                            <span v-if="filteredList.length > 0">
                                                                                ({{ filteredList.length }})
                                                                            </span>
                                                                        </th>
                                                                    </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                    <tr v-if="filteredList.length === 0">
                                                                        <td class="noresult py-5 text-center"
                                                                            colspan="3">
                                                                            <img src="@/assets/images/icon/nodata.png"
                                                                                 alt="">
                                                                        </td>
                                                                    </tr>
                                                                    <tr v-for="(item, idx) in filteredList" :key="idx">
                                                                        <td style="min-width: 100px">
                                                                            <label
                                                                                class="custom-control custom-checkbox m-0">
                                                                                <input type="checkbox"
                                                                                       v-model="selected"
                                                                                       :value="item"
                                                                                       class="custom-control-input">
                                                                                <div class="custom-control-label"></div>
                                                                            </label>

                                                                        </td>
                                                                        <td> {{ idx + 1 }}</td>
                                                                        <td class="nowrap">
                                                                            {{ item ? item : '' }}
                                                                        </td>

                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <van-overlay :show="showModalWhitelistOn" class="teacup_modal">
                <whitelist-on :whitelist="whitelist" @closeWhitelistOn="showModalWhitelistOn = false"
                              @whitelistWasUpdated="updateWhitelistFlag($event)">
                </whitelist-on>
            </van-overlay>
            <van-overlay :show="addWhiteList" class="teacup_modal">
                <add @closeAddedOn="addWhiteList = false" @whitelistAdded="onAddWhitelist($event)"></add>
            </van-overlay>

            <van-overlay :show="whitelistConfirm" class="teacup_modal">
                <div class="modal teacup_modal layer2nd fade" id="remove_whitelist_confirm">
                    <div class="modal-dialog modal-dialog-centered modal-sm">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="row justify-content-center">
                                    <div class="col-12">
                                        <h4 class="text-center mb-3">Are you sure remove whitelists?</h4>
                                    </div>
                                    <div class="col-12 col-md-6 mt-3">
                                        <button @click="whitelistConfirm = false" class="btn btn-secondary text-gold w-100">
                                            Cancel
                                        </button>
                                    </div>
                                    <div class="col-12 col-md-6 mt-3">
                                        <button class="btn btn-gradient w-100" @click="onRemove()">
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-overlay>


        </section>
    </main>
</template>

<script>
import axios from "axios";
import WhitelistOn from "../../../../components/ilo/whitelist/whitelistOn";
import add from "../../../../components/ilo/whitelist/add";
import Web3, {utils} from "web3"
import {settingsContract} from "@/utils/const";
import {mapGetters} from "vuex";
import {mapState} from "vuex";
import CommonMixin from "@/mixins/CommonMixin";
import {Overlay} from "vant";
import {ethers} from "ethers";

export default {
    name: "whitelist",
    components: {WhitelistOn, add, [Overlay.name]: Overlay,},
    mixins: [CommonMixin],
    data() {
        return {
            listAddress: [],
            presale: Object,
            check: false,
            whitelist: false,
            isAdd: false,
            selected: [],
            searchQuery: '',
            whitelistConfirm: false,
            addWhiteList: false,
            addWhiteListOn: false,
            showModalWhitelistOn: false,
        }
    },
    methods: {
        urlExchange() {
            let data = {
                url: '',
                platform: ''
            };
            if (this.presale.platform === 'bsc') {
                data.platform = 'BscScan';
                if (this.presale.network === 'test') {
                    data.url = 'https://testnet.bscscan.com/address/' + this.presale.sale_token_address
                } else {
                    data.url = 'https://bscscan.com/address/' + this.presale.sale_token_address
                }
            } else if (this.presale.platform === 'eth') {
                data.platform = 'EthScan';
                if (this.presale['network'] === 'main') {
                    data.url = 'https://etherscan.io/address/' + this.presale.sale_token_address
                } else {
                    data.url = 'https://ropsten.etherscan.io/address/' + this.presale.sale_token_address
                }
            } else if (this.presale.platform === 'polygon') {
                data.platform = 'PolygonScan';
                if (this.presale['network'] === 'main') {
                    data.url = 'https://polygonscan.com/address/' + this.presale.sale_token_address;
                } else {
                    data.url = 'https://mumbai.polygonscan.com/address/' + this.presale.sale_token_address;
                }
            } else if (this.presale['platform'] === 'fantom') {
                data.platform = 'FantomScan';
                if (this.presale['network'] === 'main') {
                    data.url = 'https://ftmscan.com/address/' + this.presale.sale_token_address;
                } else {
                    data.url = 'https://testnet.ftmscan.com/address/' + this.presale.sale_token_address;
                }
            }
            return data;
        },
        async fetchPresaleDetail() {
            this.$store.commit("setPopupProcessing", true)
            const res = await axios.get('/api/presale/detail', {
                params: {
                    contract_address: this.$route.params.contract_address
                }
            });
            this.$store.commit("setPopupProcessing", false)
            this.presale = res.data.data;
            if (this.presale['whitelist_only']) {
                this.whitelist = true;
            }
            this.fetchWhitelist(this.presale['contract_address']);
        },
        async fetchWhitelist(contract_address) {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = '/api/presale/whitelist-address/' + contract_address + '?network=' + network + '&platform=' + platform
            const resp = await axios.get(url);
            if (resp) {
                this.listAddress = resp.data.data;
            }
        },
        onRemove() {
            if (!this.selected.length) {
                return;
            }
            let action = 0; // 1add, 0 remove
            this.whitelistConfirm = false;
            this.editWhitelist(this.selected, action);
        },
        async onAddWhitelist(address) {
            let action = 1; // 1add, 0 remove
            this.editWhitelist(address, action);

        },
        async editWhitelist(address, action) {
            let presaleContractAddress = this.presale['contract_address'];
            let web3 = new Web3(window.ethereum);
            let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
            if (this.presale['project_type'] === 'sale') {
                presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
            }
            let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);

            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.web3Modal['account'],
            };
            if (this.exchange['platform'] === 'polygon') {
                // get max fees from gas station
                let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                try {
                    const { data } = await axios({
                        method: 'get',
                        url: isProduction
                            ? 'https://gasstation-mainnet.matic.network/v2'
                            : 'https://gasstation-mumbai.matic.today/v2',
                    })
                    maxFeePerGas = ethers.utils.parseUnits(
                        Math.ceil(data.fast.maxFee) + '',
                        'gwei'
                    )
                    maxPriorityFeePerGas = ethers.utils.parseUnits(
                        Math.ceil(data.fast.maxPriorityFee) + '',
                        'gwei'
                    )
                    obj['gasPrice'] = maxFeePerGas;
                } catch {
                    // ignore
                }
            }


            this.$store.commit("setPopupWallet", true);
            let _this = this;
            try {
                let result = await presaleContract.methods.editWhitelist(address, action).send(obj).on('transactionHash', function (hash) {
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    if (action === 1) {
                        address.map(function (val, idx) {
                            _this.listAddress.unshift(val)
                        })
                    } else {
                        address.map(function (val, idx) {
                            let index = _this.listAddress.indexOf(val);
                            if (index !== -1) {
                                _this.listAddress.splice(index, 1);
                            }
                        })
                    }
                    _this.selected = [];
                    _this.searchQuery = '';
                    _this.$toaster.success('Success!');
                } else {
                    _this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                    console.log("error", result);
                }
            } catch (e) {
                this.$store.commit("setPopupWallet", false);
                console.log(e)
            }
        },
        async updateWhitelistFlag(event) {
            let value = event;
            if (this.whitelist === event) {
                return;
            }
            let presaleContractAddress = this.presale['contract_address'];
            let web3 = new Web3(window.ethereum);
            let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
            if (this.presale['project_type'] === 'sale') {
                presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
            }
            let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);

            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.web3Modal['account'],
            };
            if (this.exchange['platform'] === 'polygon') {
                // get max fees from gas station
                let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                try {
                    const { data } = await axios({
                        method: 'get',
                        url: isProduction
                            ? 'https://gasstation-mainnet.matic.network/v2'
                            : 'https://gasstation-mumbai.matic.today/v2',
                    })
                    maxFeePerGas = ethers.utils.parseUnits(
                        Math.ceil(data.fast.maxFee) + '',
                        'gwei'
                    )
                    maxPriorityFeePerGas = ethers.utils.parseUnits(
                        Math.ceil(data.fast.maxPriorityFee) + '',
                        'gwei'
                    )
                    obj['gasPrice'] = maxFeePerGas;
                } catch {
                    // ignore
                }
            }

            this.$store.commit("setPopupWallet", true);
            try {
                let result = await presaleContract.methods.setWhitelistFlag(value).send(obj).on('transactionHash', function (hash) {
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    this.$toaster.success('Success!')
                    this.whitelist = event;
                } else {
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                    console.log("error", result);
                }
            } catch (ex) {
                console.log("ex", ex);
                this.$store.commit("setPopupWallet", false);
            }

        }
    },
    created() {
        this.fetchPresaleDetail();
    },
    computed: {
        contractCompact() {
            if (!this.presale.sale_token_address) return '';
            let contractAddress = this.presale.sale_token_address;
            contractAddress = contractAddress.substr(0, 6) + '...' + contractAddress.substr(contractAddress.length - 4, 4);
            return contractAddress;
        },
        wallet() {
            return this.$store.state.web3Modal;
        },
        selectAll: {
            get: function () {
                return this.filteredList ? this.selected.length > 0 && this.selected.length === this.filteredList.length : false;
            },
            set: function (value) {
                let selected = [];
                if (value) {
                    this.filteredList.forEach(function (address) {
                        selected.push(address);
                    });
                }

                this.selected = selected;
            }
        },
        filteredList() {
            if (this.searchQuery) {
                return this.listAddress.filter((item) => {
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.toLowerCase().includes(v))
                })
            } else {
                return this.listAddress;
            }
        },
        ...mapState(['web3Modal']),
        ...mapGetters({
            exchange: 'exchange'
        })
    }
}
</script>

<style scoped>
.table-whitelist th:nth-child(1), td:nth-child(1) {
    width: 50px;
    min-width: 50px;
}

.table-whitelist th:nth-child(2), td:nth-child(2) {
    width: 100px;
    min-width: 100px;
}

button:disabled {
    cursor: no-drop;
}
</style>
