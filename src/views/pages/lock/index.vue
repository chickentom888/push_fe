<template>
    <div>
        <div class="box-dex push-lock">
            <div class="container" data-aos="fade-up" data-aos-delay="200">
                <div class="row align-items-center position-relative">
                    <div class="col-md-7">
                        <h3 class="title" v-html="$t('lock.index.01')"></h3>
                        <p class="f-Nunito">{{$t('lock.index.02')}}</p>
                        <div class="d-flex">
                            <router-link to="create-lock" class=" linear-blue btn-blue fill mr-3 w-156 text-center">
                                {{$t('lock.index.03')}} <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                            </router-link>
                            <router-link to="/history-lock" class=" btn-white fill w-156">
                                {{$t('lock.index.04')}} <img src="@/assets/images/dot-l-black.svg" class="ml-2">
                            </router-link>
                        </div>
                        <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
                    </div>
                    <div class="col-md-5 position-relative">
                        <p class="hero-img mt-5"> <img src="@/assets/images/banner4.png" class="animated"> </p>
                        <span class="decor7"> <img src="@/assets/images/decor1.png"></span>
                    </div>
                    <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
                </div>
            </div>
        </div>
        <div class="experience mb-5">
            <div class="container" data-aos="fade-up" data-aos-delay="200">
                <ul class="list listlock">
                    <li>
                        <span class="num">${{ infoLocks ? formatNumber(infoLocks['total_token_locked'], 2) : '0.00' }}</span>
                        <p class="m-0"> {{$t('lock.index.05')}} </p>
                    </li>
                    <li>
                        <span class="num">${{ infoLocks ? formatNumber(infoLocks['total_liquidity_locked'], 2) : '0.00' }}</span>
                        <p class="m-0">{{$t('lock.index.06')}}</p>
                    </li>
                    <li>
                        <span class="num">{{ infoLocks ? infoLocks['count_token'] : '0' }}</span>
                        <p class="m-0">{{$t('lock.index.07')}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <form class="fomsearch">
                <img src="@/assets/images/icon-search.svg" class="btn-search">
                <input type="text" :placeholder="$t('placeholder.08')"  v-model="searchQuery" @input="queryLock()" class="form-control" value="">
                <div class="searchform_result" v-show="searchQuery">
                    <table class="table table-history table-borderless table-striped m-0">
                        <tbody>
                            <tr v-for="(item, idx) in queryTokens" :key="idx">
                                <td>
                                    <a :href="'/detail-lock/'+item['address']" class="coinname">
                                        <img v-if="item['image']"
                                            :src="item['image']"
                                            :alt="item['symbol']">
                                        <img v-else
                                            :src="imgDefault"
                                            :alt="item['symbol']">
                                        <div>
                                            <strong>{{ item['symbol'] }}
                                            <small class="text-up">{{ item['platform'].toUpperCase() }} <i
                                                class="fa-solid fa-check"></i></small>
                                            </strong>
                                            <span>{{ item['name'] }}</span>
                                        </div>
                                    </a>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span>
                                        <div>
                                            <div>{{$t('common.0017')}}</div>
                                            <small class="text-secondary">{{ truncate(item['address']) }}</small>
                                        </div>
                                    </span>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span>
                                        <div class="">
                                            <div>Blockchain</div>
                                            <small class="text-secondary">{{ item['platform'].toUpperCase() }}</small>
                                        </div>
                                    </span>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span>
                                        <div class="">
                                            <div>{{$t('lock.index.08')}}</div>
                                            <small class="text-secondary">{{
                                            item && item['liquid_lock_percent'] ? formatNumber(item['liquid_lock_percent'], 2) : '0.00'
                                            }}%</small>
                                        </div>
                                    </span>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span>
                                        <div class="">
                                            <div>{{$t('lock.index.09')}}</div>
                                            <small class="text-secondary">{{
                                            item && item['token_lock_amount'] ? formatNumber(item['token_lock_amount'], 2) : '0.00'
                                            }} ({{ formatNumber(item['token_lock_percent'], 2) }}%)</small>
                                        </div>
                                    </span>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span>
                                        <div class="">
                                            <div>{{$t('lock.index.10')}}</div>
                                            <small class="text-secondary">$ {{
                                            item && item['token_lock_value'] ? formatNumber(item['token_lock_value'], 2) : '0.00'
                                            }}</small>
                                        </div>
                                    </span>
                                </td>
                                <td class="d-none d-md-table-cell">
                                    <span>
                                        <div class="">
                                            <div>{{$t('lock.index.11')}}</div>
                                            <small class="text-secondary">{{ convertTimesCountdownUnlock(item['unlock_time'])['unlock'] }}</small>
                                        </div>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </form>
            <table class="table tableblue1 tableblue styletable  middle">
                <thead>
                    <tr>
                        <th scope="col" style="width: 18%;">
                            {{$t('common.0018')}}
                        </th>
                        <th scope="col" style="width: 10%;" class="text-left">Blockchain</th>
                        <th scope="col" style="width: 18%;" class="text-left">
                            {{$t('lock.index.12')}}
                        </th>
                        <th scope="col" style="width: 15%;" class="text-left">
                            {{$t('lock.index.10')}}
                        </th>
                        <th scope="col" style="width: 18%;" class="text-left">
                            {{$t('lock.index.11')}}
                        </th>
                        <th scope="col" style="width: 12%;" class="text-center">
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-show="dataLock.length === 0">
                        <td colspan="6">
                            <div class="py-5 text-center">
                                <img src="@/assets/images/icons/nodata.png" style="max-width: 100px;"   alt="">
                            </div>
                        </td>
                    </tr>
                    <tr v-show="dataLock.length > 0" v-for="(data, index) in dataLock" :key="index">
                        <td>
                            <div class="d-flex">
                                <img :src="data.image ? data.image : imgDefault" class="mr-2">
                                <div class="clearfix text-left">
                                    <span class=" fw-bold d-block">{{ data.symbol }}</span>
                                    <span class="cl5D fs-12">{{data.name}}</span>
                                </div>
                            </div>
                        </td>
                        <td class="text-left"><img src="https://alphawallet.com/wp-content/uploads/2021/02/BNB.png" class="mr-2">
                            {{data.platform.toUpperCase()}}
                        </td>
                        <td class="text-left">
                            <img src="@/assets/images/icon-clock.svg" class="mr-2">
                            {{data && data['token_lock_amount'] ? formatNumber(data['token_lock_amount'], 2) : '0.00'}} ({{ formatNumber(data['token_lock_percent'], 2) }}%)
                        </td>
                        <td class="text-left"><span class="f-Nunito fs-14">
                            $ {{data && data['token_lock_value'] ? formatNumber(data['token_lock_value'], 2) : '0.00'}}
                            </span>
                        </td>
                        <td class="text-left">
                            <span class="f-Nunito mb-2 d-block">{{ convertTimesCountdownUnlock(data['unlock_time'])['unlock'] }}</span>
                            <div class="progress mini">
                                <div class="progress-bar bg-down"
                                    :class="convertTimesProgressbar(data['unlock_time'], data['lock_time']) < 50 ? 'bg-down' : 'bg-up'"
                                    role="progressbar"
                                    :style="'width:' + convertTimesProgressbar(data['unlock_time'], data['lock_time']) + '%' "
                                    :aria-valuenow="convertTimesProgressbar(data['unlock_time'], data['lock_time'])"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </td>
                        <td class="text-center">
                            <button type="submit" @click="viewCoin(data.address)" class="btn-list m-auto" data-toggle="modal" data-target="#distribution">
                            <img src="@/assets/images/icon-view.svg" class="mr-2">
                            {{$t('common.0014')}}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Paginate
                v-show="dataLock.length > 0 && totalPage > 1"
                @pageChange="changePage($event)"
                :totalPage="totalPage"
                :page="page">
            </Paginate>
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
    import Loading from "vue-loading-overlay";
    import Paginate from "@/components/Paginate";
    import {mapGetters, mapState} from "vuex";
    export default {
    name:"lock",
    data(){
    	return{
    		showLoading: false,
    		fullPage: true,
            dataLock:[],
            infoLocks:[],
    		imgDefault: require("@/assets/images/ic-default.svg"),
            searchQuery: '',
            queryTokens: [],
            page: 1,
            pageSize: 20,
            totalPage: 1,
            totalRows: 0,
    	}
    },
    components: {
        Loading,
        Paginate
      },
    methods:{
    	async fetchData(){
            try {
    		this.showLoading = true;
            this.totalPage = 0;
            this.totalRows = 0;
    		const user = JSON.parse(localStorage.getItem("user"));
                    if (!user) return; 
    		const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
    		let platform = 'bsc';
                    let url = '/api/token/index';
                    url = url + '?platform=' + platform + '&network=' + network + '&order=token_lock_value,unlock_time&by=desc,asc';
                    url += `&p=${this.page}&limit=${this.pageSize}`;
                    let headers = {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + user['token'],
                    }
    			const res = await axios.get(url, {
    				headers: headers
    			});
                if (res.data.status == 1) {
                    this.dataLock = res.data.data
                    if (res.data && res.data.data) {
                    // this.historys = res.data.data;
                    this.totalPage = res.data['optional']['total_page'];
                    this.totalRows = res.data['optional']['row_count'];
                }
                }
            } catch (error) {
            } finally {
            this.showLoading = false;
            }
    	},
        viewCoin(address){
            this.$router.push({ path: `/detail-lock/${address}` })
        },
    	formatNumber(number, minPrecision = 2, maxPrecision = 2) {
                if (number === 0 || !number) {
                    return '0.00';
                }
                const options = {
                    minimumFractionDigits: minPrecision,
                    maximumFractionDigits: maxPrecision,
                }
                let numberString = number.toString()
                let array = numberString.split('.');
                if (array[1]) {
                    let pathDecimal = array[1].slice(0, minPrecision);
                    return array[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +'.'+ pathDecimal;
                } else {
                    return array[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
    
            },
    		convertTimesCountdownUnlock(unlock_time) {
                let now = new Date().getTime();
                now = parseInt(now / 1000);
                let timeDiff = unlock_time - now;
                let numberMinutes = parseInt(timeDiff / 60);
                let numberHours = parseInt(numberMinutes / 60);
                let numberDays = parseInt(numberHours / 24);
                let numberMonths = parseInt(numberDays / 30);
                let numberYears = parseInt(numberMonths / 12);
    
                if (numberDays >= 1 && numberDays < 30) {
                    return {
                        "code": 1,
                        "unlock": numberDays + (numberDays > 1 ? " Days" : " Day")
                    }
                }
    
                if (numberMonths >= 1 && numberMonths < 12) {
                    if (numberDays >= 15 && numberMonths < 11) {
                        numberMonths += 1;
                    }
                    return {
                        "code": 1,
                        "unlock": numberMonths + (numberMonths > 1 ? " Months" : " Month")
                    }
                }
    
                if (numberYears >= 1) {
                    return {
                        "code": 1,
                        "unlock": numberYears + (numberYears > 1 ? " Years" : " Year")
                    }
                }
    
                if (numberHours >= 1 && numberHours < 24) {
                    return {
                        "code": 1,
                        "unlock": numberHours + (numberHours > 1 ? " Hours" : " Hour")
                    }
                }
    
                if (numberMinutes >= 1 && numberMinutes < 60) {
                    return {
                        "code": 2,
                        "unlock": numberMinutes + (numberMinutes > 1 ? " Minutes" : " Minute")
                    }
                } else {
                    if (timeDiff > 0) {
                        return {
                            "code": 1,
                            "unlock": "<1 Minute"
                        }
                    } else {
                        return {
                            "code": 1,
                            "unlock": "0 Minute"
                        }
                    }
    
                }
            },
            async queryLock() {
                this.queryTokens = [];
                this.searchQuery = this.searchQuery.trim();
                if (!this.searchQuery || this.searchQuery === '') {
                    return;
                }
                let platform = 'bsc';
                const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                let url = '/api/token/index';
                url = url + '?platform=' + platform + '&network=' + network + '&q=' + this.searchQuery;
                const queryData = await axios.get(url);
                this.queryTokens = queryData.data.data;
            },
            truncate(fullStr) {
                let separator = '...';
                let frontChars = 4, backChars = 4;
    
                return fullStr.substr(0, frontChars) +
                    separator +
                    fullStr.substr(fullStr.length - backChars);
            },
            convertTimesProgressbar(unlockTime, lockTime) {
                let now = new Date().getTime();
                now = parseInt(now / 1000);
                let timeDiff = unlockTime - lockTime;
                if (unlockTime <= now) {
                    return 0;
                }
                let fromLockToNow = now - lockTime;
                return Math.round(100 - (fromLockToNow / timeDiff * 100), 2);
            },
            changePage(page) {
            this.page = page;
            this.fetchData();
            },
            async getInfoLock() {
                this.infoLocks = [];
                let platform = 'bsc';
                const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                let url = 'api/index/statistic';
                url = url + '?platform=' + platform + '&network=' + network;
                this.$store.commit("setPopupProcessing", true);
                const infoData = await axios.get(url);
                this.$store.commit("setPopupProcessing", false);
                this.infoLocks = infoData.data.data;
            },
    
    
    },
    mounted(){
    	this.fetchData()
        this.getInfoLock();
    },
    computed: {
            ...mapState(['web3Modal']),
            ...mapGetters({
                exchange: 'exchange',
                account: 'account',
            })
        },
    watch: {
            // 'exchange': function (data) {
            //     this.getLockToken();
            //     this.getInfoLock();
            // },
            'account': function () {
                // this.getLockToken();
                this.getInfoLock();
            },
        }
    }
</script>
<style>
</style>