<template>
    <div>
        <div class="f-Nunito text-center" v-show="userLog && presale['current_status'] !== 3">
            <img class="img" width="55" v-if="presale.avatar_url" :src="presale.avatar_url" alt="">
            <img class="img" v-else src="@/assets/images/avar1.png" alt="">
            <div class="line1">
                You've bought
            </div>
            <div class="line2">
                {{ userLog ? userLog.sale_token_amount : 0 }} {{ presale['sale_token_symbol'] }}
            </div>
            <div class="line3">
                You can withdraw your {{ presale.sale_token_name }} once the {{presale.project_type !== 'sale' ? 'presale' : 'sale'}} has concluded.
            </div>
        </div>

        <div v-if="presale['current_status'] !== 2 && presale['current_status'] !== 3 && presale['current_round'] !== -1">
            <ul class="listbonus f-Nunito border-0 mt-4">
                <li class="mb-2">
                    <span class="cl9F9 fs-14">Your spent allowance:</span>
                    <span class="cl9F9 fs-14">You get:</span>
                </li>
                <li class="mb-2">
                <span class="text-right fs-18 fw-bold">{{ userLog ? userLog.base_token_amount : 0 }} /
                        {{ presale.limit_per_buyer + ' ' + presale.base_token_symbol }} ({{ presale.platform === 'bsc'  ? 'BEP20' : 'ERC20'}})</span>
                    <span class="text-right fs-18 fw-bold">{{ numberWithCommas(number_token * presale.token_price) }} {{ presale.sale_token_name }}</span>
                </li>
            </ul>

            <form class="formcontrol mt-4">
                <div class="form-group">
                    <label
                        class="d-flex align-items-center justify-content-between">Spend how much {{ presale.base_token_symbol }}? <span>Balance: {{ baseTokenBalance }}</span></label>
                    <div class="position-relative border-active">
                        <input
                            type="text"
                            class="form-control heigh54"
                            placeholder=""
                            v-model="number_token"
                            @input="setNumberToken"/>
                        <div class="valuebnb">
                            <span class="f-Nunito fs-18">{{ presale.base_token_symbol }}</span>
                            <button type="button" @click="setMaxTokenBuy()" class="btn btnblue">Max</button>
                        </div>
                    </div>
                </div>
            </form>

            <p class="f-Nunito">
                Please be aware if the token you are purchasing has
                deflationary mechanisms such as burn on transfer you may
                receive less than the amount stated.
            </p>

            <p class="f-Nunito">
                Your tokens will be locked in the contract until the presale
                has concluded.
            </p>

            <div class="box-swap safety-alert p-4 mb-5" v-show="show_security && presale.project_type !== 'sale'">
                <p class="d-flex align-items-center fs-20 fw-bold f-Nunito text-danger">
                    <img alt="" src="@/assets/images/icon-alert.svg" class="mr-2" />
                    Safety Alert
                </p>
                <p class="f-Nunito text-danger">
                    This is a decentralized and open sale platform. Similar to
                    Uniswap anyone can create and name a sale freely including
                    fake versions of existing tokens. It is also possible for
                    developers of a token to mint near infinite tokens and
                    dump them on locked liquidity. Please do your own research
                    before using this platform.
                </p>
                <ul class="list justify-content-end">
                    <li>
                        <a href="javascript:void(0)">More info</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" class="active" @click="show_security = false">Accept and proceed</a>
                    </li>
                </ul>
            </div>
            <div class="d-flex mb-4">
                <button
                    class="btn-bluebig w-50 mr-3"
                    :disabled="!showApprove || number_token === 0"
                    :class="showApprove && number_token > 0 ? 'btn-blue linear-blue' : 'btn-gray'"
                    @click="approveBaseToken()"
                    v-if="!checkBaseInMainToken()">
                    Approve
                    <img alt="" src="@/assets/images/dot-l-black.svg" class="ml-3" />
                </button>
                <button
                    class="fill w-50 text-center radius6"
                    :disabled="number_token === 0 || showApprove"
                    :class="number_token !== 0 && !showApprove ? 'btn-blue linear-blue' : 'btn-gray'"
                    @click="buyPresale()">
                    Purchase
                    <img alt="" src="@/assets/images/dot-l-white.svg" class="ml-2" />
                </button>
            </div>
            <p class="f-Nunito text-center">
                Any excess {{ presale.base_token_symbol }} above your allowance is immediately
                refunded
            </p>
        </div>
    </div>
</template>

<script>
    import {numberWithCommas} from '@/utils/helpers';
    import Web3, {utils} from "web3"
    import BigNumber from "@/utils/bignumber.min.js";
    import {settingsContract} from "@/utils/const";
    import axios from "axios";
    import {mapGetters} from "vuex";
    import {ethers} from "ethers";

    export default {
    name: "presale2",
    props: {
        presale: Object,
    },
    data() {
        return {
            baseTokenBalance: 0,
            showBought: false,
            showApprove: true,
            show_security: true,
            number_token: 0,
            percentBuy: 0,
            userLog: null,
            amountApprove: 0
        }
    },
    computed: {
        connectInfo() {
            return this.$store.state.connect;
        },
        ...mapGetters({
            exchange: 'exchange'
        }),
        web3Modal() {
            return this.$store.state.web3Modal;
        },
    },
    created() {
        this.getUserLog();
        this.checkBaseInMainToken();
    },
    methods: {
        setNumberToken() {
            if (this.number_token > this.presale.limit_per_buyer) {
                this.number_token = this.presale.limit_per_buyer;
            }
            this.percentBuy = (this.number_token / this.presale.limit_per_buyer) * 100;
            this.checkAllowanceBaseToken();
        },
        numberWithCommas(x) {
            return numberWithCommas(x.toFixed(2));
        },
        addTokenToInput(e) {
            this.percentBuy = e.target.value;
            this.number_token = e.target.value * this.presale.limit_per_buyer / 100;
        },
        setMaxTokenBuy() {
            this.number_token = this.presale.limit_per_buyer - (this.userLog ? this.userLog.base_token_amount : 0);
            this.percentBuy = 100;
            this.checkAllowanceBaseToken();
        },
        async getUserLog() {
            let user_address = this.$store.state.web3Modal.account;
            if (!user_address) return;
            let presale_address = this.presale.contract_address;
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = '/api/presale/get-user-log?user_address=' + user_address + '&presale_address=' + presale_address + '&network=' + network  + '&platform=' + platform;
            const userLogResp = await axios.get(url);
            this.userLog = userLogResp.data.data;
        },
        async buyPresale() {
            let amountToBuy = parseFloat(this.number_token) || 0;
            if (amountToBuy <= 0 || this.showApprove) {
                return;
            }
            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.web3Modal.account,
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
            let baseTokenDecimals = this.presale['base_token_decimals'];

            amountToBuy = (new BigNumber(amountToBuy)).mul((new BigNumber(10)).pow(baseTokenDecimals));
            amountToBuy = utils.toBN(amountToBuy).toString();

            let presaleContractAddress = this.presale['contract_address'];
            let web3 = new Web3(window.ethereum);
            let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
            if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
            }
            let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
            let dataSend = {from: this.web3Modal.account};
            let presaleInMainToken = this.presale['presale_in_main_token'];
            if (presaleInMainToken) {
                obj['value'] = amountToBuy;
            }
            this.$store.commit("setPopupWallet", true);
            let _this = this;
            try {
                let buyPre = await presaleContract.methods.buyToken(amountToBuy).send(obj).on('transactionHash', function (hash) {
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (buyPre.status) {
                    this.$toaster.success('Success!')
                    setTimeout(function () {
                        _this.getUserLog();
                        if (_this.presale['presale_in_main_token']) {
                            _this.getBaseInMainTokenBalance();
                        } else {
                            _this.getBaseTokenBalance();
                        }
                    }, 500);
                } else {
                    // modal error
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                }
            } catch (e) {
                this.$store.commit("setPopupWallet", false);
                console.log(e)
            }

        },
        async approveBaseToken() {
            let base_token_address = this.presale['base_token_address'] || '';
            let address = this.web3Modal.account;
            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.web3Modal.account,
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
            let web3 = new Web3(window.ethereum)
            const baseTokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], base_token_address)
            let baseAmount = utils.randomHex(32).toString();
            let presaleContractAddress = this.presale.contract_address;
            this.$store.commit("setPopupWallet", true);
            try {
                let approveToken = await baseTokenContract.methods.approve(presaleContractAddress, baseAmount).send(obj).on('transactionHash', function (hash) {
                    // processing check allowance
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error check allowance base token detail", error, receipt);
                });
                // processing approve
                // modal processing
                this.$store.commit("setPopupWallet", false);
                if (approveToken.status) {
                    this.showApprove = false;
                    // modal success
                    this.$toaster.success('Success!')
                    console.log("Success approve base token!");
                } else {
                    // modal error
                    console.log("error check allowance base token", approveToken);
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                }
            } catch (e) {
                this.$store.commit("setPopupWallet", false);
                console.log(e)
            }

        },
        async checkAllowanceBaseToken() {
            let amount = parseFloat(this.number_token) || 0;
            if (!this.number_token && this.number_token === 0) {
                return;
            }
            if (this.amountApprove > 0) {
                this.showApprove = this.amountApprove <= amount;
                return;
            }

            let base_token_address = this.presale['base_token_address'];
            let baseTokenDecimals = parseInt(this.presale['base_token_decimals']);
            let web3 = new Web3(window.ethereum);
            const baseTokenAllowance = new web3.eth.Contract(settingsContract['ABI_TOKEN'], base_token_address)
            let address = this.web3Modal.account;
            let presale_address = this.$route.params.contract_address;
            await baseTokenAllowance.methods.allowance(address, presale_address).call().then(
                resp => {
                    let dicimalsMul = (new BigNumber(10)).pow(baseTokenDecimals);
                    let value = (new BigNumber(resp)).div(dicimalsMul).toString();
                    this.amountApprove = value;
                    if (value > 0 && value > amount) {
                        this.showApprove = false;
                    }
                }
            );
        },
        checkBaseInMainToken() {
            let checkMain = this.presale['presale_in_main_token'];
            if (checkMain) {
                this.showApprove = false
                this.getBaseInMainTokenBalance();
                return true;
            } else {
                this.checkAllowanceBaseToken();
                this.getBaseTokenBalance();
                return false;
            }
        },
        purchaseClass() {
            let amount = parseFloat(this.number_token) || 0;
            if (amount === 0 || this.showApprove) {
                return '';
            } else {
                return 'btn-gradient';
            }
        },
        async getBaseTokenBalance() {
            // baseTokenBalance
            let web3 = new Web3(window.ethereum);
            let address = this.web3Modal.account;
            let walletAddress = this.presale.base_token_address;
            let web3Contract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], walletAddress);
            await web3Contract.methods.balanceOf(address).call().then(
                resp => {
                    let dicimalsMul = (new BigNumber(10)).pow(this.presale.base_token_decimals);
                    this.baseTokenBalance = (new BigNumber(resp)).div(dicimalsMul).toString();
                }
            )
        },
        async getBaseInMainTokenBalance() {
            // baseInMainTokenBalance
            let web3 = new Web3(window.ethereum);
            let address = this.web3Modal.account;
            await new web3.eth.getBalance(address).then(
                resp => {
                    let dicimalsMul = (new BigNumber(10)).pow(18);
                    this.baseTokenBalance = (new BigNumber(resp)).div(dicimalsMul).toString();
                }
            )
        },
    }
}
</script>

<style scoped>

</style>
