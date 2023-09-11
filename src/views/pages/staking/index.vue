<template>
	<div>
		<div class="container" data-aos="fade-up" data-aos-delay="200">
			<div class="box-dex">
				<span class="decor5"> <img src="@/assets/images/decor1.png"/></span>
				<div class="card-animate card position-relative mb-4">
					<div class="row">
						<div
							class="col-md-6 text-center aos-init aos-animate"
							data-aos="zoom-in"
							data-aos-delay="400">
							<span class="name">{{$t('staking.01')}}</span>
							<span class="txtpush">{{
									users && users["total_interest"]
										? formatNumber(users["total_interest"], 2)
										: "0.00"
								}} {{ symbol }}
                            </span>
						</div>
						<div
							class="col-md-6 text-center aos-init aos-animate"
							data-aos="zoom-in"
							data-aos-delay="500">
							<span class="name">{{$t('staking.02')}}</span>
							<span class="txtpush">
                                {{users && users["interest_balance"] ? formatNumber(users["interest_balance"], 2) : "0.00" }} {{ symbol }}</span>
						</div>
						<span class="decor5">
                            <img src="@/assets/images/decor1.png" alt=""/></span>
					</div>
				</div>
				<div class="staking-wrap">
					<div class="row position-relative">
						<div class="col-md-8">
							<table class="table tableblue table-striped">
								<thead>
								<tr>
									<th scope="col" style="width: 40%">{{ symbol }} {{$t('common.0008')}}</th>
									<th scope="col" style="width: 20%">APR</th>
									<th scope="col" style="width: 20%">{{$t('common.0030')}}</th>
									<th scope="col" style="width: 20%">{{$t('staking.03')}}</th>
								</tr>
								</thead>
								<tbody>
								<tr v-for="(item, index) in packages" :key="index">
									<td>
                                        <span class="fw-bold clgreen">{{ item["amount"] ? item["amount"] + ' -' : '' }} {{item["package"]}}
                                        </span>
										{{ symbol }}
									</td>
									<td>
                                        <span class="fw-bold clgreen">{{ item["percent"] }}%</span>
									</td>
									<td>
										<span class="fw-bold clgreen">{{ item["period"] }}</span>
										{{$t('common.0031')}}
									</td>
									<td>
                                        <span class="fw-bold clgreen">{{item["principal_back"]}}</span>
										{{$t('common.0032')}}
									</td>
								</tr>
								</tbody>
							</table>
						</div>
						<div class="col-md-4 position-relative">
							<div class="total-staking">
								<div class="tab w-100">
									<ul class="nav nav-blue m-b-20">
										<li>
											<a
												href="javascript:"
												@click="activeTab = '1'"
												data-toggle="tab"
												aria-expanded="true"
												:class="activeTab == 1 ? 'active' : ''">
                                                {{$t('staking.04')}}
                                            </a>
										</li>
										<li>
											<a
												href="javascript:"
												@click="activeTab = '2'"
												data-toggle="tab"
												aria-expanded="false"
												:class="activeTab == 2 ? 'active' : ''">
                                                {{$t('staking.05')}}
                                            </a>
										</li>
									</ul>
								</div>
								<div class="tab-content">
									<div
										class="tab-pane fade"
										id="token1"
										:class="activeTab == 1 ? 'active show' : ''"
									>
										<div class="top-staking no-bg">
											<img src="@/assets/images/logomobile.svg" style="width: 65px; height: 65px;"/>
										</div>
										<div class="content">
											<div class="justify-content-between">
												<span class="d-block fs-13">
                                                    {{$t('staking.06')}}:
                                                    <span class="fw-bold">
                                                        {{swapBalance ? formatNumber(swapBalance, 2) : "0.00" }}
                                                    </span>
                                                </span>
												<span class="fs-14">{{$t('common.0008')}}</span>
											</div>
											<div class="form active">
												<input
													type="number"
													@input="changeAmountStake(1)"
													@blur="changeAmountStake(1)"
													v-model="amountStakeUsdt"/>
												<div class="push-info border-0">
													<button
														type="button"
														@click="maxAmount('swap')"
														class="btn btnblue">
														{{$t('common.0010')}}
													</button>
												</div>
											</div>
											<p class="mt-2 mb-2">
                                                <span class="fw-bold fs-14">
                                                    ~ {{ amountStake > 0 && rate > 0 ? formatNumber(amountStake / rate, 2) : "0.00" }} {{ symbol }}
                                                </span>
											</p>
											<div class="mb-3">
												<div class="justify-content-between d-flex">
                                                    <span class="d-block fs-13">
                                                        {{$t('staking.07')}}:
                                                        <span class="fw-bold">
                                                            {{formatNumber(minStake, 4)}} USDT
                                                        </span>
                                                    </span>
                                                    <span @click="getRegistry()">
                                                        <img class="pointer" src="@/assets/images/ic-reload.svg" alt="">
                                                    </span>
                                                </div>
											</div>
											<a
												v-if="!account"
												href="javascript:"
												@click="connectWallet()"
												class="linear-blue btn-blue btn-bluebig w-100">
												{{$t('common.0001')}}
												<img
													src="@/assets/images/dot-l-white.svg"
													class="ml-2"
                                                    alt=""/>
											</a>
											<a
												v-else-if="account && approveSwapToken"
												@click="approveToken('swap')"
												href="javascript:void(0)"
												class="linear-blue btn-blue btn-bluebig w-100">
												{{$t('common.0033')}}
												<img
													src="@/assets/images/dot-l-white.svg"
													class="ml-2"
                                                    alt=""/>
											</a>
											<a
												v-else-if="account && !approveSwapToken"
												href="javascript:void(0)"
												@click="stake('swap')"
												class="linear-blue btn-blue btn-bluebig w-100">
												{{$t('staking.08')}}
												<img
													src="@/assets/images/dot-l-white.svg"
													class="ml-2"
                                                    alt=""/>
											</a>
										</div>
									</div>
									<div
										class="tab-pane fade"
										id="token2"
										:class="activeTab == 2 ? 'active show' : ''">
										<div class="panel-content">
											<div class="top-staking">
												<img src="@/assets/images/armorial1.svg" alt=""/>
												<p class="m-0">
													{{$t('staking.09')}}:
													<span class="fs-20 fw-bold">
                                                        {{users && users["personal_invest"] ? formatNumber(users["personal_invest"], 2) : "0"}}
                                                    </span>
												</p>
											</div>
											<div class="content">
												<div class="justify-content-between">
													<span class="d-block fs-13">
                                                        {{$t('common.0034')}} {{ symbol }}:
                                                        <span class="fw-bold">
                                                            {{tokenBalance ? formatNumber(tokenBalance, 2) : "0.00"}}
                                                        </span>
                                                    </span>
													<span class="fs-14">{{$t('staking.10')}}</span>
												</div>
												<div class="form active mb-3">
													<input
														type="number"
														@input="changeAmountStake(2)"
														@blur="changeAmountStake(2)"
														v-model="amountStakePush"
													/>
													<div class="push-info">
														{{ symbol }}
														<button
															type="button"
															@click="maxAmount('staking')"
															class="btn btnblue">
															{{$t('common.0010')}}
														</button>
													</div>
												</div>
                                                <div class="justify-content-between d-flex mb-3">
                                                        <span class="d-block fs-13">
                                                            {{$t('staking.07')}}:
                                                            <span class="fw-bold">
                                                                {{formatNumber(minPush, 4)}} PUSH
                                                            </span>
                                                        </span>
                                                </div>
												<a
													v-if="!account"
													href="javascript:void(0)"
													@click="connectWallet()"
													class="linear-blue btn-blue btn-bluebig w-100">
													{{$t('common.0001')}}
													<img
														src="@/assets/images/dot-l-white.svg"
														class="ml-2"
                                                        alt=""/>
												</a>
												<a
													v-else-if="account && approveStaking"
													@click="approveToken('staking')"
													href="javascript:void(0)"
													class="linear-blue btn-blue btn-bluebig w-100">
													{{$t('common.0033')}}
													<img
														src="@/assets/images/dot-l-white.svg"
														class="ml-2"
                                                        alt=""/>
												</a>
												<a
													v-else-if="account && !approveStaking"
													href="javascript:void(0)"
													@click="stake('staking')"
													class="linear-blue btn-blue btn-bluebig w-100">
													{{$t('staking.08')}}
													<img
														src="@/assets/images/dot-l-white.svg"
														class="ml-2"
                                                        alt=""/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							<span class="decor7">
                                <img src="@/assets/images/decor1.png" alt=""/>
                            </span>
						</div>
						<span class="decor18">
                            <img src="@/assets/images/decor2.png" class="w-75" alt=""/>
                        </span>
					</div>
					<div class="mt-5 position-relative">
                        <span class="decor5">
                            <img src="@/assets/images/decor1.png" alt=""/>
                        </span>
						<span class="decor6">
                            <img src="@/assets/images/decor1.png" alt=""/></span>
						<p class="fs-24 fw-bold">{{$t('staking.11')}}</p>
						<div class="tab">
							<ul class="nav nav-blue m-b-20">
								<li @click="changeTab('package')">
									<a
										:aria-expanded="this.tabContent == 'package'"
										:class="{ active: isActivePakage }">
                                        {{$t('staking.12')}}
                                    </a>
								</li>
								<li @click="changeTab('reward')">
									<a
										:aria-expanded="this.tabContent == 'reward'"
										:class="{ active: isActiveReward }">
                                        {{$t('staking.13')}}
                                    </a>
								</li>
							</ul>
						</div>
						<div class="content-tab">
							<div v-if="isActivePakage" id="Stacking1">
								<div class="panel-content">
									<ul class="listtable tableblue p-0">
										<li class="thead">
											<span class="cols col1">{{$t('common.0022')}}</span>
											<span class="cols col2">{{$t('staking.09')}}</span>
											<span class="cols col3">{{$t('staking.14')}}</span>
											<span class="cols col4">{{$t('staking.13')}}</span>
											<span class="cols col5">&nbsp;</span>
										</li>
										<li v-show="!userStaking || userStaking.length === 0">
											<div class="nothingData">
                                                <span class="borderImg">
                                                    <span class="py-5 text-center d-flex">
                                                        <img src="@/assets/images/icons/nodata.png" alt=""/>
                                                    </span>
                                                </span>
											</div>
										</li>
										<li v-show="userStaking.length > 0">
											<div
												v-for="(item, index) in userStaking"
												:key="index"
												:class="(index + 1) % 2 == 0 ? 'bg-gray' : ''">
                                                <span class="cols col1">
                                                    <span>
                                                    {{ item && item["created_at"] ? momentTimeHistory(item["created_at"] * 1000, 1) : "--" }}
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="5"
                                                        height="5"
                                                        viewBox="0 0 5 5">
                                                        <circle
                                                            id="Ellipse_2423"
                                                            data-name="Ellipse 2423"
                                                            cx="2.5"
                                                            cy="2.5"
                                                            r="2.5"
                                                            fill="#34a759"
                                                        />
                                                    </svg>
                                                    {{item && item["created_at"] ? momentTimeHistory(item["created_at"] * 1000, 2) : "--" }}</span>
                                                </span>
												<span class="cols col2">
                                                    <span class="fw-bold clgreen">
                                                        {{item && item["token_amount"] ? formatNumber(item["token_amount"], 2) : "0.00" }}
                                                    </span>
                                                    {{ symbol }}
                                                </span>
												<span class="cols col3">
                                                    <span class="fw-bold clgreen">
                                                        {{item && item["interest_max_day"] ? item["interest_max_day"] / 30 : "--" }}
                                                    </span>
                                                    {{$t('common.0031') | uppercase}}
                                                </span>
												<span class="cols col4">
                                                    <span class="fw-bold clgreen">
                                                        {{item && item["interest_amount_paid"] ? formatNumber(item["interest_amount_paid"], 2) : "0.00" }}
                                                    </span>
                                                    {{ symbol }}
                                                </span>
												<span class="cols col5 text-center">
                                                    <span
                                                        class="dot-table"
                                                        :class="dotTable[index] ? 'rotate' : ''"
                                                        @click="dotTable[index] ? changeDotTable(item, index, 2) : changeDotTable(item, index, 1)">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="15"
                                                        height="8"
                                                        viewBox="0 0 15 8">
                                                        <path
                                                            id="Polygon_91"
                                                            data-name="Polygon 91"
                                                            d="M7.5,0,15,8H0Z"
                                                            transform="translate(15 8) rotate(180)"
                                                            fill="#c6c6c6"/>
                                                    </svg>
                                                    </span>
                                                </span>
												<div :class="tableHover" v-show="dotTable[index]">
													<ul id="style-3" class="listtable scrollbartable p-0">
														<li class="thead">
															<span class="cols col1">{{$t('staking.15')}}</span>
															<span class="cols col2">{{$t('common.0035')}}</span>
															<span class="cols col3">{{$t('common.0008')}}</span>
															<span class="cols col4">{{$t('common.0036')}}</span
															><span class="cols col5">&nbsp;</span>
														</li>
														<li
															v-for="(itemx, indx) in userDetailReward"
															:key="indx"
															:class="(indx + 1) % 2 == 0 ? 'bg-gray' : ''">
                                                            <span class="cols col1">
                                                                <span>
                                                                    {{
                                                                        itemx && itemx["created_at"]
                                                                            ? momentTimeHistory(
                                                                                itemx["created_at"] * 1000,
                                                                                1
                                                                            )
                                                                            : "--"
                                                                    }}
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="5"
                                                                        height="5"
                                                                        viewBox="0 0 5 5"
                                                                    >
                                                                    <circle
                                                                        id="Ellipse_2423"
                                                                        data-name="Ellipse 2423"
                                                                        cx="2.5"
                                                                        cy="2.5"
                                                                        r="2.5"
                                                                        fill="#34a759"
                                                                    />
                                                                    </svg>
                                                                    {{
                                                                        itemx && itemx["created_at"]
                                                                            ? momentTimeHistory(
                                                                                itemx["created_at"] * 1000,
                                                                                2
                                                                            )
                                                                            : "--"
                                                                    }}
                                                                </span>
                                                            </span>
															<span class="cols col2"> {{ symbol }}</span>
															<span class="cols col3">
                                                                <span class="fw-bold clgreen">{{
																	itemx && itemx["token_amount"]
																		? formatNumber(itemx["token_amount"], 2)
																		: "0.00" }}
                                                                </span>
                                                            </span>
															<span class="cols col4">
                                                                <span class="text-info">
                                                                    <a target="_blank" :href="goTx(itemx['hash'])">
                                                                    {{
                                                                            itemx && itemx["hash"]
                                                                                ? truncateAddress(itemx["hash"])
                                                                                : "--"
                                                                        }}
                                                                    </a>
                                                                </span>
                                                            </span>
															<span class="cols col5">&nbsp;</span>
														</li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div v-if="isActiveReward" id="Stacking2">
								<table class="table tableblue1 tableblue">
									<thead>
									<tr>
										<th scope="col" style="width: 40%" class="text-left">
											{{$t('common.0037')}}
										</th>
										<th scope="col" style="width: 20%">{{$t('common.0035')}}</th>
										<th scope="col" style="width: 20%" class="text-left">
											{{$t('common.0008')}}
										</th>
										<th scope="col" style="width: 20%" class="text-left">
											{{$t('common.0038')}}
										</th>
									</tr>
									</thead>
									<tbody v-show="userReward.length === 0">
									<tr>
										<td colspan="5">
											<div class="py-5 text-center">
												<img src="@/assets/images/icons/nodata.png" alt=""/>
											</div>
										</td>
									</tr>
									</tbody>
									<tbody v-show="userReward.length > 0">
									<tr
										v-for="(item, index) in userReward"
										:key="index"
										:class="(index + 1) % 2 == 0 ? 'bg-gray' : ''"
									>
										<td class="text-left">
                                            <span>
                                                {{ momentTimeHistory(item["created_at"] * 1000, 1) }}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="5"
                                                    height="5"
                                                    viewBox="0 0 5 5">
                                                <circle
                                                    id="Ellipse_2423"
                                                    data-name="Ellipse 2423"
                                                    cx="2.5"
                                                    cy="2.5"
                                                    r="2.5"
                                                    fill="#34a759"/>
                                                </svg>
                                                {{
                                                    momentTimeHistory(item["created_at"] * 1000, 2)
                                                }}
                                            </span>
										</td>
										<td>{{ symbol }}</td>
										<td class="text-left">
                                            <span class="fw-bold clgreen">
                                            {{ formatNumber(item["real_amount"], 2) }}
                                            </span>
										</td>
										<td class="text-left">{{$t('staking.16')}}</td>
									</tr>
									</tbody>
								</table>
								<div class="row mt-5" v-if="totalPage > 0">
									<div class="col-sm-12 col-md-7">
										<div class="d-flex justify-content-end">
											<a
												@click="nextPage()"
												class="btn-gray btn-blue pt-2 pb-2"
												data-toggle="modal"
												data-target="#connectWallet"
											>
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
											<input
												type="text"
												placeholder=""
												class="form-control"
												v-model="page"
												@blur="changePage()"
												style="width: 90px"
											/>
											<span>of {{ totalPage }}</span>
											<div class="page-item">
												<button class="next mr-2" :disabled="currentPage < 2" @click="prevPage()">
													<img src="@/assets/images/next.svg" alt="">
												</button>
												<button class="prev" :disabled="currentPage >= totalPage" @click="nextPage()">
													<img src="@/assets/images/prev.svg" alt="">
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
		</div>
		<!-- -----Loading---- -->
		<loading
			:active.sync="showLoading"
			:can-cancel="true"
			:is-full-page="fullPage">
		</loading>
	</div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import axios from "axios";
import Web3, {utils} from "web3";
import {settingsContract} from "@/utils/const";
import BigNumber from "@/utils/bignumber.min.js";
import {ethers} from "ethers";
import moment from "moment";
import Loading from "vue-loading-overlay";
import { $t } from '@/lang/i18n.js';
export default {
	name: 'Staking',
	components: {
		Loading,
	},
	data() {
		return {
			showLoading: false,
			fullPage: true,
			activeTab: 1,
			tabContent: "package",
			isActivePakage: true,
			isActiveReward: false,
			// dotTable: "dot-table",
			// tablehover: "tablehover",
			dotTable: [],
			loading: false,
			approveStaking: true,
			approveSwapToken: true,
			symbol: "PUSH",
			isShow: false,
			totalPage: 1,
			totalItems: 0,
			tokenBalance: 0,
			swapBalance: 0,
			msgError: null,
			priceUsd: 1,
			amountStake: 0,
			amountStakeUsdt: 0,
			amountStakePush: 0,
			page: 1,
			currentPage: 1,
			limit: 20,
			rate: 1,
            minStake: 5000,
            minPush: 1000,
			tableHover: 'tablehover',
			packages: [
				{
					amount: "1,000",
					package: "9,999",
					percent: "54",
					period: 9,
					principal_back: 90,
				},
				{
					amount: "10,000",
					package: "49,999",
					percent: "72",
					period: 9,
					principal_back: 90,
				},
				{
					amount: "50,000",
					package: "99,999",
					percent: "90",
					period: 9,
					principal_back: 90,
				},
				{
					amount: "100,000",
					package: "249,999",
					percent: "108",
					period: 9,
					principal_back: 90,
				},
				{
					amount: "250,000",
					package: "499,999",
					percent: "126",
					period: 9,
					principal_back: 90,
				},
				{
					amount: "",
					package: "500,000",
					percent: "162",
					period: 9,
					principal_back: 90,
				},
			],
			settings: [],
			users: null,
			userStaking: [],
			userReward: [],
			userDetailReward: [],
			allowanceStakingToken: 0,
			allowanceSwapToken: 0
		};
	},
	methods: {
		goTx(hash) {
			let url = "";
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			if (network === "test") {
				url = "https://testnet.bscscan.com/tx/" + hash;
			} else {
				url = "https://bscscan.com/tx/" + hash;
			}
			return url;
		},
		maxAmount(type) {
			if (type === "swap") {
				this.amountStake = this.swapBalance > 0 ? this.formatDecimal(this.swapBalance, 2) : 0;
				this.amountStakeUsdt = this.swapBalance > 0 ? this.formatDecimal(this.swapBalance, 2) : 0;
			} else {
				this.amountStake = this.tokenBalance > 0 ? this.formatDecimal(this.tokenBalance, 2) : 0;
				this.amountStakePush = this.tokenBalance > 0 ? this.formatDecimal(this.tokenBalance, 2) : 0;
			}
		},
		changeTab(data) {
			if (data == "package") {
				this.isActivePakage = true;
				this.isActiveReward = false;
			} else if (data == "reward") {
				this.isActiveReward = true;
				this.isActivePakage = false;
			}
		},
		changeDotTable(item, idx, action) {
            this.dotTable = [];
            this.tableHover = 'tablehover'
            this.userDetailReward = [];
			if (action === 1) {
				this.tableHover = 'tablehover show'
				this.dotTable[idx] = true;
				this.getDetailUserPackage(item);
			}
		},
		connectWallet() {
			this.$store.dispatch("connect");
		},
		momentTimeHistory(date, number) {
			if (number && number == 1) {
				return moment(date).format("D/M/Y");
			} else if (number && number == 2) {
				return moment(date).format("HH:mm:ss");
			} else {
				return moment(date).format("HH:mm D/M/Y");
			}
		},
		changeAmountStake(index) {
			if (index === 1) {
				this.amountStakeUsdt = parseFloat(this.amountStakeUsdt);
				if (this.amountStakeUsdt <= 0) {
					this.amountStakeUsdt = 0;
				}
				this.approveSwapToken = this.amountStakeUsdt > this.allowanceSwapToken;
				this.amountStake = this.amountStakeUsdt;
				if (this.amountStake > this.swapBalance && this.swapBalance > 0) {
					this.amountStakeUsdt = this.swapBalance > 0 ? this.formatDecimal(this.swapBalance, 2) : 0;
					this.amountStake = this.swapBalance > 0 ? this.formatDecimal(this.swapBalance, 2) : 0;
				}
			} else if (index === 2) {
				this.amountStakePush = parseFloat(this.amountStakePush);
				if (this.amountStakePush <= 0) {
					this.amountStakePush = 0;
				}
				if (this.amountStakePush > this.tokenBalance) {
					this.amountStakePush = this.tokenBalance;
				}
				this.approveStaking = this.amountStakePush > this.allowanceStakingToken;
                this.amountStake = this.amountStakePush;
				if (this.amountStake > this.tokenBalance && this.tokenBalance > 0) {
					this.amountStakePush = this.tokenBalance > 0 ? this.formatDecimal(this.tokenBalance, 2) : 0;
					this.amountStake = this.tokenBalance > 0 ? this.formatDecimal(this.tokenBalance, 2) : 0;
				}
			} else {
				return false;
			}
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
		},

		async getRegistry() {
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			const platform = "bsc";
			let userAccount = JSON.parse(localStorage.getItem("user"));
			if (!userAccount) return;
			let baseUrl = `api/index/registry`;
			let url = baseUrl + `?network=${network}&platform=${platform}`;
			this.showLoading = true;
			this.registry = [];
			await axios
				.get(url, {
					headers: {
						Authorization: "Bearer " + userAccount["token"],
					},
				})
				.then(
					(res) => {
						this.showLoading = false;
						if (res.data && res.data.data) {
							this.registry = res["data"]["data"] || [];
							this.rate = this.registry && this.registry['coin_rate'] ? this.registry['coin_rate'] : '0';
							this.minStake = this.registry && this.registry['min_staking'] ? this.registry['min_staking'] : 1;
						}
					},
					() => {
						//Error load api
						this.showLoading = false;
						this.registry = [];
					}
				);
		},

		async getListPackage() {
			this.swapBalance = 0;
			this.tokenBalance = 0;
            this.settings = [];
            this.users = [];
            this.userStaking = [];
			if (this.loading) {
				return;
			}
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			const platform = "bsc";
			let userAccount = JSON.parse(localStorage.getItem("user"));
			if (!userAccount) return;
			let baseUrl = `api/staking/userPackage`;
			let url = baseUrl + `?network=${network}&platform=${platform}`;
			this.loading = true;
			this.showLoading = true;
			await axios
				.get(url, {
					headers: {
						Authorization: "Bearer " + userAccount["token"],
					},
				})
				.then(
					(res) => {
						if (res && res['data'] && res['data']['data']) {
							this.settings = res["data"]["data"]["staking_setting"] || [];
							this.users = res["data"]["data"]["user_connect"] || [];
							this.userStaking = res["data"]["data"]["list_data"] || [];
							// this.symbol = this.settings['staking_token']['token_symbol'];
							this.checkAllowance();
							this.getBaseTokenBalance();
						}
						this.loading = false;
						this.showLoading = false;
					},
					() => {
						//Error load api
						this.settings = [];
						this.users = [];
						this.userStaking = [];
						this.loading = false;
						this.showLoading = false;
					}
				);
		},

		async getUserReward() {
			this.userReward = [];
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			const platform = "bsc";
			let baseUrl = `api/staking/interest`;
			let url = baseUrl + `?network=${network}&platform=${platform}&p=${this.page}&limit=${this.limit}`;
			let userAccount = JSON.parse(localStorage.getItem("user"));
			if (!userAccount) return;
			this.showLoading = true;
			await axios
				.get(url, {
					headers: {
						Authorization: "Bearer " + userAccount["token"],
					},
				})
				.then(
					(res) => {
						if (res.data && res.data.data) {
							this.userReward = res["data"]["data"]["list_data"] || [];
							this.totalPage = res['data']['optional']['paging_info']['total_page'];
							this.currentPage = this.page;
						}
						this.showLoading = false;
					},
					() => {
						//Error load api
						this.userReward = [];
						this.showLoading = false;
					}
				);
		},

		async getDetailUserPackage(item) {
			this.userDetailReward = [];
			const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
			const platform = "bsc";
			let baseUrl = `api/staking/userPackageHistory`;
			let user_package_id = item["_id"]["$oid"];
			let url =
				baseUrl +
				`?user_package_id=${user_package_id}&network=${network}&platform=${platform}`;
			let userAccount = JSON.parse(localStorage.getItem("user"));
			if (!userAccount) return;
			this.showLoading = true;
			await axios
				.get(url, {
					headers: {
						Authorization: "Bearer " + userAccount["token"],
					},
				})
				.then(
					(res) => {
						if (res.data && res.data.data) {
							this.userDetailReward = res["data"]["data"]["list_data"] || [];
						}
						this.showLoading = false;
					},
					() => {
						//Errror load api
						this.userDetailReward = [];
						this.showLoading = false;
					}
				);
		},

		async checkAllowance() {
			const tokenAddress = this.settings["staking_token"]["token_address"];
			const swapAddress = this.settings["swap_token"]["token_address"];
			const contract_address = this.settings["setting_address"];
			const tokenDecimals = parseInt(
				this.settings["staking_token"]["token_decimals"]
			);
			const swapDecimals = parseInt(
				this.settings["swap_token"]["token_decimals"]
			);
			const web3 = new Web3(window.ethereum);
			const tokenAllowance = new web3.eth.Contract(
				settingsContract["ABI_TOKEN"],
				tokenAddress
			);
			const swapAllowance = new web3.eth.Contract(
				settingsContract["ABI_TOKEN"],
				swapAddress
			);
			const address = this.account;
			if (!this.account) return;
			await tokenAllowance.methods
				.allowance(address, contract_address)
				.call()
				.then((resp) => {
					if (resp) {
						let decimalsMul = new BigNumber(10).pow(tokenDecimals);
						let value = new BigNumber(resp).div(decimalsMul).toNumber();
						this.allowanceStakingToken = value;
						if (value > 0) {
                            this.approveStaking = this.amountStakePush > this.allowanceStakingToken;
						}
					}
				});
			await swapAllowance.methods
				.allowance(address, contract_address)
				.call()
				.then((resp1) => {
					if (resp1) {
						let decimalsMul = new BigNumber(10).pow(swapDecimals);
						let valueSwap = new BigNumber(resp1).div(decimalsMul).toNumber();
						this.allowanceSwapToken = valueSwap;
						if (valueSwap > 0) {
                            this.approveSwapToken = this.amountStakeUsdt > this.allowanceSwapToken;
						}
					}
				});
		},

		async approveToken(type) {
			//check connect
			let tokenAddress = this.settings["staking_token"]["token_address"];
			let amount = this.amountStake;
			if (type === "swap") {
				tokenAddress = this.settings["swap_token"]["token_address"];
			}
			if (amount == 0) {
				this.$toaster.error($t('staking.17'));
				return false;
			}

			const contract_address = this.settings["setting_address"];
			let amountTokenRequired = utils.randomHex(32).toString();
			let web3 = new Web3(window.ethereum);
			const tokenContract = new web3.eth.Contract(
				settingsContract["ABI_TOKEN"],
				tokenAddress
			);
			// modal processing
			if (!this.account) return;
			const isProduction = process.env.NODE_APP_ENV === 'production';
			// const isProduction = false;
			let obj = {
				from: this.account,
			};
			if (this.exchange["platform"] === "polygon") {
				// get max fees from gas station
				let maxFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
				let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
				try {
					const {data} = await axios({
						method: "get",
						url: isProduction
							? "https://gasstation-mainnet.matic.network/v2"
							: "https://gasstation-mumbai.matic.today/v2",
					});
					maxFeePerGas = ethers.utils.parseUnits(
						Math.ceil(data.fast.maxFee) + "",
						"gwei"
					);
					maxPriorityFeePerGas = ethers.utils.parseUnits(
						Math.ceil(data.fast.maxPriorityFee) + "",
						"gwei"
					);
					obj["gasPrice"] = maxFeePerGas;
				} catch {
					// ignore
				}
			}

			this.$store.commit("setPopupWallet", true);
			try {
				let approveToken = await tokenContract.methods
					.approve(contract_address, amountTokenRequired)
					.send(obj)
					.on("transactionHash", function (hash) {
						console.log("Please wait a minute to complete your transaction!");
						// alert("Please wait a minute to complete your transaction!");
					})
					.on("confirmation", function (confirmationNumber, receipt) {
					})
					.on("receipt", function (receipt) {
					})
					.on("error", function (error, receipt) {
						// alert("Error");
						console.log("error", error, receipt);
					});
				this.$store.commit("setPopupWallet", false);
				if (approveToken.status) {
					// modal success
					this.$toaster.success($t('common.0012'));
					if (type === "swap") {
						this.approveSwapToken = false;
					} else {
						this.approveStaking = false;
					}
                    this.checkAllowance();
				} else {
					// modal error
					this.$store.commit("setPopupError", {
						isShow: true,
						message: "",
					});
					console.log("error", approveToken);
				}
			} catch (e) {
				this.$store.commit("setPopupWallet", false);
			}
		},

		async stake(type) {
			let amountStake = parseFloat(this.amountStake);
			let balance = this.tokenBalance;
            let minStake = this.minStake;
			if (type === "swap") {
				balance = this.swapBalance;
			} else {
                minStake = this.minPush;
            }
			if (amountStake > balance) {
				console.log("amount stake > balance", type);
				this.$toaster.error($t('staking.18'));
				return;
			}
            if (amountStake < minStake) {
				console.log("amount stake < min stake", type);
				this.$toaster.error($t('staking.19'));
				return;
			}
			const contract_address = this.settings["setting_address"];
			const web3 = new Web3(window.ethereum);
			const contractStake = new web3.eth.Contract(
				settingsContract["ABI_STAKING"],
				contract_address
			);
			const address = this.account;
			if (!this.account) return;
			const isProduction = process.env.NODE_APP_ENV === 'production';
			let obj = {
				from: address,
			};
			if (this.exchange["platform"] === "polygon") {
				// get max fees from gas station
				let maxFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
				let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000); // fallback to 40 gwei
				try {
					const {data} = await axios({
						method: "get",
						url: isProduction
							? "https://gasstation-mainnet.matic.network/v2"
							: "https://gasstation-mumbai.matic.today/v2",
					});
					maxFeePerGas = ethers.utils.parseUnits(
						Math.ceil(data.fast.maxFee) + "",
						"gwei"
					);
					maxPriorityFeePerGas = ethers.utils.parseUnits(
						Math.ceil(data.fast.maxPriorityFee) + "",
						"gwei"
					);
					obj["gasPrice"] = maxFeePerGas;
				} catch {
					// ignore
				}
			}
			let _this = this;
			this.$store.commit("setPopupWallet", true);

			let tokenDecimals = parseInt(
				this.settings["staking_token"]["token_decimals"]
			);
			if (type === "swap") {
				tokenDecimals = parseInt(this.settings["swap_token"]["token_decimals"]);
				try {
					let tokenAmountStake = this.formatDecimal(amountStake, tokenDecimals);
					tokenAmountStake = new BigNumber(tokenAmountStake).mul(
						new BigNumber(10).pow(tokenDecimals)
					);
					tokenAmountStake = utils.toBN(tokenAmountStake).toString();
					let stake = await contractStake.methods
						.buy(tokenAmountStake)
						.send(obj)
						.on("transactionHash", function (hash) {
							// alert("Please wait a minute to complete your transaction!");
						})
						.on("confirmation", function (confirmationNumber, receipt) {
						})
						.on("receipt", function (receipt) {
						})
						.on("error", function (error, receipt) {
							console.log("error", error, receipt);
						});
					this.$store.commit("setPopupWallet", false);
					if (stake.status) {
						this.$toaster.success("Success!");
						_this.amountStake = 0;
                        _this.amountStakeUsdt = 0;
                        _this.amountStakePush = 0;
						setTimeout(function () {
							_this.getBaseTokenBalance();
						}, 500);
					} else {
						// modal error
						this.$store.commit("setPopupError", {
							isShow: true,
							message: "",
						});
					}
				} catch (e) {
					this.$store.commit("setPopupWallet", false);
					console.log("error", e);
				}
			} else {
				try {
					let tokenAmountStake = this.formatDecimal(amountStake, tokenDecimals);
					tokenAmountStake = new BigNumber(tokenAmountStake).mul(
						new BigNumber(10).pow(tokenDecimals)
					);
					tokenAmountStake = utils.toBN(tokenAmountStake).toString();
					let stake = await contractStake.methods
						.staking(tokenAmountStake)
						.send(obj)
						.on("transactionHash", function (hash) {
							// alert("Please wait a minute to complete your transaction!");
						})
						.on("confirmation", function (confirmationNumber, receipt) {
						})
						.on("receipt", function (receipt) {
						})
						.on("error", function (error, receipt) {
							console.log("error", error, receipt);
						});
					this.$store.commit("setPopupWallet", false);
					if (stake.status) {
						this.$toaster.success("Success!");
						_this.amountStake = 0;
						_this.amountStakeUsdt = 0;
						_this.amountStakePush = 0;
						setTimeout(function () {
							_this.getBaseTokenBalance();
						}, 500);
					} else {
						// modal error
						this.$store.commit("setPopupError", {
							isShow: true,
							message: "",
						});
					}
				} catch (e) {
					this.$store.commit("setPopupWallet", false);
					console.log("error", e);
				}
			}
		},

		async getBaseTokenBalance() {
			// baseTokenBalance
			this.swapBalance = 0;
			this.tokenBalance = 0;
			let web3 = new Web3(window.ethereum);
			let address = this.account;
			if (!address) return;
			const pushAddress = this.settings["staking_token"]["token_address"];
			const swapAddress = this.settings["swap_token"]["token_address"];
			const tokenPushDecimals = parseInt(
				this.settings["staking_token"]["token_decimals"]
			);
			const tokenSwapDecimals = parseInt(
				this.settings["swap_token"]["token_decimals"]
			);
			let web3PushContract = new web3.eth.Contract(
				settingsContract["ABI_TOKEN"],
				pushAddress
			);
			let web3SwapContract = new web3.eth.Contract(
				settingsContract["ABI_TOKEN"],
				swapAddress
			);
			await web3PushContract.methods
				.balanceOf(address)
				.call()
				.then((resp) => {
					let decimalsMul = new BigNumber(10).pow(tokenPushDecimals);
					this.tokenBalance = new BigNumber(resp).div(decimalsMul).toNumber();
				});
			await web3SwapContract.methods
				.balanceOf(address)
				.call()
				.then((resp) => {
					let decimalsMul = new BigNumber(10).pow(tokenSwapDecimals);
					this.swapBalance = new BigNumber(resp).div(decimalsMul).toNumber();
				});
		},

		prevPage() {
			if (this.page <= 1) {
				return;
			}
			this.page = parseInt(this.page) - 1;
			this.getUserReward();
		},
		nextPage() {
			if (this.page >= this.totalPage) {
				return;
			}
			this.page = parseInt(this.page) + 1;
			this.getUserReward();
		},
		changePage() {
			this.getUserReward()
		},
		truncateAddress(address) {
			address = address.substr(0, 5) + "..." + address.substr(address.length - 5, 5);
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
	},
	created() {
		setTimeout(() => {
			this.getRegistry();
			this.getListPackage();
			this.getUserReward();
		}, 500);
	},
	mounted() {
// setTimeout(() => {
//     this.checkAllowance();
// }, 1000);
	},
	computed: {
		...mapState(["web3Modal"]),
		...mapGetters({
			exchange: "exchange",
			account: "account",
		}),
	},
	watch: {
		account: function () {
			setTimeout(() => {
				this.getRegistry();
				this.getListPackage();
				this.getUserReward();
			}, 1000);
		},
	},
};
</script>

<style scoped>
.nothingData{
	background: #fff;
    height: 217px;
    border: 1px solid #efefef;
}
.nothingData .py-5{
	justify-content: center;
	margin-top: 19px;
}
ul.listtable li .cols {
	padding: 20px 25px !important;
}
</style>