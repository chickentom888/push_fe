<template>
  <div>
    <div class="box-dex push-lock mb-5">
		<div class="container" data-aos="fade-up" data-aos-delay="200">
			<div class="row align-items-center position-relative">
				<div class="col-md-7">
					<h3 class="title mb-4">Joined <span>Project</span></h3>
					<p class="f-Nunito cl9F9 fs-18 mb-4">Are you looking for an intensive less resources alternative for mining?</p>
					<p class="f-Nunito cl9F9 fs-18 mb-4"> Use your BSC tokens to earn more token in the passive way.</p>
					<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
				</div>

				<div class="col-md-5 position-relative">
					<p class="hero-img mt-5"> <img src="@/assets/images/banner10.png" class="animated"> </p>
					<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
				</div>
<!--				<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>-->
			</div>
			<ul class="listproject nav">
				<li>
                    <a href="javascript:void(0)" data-toggle="tab" aria-expanded="true" :class="{'active': params.sale_type === 'ilo'}" @click="changeTab('ilo')">ILO</a>
                </li>
				<li>
                    <a href="javascript:void(0)" data-toggle="tab" aria-expanded="false" :class="{'active': params.sale_type === 'ilov'}" @click="changeTab('ilov')">ILOV</a>
                </li>
				<li>
                    <a href="javascript:void(0)" data-toggle="tab" aria-expanded="false" :class="{'active': params.sale_type === 'idov'}" @click="changeTab('idov')">IDOV</a>
                </li>
			</ul>
		</div>
	</div>
	<div class="experience d-flex align-items-center mb-5">

		<div class="container mt-5" data-aos="fade-up" data-aos-delay="200">
			<div class="row">
				<div class="col-md-5 align-items-center d-flex">
					<span class="fs-18 fw-bold f-Nunito clfff">{{ totalItems }} {{activeTab === 'idov' ? 'sales' : 'presales'}}</span>
				</div>

				<div class="col-md-3">
					<div class="select-boxstyle mt-2">
						<div class="select-box__current" tabindex="2">
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="3" value="3" name="Ben"
									checked="checked" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-all.svg" class="mr-2"> All</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="4" value="4" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-upcoming.svg" class="mr-2">
									Upcoming</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="5" value="5" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-live.svg" class="mr-2"> Live</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="6" value="6" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-successsmall.svg" class="mr-2">
									Success</p>
							</div>
							<div class="select-box__value">
								<input class="select-box__input" type="radio" id="7" value="7" name="Ben" />
								<p class="select-box__input-text"><img src="@/assets/images/icon-failed.svg" class="mr-2"> Failed
								</p>
							</div><img class="select-box__icon" src="@/assets/images/dot-b.svg" alt="Arrow Icon"
								aria-hidden="true" />
						</div>
                        <ul class="select-box__list">
                            <li @click="filterPresaleStatus('')">
                                <label class="select-box__option" for="3" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-all.svg" class="mr-2">All</label>
                            </li>
                            <li @click="filterPresaleStatus(0)">
                                <label class="select-box__option" for="4" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-upcoming.svg" class="mr-2">Upcoming</label>
                            </li>
                            <li @click="filterPresaleStatus(1)">
                                <label class="select-box__option" for="5" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-live.svg" class="mr-2">Live</label>
                            </li>
                            <li @click="filterPresaleStatus(2)">
                                <label class="select-box__option" for="6" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-successsmall.svg" class="mr-2">Success</label>
                            </li>
                            <li @click="filterPresaleStatus(3)">
                                <label class="select-box__option" for="7" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-failed.svg" class="mr-2">Failed</label>
                            </li>
                        </ul>
					</div>

				</div>
				<div class="col-md-4">
                    <input type="text" class="form-control f-Nunito heigh54" :placeholder="$t('placeholder.06')"
                           v-model="params.q"
                           @keyup.enter="getListPresale()">
				</div>
			</div>

		</div>
	</div>
	<div class="tab-content">
		<div class="tab-pane fade active show" id="project1">
			<div class="panel-content">
				<div class="box-Upcoming">
					<div class="container" data-aos="fade-up" data-aos-delay="200">
						<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
						<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
						<span class="decor6"> <img src="@/assets/images/decor2.png"></span>
						<div class="row">
                            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400" v-for="(presale, index) in presaleFilter" :key="index">
                                <project :presale="presale" :type="'joinedProject'"></project>
                            </div>
                        </div>
						<span class="decor7"> <img src="@/assets/images/decor1.png"></span>
					</div>
                    <div class="container">
                        <Paginate v-show="presaleFilter.length > 0" @pageChange="changePage($event)"
                                    :totalPage="totalPage" :page="page"></Paginate>
                    </div>
				</div>
			</div>
		</div>
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
import {mapGetters, mapState} from "vuex";
import project from "@/components/joined-project/project";
import axios from 'axios';
import Paginate from "@/components/Paginate";
import Loading from "vue-loading-overlay";
export default {
    name: "index",
    components: {
        project,
        Paginate,
        Loading
    },
    data() {
        return {
            showLoading: false,
            fullPage: true,
            loading: false,
            filterKeyword: '',
            ownerAddress: null,
            presales: [],
            presaleFilter: [],
            tabs: [
                {id: "ilo", name: "ILO"},
                {id: "ilov", name: "ILOV"},
                {id: "idov", name: "IDOV"},
            ],
            activeTab: 'ilo',
            params: {
                sale_type: 'ilo'
            },
            totalPage: 1,
            totalItems: 0,
            page: 1,
            pageSize: 24,
        }
    },
    methods:  {
        async getListPresale() {
            if (this.loading) {
                return;
            } else {
                this.loading = true;
            }
            this.ownerAddress = this.web3Modal.account;
            if (!this.ownerAddress || this.ownerAddress === 'undefined') {
                this.$store.dispatch('connect');
                this.loading = false;
                return;
            }
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let baseUrl = `/api/presale`;
            if (this.params.sale_type && (this.params.sale_type === 'ido' || this.params.sale_type === 'idov')) {
                baseUrl = `/api/sale`
            }
            let userAccount = JSON.parse(localStorage.getItem('user'));
            if (!userAccount) {
                this.$store.dispatch('connect');
                this.loading = false;
                return;
            }
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userAccount['token'],
            }
            let url = baseUrl + `/list-purchased/${this.ownerAddress}?network=${network}&platform=${platform}&p=${this.page}&limit=${this.pageSize}`;
            if (Object.keys(this.params).length > 0) {
                let assignParam = {...this.params };
                if (this.params.sale_type && this.params.sale_type === 'idov') {
                    delete assignParam['sale_type'];
                }
                for (let key in assignParam) {
                    url += `&${key}=${assignParam[key]}`;
                }
            }
            this.showLoading = true;
            await axios.get(url, {headers: headers}).then(res => {
                this.totalPage = 0;
                this.totalItems = 0;
                this.presales = [];
                this.presaleFilter = [];
                if (res.data && res.data.data) {
                    this.totalPage = res.data.optional.total_page;
                    this.totalItems = res.data.optional.row_count;
                    this.presales = res.data.data || [];
                    this.presaleFilter = this.presales;
                }
                this.loading = false;
                this.showLoading = false;
            }, () => {
                //Error
                this.totalPage = 0;
                this.presales = [];
                this.presaleFilter = [];
                this.loading = false;
                this.showLoading = false;
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
                this.$router.push({path: 'joined-project', query: {tab: tab}});
                this.getListPresale();
            }
        }
    },
    computed: {
        ...mapState(['web3Modal']),
        ...mapGetters({
            exchange: 'exchange',
            account: 'account',
        })
    },
    beforeCreate() {
        let userAccount = JSON.parse(localStorage.getItem('user'));
        if (!userAccount) {
            this.$store.dispatch('connect');
            this.$router.push("/");
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

<style>

</style>