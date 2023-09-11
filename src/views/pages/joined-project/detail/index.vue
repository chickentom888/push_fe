<template>
    <div class="box-dex push-lock mb-5">
        <div class="container" data-aos="fade-up" data-aos-delay="200" v-if="presale">
            <span class="decor5"> <img alt="" src="@/assets/images/decor1.png"></span>
            <span class="decor18"> <img alt="" src="@/assets/images/decor2.png" class="w-75"></span>
            <div class="box-swap position-relative">
                <span class="decor19"> <img alt="" src="@/assets/images/decor2.png"></span>
                <div class="top-swap m-0 pl-5 pr-5 d-flex align-items-center justify-content-between">
                    <div class="top-upcoming m-0">
                        <img v-if="presale.avatar_url" width="62px" :src="presale.avatar_url" :alt="presale.sale_token_name" class="img">
                        <img v-else width="62" src="@/assets/images/push.svg" :alt="presale.sale_token_name" class="img">
                        <span class="name fs-24 m-0">{{ presale['sale_token_name'] }} </span>
                    </div>
                    <div class="clearfix f-Nunito d-flex">
                        <span class="mr-3">{{presale ? formatAddress(presale['sale_token_address']) : ''}}
                            <a href="javascript:void(0)"
                               v-clipboard:copy="presale['sale_token_address']"
                               v-clipboard:success="onCopy"
                               v-clipboard:error="onError">
                                <img alt="" src="@/assets/images/icon-save-small.svg" class="ml-1">
                            </a>
                        </span>
                        <span>
                            BscScan <a :href="urlExchange()" target="_blank">
                            <img alt="" src="@/assets/images/icon-growth-black.svg" class="ml-1"></a>
                        </span>
                    </div>
                </div>

                <div class="creat-ilo">
                    <div class="mb-5">
                        <chart :presale="presale"></chart>
                    </div>
                    <form class="formcontrol createsale">
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <label class="fs-18">Start Date</label>
                                <div class="formwrapper">
                                    <input type="datetime-local" v-model="presale.start_time" readonly
                                           class="form-control fw-bold f-Nunito fs-18">
                                </div>
                            </div>
                            <div class="form-group col-md-5">
                                <label class="fs-18">End Date</label>
                                <div class="formwrapper">
                                    <input type="datetime-local" v-model="presale.end_time" readonly
                                           class="form-control fw-bold f-Nunito fs-18">
                                </div>
                            </div>
                        </div>

                    </form>

                    <ul class="listdata mb-4">
                        <li v-if="presale.project_type !== 'sale'">
                            <div class="countdown">
                                <doughnut-chart
                                    id="ilo_detail1_chart_lock"
                                    class="mx-auto"
                                    :data="chartOther([presale.liquidity_percent, 100 - presale.liquidity_percent]).data"
                                    :options="chartOther([presale.liquidity_percent, 100 - presale.liquidity_percent]).options"
                                    :width="85" :height="85"/>
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">{{ presale.liquidity_percent }}%</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Lock {{ lockedTime(presale['lock_period']) }}</p>
                        </li>
                        <li>
                            <div class="countdown">
                                <doughnut-chart
                                    id="ilo_detail1_chart_participants"
                                    class="mx-auto"
                                    :data="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).data"
                                    :options="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).options"
                                    :width="85" :height="85"/>
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">{{ presale.num_buyers }}</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Participants</p>
                        </li>
                        <li>
                            <div class="countdown">
                                <doughnut-chart
                                    id="ilo_detail1_chart_tokenomics"
                                    class="mx-auto"
                                    :data="chartOther([presalePercentNum, 100 - presalePercentNum]).data"
                                    :options="chartOther([presalePercentNum, 100 - presalePercentNum]).options"
                                    :width="85" :height="85"/>
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">{{ presalePercent }}%</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Tokenomics</p>
                        </li>
                    </ul>
                    <div class="col-12 col-lg-4 text-center my-4"
                         v-if="presale['current_status'] === 2 && presale['liquidity_at'] === 0 && (!presale['project_type'] ||  presale['project_type'] === 'presale')">
                        <a v-if="displayLiquidty" href="javascript:void(0)"
                           @click="addLiquidity()" class="btn btn-pushswap rounder w-100"> Add Liquidity
                            <i class="fa-solid fa-right-long"></i>
                        </a>
                    </div>
                    <div class="col-12 col-lg-4 text-center my-4"
                         v-if="presale['current_status'] === 2 && presale['active_claim_at'] === 0 && presale['project_type'] === 'sale'">
                        <a v-if="isActiveVesting" href="javascript:void(0)"
                           @click="activeVesting()" class="btn btn-pushswap rounder w-100">
                            Active Claim
                            <i class="fa-solid fa-right-long"></i>
                        </a>
                    </div>
                    <p class="text-center mb-5" v-if="presale['current_status'] === 2 && presale['liquidity_at'] === 0 && (!presale['project_type'] ||  presale['project_type'] === 'presale')">
                        <a v-if="displayLiquidty" href="javascript:void(0)"
                           @click="addLiquidity()" class="linear-blue btn-blue btn-bluebig w-50">
                            Add Liquid <img src="@/assets/images/dot-l-white.svg" alt="" class="ml-2">
                        </a>
                    </p>
                    <p class="text-center mb-5" v-if="presale['current_status'] === 2 && presale['active_claim_at'] === 0 && presale['project_type'] === 'sale'">
                        <a v-if="isActiveVesting" href="javascript:void(0)"
                           @click="activeVesting()" class="linear-blue btn-blue btn-bluebig w-50">
                            Active Claim <img src="@/assets/images/dot-l-white.svg" alt="" class="ml-2">
                        </a>
                    </p>
                    <div class="push-box mb-5">
                        <ul class="list">
                            <li class="fs-16 mb-2">
                                <span class="cl9F9 fs-18">Total amounts to buy token:</span>
                                <span class="cl000 fw-bold">{{userLog ? userLog['base_token_amount'] : '0'}} {{presale ? presale['base_token_symbol'] : ''}}</span>
                            </li>
                            <li class="fs-16 mb-2">
                                <span class="cl9F9 fs-18">Total tokens purchased:</span>
                                <span class="cl000 fw-bold">{{userLog ? formatNumber(userLog['sale_token_amount'], 2) : '0'}} {{presale ? presale['sale_token_symbol'] : ''}}</span>
                            </li>
                        </ul>

                    </div>

                    <div class="col-12" v-if="displayBtnBase">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-4 text-center my-4">
                                <button v-show="withdrawBaseToken"
                                        @click="userWithdrawBaseToken()" class="linear-blue btn-blue mr-3 fill w-50 text-center radius6">
                                    Claim Base Token
                                    <i class="fa-solid fa-right-long"></i>
                                </button>
                                <button v-show="!withdrawBaseToken" disabled class="btn-gray mr-3 fill w-50 text-center radius6">
                                    Claim Base Token
                                    <i class="fa-solid fa-right-long"></i>
                                </button>
                            </div>
                            <div class="col-12 col-lg-1">

                            </div>

                            <div class="col-12 col-lg-4 text-end pt-2 my-4">

                                <h3>
                                    {{ userLog && userLog['withdraw_status'] !== 1 ? userLog['base_token_amount'] : 0 }}
                                    {{ presale['base_token_symbol'] }}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">

                    </div>
                    <div class="col-12 col-lg-9" v-if="displayBtnBase" :class="userLog['withdraw_status'] === 1 ? 'table-responsive' : 'mt-5'">
                        <div v-show="userLog && !userLog['withdraw_status']"
                             class="text-center text-secondary py-5">
                            <img src="@/assets/images/noHistory.svg" alt="">
                            <p>No Data</p>
                        </div>
                        <div v-show="userLog && userLog['withdraw_status'] === 1">
                            <table class="table table-striped table-borderless">
                                <thead class="table-success">
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Symbol</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        {{ userLog && userLog['withdraw_at'] ? momentDate(userLog['withdraw_at'] * 1000) : '' }}
                                    </td>
                                    <td>
                                        {{ userLog ? formatNumber(userLog['base_token_amount'],2) : 0 }}
                                    </td>
                                    <td>
                                        {{ presale ? presale['base_token_symbol'] : '' }}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-12">
                    </div>
                    <div class="col-12" v-if="displayBtnSale">
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-4 text-center my-4">
                                <button v-show="withdrawSaleToken"
                                        @click="userWithdrawSaleToken()" class="linear-blue btn-blue mr-3 fill w-50 text-center radius6">
                                    Claim Sale Token
                                    <i class="fa-solid fa-right-long"></i>
                                </button>
                                <button v-show="!withdrawSaleToken"
                                        disabled
                                        class="btn-gray mr-3 fill w-50 text-center radius6">
                                    Claim Sale Token
                                    <i class="fa-solid fa-right-long"></i>
                                </button>
                            </div>
                            <div class="col-12 col-lg-1">

                            </div>

                            <div class="col-12 col-lg-4 text-end pt-2 my-4">
                                <h3>
                                    {{ userLog ? amountSaleToken : 0 }}
                                    {{ presale['sale_token_symbol'] }}
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-lg-9 mt-5">
                        <h4 class="text-center ">History of getting back tokens sold</h4>

                        <div class="text-center text-secondary py-5"  v-show="!userLog || userLog['withdraw_status'] !== 1">
                            <img src="@/assets/images/noHistory.svg" alt="">
                            <p class="ext-center f-Nunito cl9F9 fs-18">No Data</p>
                        </div>

                    </div>

                    <div class="col-12 col-lg-9 table-responsive" v-show="userLog && userLog['withdraw_status'] === 1">
                        <table class="table table-striped table-borderless">
                            <thead class="table-success">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount </th>
                                <th scope="col">Symbol</th>
                            </tr>
                            </thead>
                            <tbody v-if="userLog && userLog['active_vesting']">
                            <tr v-for="(item, idx) in userLog['list_vesting']" :key="idx" v-show="item['withdraw_status'] === 1">
                                <th scope="row">
                                    {{ idx + 1 }}
                                </th>
                                <td>
                                    {{ item && item['withdraw_at'] ? momentDate(item['withdraw_at'] * 1000) : '' }}
                                </td>
                                <td>
                                    {{ item ? formatNumber(item['sale_token_withdraw_amount'],2) : 0 }}
                                </td>
                                <td>
                                    {{ presale ? presale['sale_token_symbol'] : '' }}
                                </td>
                            </tr>
                            </tbody>
                            <tbody v-else>
                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    {{ userLog && userLog['withdraw_at'] ? momentDate(userLog['withdraw_at'] * 1000) : '' }}
                                </td>
                                <td>
                                    {{ userLog ? formatNumber(userLog['sale_token_amount'], 2) : 0 }}
                                </td>
                                <td>
                                    {{ presale ? presale['sale_token_symbol'] : '' }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <span class="decor6"> <img src="@/assets/images/decor1.png" alt=""></span>
        </div>
        <!-- -----Loading---- -->
        <loading
            :active.sync="showLoading"
            :can-cancel="true"
            :is-full-page="fullPage"
        ></loading>
    </div>
</template>

<script>
import DoughnutChart from "@/components/doughnutChart/doughnutChart";
import moment from "moment";
import axios from 'axios';
import Web3 from "web3";
import {settingsContract} from "@/utils/const";
import {mapGetters} from "vuex";
import CommonMixin from "@/mixins/CommonMixin"
import AuthMixin from "@/mixins/AuthMixin"
import chart from "../../../../components/detail/chart";
import Loading from "vue-loading-overlay";
export default {
    name: "detailYourPresale",
    components: {
        chart,
        DoughnutChart,
        Loading
    },
    mixins: [CommonMixin, AuthMixin],
    data() {
        return {
            showLoading: false,
            fullPage: true,
            countdownKey: 0,
            userLog: null,
            displayLiquidty: false,
            isActiveVesting: false,
            displayUserForceFail: false,
            withdrawBaseToken: false,
            withdrawSaleToken: false,
            amountSaleToken: 0,
            amountBaseToken: 0,
            displayBtnBase: false,
            displayBtnSale: false,
            displayBtnWdr: false,
            presale: null,
            isShow: false
        }
    },
    computed: {
        web3Modal() {
            return this.$store.state.web3Modal;
        },
        connect() {
            return this.$store.state.connect;
        },
        ...mapGetters({
            exchange: 'exchange',
            presales: 'presales',
        }),
        contractCompact() {
            let contractAddress = this.presale.sale_token_address;
            contractAddress = contractAddress.substr(0, 6) + '...' + contractAddress.substr(contractAddress.length - 4, 4);
            return contractAddress;
        },
        presalePercent() {
            if (this.presale['project_type'] === 'sale') {
                return parseFloat(((this.presale.amount + this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
            }
            return parseFloat(((this.presale.amount +
                this.presale.sale_token_liquidity_amount +
                this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
        },
        presalePercentNum() {
            if (this.presale['project_type'] === 'sale') {
                return ((this.presale.amount +  this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100;
            }
            return ((this.presale.amount +
                this.presale.sale_token_liquidity_amount +
                this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100;
        },
    },
    methods: {
        formatAddress(address) {
            return address ? address.slice(0, 5) + "..." + address.slice(-4) : '';
        },
        onCopy() {
            this.$toaster.success('Copied!')
        },
        onError() {
            this.$toaster.error('Somethings wrong!')
        },
        urlExchange() {
            let url = '';
            if (this.presale.platform === 'bsc') {
                if (this.presale.network === 'test') {
                    url = 'https://testnet.bscscan.com/address/' + this.presaleDetail.contract_address
                } else {
                    url = 'https://bscscan.com/address/' + this.presaleDetail.contract_address
                }
            } else if (this.presale.platform === 'eth') {
                if (this.presale['network'] === 'main') {
                    url = 'https://etherscan.io/address/' + this.presaleDetail.contract_address
                } else {
                    url = 'https://ropsten.etherscan.io/address/' + this.presaleDetail.contract_address
                }
            } else if (this.presale.platform === 'polygon') {
                if (this.presale['network'] === 'main') {
                    url = 'https://polygonscan.com/address/' + this.presaleDetail.contract_address;
                } else {
                    url = 'https://mumbai.polygonscan.com/address/' + this.presaleDetail.contract_address;
                }
            } else if (this.presale['platform'] === 'fantom') {
                if (this.presale['network'] === 'main') {
                    url = 'https://ftmscan.com/address/' + this.presaleDetail.contract_address;
                } else {
                    url = 'https://testnet.ftmscan.com/address/' + this.presaleDetail.contract_address;
                }
            }
            return url;
        },
        async getUserLog() {
            let user_address = this.web3Modal['account'];
            // if (!user_address) return;
            let presale_address = this.presale.contract_address;
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = '/api/presale/get-user-log?user_address=' + user_address + '&presale_address=' + presale_address + '&network=' + network  + '&platform=' + platform;
            const userLogResp = await axios.get(url);
            this.userLog = userLogResp.data.data;
            if (this.userLog) {
                if (this.presale['current_status'] === 2) {
                    this.displayBtnWdr = this.presale['project_type'] === 'sale' ? this.presale['active_claim_at'] !== 0 : this.presale['liquidity_at'] !== 0;
                    this.withdrawSaleToken = false;
                    this.displayBtnSale = true;
                    this.checkClaimSaleToken();
                    return false;
                }
                if (this.presale['current_status'] === 3) {
                    this.withdrawBaseToken = false;
                    this.displayBtnBase = true;
                    this.checkClaimBaseToken();
                    return false;
                }
            }
        },
        checkClaimSaleToken() {
            if (this.presale && this.userLog) {
                if (this.userLog['active_vesting']) {
                    let now = new Date().getTime();
                    now = Math.floor(now/1000);
                    for (let i = 0; i < this.userLog['list_vesting'].length; i++)  {
                        if (this.userLog['list_vesting'][i]['withdraw_status'] !== 1) {
                            if (this.displayBtnWdr && this.userLog['list_vesting'][i]['vesting_period'] < now && this.userLog['list_vesting'][i]['withdraw_status'] === 0) {
                                this.withdrawSaleToken = true;
                            }
                            this.amountSaleToken = this.formatNumber(this.userLog['list_vesting'][i]['vesting_percent']* this.userLog['sale_token_amount']/100,2);
                            return;
                        }
                    }
                } else {
                    this.amountSaleToken = this.formatNumber(this.userLog['sale_token_amount'],2);
                    this.withdrawSaleToken = this.displayBtnWdr && this.userLog['withdraw_status'] === 0;
                }
            }

        },
        checkClaimBaseToken() {
            if (!this.userLog['withdraw_status'] || this.userLog['withdraw_status'] !== 1) {
                this.withdrawBaseToken = true;
            }
        },
        async fetchPresaleDetail() {
            let userAccount = JSON.parse(localStorage.getItem('user'));
            this.$store.commit("setPopupProcessing", true);
            await axios.get('/api/presale/detail', {
                params: {
                    contract_address: this.$route.params.contract_address
                }
            }).then(res => {
                this.$store.commit("setPopupProcessing", false)
                if (!res.data || !res.data.data) {
                    this.$router.push("/404");
                    return;
                }
                this.presale = res.data.data;
                this.withdrawBaseToken = false;
                this.withdrawSaleToken = false;
                if (this.presale['project_type'] === 'sale') {
                    this.checkActiveVestingJoined();
                    if (this.presale['active_claim_at'] !== 0 || this.presale['current_status'] === 1 || this.presale['current_status'] === 2 || this.presale['current_status'] === 3) {
                        this.getUserLog();
                    }
                } else {
                    if (this.presale['liquidity_at'] !== 0 || this.presale['current_status'] === 1 || this.presale['current_status'] === 2 || this.presale['current_status'] === 3) {
                        this.getUserLog();
                    }
                    this.checkAddLiquidJoined();
                }

            }, () => {
                this.$store.commit("setPopupProcessing", false)
            });
        },
        chartOther(data) {
            return {
                data: {
                    labels: false,
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#1F813E',
                            '#d4d4d4',
                        ],
                        hoverOffset: 4,
                        borderWidth: 0
                    }]
                },
                options: {
                    cutoutPercentage: 80,
                    responsive: false,
                    tooltips: {
                        enabled: false
                    }
                }
            }
        },
        lockedTime(time) {
            time = parseInt(time);
            let lockPeriod = '1 month';
            if (time === 60 * 60 * 24 * 30) {
                lockPeriod = '1 month';
            } else if (time === 60 * 60 * 24 * 30 * 2) {
                lockPeriod = '2 months';
            } else if (time === 60 * 60 * 24 * 30 * 3) {
                lockPeriod = '3 months';
            } else if (time === 60 * 60 * 24 * 30 * 6) {
                lockPeriod = '6 months'
            } else if (time === 60 * 60 * 24 * 30 * 12) {
                lockPeriod = '1 year'
            } else if (time === 60 * 60 * 24 * 30 * 12 * 2) {
                lockPeriod = '2 years'
            } else if (time === 60 * 60 * 24 * 30 * 12 * 3) {
                lockPeriod = '3 years'
            } else if (time === 60 * 60 * 24 * 30 * 12 * 4) {
                lockPeriod = '4 years'
            } else if (time === 60 * 60 * 24 * 30 * 12 * 5) {
                lockPeriod = '5 years'
            }
            return lockPeriod;
        },
        moment(date) {
            return moment(date).format('MM/DD/YYYY');
        },
        momentDate(date, time = '') {
            if (time === 1) {
                return moment(date).format('HH:mm:ss');
            } else if (time === 2) {
                return moment(date).format('MM/DD/Y');
            } else {
                return moment(date).format('MM/DD/Y HH:mm:ss');
            }
        },
        formatNumber(number, minPrecision = 2, maxPrecision = 2) {
            if (number === 0 || !number) {
                return '0.00';
            } else if (number < 1) {
                return number;
            }
            const options = {
                minimumFractionDigits: minPrecision,
                maximumFractionDigits: maxPrecision,
            }
            let val = (number / 1).toFixed(minPrecision).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        checkAddLiquidJoined() {
            if (this.presale['current_status'] !== 2 || this.presale['project_type'] === 'sale') {
                return false;
            }
            let now = parseInt(new Date().getTime() / 1000);
            let success = this.presale.liquidity_at === 0 && ((this.presale.success_at < this.presale.end_time && this.presale.success_at !== 0) || (this.presale.success_at <= this.presale.end_time && this.presale.success_at !== 0 && now > this.presale.end_time))
            if (success && (now > this.presale.success_at + this.presale.max_success_to_liquidity)) {
                this.displayLiquidty = true;
            } else {
                this.displayLiquidty = false;
            }
        },
        checkActiveVestingJoined() {
            if (this.presale['current_status'] !== 2 || this.presale['project_type'] === 'presale') {
                return false;
            }
            let now = parseInt(new Date().getTime() / 1000);
            let success = this.presale.active_claim_at === 0 && ((this.presale.success_at < this.presale.end_time && this.presale.success_at !== 0) || (this.presale.success_at <= this.presale.end_time && this.presale.success_at !== 0 && now > this.presale.end_time))
            if (success && (now > this.presale['max_time_to_claim'])) {
                this.isActiveVesting = true;
            } else {
                this.isActiveVesting = false;
            }
        },
        async addLiquidity() {
            if (!this.displayLiquidty) {
                return;
            }
            let web3 = new Web3(window.ethereum);
            let presaleContractAddress = this.presale['contract_address'];
            let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
            let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
            this.$store.commit("setPopupWallet", true);
            try {
                let result = await presaleContract.methods.addLiquidity().send({
                    from: this.web3Modal['account']
                }).on('transactionHash', function (hash) {
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    this.$toaster.success('Success!')
                } else {
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: 'Add liquidity fail!'
                    })
                }
                this.displayLiquidty = false;
            } catch (e) {
                console.log(e)
                this.$store.commit("setPopupWallet", false);
            }
        },
        async userWithdrawSaleToken() {
            //liquid_at != 0
            try {
                let web3 = new Web3(window.ethereum);
                let presaleContractAddress = this.presale['contract_address'];
                let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
                if (this.presale['project_type'] === 'sale') {
                    presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
                }
                let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
                this.$store.commit("setPopupWallet", true);
                let result = await presaleContract.methods.userWithdrawSaleToken().send({
                    from: this.web3Modal['account']
                }).on('transactionHash', function (hash) {
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // alert("Error");
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    this.$toaster.success('Success!');
                    this.withdrawSaleToken = false;
                    this.amountSaleToken = 0;
                    this.getUserLog();
                } else {
                    //error
                }
                this.withdrawSaleToken = false;
            } catch (ex) {
                console.log(ex);
                this.$store.commit("setPopupWallet", false);
            }

        },
        async userForceFail() {
            this.$store.commit("setPopupWallet", true);
            try {
                let web3 = new Web3(window.ethereum);
                let presaleContractAddress = this.presale['contract_address'];
                let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
                let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
                let result = await presaleContract.methods.forceFailIfPairExists().send({
                    from: this.web3Modal['account']
                }).on('transactionHash', function (hash) {
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // alert("Error");
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    this.$toaster.success('Success!')
                } else {
                    //error
                }
                this.displayUserForceFail = true;
            } catch (ex) {
                console.log(ex);
                this.$store.commit("setPopupWallet", false);
            }

        },
        async userWithdrawBaseToken() {
            //current_status = 3
            this.$store.commit("setPopupWallet", true);
            try {
                let web3 = new Web3(window.ethereum);
                let presaleContractAddress = this.presale['contract_address'];
                let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
                if (this.presale['project_type'] === 'sale') {
                    presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
                }
                let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
                let result = await presaleContract.methods.userWithdrawBaseToken().send({
                    from: this.web3Modal['account']
                }).on('transactionHash', function (hash) {
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // alert("Error");
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    this.$toaster.success('Success!')
                    this.amountBaseToken = 0;
                    this.getUserLog();
                } else {
                    //Error
                }
                this.withdrawBaseToken = false;
            } catch (ex) {
                console.log(ex);
                this.$store.commit("setPopupWallet", false);
            }

        },
        async activeVesting() {
            //todo active vesting
            if (!this.isActiveVesting) {
                return;
            }
            let web3 = new Web3(window.ethereum);
            let saleContractAddress = this.presale['contract_address'];
            let presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
            let saleContract = new web3.eth.Contract(settingsContract[presale_name_version], saleContractAddress);
            this.$store.commit("setPopupWallet", true);
            try {
                let result = await saleContract.methods.activeClaim().send({
                    from: this.web3Modal['account']
                }).on('transactionHash', function (hash) {
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (result.status) {
                    // alert("Success");
                    this.isActiveVesting = false;
                    this.$toaster.success('Success!')
                } else {
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        messsage: 'Active claim fail!'
                    })
                }
                this.$store.commit("setPopupWallet", false);
            } catch (e) {
                console.log(e)
                this.$store.commit("setPopupWallet", false);
            }

        },
    },
    created() {
        this.fetchPresaleDetail()
    },
    watch: {
        'presales': function (presales) {
            if (presales.length == 0) return;
            presales.some(presale => {
                if (this.presale && presale._id.$oid == this.presale._id.$oid) {
                    this.presale = presale;
                    this.countdownKey = this.countdownKey + 1;
                }
            })
        }
    }
}
</script>
<style scoped>

.claim-base {
    border-bottom: 2px solid #CF9332;
}

.claim {
    line-height: 24px;
    border-radius: 10px;
    border: 2px solid #615031;
    padding: 0.875rem 1.5rem;
}

.row {
    margin: 0 -15px 0 -15px;
}
</style>
