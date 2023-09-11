<template>
	<div class="container" data-aos="fade-up" data-aos-delay="200">
		<!-- ------Mint------- -->
		<div class="box-dex" v-if="!flagHistory">
                    <div class="triggers-card">
                        <div class="row position-relative">
                            <div class="col-md-7">
                                    <h3 class="title">
                                        {{$t('mint.01')}} {{ symbol }} {{$t('mint.02')}} <span>{{$t('mint.03')}}</span>
                                    </h3>
                                    <p class="hero-img mt-5">
                                        <img src="@/assets/images/banner8.png" alt="" class="animated"/>
                                    </p>
                        <span class="decor10">
                            <img src="@/assets/images/decor2.png" alt="" class="w-75"/>
                        </span>
						<span class="decor5">
                            <img src="@/assets/images/decor1.png" alt=""/>
                        </span>
					</div>
					<div class="col-md-5 position-relative">
						<div class="box-swap">
							<div class="content-swap pb-4">
								<p class="fw-bold f-Nunito text-center">
                                                                    {{$t('mint.04')}}
								</p>
								<div class="select-customer mb-1">
									<img src="@/assets/images/bnb.svg" alt="" class="mr-2"/> Binance Smart Chain
								</div>
								<p class="text-center f-Nunito fs-14 cl5D mb-5">
									{{$t('mint.05')}} {{ calculateFee() }} ({{$t('mint.06')}})
								</p>
								<p class="text-center f-Nunito fw-bold">
									{{$t('mint.07')}}:
								</p>
								<ul class="liststandard mb-5" v-html="$t('mint.08')"></ul>
								<div class="flagConnect" v-show="account">
									<p class="text-center f-Nunito fw-bold">
										{{$t('mint.09')}}
									</p>
									<form class="f-Nunito">
										<div class="form-group">
											<label>{{$t('mint.10')}}</label>
											<input
												type="text"
												class="form-control"
												v-model="token_name" @change="is_valid"
												:placeholder="$t('mint.10')"
											/>
										</div>
										<div class="form-group">
											<label>{{$t('mint.11')}}</label>
											<input
												type="text"
												class="form-control"
												v-model="token_symbol" @change="is_valid"
												:placeholder="$t('mint.11')"
											/>
										</div>
										<div class="form-group">
											<label>
												{{$t('mint.12')}}
											</label>
											<input
												type="number"
												@change="onChangeTotalSupply" v-model="total_token_supply"
												class="form-control"
												:placeholder="$t('mint.16')"
											/>
											<small class="text-danger"
											       v-show="total_token_supply && total_token_supply < 0">{{$t('mint.13')}} > 0</small>
										</div>
										<div class="form-group">
											<label>{{$t('mint.14')}}</label>
											<input
												type="number" @change="onChangeTotalSupply" v-model="token_decimals"
												class="form-control"
												value="18"
												placeholder=""
											/>
											<small class="text-danger" v-show="token_decimals && token_decimals < 0">{{$t('mint.13')}} > 0</small>
										</div>
									</form>
									<ul class="listbonus f-Nunito fs-12 border-0 mb-5 p-0">
										<li class="mb-2">
                                          <span class="cl8C">
                                              {{$t('mint.15')}}
                                          </span>
											<span>{{ total_token_supply_raw }}</span>
										</li>
										<li class="mb-2">
											<span class="cl8C">{{$t('common.0019')}}</span>
											<span class="text-right">
                                                <span class="fs-16"> {{calculateFee()}} </span>
                                                <br/>+{{ total_supply_fee_percent ? total_supply_fee_percent : '0' }}% {{$t('mint.16')}}
                                            </span>
										</li>
									</ul>
								</div>
								<div class="d-flex align-items-center mb-4">
									<a
										v-if="!account"
										@click="connectWallet()"
										class="linear-blue btn-blue btn-bluebig w-100 poiter">
										{{$t('common.0001')}}
										<img src="@/assets/images/dot-l-white.svg" alt="" class="ml-2"/>
									</a>
									<button
										v-if="account"
										@click="createToken" :disabled="!check" :class="check "
										class="linear-blue btn-blue btn-bluebig w-100 poiter">
										{{$t('mint.17')}}
										<img src="@/assets/images/dot-l-white.svg" alt="" class="ml-2"/>
									</button>
								</div>
								<a
									v-if="account"
									@click="showHistory()"
									class="d-flex align-items-center fs-18 fw-bold f-Nunito clgreen justify-content-center poiter"
								><img src="@/assets/images/icon-history.svg" alt="" class="mr-2"/>
									{{$t('common.0020')}}
								</a>
							</div>
						</div>

						<span class="decor7">
              <img src="@/assets/images/decor1.png"/></span>
					</div>
					<span class="decor18">
            <img src="@/assets/images/decor2.png" class="w-75"/></span>
				</div>
			</div>
		</div>
		<!-- ------End Mint------- -->

		<!-- ---------History---------- -->
		<div class="box-dex" v-if="flagHistory && account">
      <span class="decor18">
        <img src="@/assets/images/decor2.png" class="w-75"/></span>
			<span class="decor5"> <img src="@/assets/images/decor1.png"/></span>
			<div class="mt-5 position-relative">
				<span class="decor5"> <img src="@/assets/images/decor1.png"/></span>
				<span class="decor6"> <img src="@/assets/images/decor1.png"/></span>
				<a
					@click="flagHistory = false"
					class="btn-gray btn-blue pt-2 pb-2 poiter">
					{{$t('common.0007')}}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="12.316"
						viewBox="0 0 14.803 12.316"
					>
						<path
							id="Path_87904"
							data-name="Path 87904"
							d="M-525.343,209.85c-.094-.1-.144-.158-.2-.211l-2.792-2.8a.852.852,0,0,1,0-1.379c.109-.109.216-.219.327-.327a.816.816,0,0,1,1.246.008q1.483,1.476,2.96,2.958l2.223,2.223a.842.842,0,0,1,.006,1.361q-2.566,2.566-5.133,5.132a.84.84,0,0,1-1.361,0c-.11-.108-.22-.216-.328-.326a.81.81,0,0,1,.02-1.259q1.208-1.211,2.424-2.414c.205-.2.424-.392.637-.588l-.047-.069h-9.677c-.7,0-.995-.3-1-1,0-.17,0-.339,0-.509a.792.792,0,0,1,.808-.8c.085,0,.169,0,.254,0h9.627Z"
							transform="translate(-521.231 217.166) rotate(180)"
						/>
					</svg>
				</a>
				<p class="fs-24 fw-bold text-center">{{$t('mint.18')}}</p>
				<form class="fomsearch">
					<img src="@/assets/images/icon-search.svg" alt="" class="btn-search"/>
					<input
						type="text"
						@keyup="loadHistoryMint()" v-model="searchQuery"
						:placeholder="$t('placeholder.08')"
						class="form-control"
						value=""
					/>
				</form>
				<table class="table tableblue1 tableblue styletable">
					<thead>
					<tr>
						<th scope="col" style="width: 5%">{{$t('common.0021')}}</th>
						<th scope="col" style="width: 10%" class="text-left">{{$t('common.0022')}}</th>
						<th scope="col" style="width: 10%" class="text-left">{{$t('common.0023')}}</th>
						<th scope="col" style="width: 15%" class="text-left">{{$t('common.0018')}}</th>
						<th scope="col" style="width: 10%" class="text-left">{{$t('common.0024')}}</th>
						<th scope="col" style="width: 10%" class="text-left">{{$t('common.0025')}}</th>
						<th scope="col" style="width: 25%" class="text-left">{{$t('common.0026')}}</th>
						<th scope="col" style="width: 15%" class="text-left">{{$t('lock.detail.05')}}</th>
					</tr>
					</thead>
					<tbody v-if="listHistory.length === 0">
					<tr>
						<td class="noresult py-5" colspan="10" style="text-align: center;">
							<img src="@/assets/images/icons/nodata.png" alt="">
							{{$t('common.0027')}} &nbsp;
						</td>
					</tr>
					</tbody>
					<tbody v-else>
					<tr v-for="(item, idx) in listHistory" :key="idx" :class="(idx + 1) % 2 == 0 ? 'bg-gray' : ''">
						<td>{{ idx + 1 }}</td>
						<td class="text-left">{{ moment(item['created_at'] * 1000) }}</td>
						<td class="text-left">
							<img src="@/assets/images/bnb.svg" alt="" class="mr-2"/>{{ item['platform'].toUpperCase() }}
						</td>
						<td class="text-left">{{ item['name'] }}</td>
						<td class="text-left">{{ item['symbol'] }}</td>
						<td class="text-left">{{ item['decimals'] }}</td>
						<td class="text-left">
							<a target="_blank" :href="urlExchange(item)">{{ contractCompact(item['contract_address']) }}</a> &nbsp;
							<button class="btn-none" @click="copy(item['contract_address'])">
								<img src="@/assets/images/icon-save.svg" alt=""/>
							</button>
						</td>
						<td>{{ formatNumber(item['total_supply'], 2) }}</td>

					</tr>
					</tbody>
				</table>
				<div class="row mt-5" v-if="totalPage > 0">
					<div class="col-sm-12 col-md-7">
						<div class="d-flex justify-content-end">
							<a
								href="javascript:"
								@click="nextPage()"
								class="btn-gray btn-blue pt-2 pb-2">
								{{$t('common.0028')}}
								<svg
									class="ml-2"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="15.133"
									viewBox="0 0 26.645 15.133"
								>
									<path
										id="Path_88594"
										data-name="Path 88594"
										d="M-1180.526,1698.888h-.575q-9.273,0-18.546,0a1.67,1.67,0,0,1-1.793-1.665,1.667,1.667,0,0,1,1.546-1.657c.166-.011.333-.006.5-.006h18.857c-.146-.163-.235-.27-.333-.368-.891-.893-1.789-1.779-2.673-2.678a1.583,1.583,0,0,1-.4-1.723,1.6,1.6,0,0,1,1.3-1.1,1.538,1.538,0,0,1,1.414.436c2,1.983,3.991,3.967,5.966,5.971a1.574,1.574,0,0,1,0,2.256q-2.962,3.006-5.969,5.968a1.615,1.615,0,0,1-2.319-.035,1.627,1.627,0,0,1-.009-2.32c.875-.908,1.779-1.788,2.67-2.681C-1180.794,1699.18-1180.7,1699.071-1180.526,1698.888Z"
										transform="translate(1201.44 -1689.661)"
									></path>
								</svg>
							</a>
						</div>
					</div>
					<div class="col-sm-12 col-md-5">
						<div class="paginate">
							{{$t('common.0029')}}
							<input type="text" placeholder="" @blur="changePage()" class="form-control " v-model="page"
							       style="width: 90px;">
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
		<!-- ---------End History---------- -->
		<!-- -----Loading---- -->
		<loading
			:active.sync="showLoading"
			:can-cancel="true"
			:is-full-page="fullPage">
		</loading>
	</div>
</template>

<script>
import Web3, {utils} from "web3"
import BigNumber from "@/utils/bignumber.min.js";
import {settingsContract} from "@/utils/const";
import {mapGetters} from "vuex";
import axios from "axios";
import {ethers} from "ethers";
import moment from "moment";
import Loading from "vue-loading-overlay";

export default {
	name: 'Mint',
	data() {
		return {
			showLoading: false,
			fullPage: true,
			symbol: 'PUSH',
			symbolChain: 'BNB',
			symbolPlatform: 'BSC',
			flagConnect: false,
			flagHistory: false,
			modalMint: false,
			total_token_supply: 0,
			total_token_supply_raw: 0,
			token_decimals: 0,
			token_name: '',
			token_symbol: '',
			creation_fee: 0,
			total_supply_fee_percent: 0,
			total_supply_fee_amount: 0,
			settingPlatform: Object,
			check: false,
			filterHistory: [],
			listHistory: [],
			loaded: false,
			searchQuery: '',
			page: 1,
			currentPage: 1,
			totalPage: 1,
			totalRows: 0,
			limit: 20,
			totalItems: 0
		};
	},
	computed: {
		wallet() {
			return this.$store.state.web3Modal;
		},
		connectInfo() {
			return this.$store.state.connect;
		},
		...mapGetters({
			exchange: 'exchange',
			account: 'account',
		})
	},
	components: {
		Loading,
	},
	methods: {
		showHistory() {
			this.loadHistoryMint();
			this.flagHistory = true;
		},
		onChangeTotalSupply() {
			if (!this.total_token_supply || !this.token_decimals) {
				return;
			}
			let totalSupply = (new BigNumber(this.total_token_supply)).mul((new BigNumber(10)).pow(this.token_decimals));
			this.total_token_supply_raw = utils.toBN(totalSupply).toString();
			let totalSupplyFeePercent = parseFloat(this.total_supply_fee_percent || 0);
			this.total_supply_fee_amount = (new BigNumber(totalSupply)).div(new BigNumber(100)).mul((new BigNumber(totalSupplyFeePercent)));
			this.is_valid();
		},
		calculateFee() {
			let platform = 'bsc';
			return (this.creation_fee ? this.creation_fee : '0') + ' ' + settingsContract['BASE_TOKEN_PLATFORM'][platform]
		},
		connectWallet() {
			this.$store.dispatch('connect')
		},
		async createToken() {
			let totalSupply = parseFloat(this.total_token_supply || 0);
			let tokenDecimals = parseInt(this.token_decimals);

			totalSupply = (new BigNumber(totalSupply)).mul((new BigNumber(10)).pow(tokenDecimals));
			let web3 = new Web3(window.ethereum);
			totalSupply = web3.utils.toBN(totalSupply).toString();

			const isProduction = process.env.NODE_APP_ENV === 'production';
			let obj = {
				'from': this.wallet.account,
			};
			if (this.exchange['platform'] === 'polygon') {
				// get max fees from gas station
				let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
				let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
				try {
					const {data} = await axios({
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

			let tokenName = this.token_name;
			let tokenSymbol = this.token_symbol;
			let creationFee = parseFloat(this.creation_fee || 0);
			creationFee = (new BigNumber(creationFee)).mul((new BigNumber(10)).pow(18));
			creationFee = web3.utils.toBN(creationFee);
			let mintTokenGeneratorContract = new web3.eth.Contract(settingsContract['ABI_MINT_TOKEN_GENERATOR'], this.settingPlatform['mint_token_generator_address']);
			this.$store.commit("setPopupWallet", true)
			obj['value'] = creationFee;
			try {
				let result = await mintTokenGeneratorContract.methods.createToken(tokenName, tokenSymbol, tokenDecimals, totalSupply).send(obj).on('transactionHash', function (hash) {
				}).on('confirmation', function (confirmationNumber, receipt) {
				}).on('receipt', function (receipt) {
				}).on('error', function (error, receipt) {
					console.log("error", error, receipt);
				});

				this.$store.commit("setPopupWallet", false)
				if (result.status) {
					this.$toaster.success('Success!')
					this.loadHistoryMint();
					this.resetData();
				} else {
					this.$store.commit("setPopupError", {
						isShow: true,
						message: ""
					});
					console.log("error", result);
				}
			} catch (ex) {
				this.$store.commit("setPopupWallet", false)
				console.log(ex);
			}
		},
		async loadSettingsMint() {
			// if (!this.exchange) {
			//     this.settingPlatform = {};
			//     this.creation_fee = 0;
			//     this.total_supply_fee_percent = 0;
			//     return;
			// }
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			let platform = 'bsc';
			let url = '/api/registry/get-mint-token-setting';
			url = url + '?platform=' + platform + '&network=' + network;
			const listSettingPlatform = await axios.get(url);
			if (listSettingPlatform.data.data) {
				this.settingPlatform = listSettingPlatform.data.data;
				this.creation_fee = this.settingPlatform['creation_fee'];
				this.total_supply_fee_percent = this.settingPlatform['total_supply_fee_percent'];
			}
		},
		is_valid() {
			this.token_symbol = this.token_symbol.toLocaleUpperCase();
			this.token_symbol = this.token_symbol.replace(/ /g, "");
			this.token_decimals = parseInt(this.token_decimals);
			this.check = false;
			if (this.token_name && this.token_name.trim() !== '' && this.token_symbol && this.token_symbol.trim() !== '' && parseFloat(this.total_token_supply) > 0 && parseInt(this.token_decimals) > 0 && this.account) {
				this.check = true;
			}
		},
		resetData() {
			this.total_token_supply = 0;
			this.total_token_supply_raw = 0;
			this.token_decimals = 0;
			this.token_name = '';
			this.token_symbol = '';
			this.total_supply_fee_amount = 0;
			this.check = false;
			this.is_valid();
		},
		contractCompact(item) {
			if (!item) return '';
			return item.substr(0, 6) + '...' + item.substr(item.length - 4, 4);
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
		copy(item) {
			let tempInput = document.createElement("input");
			tempInput.value = item;
			document.body.appendChild(tempInput);
			tempInput.select();
			tempInput.focus();
			document.execCommand("copy");
			document.body.removeChild(tempInput);
			this.$toaster.success('Copied!')
		},
		async loadHistoryMint() {
			this.listHistory = [];
			this.totalPage = 0;
			this.totalRows = 0;
			if (!this.account || this.account.trim() === '') {
				return;
			}
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			let platform = 'bsc';
			let url = '/api/mint-token/index';
			let userAccount = JSON.parse(localStorage.getItem('user'));
			if (!userAccount) return;
			let headers = {
				'Content-Type': 'application/json',
				'Authorization': "Bearer " + userAccount['token'],
			}
			url = url + '?network=' + network + '&platform=' + platform;
			url += `&p=${this.page}&limit=${this.limit}`;
			if (this.searchQuery) {
				url += '&q=' + this.searchQuery;
			}
			this.showLoading = true;
			try {
				const listHistory = await axios.get(url, {
					headers: headers
				});
				this.showLoading = false;
				if (listHistory.data.data) {
					this.listHistory = listHistory.data.data;
					this.totalPage = listHistory.data['optional']['total_page'];
					this.totalRows = listHistory.data['optional']['row_count'];
					this.totalItems = listHistory.data['optional']['row_count'];
					this.currentPage = this.page;
				}
			} catch (e) {
				this.showLoading = false;
				this.listHistory = [];
			}

		},
		prevPage() {
			if (this.page <= 1) {
				return;
			}
			this.page = parseInt(this.page) - 1;
			this.loadHistoryMint();
		},
		nextPage() {
			this.page = parseInt(this.page) + 1;
			if (this.page > this.totalPage || this.page < 1 || this.page === this.currentPage) {
				this.page = this.currentPage;
				return;
			}
			this.loadHistoryMint();
		},
		changePage() {
			if (this.page > this.totalPage || this.page < 1 || this.page === this.currentPage) {
				this.page = this.currentPage;
				return;
			}
			this.loadHistoryMint();
		},
		moment(date) {
			return moment(date).format('MM/DD/YYYY');
		},
		urlExchange(item) {
			let url = '';
			if (item['platform'] === 'bsc') {
				if (item['network'] === 'test') {
					url = 'https://testnet.bscscan.com/address/' + item['contract_address']
				} else {
					url = 'https://bscscan.com/address/' + item['contract_address']
				}
			} else if (item['platform'] === 'eth') {
				if (item['network'] === 'main') {
					url = 'https://etherscan.io/address/' + item['contract_address']
				} else {
					url = 'https://ropsten.etherscan.io/address/' + item['contract_address']
				}
			} else if (item['platform'] === 'polygon') {
				if (item['network'] === 'main') {
					url = 'https://polygonscan.com/address/' + item['contract_address'];
				} else {
					url = 'https://mumbai.polygonscan.com/address/' + item['contract_address'];
				}
			} else if (item['platform'] === 'fantom') {
				if (item['network'] === 'main') {
					url = 'https://ftmscan.com/address/' + item['contract_address'];
				} else {
					url = 'https://testnet.ftmscan.com/address/' + item['contract_address'];
				}
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
			this.loadSettingsMint();
		}, 300);
	},
	watch: {
		'exchange': function () {
			this.loadSettingsMint();
		},
		'web3Modal': function () {
			this.wallet();
		},
		'account': function () {
			this.flagHistory = false;
		},
	}
};
</script>

<style scoped>
.poiter {
	cursor: pointer;
}

.modal-body {
	padding: 0px !important;
}
</style>
