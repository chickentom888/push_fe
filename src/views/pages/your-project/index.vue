<template>
    <main id="ilopage">

        <section id="ilo1"  class="yourproject openning">
            <div class="container py-5">
                <div class="row  align-items-center">
                    <div class="col-12 col-md-6 col-lg-7">
                        <div class="thetitle ">
                            Your Project
                        </div>
                        <div class="thedesc mb-3">
                            <p>Are you looking for an intensive less resources alternative for mining?</p>
                            <p>Use your BSC tokens to earn more token in the passive way.</p>
                        </div>

                    </div>
                    <div class="col-12 col-md-6 col-lg-5 text-center">
                        <img src="@/assets/images/ilo/ilo1.png" alt="">
                    </div>
                </div>
            </div>
            <div class="yourproject_nav_wrapper">
                <div class="container">
                    <div class="yourproject_nav">
                        <a href="javascript:void(0)" :class="{'active': params.sale_type === 'ilo'}" @click="changeTab('ilo')">
                            ILO
                        </a>
                        <a href="javascript:void(0)" :class="{'active': params.sale_type === 'ilov'}" @click="changeTab('ilov')">
                            ILOV
                        </a>

                        <a href="javascript:void(0)" :class="{'active': params.sale_type === 'idov'}" @click="changeTab('idov')">
                            IDOV
                        </a>
                    </div>
                </div>
            </div>

        </section>

        <section id="ilo2">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-12 col-md-12 mb-4" :class="activeTab === 'idov' ? 'col-lg-3' : 'col-lg-2'">
                        <strong class="thedesc">{{ totalItems }} {{activeTab === 'idov' ? 'sales' : 'presales'}}</strong>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-4" v-if="activeTab !== 'idov'">

                        <div class="dropdown formwrapper">
                            <button class="btn form-control dropdown-toggle bg-white " type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                                <img width="25" :src="exchange ? exchange.exchange_logo : ''" alt=''>
                                &nbsp;
                                {{exchange ? exchange.exchange_name : ''}}
                            </button>
                            <ul class="dropdown-menu w-100" v-show="connectInfo['exchanges']">
                                <li v-for="(item, idx) in connectInfo['exchanges']" :key="idx">
                                    <a class="dropdown-item" href="javascript:void(0)" @click="changeExchange(item)">
                                        <img width="30" :src="item['exchange_logo']" alt="">
                                        {{item['exchange_name']}}
                                        <!--                            <div class="d-flex">-->
                                        <!--                                <div class="text-white">-->
                                        <!--                                    {{item['type']}}-->
                                        <!--                                </div>-->
                                        <!--                            </div>-->
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4" :class="activeTab === 'idov' ? 'col-lg-3' : 'col-lg-2'">
                        <div class="dropdown formwrapper">
                            <button class="btn form-control dropdown-toggle bg-white " type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                                <span v-html="currentValue.icon"></span>
                                &nbsp;
                                {{ currentValue.title }}
                            </button>
                            <ul class="dropdown-menu w-100">
                                <a class="dropdown-item" href="javascript:void(0)" v-for="(item, index) in filterDropdowns" :key="index"
                                   @click="currentValue = item; filterPresaleStatus(item.id)">
                                    <span v-html="item.icon"></span>
                                    &nbsp;
                                    {{ item.title }}
                                </a>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4" :class="activeTab === 'idov' ? 'col-lg-6' : 'col-lg-5'">
                        <div class="formwrapper searchform">
                            <img class="thesubdata left" src="@/assets/images/icon/searchicon.png" alt="">
                            <input type="text" class="form-control bg-white" :placeholder="$t('placeholder.06')"
                                   v-model="params.q"
                                   @keyup.enter="getListPresale()">
                            <button type="button" name="button" class="btn btn-pushswap rounder thesubdata" @click="getListPresale()">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <span class="d-none d-md-inline-block">
                                      &nbsp;Search Project
                                    </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="(presale, index) in presaleFilter" :key="index">
                        <project :presale="presale" :type="'yourProject'"></project>
                    </div>
                </div>
                <div class="container">
                    <Pagination v-show="presaleFilter.length > 0" @pageChange="changePage($event)"
                                :totalPage="totalPage" :page="page"></Pagination>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import {mapGetters, mapState} from "vuex";
    import axios from 'axios';
    import project from "@/components/your-project/project";
    import Pagination from "@/components/Pagination";

    export default {
        name: "index",
        components: {
            project,
            Pagination,
        },
        data() {
            return {
                loading: false,
                isShow: false,
                totalPage: 1,
                totalItems: 0,
                page: 1,
                pageSize: 24,
                filterKeyword: '',
                ownerAddress: '',
                presales: [],
                presaleFilter: [],
                filterDropdowns: [
                    {id: '', title: 'All', icon: '<i class="fa-solid fa-cubes"></i>'},
                    {id: 0, title: 'Upcoming', icon: '<i class="fa-regular fa-clock"></i>'},
                    {id: 1, title: 'Live', icon: '<i class="fa-solid fa-podcast"></i>'},
                    {id: 2, title: 'Success', icon: '<i class="fa-regular fa-circle-check"></i>'},
                    {id: 3, title: 'Failed', icon: '<i class="fa-regular fa-circle-xmark"></i>'}
                ],
                currentValue: {
                    id: "",
                    title: 'All',
                    icon: '<i class="fa-solid fa-cubes"></i>'
                },
                tabs: [
                    {id: "ilo", name: "ILO"},
                    {id: "ilov", name: "ILOV"},
                    {id: "idov", name: "IDOV"},
                ],
                activeTab: 'ilo',
                params: {
                    sale_type: 'ilo'
                }
            }
        },
        methods: {
            async getListPresale() {
                if (this.loading) {
                    return;
                } else {
                    this.loading = true;
                }
                this.ownerAddress = this.web3Modal.account;
                let network = this.exchange['network'];
                let platform = this.exchange['platform'];
                let baseUrl = `/api/presale`;
                if (this.params.sale_type && this.params.sale_type === 'idov') {
                    baseUrl = `/api/sale`
                }
                let url = baseUrl + `/get-list?presale_owner_address=${this.ownerAddress}&network=${network}&platform=${platform}`;
                if (Object.keys(this.params).length > 0) {
                    let assignParam = {...this.params };
                    if (this.params.sale_type && this.params.sale_type === 'idov') {
                       delete assignParam['sale_type'];
                    }
                    for (let key in assignParam) {
                        url += `&${key}=${assignParam[key]}`;
                    }
                }
                url += `&p=${this.page}&limit=${this.pageSize}`
                this.$store.commit("setPopupProcessing", true)
                await axios.get(url).then(res => {
                    this.totalPage = 0;
                    this.totalItems = 0;
                    this.presales = [];
                    this.presaleFilter = [];
                    if (res.data && res.data.data.length > 0) {
                        this.totalPage = res.data.optional.totalpage;
                        this.totalItems = res.data.optional.rowcount;
                        this.presales = res.data.data || [];
                        this.presaleFilter = res.data.data || [];
                    }
                    this.loading = false;
                    this.$store.commit("setPopupProcessing", false)
                }, () => {
                   //Errror load api
                    this.totalPage = 0;
                    this.presales = [];
                    this.presaleFilter = [];
                    this.loading = false;
                    this.$store.commit("setPopupProcessing", false)
                });
            },
            filterPresaleStatus(status) {
                this.filterKeyword = '';
                this.page = 1;
                this.totalPage = 1;
                if (status || status === 0) {
                    this.params.current_status = status;
                } else {
                    delete this.params.current_status;
                }
                this.getListPresale();
            },
            changePage(page) {
                this.page = page;
                this.getListPresale();
            },
            changeTab(tab) {
                if (this.activeTab !== tab) {
                    this.activeTab = tab;
                    this.params.sale_type = tab;
                    this.$router.push({path: 'your-project', query: {tab: tab}});
                    this.getListPresale();
                }
            },
            changeExchange(item) {
                this.$store.dispatch('connect');
                this.$store.commit('setExchange', item);
            }
        },
        created() {
            let query = this.$route.query;
            if (query && query.tab) {
                this.activeTab = query.tab;
                this.params.sale_type = query.tab;
            }
        },
        mounted() {
            setTimeout(() =>  this.getListPresale(), 1000);
        },
        computed: {
            ...mapState(['web3Modal']),
            ...mapGetters({
                exchange: 'exchange',
                account: 'account',
            }),
            connectInfo() {
                return this.$store.state.connect;
            },
        },
        watch: {
            'exchange': function () {
                this.ownerAddress = this.account;
                if (!this.account) {
                    this.totalPage = 0;
                    this.presales = [];
                    this.presaleFilter = [];
                    return;
                }
                this.getListPresale();

            },
            'account': function () {
                this.ownerAddress = this.account;
                if (!this.account) {
                    this.totalPage = 0;
                    this.presales = [];
                    this.presaleFilter = [];
                    return;
                }
                this.getListPresale();
            },
        }
    }
</script>

<style scoped>

</style>
