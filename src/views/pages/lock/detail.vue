<template>
    <div class="box-dex view-coin">
        <div class="container index1 position-relative" data-aos="fade-up" data-aos-delay="200">
            <span class="decor5 index0"> <img src="@/assets/images/decor1.png"></span>
            <span class="decor18 index0" > <img src="@/assets/images/decor2.png" class="w-75"></span>

            <div class="box-swap mb-4 index1 position-relative index1">
                <div class="d-flex align-items-center justify-content-between p-3">
                    <div class="d-flex align-items-start">
                        <img src="@/assets/images/push.svg" class="mr-2">
                        <div class="clearfix">
                            <span class="d-block fs-24 fw-bold">{{detailTokens ? detailTokens['name'] : ''}}</span>
                            <div class="d-flex align-items-center f-Nunito cl5D">
                                <img  width="18" src="@/assets/images/armorial.svg" class="mr-1"><a :href="getLink(detailTokens, 'address', true)"  class="theaddress">
                                        {{detailTokens && detailTokens['platform'] ? detailTokens['platform'].toUpperCase() : ''}}: <span>{{detailTokens ? detailTokens['address'] : ''}}</span>
                                    </a>
                                <button @click="copyToClipboard(detailTokens.address)" class="btn-none">
                                    <img src="@/assets/images/icon-save-black.svg" class="w-75">
                                </button>
                                <a :href="getLink(detailTokens, 'address', true)" target="_blank" class="btn-none">
                                    <img src="@/assets/images/icon-linktoken.svg" class="w-75">
                                </a>
                            </div>
                        </div>
                    </div>
                    <router-link to="/lock" class=" linear-blue btn-blue fill text-center">
                        {{$t('navbar.0007')}} {{detailTokens ? detailTokens['name'] : ''}} <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                    </router-link>
                </div>
            </div>
            <div class="row mb-4 position-relative index1">
                <div class="col-md-6">
                    <div class="box-swap">
                        <div class="top-view">
                            <p class="f-Nunito fw-bold mb-0">{{$t('lock.detail.01')}}</p>
                            <p class="f-Nunito fs-14 cl5D m-0">{{$t('lock.detail.02')}}</p>
                        </div>
                        <ul class="listcoint">
                            <li>
                                <div class="d-flex  align-items-center">
                                    <img src="@/assets/images/icon-coint.svg" class="mr-2 w-24">
                                    <div class="clearfix">
                                        <span class="d-block fw-bold f-Nunito">{{detailTokens ? detailTokens['name'] : ''}} {{$t('lock.detail.03')}}</span>
                                        <span class="f-Nunito fs-14 cl5D">Binance Smart Chain</span>
                                    </div>
                                </div>
                                <span class="fw-bold f-Nunito">
                                    
                                    <strong class="text-dark">{{detailTokens ? formatNumber(detailTokens['token_lock_amount'], 2) : '0.00'}} {{detailTokens ? detailTokens['symbol'] : ''}} ({{detailTokens && detailTokens['token_lock_percent'] ? formatNumber(detailTokens['token_lock_percent'],3) : 0}}%)</strong>
                                </span>
                            </li>
                            <li>
                                <div class="d-flex  align-items-center">
                                    <img src="@/assets/images/icon-circulating.svg" class="mr-2  w-24">

                                    <span class="d-block fw-bold f-Nunito">{{$t('lock.detail.04')}}</span>

                                </div>
                                <span class="fw-bold f-Nunito">{{detailTokens ? formatNumber(detailTokens['circulating_supply_amount'],2) : '0.00'}} {{detailTokens ? detailTokens['symbol'] : ''}} </span>
                            </li>
                            <li>
                                <div class="d-flex align-items-center">
                                    <img src="@/assets/images/icon-supply.svg" class="mr-2  w-24">

                                    <span class="d-block fw-bold f-Nunito">{{$t('lock.detail.05')}}</span>

                                </div>
                                <span class="fw-bold f-Nunito">{{detailTokens ? formatNumber(detailTokens['total_supply_token'],2) : ''}} {{detailTokens ? detailTokens['symbol'] : ''}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="box-swap">
                        <div class="top-view">
                            <div class="d-flex justify-content-between">
                                <div class="clearfix">
                                    <p class="f-Nunito fw-bold mb-0">{{$t('lock.detail.06')}}</p>
                                    <p class="f-Nunito fs-14 cl5D m-0">{{$t('lock.detail.07')}}</p>
                                </div>
                                <div class="clearfix text-right">
                                    <p class="f-Nunito fw-bold mb-0">$ {{detailTokens ? formatNumber(detailTokens['total_lock_value'],2) : ''}}</p>
                                    <p class="f-Nunito fs-14 cl5D m-0">{{detailTokens ? formatNumber(detailTokens['lookup_value'],2) : ''}} {{detailTokens && detailTokens['platform'] === 'eth' ? 'ETH' : 'BNB'}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center p-2" v-if="dataChart.length === 0">
                            <p class="mt-3"><img src="@/assets/images/icon-searchBig.svg"> </p>
                            <p class="f-Nunito fs-18 fw-bold mb-0">{{$t('lock.detail.08')}}</p>
                            <p class="cl5D f-Nunito fs-14 mb-1">
                                {{$t('lock.detail.09')}}<br>
                                {{$t('lock.detail.10')}}
                            </p>
                        </div>
                        <div class="" v-if="dataChart.length !== 0">
                            <div class="text-right w-100">
                                <button @click="changeTimeChart(7)"  class="btn btn-link week-txt p-2" :class="timeChart === 7 ? 'text-gold' : 'text-secondary'">1W</button>
                                <button @click="changeTimeChart(21)" class="btn btn-link p-2" :class="timeChart === 21 ? 'text-gold' : 'text-secondary'">3W</button>
                                <button @click="changeTimeChart(30)" class="btn btn-link p-2" :class="timeChart === 30 ? 'text-gold' : 'text-secondary'">1M</button>
                                <button @click="changeTimeChart(90)" class="btn btn-link p-2" :class="timeChart === 90 ? 'text-gold' : 'text-secondary'">3M</button>
                                <button @click="changeTimeChart(365)" class="btn btn-link p-2" :class="timeChart === 365 ? 'text-gold' : 'text-secondary'">1Y</button>
                                <button @click="changeTimeChart('max')" class="btn btn-link p-2" :class="timeChart === 'max' ? 'text-gold' : 'text-secondary'">All</button>
                            </div>
                            <div style="height: 200px" class="">
                                <line-chart :height="200" :data="chartData(prices)" :options="optionsChart"></line-chart>
                            </div>
                        </div>
                        <div class="data-available">
                            <ul class="list">
                                <li><span class="cl5D d-block">{{$t('lock.detail.11')}}</span>
                                    <span class="fs-20">$ {{dataChart.length !== 0 ? formatNumber(dataChart['market_caps'][dataChart['market_caps'].length -1][1],2) : '-'}}</span>
                                </li>
                                <li><span class="cl5D d-block">{{$t('lock.detail.12')}} (24h)</span>
                                    <span class="fs-20">$ {{dataChart.length !== 0 ? formatNumber(dataChart['total_volumes'][dataChart['total_volumes'].length -1][1],2) : '-'}}</span>
                                </li>
                                <li><span class="cl5D d-block">{{$t('lock.detail.04')}}</span>
                                    <span class="fs-20">{{detailTokens ? formatNumber(detailTokens['circulating_supply_amount'],2) : '0.00'}} - {{detailTokens ? detailTokens['symbol'] : ''}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p class="fs-24 fw-bold text-center">{{detailTokens ? detailTokens['name'] : ''}} {{$t('lock.detail.13')}}</p>
            <table class="table tableblue styletable middle position-relative index1">
                <tbody>
                <tr v-if="historyLocks.length === 0">
                    <td colspan="4">
                        <div class="py-5 text-center">
                            <img src="@/assets/images/icons/nodata.png" alt="">
                        </div>
                    </td>
                </tr>

                <tr v-else v-for="(item, idx) in historyLocks" :key="idx" >
                    <td style="width: 50%;">
                        <div class="d-flex  align-items-center">
                            <div class="w-60 avartar" v-if="item && item['type'] ==='liquid'">
                                <ul class="list d-flex">
                                    <li class="active">
                                        <a href="#">
                                            <img v-if="detailTokens && detailTokens['image']" class="icon1" :src="detailTokens['image']"
                                                 :alt="item['symbol']">
                                            <img v-else class="icon1" src="@/assets/images/ic-default.svg"
                                                 :alt="item['symbol']">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img v-if="item['liquid_info']['sub_token'] && item['liquid_info']['sub_token']['image']" class="icon2" :src="item['liquid_info']['sub_token']['image']"
                                                 :alt="item['liquid_info']['sub_token']['symbol']">
                                            <img v-else class="icon2" src="@/assets/images/ic-default.svg"
                                                 :alt="item['liquid_info']['sub_token']['symbol']">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-60 avartar" v-else>
                                <img v-if="detailTokens && detailTokens['image']" class="icon1" :src="detailTokens['image']"
                                     :alt="item['symbol']">
                                <img v-else class="icon1" src="@/assets/images/ic-default.svg"
                                     :alt="item['symbol']">
                            </div>
                            <div class="w-100 clearfix">
                                <div class="clearfix text-left f-Nunito fs-14 mb-1">
                                    {{$t('lock.detail.03')}} {{item['contract_name']}} {{item && item['type'] === 'token' ? 'Tokens' : ''}} - {{item['amount'] > 1 ? formatNumber(item['amount'], 2) : item['amount']}} {{item['contract_symbol']}} {{item && item['type'] ==='liquid' ? '(' + formatNumber(item['percent'],2) + '%)' : ''}}
                                    <a :href="getLink(item)" target="_blank" class="btn-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.95" height="19.504"
                                             viewBox="0 0 19.95 19.504">
                                            <g id="Group_26695" data-name="Group 26695" transform="translate(1)">
                                                <path id="Path_64294" data-name="Path 64294"
                                                      d="M481.619,395.5H473.6v13.542h14.434V400.7"
                                                      transform="translate(-473.6 -390.538)" fill="none" stroke="#777"
                                                      stroke-width="2" />
                                                <path id="Path_64295" data-name="Path 64295"
                                                      d="M6.446,5.618a.162.162,0,0,0-.142-.13H4.617V.211C4.617.095,4.548,0,4.463,0H2c-.085,0-.154.095-.154.211V5.488H.154a.162.162,0,0,0-.142.13.271.271,0,0,0,.033.23l3.07,4.225a.137.137,0,0,0,.109.062h0a.138.138,0,0,0,.109-.062L6.412,5.848A.27.27,0,0,0,6.446,5.618Z"
                                                      transform="translate(11.783 11.733) rotate(-135)" fill="#777" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="d-flex align-items-center">
										<span v-if="item && item['withdraw_status'] === 0 && !checkUnlock(item['unlock_time'])" class="status status-lock mr-3"><svg xmlns="http://www.w3.org/2000/svg"
                                                id="Group_26696" data-name="Group 26696" width="7.872" height="10.496"
                                                viewBox="0 0 7.872 10.496" class="mr-2">
												<path id="Path_64195" data-name="Path 64195"
                                                      d="M402.888,351.936h-.328v-1.312a2.624,2.624,0,0,0-5.248,0v1.312h-.328a.985.985,0,0,0-.984.984v4.592a.985.985,0,0,0,.984.984h5.9a.985.985,0,0,0,.984-.984V352.92a.985.985,0,0,0-.984-.984Zm-4.7-1.312a1.749,1.749,0,1,1,3.5,0v1.312h-3.5Zm2.187,4.689v1a.437.437,0,1,1-.875,0v-1a.875.875,0,1,1,.875,0Zm0,0"
                                                      transform="translate(-396 -348)" fill="#fff" />
											</svg> {{$t('lock.detail.03')}}
                                        </span>

                                    <span v-else-if="item && item['withdraw_status'] === 0 && checkUnlock(item['unlock_time'])" class="status status-unLocked mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7.341" height="10.497"
                                             viewBox="0 0 7.341 10.497" class="mr-2">
                                            <path id="Path_98514" data-name="Path 98514"
                                                  d="M294.2,1409.26c0-.477-.019-.93.006-1.381a4.1,4.1,0,0,1,.154-.98,2.614,2.614,0,0,1,2.764-1.824,2.644,2.644,0,0,1,2.315,2.534.528.528,0,1,1-1.05.049,1.587,1.587,0,0,0-1.258-1.521,1.534,1.534,0,0,0-1.858,1.382c-.05.542-.02,1.092-.018,1.638,0,.034.064.078.107.1a.339.339,0,0,0,.13,0h4.328a1.565,1.565,0,0,1,.261.018.444.444,0,0,1,.386.371,1.117,1.117,0,0,1,.022.227q0,2.524,0,5.049a1.066,1.066,0,0,1-.007.147.517.517,0,0,1-.534.475q-3.123,0-6.246,0a.556.556,0,0,1-.55-.506,1.509,1.509,0,0,1,0-.164q0-2.475,0-4.951c0-.479.187-.667.663-.668Zm3.688,2.678a1.112,1.112,0,0,0-.939-1.072,1.029,1.029,0,0,0-1.15.8,1,1,0,0,0,.394,1.026.245.245,0,0,1,.106.219c-.007.185-.007.372,0,.557a.522.522,0,0,0,1.043,0c.007-.18.007-.36,0-.541a.24.24,0,0,1,.113-.23A.974.974,0,0,0,297.893,1411.938Z"
                                                  transform="translate(-293.156 -1405.053)" fill="#fff" />
                                        </svg>
                                        {{$t('lock.detail.14')}}
                                        </span>

                                    <span v-else class="status status-withdraw mr-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="9.2" height="7.651"
                                                 viewBox="0 0 9.2 7.651" class="mr-2">
												<path id="Path_88077" data-name="Path 88077"
                                                      d="M-730.165,522.731a5.1,5.1,0,0,1,3.011.659,4.854,4.854,0,0,1,1.761,1.772c.012.021.023.042.036.062a.3.3,0,0,0,.352.153.289.289,0,0,0,.2-.31,5.021,5.021,0,0,0-.384-1.96,5.406,5.406,0,0,0-4.284-3.4,3.456,3.456,0,0,0-.529-.045c-.127,0-.172-.04-.169-.174.008-.459,0-.919,0-1.379,0-.147-.02-.282-.172-.348a.329.329,0,0,0-.383.115q-1.554,1.513-3.111,3.022c-.228.222-.229.343,0,.562q1.566,1.521,3.131,3.042a.317.317,0,0,0,.361.1.308.308,0,0,0,.177-.33c0-.464,0-.929,0-1.393Z"
                                                      transform="translate(734.002 -517.741)" fill="#fff" />
											</svg>
											{{$t('navbar.0018')}}</span>


                                    <span class="cl5D">
											{{$t('lock.detail.03')}} {{ convertDate(item['created_at'])}} 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5"
                                                                                            height="5" viewBox="0 0 5 5">
												<circle id="Ellipse_2423" data-name="Ellipse 2423" cx="2.5" cy="2.5"
                                                        r="2.5" fill="#9F9AA5"></circle>
											</svg> 
                                            {{$t('lock.detail.15')}} {{ convertDate(item['unlock_time']) }} </span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td style="width: 30%;" class="text-left">
                        <span class="f-Nunito d-block">{{$t('lock.detail.16')}}</span>
                        <div class="progress">
                            <div class="progress-bar" :class="convertTimesProgressbar(item['unlock_time'], item['created_at']) < 50 ? 'bg-down' : 'bg-up'" role="progressbar" :style="'width:' + convertTimesProgressbar(item['unlock_time'], item['created_at']) + '%' "
                                 :aria-valuenow="convertTimesProgressbar(item['unlock_time'], item['created_at'])" aria-valuemin="0" aria-valuemax="100"></div>

                        </div>
                        <span class="f-Nunito d-block cl5D"><countdown :end="item['unlock_time']"></countdown></span>
                    </td>
                    <td style="width: 20%;" class="text-left">
                        <a type="submit" class="btn-list m-auto buton-view" data-toggle="modal" :href="getLink(item)" target="_blank"
                           data-target="#distribution">
                            {{$t('common.0014')}} TX
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.95" height="19.504"
                                 viewBox="0 0 19.95 19.504" class="ml-2" style="margin-top: -5px;">
                                <g id="Group_26694" data-name="Group 26694" transform="translate(1)">
                                    <path id="Path_64294" data-name="Path 64294"
                                          d="M481.619,395.5H473.6v13.542h14.434V400.7"
                                          transform="translate(-473.6 -390.538)" fill="none" stroke="#fff"
                                          stroke-width="2" />
                                    <path id="Path_64295" data-name="Path 64295"
                                          d="M6.446,5.618a.162.162,0,0,0-.142-.13H4.617V.211C4.617.095,4.548,0,4.463,0H2c-.085,0-.154.095-.154.211V5.488H.154a.162.162,0,0,0-.142.13.271.271,0,0,0,.033.23l3.07,4.225a.137.137,0,0,0,.109.062h0a.138.138,0,0,0,.109-.062L6.412,5.848A.27.27,0,0,0,6.446,5.618Z"
                                          transform="translate(11.783 11.733) rotate(-135)" fill="#fff" />
                                </g>
                            </svg>
                        </a></td>
                </tr>
                </tbody>
            </table>
            <Paginate
            v-show="historyLocks.length > 0 && totalPage > 1"
            @pageChange="changePage($event)"
            :totalPage="totalPage"
            :page="page">
            </Paginate>
            <span class="decor6"> <img src="@/assets/images/decor1.png"></span><span class="decor7 index0"> <img
            src="@/assets/images/decor1.png"></span>
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
import axios from "axios";
import {mapGetters, mapState} from "vuex";
import {settingsContract} from "@/utils/const";
import moment from "moment";
import Countdown from "@/components/Countdown";
import Loading from "vue-loading-overlay";
import Paginate from "@/components/Paginate";
export default {
    data(){
        return{
            detailTokens: [],
            dataChart: [],
            timeChart: 7,
            historyLocks: [],
            page: 1,
            totalPage: 1,
            totalRows: 0,
            pageSize: 20,
            showLoading: false,
            fullPage: true,
        }
    },
    components: {Countdown,Loading, Paginate},
    methods:{
        async getLockTokenDetail() {
            try {
                this.showLoading = true
                const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                let platform = 'bsc';
                let address_token = this.$route.params.address;
                let url = '/api/token/detail_by_address/'+ address_token;
                url = url + '?platform=' + platform + '&network=' + network;
                await axios.get(url).then(res => {
                    if (res.data.data) {
                        this.detailTokens = res.data.data;
                    } else {
                        this.detailTokens = [];
                    }
                }, () => {
                    this.detailTokens = [];
                });
            } catch (error) {
            } finally {
                this.showLoading = false;
            }
        },
        formatNumber(number, minPrecision = 2, maxPrecision = 2) {
            if (number === 0 || !number) {
                return '0.00';
            }
            const options = {
                minimumFractionDigits: minPrecision,
                maximumFractionDigits: maxPrecision,
            }
            let val = (number / 1).toFixed(minPrecision).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        changeTimeChart(days) {
            this.timeChart = days;
            this.getChart();
        },
        async getChart() {
            try {
                this.showLoading = true
                let address_token = this.$route.params.address;
                let timestamp =  new Date().getTime();
                let platform = "bsc"
                let name_platform = settingsContract['BASE_TOKEN_NAME'][platform]
                let url = '/coin/v3/coins/'+name_platform+'/contract/'+address_token+'/market_chart?vs_currency=usd&days='+this.timeChart+'&timestamp='+timestamp+'&interval=daily';
                this.prices = []
                await axios.get(url).then(res => {
                    if (res.data) {
                        this.dataChart = res.data;
                        for (let i = 0 ; i <  res.data['prices'].length; i++) {
                            let obj = {
                                t: res.data['prices'][i][0],
                                y: res.data['prices'][i][1],
                            }
                            this.prices.push(obj);
                        }
                    } else {
                        this.dataChart = [];
                    }
                }, () => {
                    this.dataChart = [];
                });
            } catch (error) {
            } finally {
                this.showLoading = false;
            }
        },
        async getHistorysTokenLock() {
            try {
                this.showLoading = true
                const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                let platform = "bsc"
                let address_token = this.$route.params.address;
                let url = '/api/lock/get-by-token/'+ address_token;
                url = url + '?platform=' + platform + '&network=' + network + '&order=withdraw_status,unlock_time&by=asc,asc';
                url += `&p=${this.page}&limit=${this.pageSize}`;
                this.totalPage = 0;
                this.totalRows = 0;
                this.historyLocks = [];
                this.$store.commit("setPopupProcessing", true)
                await axios.get(url).then(res => {
                    this.$store.commit("setPopupProcessing", false)
                    if (res.data.data) {
                        this.historyLocks = res.data.data;
                        this.totalPage = res.data['optional']['totalpage'];
                        this.totalRows = res.data['optional']['rowcount'];
                    } else {
                        this.historyLocks = [];
                    }
                }, () => {
                    this.$store.commit("setPopupProcessing", false)
                });
            } catch (error) {
            } finally {
                this.showLoading = false;
            }
        },
        convertDate(time) {
            let date = moment(time*1000);
            return date.format('MM/DD/YYYY');
        },
        convertTimesProgressbar(unlockTime,lockTime)
        {
            let now = new Date().getTime();
            now = parseInt(now/1000);
            let timeDiff = unlockTime - lockTime;
            if (unlockTime <= now) {
                return 0;
            }
            let fromLockToNow = now - lockTime;
            return Math.round(100 - (fromLockToNow / timeDiff * 100), 2);
        },
        getLink(item, name, address = false) {
            let explorerUrl = '';
            if (item['platform'] === 'bsc') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://bscscan.com/';
                } else {
                    explorerUrl = 'https://testnet.bscscan.com/';
                }
            } else if (item['platform'] === 'eth') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://etherscan.io/';
                } else {
                    explorerUrl = 'https://ropsten.etherscan.io/';
                }
            } else if (item['platform'] === 'polygon') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://polygonscan.com/';
                } else {
                    explorerUrl = 'https://mumbai.polygonscan.com/';
                }
            } else if (item['platform'] === 'fantom') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://ftmscan.com/';
                } else {
                    explorerUrl = 'https://testnet.ftmscan.com/';
                }
            }

            return address ? explorerUrl + 'address/' + item[name] : explorerUrl + 'tx/'+item['hash'];
        },
        changePage(page) {
        this.page = page;
        this.getHistorysTokenLock();
        },
        checkUnlock(unlock) {
            unlock = parseInt(unlock) || 0 ;
            let now = new Date().getTime();
            now = parseInt(now/1000);
            return unlock <= now;
        },
        copyToClipboard(data) {
        navigator.clipboard
        .writeText(data)
        .then(this.$toaster.success("Copied to clipboard!"));
    },
    },
    created() {
        this.getLockTokenDetail();
        this.getHistorysTokenLock();
        this.getChart();
    },
    computed: {
        ...mapState(['web3Modal']),
        ...mapGetters({
            exchange: 'exchange',
            account: 'account',
        }),
    },

    watch: {
        // 'exchange': function () {
        //     this.getLockTokenDetail();
        //     // this.getHistorysTokenLock();
        // },
        'account': function () {
            this.getLockTokenDetail();
            this.getHistorysTokenLock();
        },
    }
}
</script>

<style scoped>
.list{
    padding: 0px;
}
.middle{
    position: relative;
}
.index1{
    z-index: 1;
}
.index0{
    z-index: 0;
}
.buton-view{
    background: #08638F;
    border-radius: 6px;
    padding: 10px 15px;
    color: #fff;
    font-family: 'Nunito';
    border: none;
    display: flex;
    align-items: center;
    font-size: 14px;
    width: 115px;
}

</style>