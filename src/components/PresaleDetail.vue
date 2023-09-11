<template>
    <div class="box-dex push-lock mb-5">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <span class="decor5"> <img alt="" src="@/assets/images/decor1.png" /></span>
            <span class="decor18">
                <img alt="" src="@/assets/images/decor2.png" class="w-75"/>
            </span>
            <security-alert></security-alert>
            <div class="box-swap position-relative">
                <span class="decor19"> <img alt="" src="@/assets/images/decor2.png" /></span>
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
                    <div>
                        <div class="fs-18 f-Nunito text-center" v-if="presale['current_status'] === 2 || presale['current_status'] === 3">
                            <span> {{ presale['project_type'] !== 'sale' ? 'Presale' : 'Sale' }} ended</span>
                        </div>
                        <div v-else>
                            <div v-if="presale['current_round'] === 0">
                                <p class="fs-18 f-Nunito text-center">Round 0 finish in</p>
                                <countdown-project :key="countdownKey" :end="presale['zero_round']['finish_at']"></countdown-project>
                            </div>
                            <div v-else-if="presale['current_round'] === 1">
                                <p class="fs-18 f-Nunito text-center">Round 1 end in</p>
                                <countdown-project :key="countdownKey" :end="presale['start_time'] + (presale['first_round_length'] ? presale['first_round_length'] : 0)"></countdown-project>
                            </div>
                            <div v-else-if="presale['current_round'] === 2">
                                <p class="fs-18 f-Nunito text-center">{{ !presale['active_first_round'] && !presale['active_zero_round'] ? 'Public sale finish in' : 'Round 2 finish in' }}</p>
                                <countdown-project :key="countdownKey" :end="presale['end_time']"></countdown-project>
                            </div>
                            <div v-else-if="presale['current_round'] === -1">
                                <p class="fs-18 f-Nunito text-center">{{presale['active_first_round'] ? 'Round 1 starts in' : 'Public sale starts in' }}</p>
                                <countdown-project :key="countdownKey" :end="presale['start_time']"></countdown-project>
                            </div>
                        </div>
                    </div>
                    <p class="text-center">
                        <button type="button" class="btn-blues disabled" v-if="presale.current_status === 0 || presale.current_status === 1">
                            <span v-if="presale.current_round === 1">
                                LIVE: {{ presale['active_first_round'] ? 'Round 1' : 'Public sale' }}
                            </span>
                            <span v-else-if="presale.current_round === 2">
                                LIVE: {{ !presale['active_first_round'] && !presale['active_zero_round'] ? 'Public sale' : 'Round 2' }}
                            </span>
                            <span v-else>
                                Awaiting Start
                            </span>
                        </button>
                        <button type="button" class="btn-blues disabled" v-else-if="presale.current_status === 3">
                            Failed
                        </button>
                        <button type="button" class="btn-blues disabled" v-else-if="presale.current_status === 2">
                            <span v-if="type === 'ilo' && presale['liquidity_at'] === 0">
                                Awaiting Add Liquidity
                            </span>
                            <span v-else-if="presale['project_type'] === 'sale' && presale['active_claim_at'] === 0">
                                Awaiting Active Claim
                            </span>
                            <span v-else>
                                {{ presale['project_type'] === 'sale' ? 'Success' : 'Markets Initialized' }}
                            </span>
                        </button>
                    </p>
                    <div class="reserve mb-4" v-if="presale['active_zero_round'] && presale['current_round'] === 0">
                        <button
                            class="btn-whiteBig collapsed"
                            type="button"
                            data-toggle="collapse"
                            @click="collapseTab"
                            data-target="#collapseExample"
                            aria-expanded="false"
                            aria-controls="collapseExample"
                        >
                            Reserve your spot with {{
                                configZeroRound.token_amount + ' '
                                + configZeroRound.token_symbol
                            }}
                            <img alt="" src="@/assets/images/dot-b.svg" class="ml-2" />
                        </button>
                        <div :class="collapse" id="collapseExample">
                            <div class="card-body p-0">
                                <div class="progress position-relative mb-4">
                                    <div class="progress-bar" role="progressbar"
                                         :style="{width: (presale && presale['zero_round'] ? presale['zero_round']['registered_slot']/presale['zero_round']['max_slot'] : 0) * 100 +'%'}"
                                         :aria-valuenow="(presale && presale['zero_round'] ? presale['zero_round']['registered_slot']/presale['zero_round']['max_slot'] : 0) * 100"
                                         aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                    <span class="txtprocess">
                                        {{
                                            presale && presale['zero_round'] ?
                                                presale['zero_round']['registered_slot'] + '/' +
                                                presale['zero_round']['max_slot'] : '0/0'
                                        }}
                                    </span>
                                </div>

                                <p class="clfff f-Nunito text-center">
                                    {{
                                        presale && presale['zero_round'] ?
                                            presale['zero_round']['max_slot'] -
                                            presale['zero_round']['registered_slot'] : '0'
                                    }} spots left!
                                </p>

                                <div class="d-flex" v-if="!web3Modal.account">
                                    <a
                                        href="javascript:void(0)"
                                        class="linear-blue btn-blue fill w-50 mr-3 text-center"
                                        @click="connectWallet()">
                                        <i class="fa fa-link" aria-hidden="true"></i>
                                        Connect Your Wallet
                                    </a>
                                </div>

                                <div class="d-flex" v-if="web3Modal.account">
                                    <button
                                        v-if="!presale['whitelist_only'] || allowBuy"
                                        class="linear-blue fill w-50 mr-3 text-center"
                                        :class="allowanceButton ? 'btn-blue' : 'btn-gray'"
                                        :disabled='!allowanceButton'
                                        @click="approveZeroToken()">
                                        Approve
                                        <img alt="" src="@/assets/images/dot-l-white.svg" class="ml-2" />
                                    </button>
                                    <button
                                        v-if="!presale['whitelist_only'] || allowBuy"
                                        class="btn-gray btn-blue btn-bluebig w-50"
                                        :class="allowanceButton ? 'btn-blue' : 'btn-gray'"
                                        :disabled='!allowanceButton'
                                        @click="approveZeroToken()"
                                    >
                                        Reserve
                                        <img alt="" src="@/assets/images/dot-l-black.svg" class="ml-3" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="d-flex justify-content-center fs-24">
                        <span class="f-Nunito fw-bold"> {{
                                numberWithCommas(presale.total_base_collected)
                            }} </span> / <span>{{
                            numberWithCommas(presale.hard_cap)
                        }} {{ presale.base_token_symbol }} ({{ presale.platform === 'bsc'  ? 'BEP20' : 'ERC20'}})</span>
                    </p>
                    <div class="styleprogress mb-5">
                        <div class="progress position-relative mb-4">
                            <div class="progress-bar"
                                 role="progressbar"
                                 :style="{width: (presale.total_base_collected / presale.hard_cap) * 100 +'%'}"
                                 :aria-valuenow="(presale.total_base_collected / presale.hard_cap) * 100"
                                 aria-valuemin="0"
                                 aria-valuemax="100">
                            </div>
                            <span class="txtprocess">
                                {{
                                    parseFloat((presale.total_base_collected / presale.hard_cap) *
                                        100).toFixed(2)
                                }} % complete
                            </span>
                        </div>
                    </div>
                    <ul class="listdata">
                        <li>
                            <div class="countdown">
                                <doughnut-chart
                                    id="ilo_detail1_chart_participants"
                                    :data="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).data"
                                    :options="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).options"
                                    :width="85" :height="85"
                                />
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">{{ presale.liquidity_percent }}%</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">{{ lockedTime(presale['lock_period']) }}</p>
                        </li>
                        <li>
                            <div class="countdown">
                                <doughnut-chart
                                    id="ilo_detail1_chart_participants"
                                    :data="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).data"
                                    :options="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).options"
                                    :width="85" :height="85"
                                />
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">{{ presale.num_buyers }}</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Participants</p>
                        </li>
                        <li>
                            <div class="countdown">
                                <doughnut-chart
                                    id="ilo_detail1_chart_tokenomics"
                                    :data="chartOther([presalePercentNum, 100 - presalePercentNum]).data"
                                    :options="chartOther([presalePercentNum, 100 - presalePercentNum]).options"
                                    :width="85" :height="85"
                                />
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">{{ presalePercent }}%</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Tokenomics</p>
                        </li>
                    </ul>
                    <div class="connnect-wallet mb-5">
                        <div class="tab-blue w-100">
                            <ul class="nav m-b-20">
                                <li @click="changeTab('pre')">
                                    <a
                                        style="cursor:pointer"
                                        data-toggle="tab"
                                        aria-expanded="true"
                                        :class="tabActivePre">
                                        Presale
                                    </a>
                                </li>
                                <li @click="changeTab('info')">
                                    <a
                                        style="cursor:pointer"
                                        data-toggle="tab"
                                        aria-expanded="false"
                                        :class="tabActiveInfo">
                                        Info
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div :class="tabPre" id="presale">
                                <div class="panel-content">
                                    <presale v-if="presale['active_first_round']"
                                             :presale="presale">
                                    </presale>
                                    <div v-if="conditionDisplayWithRound && web3Modal.account">
                                        <presale2
                                            v-if="(!presale['whitelist_only'] || allowBuy) && (presale['current_round'] === 0 || presale['current_round'] === 1 || presale['current_round'] === 2) &&  presale['current_status'] !== 2  && presale['current_status'] !== 3"
                                            :presale="presale">
                                        </presale2>
                                        <div v-if="presale['whitelist_only']">
                                            <div class="alert alert-fill-warning" v-show="!allowBuy">
                                                <p class="m-0">
                                                    <strong> WARNING:</strong> You are not in the
                                                    Whitelist to buy!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="!web3Modal['account']">
                                        <p class="mt-5 text-center">
                                            <a class="linear-blue btn-blue btn-bluebig w-50"
                                               href="javascript:void(0)"
                                               @click="connectWallet()">
                                                <img alt="" src="@/assets/images/dot-l-white.svg" class="ml-2" />
                                                Connect your wallet to continue
                                            </a>
                                        </p>
                                    </div>
                                    <div v-else>
                                        <p class="mt-5 text-center"
                                             v-if="presale['current_status'] === 0 && presale['current_round'] === -1">
                                            <span>Coming up for sale!</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div :class="tabInfo" id="info">
                                <div class="panel-content">
                                    <info :presale="presale"
                                          :type="presale['project_type'] !== 'sale' ? 'ilo' : 'ido'"
                                          :locked="lockedTime(presale['lock_period'])"></info>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span class="decor6"> <img alt="" src="@/assets/images/decor1.png" /></span>
        </div>
        <div v-show="displayDisclaimer" class="modal fade show" id="ilo_detail_disclaimer" tabindex="-1"
             aria-labelledby="ilo_disclaimer" aria-hidden="true" data-backdrop="static" data-keyboard="false"
             style="padding-right: 3px; display: block;">
            <div class="modal-dialog !modal-lg">
                <div class="modal-content ">
                    <div class="modal-body">
                        <div class="row justify-content-center">
                            <div class="col-12 text-center thetitle">
                                Disclaimer
                            </div>

                            <div class="col-12 mb-3">
                                <p>PushSwap is a decentralized software tool. Anyone can create a token sale using their
                                    own tokens.</p>

                                <p>Tokens can be cloned and can have the same name as existing coins. Token creators can
                                    pretend to be owners of the real project. Please use provided social links to
                                    research and examine every project to avoid scams.</p>

                                <p>In the DeFi zone project owners can load arbitrary token contracts. Please take extra
                                    caution and do your research when interacting with arbitrary tokens. You might not
                                    be able to claim or sell your token!</p>

                                <p>Please pay close attention to all token metrics shared on the SALE's page.</p>

                            </div>

                            <div class="col-12 mb-3">

                                <label class="form-check text-secondary">
                                    <input class="form-check-input" @change="checkboxAll()" type="checkbox" value=""
                                           style="transform: initial;">
                                    <div class="form-check-label">
                                        I have read and agree to the <a href="#" class="text-green">Terms and
                                        Conditions</a> and I understand that I am responsible for doing my own research!
                                    </div>
                                </label>
                            </div>


                            <div class="col-12">
                                <div class="row justify-content-center mb-3">
                                    <div class="col-6 col-lg-5">
                                        <button type="button" class="btn btn-pushswap rounder w-100 text-18"
                                                @click="confirmModal" v-if="check">
                                            Agree
                                        </button>
                                        <button v-else type="button" class="btn btn-pushswap rounder w-100 text-18" disabled>
                                            Agree
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Presale from "@/components/detail/presale";
import Presale2 from "@/components/detail/presale2";
import Info from "@/components/detail/info";
import DoughnutChart from "@/components/doughnutChart/doughnutChart";
import axios from 'axios';
import {mapGetters, mapState} from 'vuex';
import {numberWithCommas} from '@/utils/helpers';
import Web3, {utils} from "web3"
import BigNumber from "@/utils/bignumber.min.js";
import {settingsContract} from "@/utils/const";
import CommonMixin from "@/mixins/CommonMixin"
import SecurityAlert from "@/views/pages/ilo/detail/securityAlert";
import CountdownProject from "@/components/CountdownProject";
import {ethers} from "ethers";
import chart from "../components/detail/chart";

export default {
    name: "PresaleDetail",
    props: {
        type: {
            type: String,
            default: 'ilo'
        }
    },
    components: {
        CountdownProject,
        SecurityAlert,
        Info,
        Presale2,
        Presale,
        DoughnutChart,
        chart
    },
    data() {
        return {
            collapse: "collapse mt-4",
            tabPre: "tab-pane fade active show",
            tabInfo: "tab-pane fade",
            tabActivePre: "active",
            tabActiveInfo: "",
            flag: true,
            countdownKey: 0,
            tabActive: 1,
            check: false,
            isActiveVesting: false,
            showModal: true,
            displayDisclaimer: false,
            allowBuy: false,
            showTip: true,
            burnSuccess: false,
            allowanceButton: true,
            configZeroRound: false,
            doChartOptions: {

                legend: {
                  display: false
                },
                tooltips: {
                    enabled: true
                },
                cutoutPercentage: 75,
                responsive: true,
            },
            presale: null,
            isShow: false
        }
    },
    computed: {
        dataChart() {
            if (this.presale['project_type'] === 'sale') {
                return {
                    labels: [
                        'Sale',
                        'Fee',
                        'Locked',
                        'Other',
                    ],
                    datasets: [{
                        data: [
                            this.presale['amount'],
                            this.presale['sale_token_fee_amount'],
                            0,
                            this.presale['sale_token_free_amount']
                        ],
                        hoverBorderColor: [
                            '#9751BE',
                            '#1381B2',
                            '#5CB8E1',
                            '#ececec',
                        ],
                        backgroundColor: [
                            '#9751BE',
                            '#1381B2',
                            '#5CB8E1',
                            '#ececec',
                        ],
                        hoverOffset: 4,
                        borderWidth: 0
                    }]
                }
            }
            return {
                labels: [
                    'Presale',
                    'Liquidity',
                    'Fee',
                    'Other',
                ],
                datasets: [{
                    data: [
                        this.presale['amount'],
                        this.presale['sale_token_liquidity_amount'],
                        this.presale['sale_token_fee_amount'],
                        this.presale['sale_token_free_amount']
                    ],
                    hoverBorderColor: [
                        '#9751BE',
                        '#1381B2',
                        '#5CB8E1',
                        '#ececec',
                    ],
                    backgroundColor: [
                        '#9751BE',
                        '#1381B2',
                        '#5CB8E1',
                        '#ececec',
                    ],
                    hoverOffset: 4,
                    borderWidth: 0
                }]
            }
        },
        presalePercent() {
            if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                return parseFloat(((this.presale.amount + this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
            }
            return parseFloat(((this.presale.amount +
                (this.presale.project_type !== 'sale' ? this.presale.sale_token_liquidity_amount : 0) +
                this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
        },
        presalePercentNum() {
            if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                return ((this.presale.amount + this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100;
            }
            return ((this.presale.amount +
                this.presale.sale_token_liquidity_amount +
                this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100;
        },
        ...mapState(['web3Modal']),
        connect() {
            return this.$store.state.connect;
        },
        ...mapGetters({
            exchange: 'exchange',
            account: 'account',
            presales: 'presales',
        }),
    },
    methods: {
        formatAddress(address) {
            return address ? address.slice(0, 6) + "..." + address.slice(-4) : '';
        },
        collapseTab() {
            if (this.collapse == "collapse mt-4") {
                this.collapse = "collapse mt-4 show";
            } else this.collapse = "collapse mt-4";
        },
        changeTab(tab) {
            if (tab == "pre") {
                this.tabActivePre = "active";
                this.tabActiveInfo = "";
                this.tabPre = "tab-pane fade active show";
                this.tabInfo = "tab-pane fade";
            } else if (tab == "info") {
                this.tabActivePre = "";
                this.tabActiveInfo = "active";
                this.tabPre = "tab-pane fade";
                this.tabInfo = "tab-pane fade active show";
            }
        },
        confirmModal() {
            if (!this.check) return;
            this.displayDisclaimer = false;
            let key = 'sale_' + this.$route.params['contract_address'];
            this.$cookies.set(key, 1, '1d');
        },
        checkboxAll() {
            this.check = !this.check;
        },
        async fetchPresaleDetail() {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            this.$store.commit("setPopupProcessing", true);
            const res = await axios.get('/api/presale/detail', {
                params: {
                    contract_address: this.$route.params.contract_address,
                    network: network,
                    platform: platform
                }
            });
            this.$store.commit("setPopupProcessing", false)
            if (!res.data || !res.data.data) {
                this.$router.push("/404");
                return;
            }
            this.presale = res.data.data;
            if (this.presale) {
                if (this.presale['whitelist_only']) {
                    this.checkWhitelistAddress();
                } else {
                    this.allowBuy = true
                }
                if (this.presale['active_zero_round']) {
                    this.fetchZeroRound();
                }
            }
        },
        async fetchZeroRound() {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = '/api/registry/get-presale-setting-address';
            if (this.presale['project_type'] && this.presale['project_type'] === ' sale') {
                url = '/api/registry/get-sale-setting-address';
            }
            const resp = await axios.get(url, {
                params: {
                    type: 'zero_round_token',
                    network: network,
                    platform: platform,
                }
            });
            this.configZeroRound = resp.data.data[0];
            this.checkAllowance();
        },
        async checkWhitelistAddress() {
            this.allowBuy = false;
            let address = this.account;
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let presale_address = this.$route.params.contract_address;
            const respWhitelist = await axios.get('/api/presale/check-valid-whitelist', {
                params: {
                    address: address,
                    presale_address: presale_address,
                    network: network,
                    platform: platform,
                }
            });
            if (this.presale && this.presale['current_Status'] !== 2 && this.presale['current_Status'] !== 3 && respWhitelist.data.data) {
                this.allowBuy = true
            }
        },
        async fetchInfoUserPresale() {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let contract_address = this.$route.params.contract_address;
            const respInfo = await axios.get('/api/presale/list-user-register-zero-round/' + contract_address + '?network=' + network + '&platform=' + platform);
            this.infoUserPresale = respInfo.data.data[0];
        },
        numberWithCommas(x) {
            return numberWithCommas(x);
        },
        chartOther(data) {
            return {
                data: {
                    labels: false,
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#CB0C32',
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
        connectWallet() {
            this.$store.dispatch('connect')
        },
        conditionDisplayWithRound() {
            this.presale.current_round = parseInt(this.presale.current_round);
            return this.presale.current_round !== 2 && this.presale.current_round !== 3;
        },
        lockedTime(time) {
            time = parseInt(time);
            let lockPeriod = '1 year';
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
        async approveZeroToken() {
            let token_address = this.configZeroRound ? this.configZeroRound['token_address'] : '';
            let web3 = new Web3(window.ethereum);
            let tokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], token_address)
            let address = this.web3Modal['account'];
            let zeroAmount = utils.randomHex(32).toString();
            let presaleContractAddress = this.presale['contract_address'];
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
            this.$store.commit("setPopupWallet", true);
            try {
                let approveTokenZero = await tokenContract.methods.approve(presaleContractAddress, zeroAmount).send(obj).on('transactionHash', function (hash) {
                    // processing check allowance
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error check allowance detail", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (approveTokenZero.status) {
                    this.allowanceButton = false;
                    console.log("Success approveToken!");
                    this.$toaster.success('Success!')
                } else {
                    // modal error
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ''
                    })
                    console.log("error check allowance", approveTokenZero);
                }
            } catch (e) {
                this.$store.commit("setPopupWallet", false);
                console.log(e)
            }

        },
        async checkAllowance() {
            let amount = this.configZeroRound['token_amount'];
            let token_address = this.configZeroRound['token_address'];
            let saleTokenDecimals = parseInt(this.configZeroRound['token_decimals']);
            let web3 = new Web3(window.ethereum);
            const zeroTokenAllowance = new web3.eth.Contract(settingsContract['ABI_TOKEN'], token_address)
            let address = this.web3Modal.account;
            let presale_address = this.$route.params.contract_address;
            await zeroTokenAllowance.methods.allowance(address, presale_address).call().then(
                resp => {
                    let dicimalsMul = (new BigNumber(10)).pow(saleTokenDecimals);
                    let value = (new BigNumber(resp)).div(dicimalsMul).toString();
                    if (value > 0 && value > amount) {
                        this.allowanceButton = false;
                    }
                }
            );
        },
        async registerBurnToken() {
            if (this.allowanceButton) {
                console.log('Need to approve before register burn token!')
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
            let presaleContractAddress = this.presale['contract_address'];
            let web3 = new Web3(window.ethereum);
            let address = this.web3Modal.account;
            let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
            if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
            }
            let burnContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress)
            this.$store.commit("setPopupWallet", true);
            try {
                let registerToken = await burnContract.methods.registerZeroRound().send(obj).on('transactionHash', function (hash) {
                    //processing burn token
                    console.log("error processing burn token");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error burn token", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (registerToken.status) {
                    console.log("success burn token");
                    // modal success
                    this.$toaster.success('Success!')
                    this.burnSuccess = true;
                } else {
                    // modal error
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ''
                    })
                    console.log("error burn token", registerToken);
                }
            } catch (ex) {
                this.$store.commit("setPopupWallet", false);
                console.log(ex);
            }
        },
        urlExchange() {
            let url = '';
            if (this.presale.platform === 'bsc') {
                if (this.presale.network === 'test') {
                    url = 'https://testnet.bscscan.com/address/' + this.presale.contract_address
                } else {
                    url = 'https://bscscan.com/address/' + this.presale.contract_address
                }
            } else if (this.presale.platform === 'eth') {
                if (this.presale['network'] === 'main') {
                    url = 'https://etherscan.io/address/' + this.presale.contract_address
                } else {
                    url = 'https://ropsten.etherscan.io/address/' + this.presale.contract_address
                }
            } else if (this.presale.platform === 'polygon') {
                if (this.presale['network'] === 'main') {
                    url = 'https://polygonscan.com/address/' + this.presale.contract_address;
                } else {
                    url = 'https://mumbai.polygonscan.com/address/' + this.presale.contract_address;
                }
            } else if (this.presale['platform'] === 'fantom') {
                if (this.presale['network'] === 'main') {
                    url = 'https://ftmscan.com/address/' + this.presale.contract_address;
                } else {
                    url = 'https://testnet.ftmscan.com/address/' + this.presale.contract_address;
                }
            }
            return url;
        },
        reloadData() {
            this.fetchPresaleDetail();
            this.fetchInfoUserPresale();
        }
    },
    mixins: [CommonMixin],
    created() {
        this.fetchPresaleDetail();
    },
    mounted() {
        this.fetchInfoUserPresale();
        let contract = this.$route.params.contract_address;
        let checkCookie = this.$cookies.get('sale_' + contract);
        if (!checkCookie) {
            this.displayDisclaimer = true;
        }
    },
    watch: {
        'account': function () {
            setTimeout(() => this.reloadData(), 500);
        },
        'presales': function (presales) {
            if (presales.length == 0) return;
            presales.some(presale => {
                if (this.presale && presale._id.$oid == this.presale._id.$oid) {
                    let round = this.presale['current_round'];
                    if (round !== presale['current_round']) {
                        this.countdownKey = this.countdownKey + 1;
                    }
                    this.countdownKey = this.countdownKey + 1;
                }
            })
        }
    }
}
</script>

<style scoped>
</style>
