<template>
<div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
    <div class="box-dex">
        <div class="triggers-card">
            <div class="row  position-relative">
                <div class="col-md-6">
                    <h3 class="title" v-html="$t('lock.create.01')"></h3>
                    <p class="f-Nunito">{{$t('lock.create.02')}}</p>
                    <p>
                        <a :href="getLinkContract(settingLock)" target="_blank" class="linear-blue btn-blue btn-bluebig">
                            {{$t('lock.create.03')}}
                            <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </a>
                    </p>
                    <p class="hero-img mt-5 text-center"> <img src="@/assets/images/banner4.png" class="animated"> </p>
                    <span class="decor10"> <img src="@/assets/images/decor2.png" class="w-75"></span>
                    <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
                </div>
                <div class="col-md-6 position-relative">

                    <div class="box-swap pb-5">

                        <div class="content-swap">
                        <span class="f-Nunito d-flex justify-content-center fs-24 fw-bold mt-3"><svg
                                xmlns="http://www.w3.org/2000/svg" width="20.626" height="27.501"
                                viewBox="0 0 20.626 27.501" class="mr-2">
                                <path id="Path_64265" data-name="Path 64265"
                                    d="M414.048,358.313h-.859v-3.438a6.875,6.875,0,1,0-13.751,0v3.438h-.859A2.581,2.581,0,0,0,396,360.891v12.032a2.581,2.581,0,0,0,2.578,2.578h15.469a2.582,2.582,0,0,0,2.578-2.578V360.891a2.581,2.581,0,0,0-2.578-2.578Zm-12.318-3.438a4.584,4.584,0,1,1,9.167,0v3.438h-9.167Zm5.729,12.286v2.61a1.146,1.146,0,0,1-2.292,0v-2.61a2.292,2.292,0,1,1,2.292,0Zm0,0"
                                    transform="translate(-396 -348)" />
                            </svg> {{$t('lock.create.04')}} </span>
                        <div class="body-lock1" v-if="content1">
                            <p class="text-center mb-4 mt-4"><img src="@/assets/images/icon-sucessBig.svg"></p>
                            <p class="f-Nunito fs-16 text-center w-75 m-auto">{{$t('lock.create.05')}}</p>
                            <div class="clearfix mt-4 mb-5">
                                <div class="card-tokens disabled mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Group_26729" data-name="Group 26729"
                                        width="22.725" height="30.301" viewBox="0 0 22.725 30.301">
                                        <path id="Path_64195" data-name="Path 64195"
                                            d="M415.885,359.363h-.947v-3.788a7.575,7.575,0,1,0-15.15,0v3.788h-.947A2.844,2.844,0,0,0,396,362.2V375.46a2.844,2.844,0,0,0,2.841,2.841h17.044a2.844,2.844,0,0,0,2.841-2.841V362.2a2.844,2.844,0,0,0-2.841-2.841Zm-13.572-3.788a5.05,5.05,0,1,1,10.1,0v3.788h-10.1Zm6.313,13.537v2.876a1.263,1.263,0,0,1-2.525,0v-2.876a2.525,2.525,0,1,1,2.525,0Zm0,0"
                                            transform="translate(-396 -348)" fill="#34a759" />
                                    </svg>
                                    <div class="ml-3">
                                        <span class="f-Nunito fw-bold d-block">{{$t('lock.create.06')}}</span>
                                        <span class="f-Nunito fs-13 cl5D">{{$t('lock.create.07')}}</span>
                                    </div>
                                    <div class="cntr">
                                        <label for="rdo-2" class="btn-radio">
                                                <input type="radio" disabled>
                                                <svg width="29px" height="29px" viewBox="0 0 20 20">
                                                        <circle cx="10" cy="10" r="9"></circle>
                                                        <path
                                                                d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                                                class="inner"></path>
                                                        <path
                                                                d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                                                class="outer"></path>
                                                </svg>
                                        </label>
                                </div>
                                </div>
                                <div class="card-tokens pointer" @click="selectOption()">
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Group_26730" data-name="Group 26730"
                                        width="32.403" height="30.301" viewBox="0 0 32.403 30.301">
                                        <g id="Group_19914" data-name="Group 19914" transform="translate(2.941)">
                                            <path id="Path_88569" data-name="Path 88569"
                                                d="M2170.384,1183.571q0,5.872,0,11.743c0,1.021-.434,1.463-1.451,1.466q-2.168.007-4.336,0c-1.01,0-1.444-.45-1.444-1.473q0-11.789,0-23.577c0-1.02.435-1.463,1.451-1.466q2.168-.006,4.336,0c1.013,0,1.444.447,1.444,1.473Q2170.385,1177.654,2170.384,1183.571Z"
                                                transform="translate(-2153.507 -1170.261)" fill="#34a759" />
                                            <path id="Path_88570" data-name="Path 88570"
                                                d="M2269.827,1247.221q0-4.359,0-8.718c0-1.115.415-1.53,1.52-1.53q2.168,0,4.336,0a1.217,1.217,0,0,1,1.374,1.36q.008,8.876,0,17.752c0,.925-.465,1.371-1.408,1.375q-2.191.01-4.381,0c-1,0-1.439-.444-1.44-1.432Q2269.823,1251.625,2269.827,1247.221Z"
                                                transform="translate(-2250.541 -1230.943)" fill="#34a759" />
                                            <path id="Path_88571" data-name="Path 88571"
                                                d="M2056.444,1323.621q0-2.574,0-5.149c0-1.076.428-1.5,1.511-1.5q2.145,0,4.291,0c.965,0,1.428.444,1.429,1.393q.007,5.239,0,10.478a1.224,1.224,0,0,1-1.394,1.386q-2.213.011-4.426,0a1.239,1.239,0,0,1-1.409-1.419C2056.44,1327.084,2056.444,1325.353,2056.444,1323.621Z"
                                                transform="translate(-2056.443 -1303.716)" fill="#34a759" />
                                        </g>
                                        <rect id="Rectangle_2384" data-name="Rectangle 2384" width="32.403"
                                            height="2.094" rx="1.047" transform="translate(0 28.206)"
                                            fill="#34a759" />
                                    </svg>
                                    <div class="ml-3">
                                        <span class="f-Nunito fw-bold d-block">{{$t('lock.create.08')}}</span>
                                        <span class="f-Nunito fs-13 cl5D">{{$t('lock.create.09')}}</span>
                                    </div>
                                    <div class="cntr">
                                            <label for="rdo-2" class="btn-radio">
                                                    <input @click="selectOption()" type="radio" id="rdo-2" name="radio-grp" :checked ="checkRadio">
                                                    <svg width="29px" height="29px" viewBox="0 0 20 20">
                                                            <circle cx="10" cy="10" r="9"></circle>
                                                            <path
                                                                    d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
                                                                    class="inner"></path>
                                                            <path
                                                                    d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
                                                                    class="outer"></path>
                                                    </svg>
                                            </label>
                                    </div>
                                </div>
                            </div>


                            <div class=" d-flex align-items-center mb-4">
                                <a v-if="!account" @click="connectWallet()" class="linear-blue btn-blue btn-bluebig w-100 pointer" data-toggle="modal"
                                    data-target="#confirm">
                                    {{$t('common.0001')}}
                                    <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                                </a>
                                <a v-if="account" @click="moveContent2()" class="linear-blue btn-blue btn-bluebig w-100 pointer" data-toggle="modal"
                                    data-target="#confirm">
                                    {{$t('lock.create.10')}}
                                    <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                                </a>
                            </div>
                        </div>
                            
                        <div class="body-lock2" v-if="content2">
                            <p class="text-center mb-4 mt-4"><img src="@/assets/images/icon-sucessBig.svg"></p>
                            <p class="f-Nunito fs-16 text-center w-75 m-auto">{{$t('lock.create.11')}}</p>
                                <div class="form-group position-relative mt-3 mb-4">
                                    <!-- <input type="text" class="form-control heigh44 f-Nunito inputfocus" placeholder=""
                                        value="0xca1acab14e85f30996ac83c64ff93ded7586977c"> -->
                                    <input type="text" id="input-field" class="form-control heigh44 f-Nunito inputfocus" v-model="contract_address" @input="handleInput">
                                    <span class="f-Nunito fs-12 cl5D">E.g.
                                        0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56</span>
                                    <div v-if="showDropdown && contract.length !== 0" class="box-found">
                                        <ul>
                                            <li v-show="contract.length !== 0">{{$t('lock.create.12')}}</li>
                                            <li v-show="contract.length !== 0"  @click="handleDropdownItemClick('')">
                                            <span><img :src="contract.avatar ? contract.avatar : imgDefault" width="35px"> {{ contract.name ? contract.name : "" }}</span>
                                            <button @click="moveContent3()" class="btn-select">
                                                {{$t('common.0006')}}
                                            </button>
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <a v-if="!account" @click="connectWallet('content2')" class="linear-blue btn-blue btn-bluebig w-100 pointer">
                                    {{$t('common.0001')}}
                                    <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                                </a>
                            
                                <a v-if="account" @click="backContent('content2')" class="btn-gray btn-flex btn-blue btn-bluebig w-100 pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21.929" height="12.455"
                                        viewBox="0 0 21.929 12.455" class="mr-2">
                                        <path id="Path_88572" data-name="Path 88572"
                                            d="M17.212,7.594h-.473q-7.632,0-15.264,0a1.371,1.371,0,1,1-.2-2.734c.136-.009.274,0,.41,0H17.2c-.12-.134-.193-.222-.274-.3-.733-.735-1.472-1.464-2.2-2.2A1.3,1.3,0,0,1,14.4.929a1.315,1.315,0,0,1,1.068-.9,1.265,1.265,0,0,1,1.164.359c1.642,1.632,3.285,3.265,4.91,4.914a1.3,1.3,0,0,1,0,1.856Q19.1,9.627,16.625,12.065a1.363,1.363,0,0,1-1.915-1.938c.72-.747,1.464-1.471,2.2-2.206C16.991,7.835,17.071,7.745,17.212,7.594Z"
                                            transform="translate(21.929 12.455) rotate(180)" />
                                    </svg>
                                    {{$t('common.0007')}}
                                </a>
                            
                            </div>

                        <div class="body-lock3" v-if="content3">
                            <p class="mt-4 pointer"> <a @click="backContent('content3')" class="back">
										<svg xmlns="http://www.w3.org/2000/svg" width="13.112" height="11.237"
											viewBox="0 0 13.112 11.237" class="mr-2">
											<path id="Path_87919" data-name="Path 87919"
												d="M1972.042,217.564h.237c2.9,0,5.8,0,8.7.007a1.509,1.509,0,0,1,.679.166.88.88,0,0,1,.4.936.972.972,0,0,1-.8.75,2.9,2.9,0,0,1-.388.016h-8.858a42.534,42.534,0,0,1,3.125,3,1.009,1.009,0,0,1,.36.834.837.837,0,0,1-.535.761.9.9,0,0,1-.945-.123,2.559,2.559,0,0,1-.254-.237q-2.216-2.214-4.431-4.429a1.061,1.061,0,0,1-.364-.71,1.022,1.022,0,0,1,.356-.795q1.451-1.445,2.9-2.894c.56-.56,1.114-1.125,1.681-1.678a.922.922,0,0,1,1.542.312.968.968,0,0,1-.283,1.063c-.74.737-1.473,1.481-2.218,2.212C1972.663,217.035,1972.353,217.288,1972.042,217.564Z"
												transform="translate(-1968.972 -212.878)" fill="#34a759" />
										</svg>
										{{$t('common.0007')}}
									</a>
								</p>

								<form class="formcontrol">
									<div class="form-group">

										<label class="d-flex align-items-center justify-content-between">{{$t('common.0008')}}
											<span v-if="account" class="fs-13"><span class="cl5D">{{$t('common.0009')}}:
                                            </span>
                                            {{contract ? this.formatNumber(contract['user_balance']) : ''}} {{contract ? contract['symbol'] : '0'}}
                                         </span>
											<span v-if="!account" class="fs-13"><span class="cl5D">{{$t('common.0009')}}:
                                            </span>0
                                         </span>
                                        </label>
										<div class="position-relative">
											<input @change="changeLockAmount()" v-model="lock_amount"  type="text" class="form-control" :placeholder="$t('common.0008')">
                                            
											<span @click="maxBalance()" class="txtvalue pointer">{{$t('common.0010')}}</span>
										</div>
									</div>
								</form>
								<p class="text-center"><img src="@/assets/images/icon-lock.svg"> </p>
								<form class="formcontrol active">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>{{$t('lock.create.13')}}</label>
											<!-- <input type="text" class="form-control" value="90" placeholder=""> -->
                                            <input id="unlock_date_input" @change="resetUnlockedTime()" v-model="unlock_day" type="number" class="form-control"
                                            value="0" step="1">
										</div>
										<div class="form-group col-md-6">
											<label class="text-right">{{unlocked_time}}</label>
                                                        <div class="form-select2">
                                                            <Select2 v-model="timeSelect"  @change="changeTokenType($event)" :options="timeOptions"/>
                                                        </div>

										</div>
									</div>

								</form>
								<ul class="listform">
									<li>
										<span class="cl9F9">{{$t('lock.create.14')}}</span>
										<span>{{settingLock['base_fee']}} {{calculateFee()}}</span>
									</li>
									<li>
										<span class="cl9F9">{{$t('lock.create.15')}}</span>
										<span>{{settingLock['token_fee_percent']}}%  ({{lock_amount*settingLock['token_fee_percent']/100}}) {{contract ? contract['symbol'] : ''}}</span>
									</li>
									<li>
										<span class="cl9F9">{{$t('lock.create.16')}}</span>
										<span class="cl9F9">{{lock_amount}} {{contract ? contract['symbol'] : ''}}</span>
									</li>
									<li>
										<span class="cl9F9">{{$t('lock.create.13')}}</span>
										<span class="cl9F9">{{unlocked_time}}</span>

									</li>
								</ul>


								<div class=" d-flex align-items-center mb-4 mt-5 ">
                                                                        <!--Check connect wallet-->
                                                                        <a v-if="!account" @click="connectWallet()"  class="linear-blue btn-blue btn-bluebig w-100 mr-2 pointer ">
										{{$t('common.0001')}} <img src="@/assets/images/dot-l-white.svg" class="ml-2 ">
									</a>
                                                                        
									<a v-if="account && approve && lock_amount > 0" @click="approveLock()"  class="linear-blue btn-blue btn-bluebig w-100 mr-2 pointer ">
										{{$t('lock.create.17')}}<img src="@/assets/images/dot-l-white.svg" class="ml-2 ">
									</a>
									<a v-else-if="account && approve" class="btn-gray btn-blue btn-bluebig w-100 mr-2 pointer disabled">
										{{$t('lock.create.17')}}<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="20"
											height="15.133" viewBox="0 0 26.645 15.133">
											<path id="Path_88594" data-name="Path 88594"
												d="M-1180.526,1698.888h-.575q-9.273,0-18.546,0a1.67,1.67,0,0,1-1.793-1.665,1.667,1.667,0,0,1,1.546-1.657c.166-.011.333-.006.5-.006h18.857c-.146-.163-.235-.27-.333-.368-.891-.893-1.789-1.779-2.673-2.678a1.583,1.583,0,0,1-.4-1.723,1.6,1.6,0,0,1,1.3-1.1,1.538,1.538,0,0,1,1.414.436c2,1.983,3.991,3.967,5.966,5.971a1.574,1.574,0,0,1,0,2.256q-2.962,3.006-5.969,5.968a1.615,1.615,0,0,1-2.319-.035,1.627,1.627,0,0,1-.009-2.32c.875-.908,1.779-1.788,2.67-2.681C-1180.794,1699.18-1180.7,1699.071-1180.526,1698.888Z"
												transform="translate(1201.44 -1689.661)"></path>
										</svg>
									</a>
									<a v-if="account && !isValid()" class="btn-gray btn-blue btn-bluebig w-100 pointer">
										{{$t('lock.create.18')}}<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="20"
											height="15.133" viewBox="0 0 26.645 15.133">
											<path id="Path_88594" data-name="Path 88594"
												d="M-1180.526,1698.888h-.575q-9.273,0-18.546,0a1.67,1.67,0,0,1-1.793-1.665,1.667,1.667,0,0,1,1.546-1.657c.166-.011.333-.006.5-.006h18.857c-.146-.163-.235-.27-.333-.368-.891-.893-1.789-1.779-2.673-2.678a1.583,1.583,0,0,1-.4-1.723,1.6,1.6,0,0,1,1.3-1.1,1.538,1.538,0,0,1,1.414.436c2,1.983,3.991,3.967,5.966,5.971a1.574,1.574,0,0,1,0,2.256q-2.962,3.006-5.969,5.968a1.615,1.615,0,0,1-2.319-.035,1.627,1.627,0,0,1-.009-2.32c.875-.908,1.779-1.788,2.67-2.681C-1180.794,1699.18-1180.7,1699.071-1180.526,1698.888Z"
												transform="translate(1201.44 -1689.661)"></path>
										</svg>
									</a>
									<a v-else-if="account && isValid()" @click="lockToken()" class="linear-blue btn-blue btn-bluebig w-100 pointer">
										{{$t('lock.create.18')}}
                                                                                <img src="@/assets/images/dot-l-white.svg" class="ml-2">
									</a>
								</div>
                        </div>
                        </div>
                    </div>

                    <span class="decor7"> <img src="@/assets/images/decor1.png"></span>
                </div>
                <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
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
        import axios from "axios";
        import Web3, {utils} from "web3";
        import BigNumber from "@/utils/bignumber.min.js";
        import {settingsContract} from "@/utils/const";
        import moment from 'moment';
        import {ethers} from "ethers";
        import Loading from "vue-loading-overlay";
        import { $t } from '@/lang/i18n.js';
        export default {
            components:{Loading},
            name: "index",
            data() {
                return {
                    error: {
                        'lock_amount': {
                            'show':  false,
                            'msg':  '',
                        },
                        'unlock_day': {
                            'show':  false,
                            'msg':  '',
                        },
                        'unlocked_time': {
                            'show':  false,
                            'msg':  '',
                        },
                    },
                    contract: Object,
                    tokenType: 'token',
                    contract_address: '',
                    seachContract: false,
                    lock_amount: 0,
                    settingLock: Object,
                    typeLock: 'days',
                    unlocked_time: '',
                    unlocked_date: '',
                    total_locked_amount: 0,
                    fee_token_amount: 0,
                    approve: true,
                    unlock_day: 30,
                    unlockTimeByTimestamp: 0,
                    transfer_address: '',
                    lockHistoryId: 0,
                    newUnlockDate: 0,
                    amountAllowance: 0,
                    min_lock_amount: 0.000001,
                    checkRadio:true,
                    content1: true,
                    content2: false,
                    content3: false,
                    showDropdown: false,
                    showLoading: false,
                    fullPage: true,
                    withdraw: false,
                    timeOptions: [
                        { id: 'days', text: 'Days' },
                        { id: 'months', text: 'Months' },
                        { id: 'timestamp', text: 'Timestamp' },
                    ],
                    timeSelect:"days"
                }
            },
            computed: {
                ...mapState(['web3Modal']),
                ...mapGetters({
                    exchange: 'exchange',
                    account: 'account',
                })
            },
            created() {
                this.loadSettingsLock();
            },
            methods: {
                formatNumber(number, minPrecision = 2) {
                    if (number === 0 || !number) {
                        return '0.00';
                    }
                    let numberString = number.toString()
                    let array = numberString.split('.');
                    if (array[1]) {
                        let pathDecimal = array[1].slice(0, minPrecision);
                        return array[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '.' + pathDecimal;
                    } else {
                        return array[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                },
                connectWallet() {
                    this.$store.dispatch('connect');
                },
                isValid() {
                    return !(this.approve || this.lock_amount <= 0 || this.error['lock_amount']['show'] || this.error['unlock_day']['show'] || this.error['unlocked_time']['show'])
                },
                calculateFee() {
                    let platform = 'bsc'
                    return settingsContract['BASE_TOKEN_PLATFORM'][platform]
                },
                selectTypeUnlock(type) {
                    if (type.target.value == 'timestamp') {
                        let date = moment().add(this.unlock_day, 'days');
                        this.unlock_day = date.unix();
                    } else if (this.typeLock == 'timestamp'){
                        let now = moment(new Date());
                        let date = moment(this.unlock_day*1000).diff(now, 'days')
                        this.unlock_day = date + 1;
                    }
                    this.typeLock = type.target.value;
                    this.resetUnlockedTime();
                },
                resetUnlockedTime() {
                    this.unlock_day = parseInt(this.unlock_day) || 0;
                    if (!this.unlock_day) {
                        this.error['unlock_day']['show'] = true;
                        this.error['unlock_day']['msg'] = 'Unlock date invalid!';
                        return;
                    }
                    if (this.typeLock === 'days') {
                        let day = this.unlock_day;
                        if (day <= 0) {
                            this.error['unlock_day']['show'] = true;
                            this.error['unlock_day']['msg'] = 'Day invalid!';
                            return;
                        } else {
                            this.error['unlock_day']['show'] = false;
                            this.error['unlock_day']['msg'] = '';
                        }
                        let date = moment().add(day, 'days');
                        this.unlocked_date = date.format('MM/DD/YYYY');
                        this.unlocked_time = date.format('MM/DD/YYYY hh:mm:ss A');
                        this.unlockTimeByTimestamp = date.unix();
                    } else if (this.typeLock === 'months') {
                        let months = this.unlock_day;
                        if (months <= 0) {
                            this.error['unlock_day']['show'] = true;
                            this.error['unlock_day']['msg'] = 'Months invalid!';
                            return;
                        } else {
                            this.error['unlock_day']['show'] = false;
                            this.error['unlock_day']['msg'] = '';
                        }
                        let date = moment().add(months*30, 'days');
                        this.unlocked_date = date.format('MM/DD/YYYY');
                        this.unlocked_time = date.format('MM/DD/YYYY hh:mm:ss A');
                        this.unlockTimeByTimestamp = date.unix();
                    } else if (this.typeLock === 'timestamp') {
                        let timestamp = this.unlock_day;
                        let now = new Date().getTime();
                        if (timestamp*1000 <= now) {
                            this.error['unlock_day']['show'] = true;
                            this.error['unlock_day']['msg'] = 'Timestamp invalid!';
                            return;
                        } else {
                            this.error['unlock_day']['show'] = false;
                            this.error['unlock_day']['msg'] = '';
                        }
                        let date = moment(timestamp*1000);
                        this.unlocked_date = date.format('MM/DD/YYYY');
                        this.unlocked_time = date.format('MM/DD/YYYY hh:mm:ss A');
                        this.unlockTimeByTimestamp = timestamp;
                    }
                },
                selectTokenType(type) {
                    this.tokenType = type;
                },
                changeLockAmount() {
                    let lock_amount = parseFloat(this.lock_amount) || 0;
                    lock_amount = lock_amount <= this.contract['user_balance'] ? lock_amount : this.contract['user_balance'];
                    lock_amount = lock_amount >= this.min_lock_amount ? lock_amount : 0;
                    if (this.lock_amount > 0) {
                        this.lock_amount = this.formatDecimalAmountLock(lock_amount, this.contract['decimals']);
                        this.checkAmountAllowance();
                    } else {
                        this.lock_amount = 0;
                        this.$toaster.error($t('lock.create.error.01') +  this.min_lock_amount);
                    }
                },
                maxBalance() {
                    if (!this.contract) {
                        this.lock_amount = 0;
                        this.$toaster.error($t('lock.create.error.02'));
                        return;
                    }
                    this.lock_amount = this.contract['user_balance'];
                    if (this.lock_amount < this.min_lock_amount) {
                        this.lock_amount = 0;
                        this.$toaster.error($t('lock.create.error.01') +  this.min_lock_amount);
                        return;
                    } else {
                        this.lock_amount = this.formatDecimalAmountLock(this.lock_amount, this.contract['decimals']);
                    }
                    this.checkAmountAllowance();
                },
                async approveLock() {
                    let lockTokenAmount = parseFloat(this.lock_amount) || 0;
                    if (lockTokenAmount <= 0) {
                        this.error['amount_lock'] = true;
                        this.error['msg'] = $t('lock.create.error.03');
                        return;
                    }
                    const isProduction = process.env.NODE_ENV === 'production';
                    let obj = {
                        'from': this.account,
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
                    let web3 = new Web3(window.ethereum);
                    lockTokenAmount = utils.randomHex(32).toString();
                    let lockTokenAddress = this.contract_address;
                    this.$store.commit("setPopupWallet", true);
                    try {
                        let tokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], lockTokenAddress);
                        // thay lock address bang lock address trong setting
                        let approve = await tokenContract.methods.approve(this.settingLock['lock_contract_address'], lockTokenAmount).send(obj).on('transactionHash', function (hash) {
        
                        }).on('confirmation', function (confirmationNumber, receipt) {
                        }).on('receipt', function (receipt) {
                        }).on('error', function (error, receipt) {
                            console.log("error", error, receipt);
                            // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                        });
                        this.$store.commit("setPopupWallet", false);
                        if (approve.status) {
                            this.approve = false;
                            this.$toaster.success($t('common.0012'));
                        } else {
                            // fail
                        }
                    } catch (e) {
                        console.log(e);
                        this.$store.commit("setPopupWallet", false);
                    }
        
                },
                async checkAmountAllowance() {
                    if (this.amountAllowance > 0) {
                        if (this.lock_amount === 0) {
                            return;
                        }
                        this.approve = this.lock_amount > this.amountAllowance;
                        return;
                    }
                    let web3 = new Web3(window.ethereum);
                    let lockTokenAddress = this.contract_address;
                    let tokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], lockTokenAddress);
                    let selectedAccount = this.account;
                    let allowance = await tokenContract.methods.allowance(selectedAccount, this.settingLock['lock_contract_address']).call({});
                    allowance = new BigNumber(allowance);
                    let dicimalsMul = (new BigNumber(10)).pow(this.contract['decimals']);
                    this.amountAllowance = (new BigNumber(allowance)).div(dicimalsMul).toString();
                },
                async loadInfoContract() {
                    try {
                    this.lock_amount= 0;
                    this.approve = true;
                    this.amountAllowance = 0;
                    this.contract_address = this.contract_address.trim();
                    if (!this.contract_address || this.contract_address.length !== 42) {
                        this.contract = []
                        return false;
                    }
                    const headers = {
                        'Content-Type': 'application/json',
                    }
                    let formData = new FormData();
                    let network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                    let platform = 'bsc'
                    formData.append('user_address', this.account);
                    formData.append('network', network);
                    formData.append('platform', platform);
                    formData.append('contract_address', this.contract_address);
                    formData.append('type', this.tokenType);
                    this.showLoading = true;
                    await axios.post(`api/token/getInfo`, formData, {
                        headers: headers
                    }).then(res => {
                        if (res.data.data) {
                            if (res.data.data['symbol'] !== '' && res.data.data['name'] !== '' && res.data.data['name'] !== '') {
                                this.contract = res.data.data;
                                this.checkAmountAllowance();
                            } else {
                                this.contract = [];
                            }
                            this.seachContract = true;
                            setTimeout(()=>{
                                this.showDropdown = true;
                            },500)
                        } else {
                            this.contract = [];
                        }
                    }).catch(err => {
                        this.showLoading = false;
                        this.contract = [];
                    })
                } catch (error) {
                        console.log(error);
                } finally{
                    this.showLoading = false;
                }
                },
                setContractLock() {
                    this.seachContract = false;
                },
                formatDecimal(number, decimal) {
                    number = number.toString();
                    number = number.replace(/,/g, "");
                    let array = number.split('.');
                    let result = array[0];
                    decimal = decimal >= 8 ? 8 : decimal;
                    if (array[1] && decimal > 0) {
                        array[1] =  array[1].substr(0, decimal);
                        result = result +'.'+array[1];
                    }
                    return parseFloat(result);
                },
                formatDecimalAmountLock(number, decimal) {
                    number = number.toString();
                    number = number.replace(/,/g, "");
                    let array = number.split('.');
                    let result = array[0];
                    if (result.length > 7) {
                        return parseFloat(result);
                    } else {
                        decimal = decimal >= 8 ? 8 : decimal;
                        if (array[1] && decimal > 0) {
                            array[1] =  array[1].substr(0, decimal);
                            result = result +'.'+array[1];
                        }
                        return parseFloat(result);
                    }
                },
                async lockToken() {
                    let currentTime = moment().unix();
                    if (this.unlockTimeByTimestamp <= currentTime || this.unlockTimeByTimestamp >= 1E10) {
                        this.error['unlocked_time']['show'] = true;
                        this.error['unlocked_time']['msg'] = $t('lock.create.error.04');
                        return;
                    } else {
                        this.error['unlocked_time']['show'] = false;
                        this.error['unlocked_time']['msg'] = '';
                    }
                    let lockTokenDecimals = this.contract['decimals'];
                    let lockTokenAmount = parseFloat(this.lock_amount) || 0;
                    lockTokenAmount = this.formatDecimalAmountLock(lockTokenAmount, lockTokenDecimals);
                    if (lockTokenAmount <= 0) {
                        this.error['lock_amount']['show'] = true;
                        this.error['lock_amount']['msg'] = $t('lock.create.error.03');
                        return;
                    } else {
                        this.error['lock_amount']['show'] = false;
                        this.error['lock_amount']['msg'] = '';
                    }
        
                    let baseFee = this.settingLock['base_fee'];
                    baseFee = (new BigNumber(baseFee)).mul((new BigNumber(10)).pow(18));
                    lockTokenAmount = (new BigNumber(lockTokenAmount)).mul((new BigNumber(10)).pow(lockTokenDecimals));
                    let web3 = new Web3(window.ethereum);
                    lockTokenAmount = utils.toBN(lockTokenAmount);
                    let lockTokenAddress = this.contract_address;
                    let selectedAccount = this.account;
                    let unlockTimeByTimestamp = this.unlockTimeByTimestamp;
                    let lockContractInstance = new web3.eth.Contract(settingsContract['ABI_LOCK'], this.settingLock['lock_contract_address']);
        
                    const isProduction = process.env.NODE_ENV === 'production';
                    let obj = {
                        'from': this.account,
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
        
                    obj['value'] = utils.toBN(baseFee);
        
                    this.$store.commit("setPopupWallet", true);
                    try {
                        let resultTransaction = await lockContractInstance.methods.lockToken(lockTokenAddress, selectedAccount, lockTokenAmount, unlockTimeByTimestamp).send(obj).on('transactionHash', function (hash) {
                            // toastr["success"]("Please wait a minute to complete your transaction!");
                            // $("#global_loading").show();
                        }).on('confirmation', function (confirmationNumber, receipt) {
                        }).on('receipt', function (receipt) {
                        }).on('error', function (error, receipt) {
                            // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                        });
                        this.$store.commit("setPopupWallet", false);
                        if (resultTransaction.status) {
                            //sucess
                            this.$toaster.success($t('common.0012'));
                        setTimeout(() =>   this.$router.push("/history-lock"), 500);
                        } else {
                            // fail
                            this.$toaster.error($t('common.0013'));
                        }
                    } catch (e) {
                        this.$store.commit("setPopupWallet", false);
                        console.log(e);
                    }
        
        
                },
        
                truncate(fullStr) {
                    let separator = '...';
                    let frontChars = 4, backChars = 4;
        
                    return fullStr.substr(0, frontChars) +
                        separator +
                        fullStr.substr(fullStr.length - backChars);
                },
                async loadSettingsLock() {
                    this.unlock_day = 30;
                    this.lock_amount = 0;
                    let date = moment().add(30, 'days');
                    this.unlocked_date = date.format('MM/DD/YYYY');
                    this.unlocked_time = date.format('MM/DD/YYYY hh:mm:ss A');
                    this.unlockTimeByTimestamp = date.unix();
                    let network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                    let platform = 'bsc';
                    let url = '/api/registry/get_lock_setting_platform';
                    url = url + '?platform=' + platform + '&network=' + network;
                    const settingsLock = await axios.get(url);
                    this.settingLock = settingsLock.data.data;
                },
                getLinkContract(item) {
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
        
                    return explorerUrl + 'address/' + item['lock_contract_address'];
                },
                resetData() {
                    this.lock_amount= 0;
                    this.approve = true;
                    this.amountAllowance = 0;
                },
                selectOption(){
            if(this.checkRadio == false){
                this.checkRadio = true
            } else if (this.checkRadio == true){
                this.checkRadio = false
            }
        },
        backContent(content){
            if (content == "content2") {
                this.content1 = true
                this.content2 = false
                this.content3 = false
                this.checkRadio = true
            }
            if (content == "content3") {
                this.content1 = false
                this.content2 = true
                this.contract_address = "";
                this.showDropdown = false;
                this.content3 = false
            }
        },
        moveContent3(){
            this.content3 = true
            this.content1 = false
            this.content2 = false
        },
        moveContent2(){
            if (this.checkRadio == true) {
                this.content3 = false
                this.content1 = false
                this.content2 = true
            }else {
                this.$toaster.error($t('lock.create.error.05'));
            }
        },
        handleInput() {
            if (this.contract_address) {
                this.loadInfoContract(this.contract_address)
            
            // Cập nhật danh sách dropdownItems tùy theo giá trị đầu vào
            } else {
            this.showDropdown = false;
            this.dropdownItems = [];
            }
        },
        handleDropdownItemClick(item) {
            this.contract_address = item;
            this.showDropdown = false;
            this.dropdownItems = [];
        },
        changeTokenType(type){
            if (type == 'timestamp') {
                        let date = moment().add(this.unlock_day, 'days');
                        this.unlock_day = date.unix();
                    } else if (this.typeLock == 'timestamp'){
                        let now = moment(new Date());
                        let date = moment(this.unlock_day*1000).diff(now, 'days')
                        this.unlock_day = date + 1;
                    }
                    this.typeLock = type
                    this.resetUnlockedTime();
        }
    },
    watch: {
        'account': function () {
            this.loadSettingsLock();
            this.loadInfoContract();
        },
    },
}
</script>

<style scoped>

</style>