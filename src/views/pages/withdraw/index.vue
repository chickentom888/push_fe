<template>
	<div>
		<div class="container" data-aos="fade-up" data-aos-delay="200">
			<div class="" v-show="!account">
				<div class="container" data-aos="fade-up" data-aos-delay="200">
					<div class="box-dex position-relative">
						<div class="heigh90 text-center">
							<img src="@/assets/images/hotspot.svg" class="m-auto d-block">
							<a @click="connectWallet" class="linear-blue btn-blue btn-bluebig w-50 fill mt-5 poiter">
								{{$t('common.0001')}}
								<img src="@/assets/images/dot-l-white.svg" class="ml-2">
							</a>
						</div>
						<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
						<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
						<span class="decor10"> <img src="@/assets/images/decor2.png"></span>
					</div>
				</div>
			</div>
			<div class="box-dex position-relative" v-show="account">
				<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
				<span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
				<div class="withdraw position-relative">
					<h3>{{$t('navbar.0018')}} {{ symbol }}</h3>

					<form>
						<div class="form-group">
							<label>Address</label>
							<input type="text" class="form-control" disabled :value="account ? account : '...'">
						</div>
						<div class="form-group">
							<label></label>
							<div class="d-flex justify-content-between">
								<label class="fs-14">{{$t('common.0008')}}</label>
								<label class="fs-13">{{$t('common.0034')}} {{ symbol }}: <span class="fw-bold">
									{{ withdrawBalance }}</span></label>
							</div>
							<div class="position-relative">
								<input type="text" placeholder="" @click="changeAmountWithdraw()" v-model="amountWithdraw" class="form-control">
								<div class="push-info border-0">

									<button type="button" @click="maxAmount()" class="btn btnblue fw-bold">{{$t('common.0010')}}</button>
								</div>
							</div>
							<p class="mt-1 mb-5"><label class="fs-14">{{$t('withdraw.01')}}: <span class="fw-bold">
                                {{ minWithdraw }} {{ symbol }}</span></label>
							</p>
						</div>
						<a v-if="!account" href="javascript:" @click="connectWallet()" class="linear-blue btn-blue btn-bluebig w-100 ">
							{{$t('common.0001')}}
							<img src="@/assets/images/dot-l-white.svg" class="ml-2">
						</a>
						<a v-else-if="amountWithdraw == 0" href="javascript:" class="linear-blue btn-blue btn-bluebig w-100">
							{{$t('navbar.0018')}}
							<img src="@/assets/images/dot-l-white.svg" class="ml-2">
						</a>
						<a v-else href="javascript:" @click="withdraw()" class="linear-blue btn-blue btn-bluebig w-100 ">
							{{$t('navbar.0018')}}
							<img src="@/assets/images/dot-l-white.svg" class="ml-2">
						</a>
					</form>
				</div>
				<div class="mt-5 position-relative">
					<span class="decor5"> <img src="@/assets/images/decor1.png"></span>
					<span class="decor6"> <img src="@/assets/images/decor1.png"></span>
					<p class="fs-24 fw-bold">{{$t('common.0020')}}</p>

					<table class="table tableblue1 tableblue">
						<thead>
						<tr>
							<th scope="col" style="width: 40%;" class="text-left">
								{{$t('common.0037')}}
							</th>
							<th scope="col" style="width: 20%;">{{$t('common.0035')}}</th>
							<th scope="col" style="width: 20%;" class="text-left">
								{{$t('common.0008')}}
							</th>
							<th scope="col" style="width: 20%;" class="text-left">
								{{$t('common.0043')}}
							</th>
							<th scope="col" style="width: 20%;" class="text-left">
								{{$t('common.0036')}}
							</th>
						</tr>
						</thead>
						<tbody v-show="listHistory.length === 0">
						<tr>
							<td colspan="4">
								<div class="py-5 text-center">
									<img src="@/assets/images/icons/nodata.png" alt="">
								</div>
							</td>
						</tr>
						</tbody>
						<tbody v-show="listHistory.length > 0">
						<tr v-for="(item, index) in listHistory" :key="index" :class="(index + 1) % 2 == 0 ? 'bg-gray' : ''">
							<td class="text-left"><span> {{ item && item['created_at'] ? momentTimeHistory(item['created_at'] * 1000, 1) : '--' }} <svg xmlns="http://www.w3.org/2000/svg" width="5"
							                                                                                                                            height="5" viewBox="0 0 5 5">
                                        <circle id="Ellipse_2423" data-name="Ellipse 2423" cx="2.5" cy="2.5" r="2.5"
                                                fill="#34a759"></circle>
                                    </svg> {{ item && item['created_at'] ? momentTimeHistory(item['created_at'] * 1000, 2) : '--' }}</span></td>
							<td>{{ symbol }}</td>
							<td class="text-left"><span class="fw-bold clgreen">{{ item && item['amount'] ? formatNumber(item['amount'], 2) : '--' }}</span></td>
							<td class="text-left"><span :class="item && item.hasOwnProperty('status') ? formatStatusClass(item['status']) : 'text-warning'"><b>{{ item && item.hasOwnProperty('status') ? formatStatus(item['status']) : '--' }}</b></span></td>
							<td class="text-left">
								<a v-if="item['hash']" target="_blank" :href="getLinkTx(item['hash'])"> <span class="fw-bold clgreen">
                      {{ item && item['hash'] ? (formatHash(item['hash'])) : '--' }}</span></a>
								<a v-else>--</a>
							</td>
						</tr>
						</tbody>
					</table>
					<div class="row mt-5" v-if="totalPage > 0">
						<div class="col-sm-12 col-md-7">
							<div class="d-flex justify-content-end">
								<a href="javascript:" @click="nextPage()" class="btn-gray btn-blue pt-2 pb-2">
									{{$t('common.0028')}}
									<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="15.133"
									     viewBox="0 0 26.645 15.133">
										<path id="Path_88594" data-name="Path 88594"
										      d="M-1180.526,1698.888h-.575q-9.273,0-18.546,0a1.67,1.67,0,0,1-1.793-1.665,1.667,1.667,0,0,1,1.546-1.657c.166-.011.333-.006.5-.006h18.857c-.146-.163-.235-.27-.333-.368-.891-.893-1.789-1.779-2.673-2.678a1.583,1.583,0,0,1-.4-1.723,1.6,1.6,0,0,1,1.3-1.1,1.538,1.538,0,0,1,1.414.436c2,1.983,3.991,3.967,5.966,5.971a1.574,1.574,0,0,1,0,2.256q-2.962,3.006-5.969,5.968a1.615,1.615,0,0,1-2.319-.035,1.627,1.627,0,0,1-.009-2.32c.875-.908,1.779-1.788,2.67-2.681C-1180.794,1699.18-1180.7,1699.071-1180.526,1698.888Z"
										      transform="translate(1201.44 -1689.661)"></path>
									</svg>
								</a>
							</div>
						</div>
						<div class="col-sm-12 col-md-5">
							<div class="paginate">
								{{$t('common.0029')}}
								<input type="text" placeholder="" @blur="changePage()" class="form-control " v-model="page" style="width: 90px;">
								<span>of {{ totalPage }}</span>
								<div class="page-item">
									<button class="next mr-2" :disabled="currentPage < 2" @click="prevPage()">
										<img src="@/assets/images/next.svg">
									</button>
									<button class="prev" :disabled="currentPage >= totalPage" @click="nextPage()">
										<img src="@/assets/images/prev.svg">
									</button>
								</div>
							</div>
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
import axios from 'axios';
import moment from "moment";
import Loading from "vue-loading-overlay";
import { $t } from '@/lang/i18n.js';
export default {
	data() {
		return {
			symbol: 'PUSH',
			totalPage: 1,
			totalItems: 0,
			msgError: null,
			amountWithdraw: 0,
			withdrawBalance: 0,
			withdrawBalanceNoFormat: 0,
			minWithdraw: 50,
			showLoading: false,
			fullPage: true,
			page: 1,
			currentPage: 1,
			rate: 1,
			limit: 20,
			users: [],
			listHistory: [],
			registry: [],
		}
	},
	components: {
		Loading,
	},
	methods: {
		formatAddress(address) {
			return address ? address.slice(0, 5) + "..." + address.slice(-4) : '';
		},
		maxAmount() {
			this.amountWithdraw = this.withdrawBalanceNoFormat;
			if (this.amountWithdraw < this.minWithdraw) {
				this.amountWithdraw = 0;
				this.$toaster.error($t('withdraw.02'));
			}
		},
		connectWallet() {
			this.$store.dispatch('connect')
		},
		momentTimeHistory(date, number) {
			if (number && number == 1) {
				return moment(date).format('D/M/Y');
			} else if (number && number == 2) {
				return moment(date).format('HH:mm:ss');
			} else {
				return moment(date).format('HH:mm D/M/Y');
			}
		},
		changeAmountWithdraw() {
//      this.amountWithdraw = parseFloat(this.amountWithdraw);
			// if (this.amountWithdraw < this.minWithdraw) {
			//     this.amountWithdraw = 0;
			//     this.$toaster.error('Amount withdraw < min withdraw!')
			//     return;
			// }
		},
		async getUsers() {
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			// const network = 'test';
			const platform = 'bsc';
			this.users = [];
			let userAccount = JSON.parse(localStorage.getItem('user'));
			if (!userAccount || !this.account) return;
			let baseUrl = `api/user/index`;
			let url = baseUrl + `?network=${network}&platform=${platform}`;
			this.showLoading = true;
			await axios.get(url, {
				headers: {
					Authorization: "Bearer " + userAccount['token'],
				},
			}).then(res => {
				if (res.data && res.data.data) {
					this.users = res['data']['data'] || [];
					this.withdrawBalance = this.users && this.users['coin_balance'] ? this.formatNumber(this.users['coin_balance'], 2) : 0;
					this.withdrawBalanceNoFormat = this.users && this.users['coin_balance'] ? this.users['coin_balance'] : 0;
					this.rate = this.users['coin_rate'];
				}
				this.showLoading = false;
			}, () => {
				//Error load api
				this.users = [];
				this.showLoading = false;
			});
		},
		async getHistoryWithdraw() {
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			// const network = 'test';
			const platform = 'bsc';
			let baseUrl = `api/withdraw/index`;
			let url = baseUrl + `?network=${network}&platform=${platform}&p=${this.page}&limit=${this.limit}`;
			let userAccount = JSON.parse(localStorage.getItem('user'));
			this.listHistory = [];
			if (!userAccount || !this.account) return;
			this.showLoading = true;
			try {
				await axios.get(url, {
					headers: {
						Authorization: "Bearer " + userAccount['token'],
					},
				}).then(res => {
					if (res.data && res.data.data) {
						this.listHistory = res['data']['data'] || [];
						this.totalPage = res.data.optional.paging_info.total_page;
						this.totalItems = res.data.optional.paging_info.row_count;
						this.currentPage = this.page;
					}
					this.showLoading = false;
				}, () => {
					//Error load api
					this.listHistory = [];
					this.showLoading = false;
				});
			} catch (e) {
				this.showLoading = false;
				console.log('err', e);
			}

		},
		async withdraw() {
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			if (this.amountWithdraw < this.minWithdraw) {
				this.amountWithdraw = 0;
				this.$toaster.error($t('withdraw.02'))
				return;
			} else if (this.amountWithdraw > this.withdrawBalanceNoFormat) {
				this.$toaster.error($t('withdraw.03'))
				return;
			}
			// const network = 'test';
			const platform = 'bsc';

			let userAccount = JSON.parse(localStorage.getItem('user'));
			if (!userAccount) return;

			let headers = {
				'Content-Type': 'application/json',
				'Authorization': "Bearer " + userAccount['token'],
			}

			const obj = {
				'amount': parseFloat(this.amountWithdraw),
			};
			if (platform) {
				obj['platform'] = platform;
			}
			if (network) {
				obj['network'] = network;
			}
			this.showLoading = true;
			try {
				const res = axios.post(`api/withdraw/create`, obj, {
					headers: headers
				})
					.then(res => {
						if (res.data.status === 1) {
							this.$toaster.success($t('withdraw.04'));
							this.amountWithdraw = 0;
							this.getUsers();
							this.getHistoryWithdraw();
						} else this.$toaster.error($t('withdraw.05'))
						this.showLoading = false;
					}).catch(err => {
						this.showLoading = false;
						//load fail
						this.$toaster.error($t('withdraw.05'))
						console.log('err withdraw', err);
					})
			} catch (e) {
				console.log('err', e);
				this.showLoading = false;
			}
		},
		async getRegistry() {
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			const platform = 'bsc';
			this.minWithdraw = 0;
			let userAccount = JSON.parse(localStorage.getItem('user'));
			if (!userAccount || !this.account) return;
			let baseUrl = `api/index/registry`;
			let url = baseUrl + `?network=${network}&platform=${platform}`;
			await axios.get(url, {}).then(res => {
				if (res.data && res.data.data) {
					this.registry = res['data']['data'] || [];
					this.minWithdraw = this.registry && this.registry['min_withdraw'] ? this.formatNumber(this.registry['min_withdraw'], 2) : 0;
				}
			}, () => {
				//Error load api
				this.minWithdraw = 0;
			});
		},
		prevPage() {
			if (this.page <= 1) {
				return;
			}
			this.page = parseInt(this.page) - 1;
			this.getHistoryWithdraw();
		},
		nextPage() {
			if (this.page >= this.totalPage) {
				return;
			}
			this.page = parseInt(this.page) + 1;
			this.getHistoryWithdraw();
		},
		changePage() {
			this.getHistoryWithdraw();
		},
		truncateAddress(address) {
			address = address.substr(0, 6) + '...' + address.substr(address.length - 4, 4);
			return address;
		},
		formatDecimal(number, decimal) {
			number = number.toString();
            number = number.replace(/,/g, "");
			let array = number.split(".");
			let result = array[0];
			decimal = decimal >= 8 ? 8 : decimal;
			if (array[1] && decimal > 0) {
				array[1] = array[1].substr(0, decimal);
				result = result + "." + array[1];
			}
			return parseFloat(result);
		},
		formatStatus(status) {
			if (status == 1) {
				return 'Success';
			} else if (status == 2) {
				return 'Fail';
			} else {
				return 'Pending';
			}
		},
		formatStatusClass(status) {
			if (status == 1) {
				return 'text-success';
			} else if (status == 2) {
				return 'text-danger';
			} else {
				return 'text-warning';
			}
		},
		formatHash(hash) {
			return hash ? hash.slice(0, 5) + "..." + hash.slice(-5) : '';
		},
		getLinkTx(hash) {
			let url = "";
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			if (network === "test") {
				url = "https://testnet.bscscan.com/tx/" + hash;
			} else {
				url = "https://bscscan.com/tx/" + hash;
			}
			return url;
		},
		formatNumber(number, decimal = 2) {
			if (number === 0 || !number) {
				return "0.00";
			}
			number = number.toString();
            number = number.replace(/,/g, "");
			let array = number.split(".");
			let result = array[0];
			decimal = decimal >= 8 ? 8 : decimal;

			if (array[1] && decimal > 0) {
				array[1] = array[1].substr(0, decimal);
				result = result + "." + array[1];
			}
			result = parseFloat(result);
			if (Number.isInteger(result)) {
				return parseInt(result).toLocaleString('en-US', {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
				});
			}
			let options = {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			};
			return parseFloat(result).toLocaleString('en-US', options);
		}

	},
	created() {
		setTimeout(() => {
			this.getUsers();
			this.getHistoryWithdraw();
			this.getRegistry();
		}, 500);
	},
	mounted() {
		// setTimeout(() => {
		//     this.checkAllowance();
		// }, 1000);
	},
	computed: {
		...mapState(['web3Modal']),
		...mapGetters({
			exchange: 'exchange',
			account: 'account',
		}),
	},
	watch: {
		'account': function () {
			setTimeout(() => {
				this.getUsers();
				this.getHistoryWithdraw();
			}, 1000);
		}
	}
}
</script>

<style scoped>
.poiter {
cursor: pointer;
}
</style>