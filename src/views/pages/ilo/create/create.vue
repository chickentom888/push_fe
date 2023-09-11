<template>
    <div class="box-dex push-lock mb-5">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <span class="decor5"> <img alt="" src="@/assets/images/decor1.png"></span>
            <span class="decor18"> <img alt="" src="@/assets/images/decor2.png" class="w-75"></span>
            <div class="box-swap safety-alert p-4 mb-5">
                <p class="fs-24 fw-bold">ILO (Fair sale and 50% off fee)</p>

                <ul class="listilo mb-3">
                    <li>
                        <span class="cl000"> Lock liquidity </span>
                    </li>
                    <li>
                        <span class="cl000"> Listing </span>
                    </li>
                    <li>
                        <span class="cl000"> Whitelist </span>
                    </li>
                    <li>
                        <span class="cl000"> Fundrasing platform </span>
                    </li>
                </ul>
                <p class="cl9F9 f-Nunito"> Round 0: (40% of the presale hardcap can be sold before the sale starts by
                    users willing to burn
                    PUSH) </p>

                <p class="cl9F9 f-Nunito"> Round 1: (5 mins) exclusively for PUSH holders</p>

                <p class="cl9F9 f-Nunito m-0"> Round 2: Open to everyone</p>
            </div>
            <div class="box-swap f-Nunito p-4 mb-5">
                <p class="fs-24 fw-bold text-center">LAUNCHPAD</p>
                <p>Run a decentralized Initial Liquidity Offering (ILO) to raise funds and liquidity
                    for your project
                    with our trusted decentralized launchpad.</p>
                <p class="text-center"><img alt="" src="@/assets/images/icon-launch.svg"></p>
                <p class="text-center cl9F9"> Do you want to be incubated by PHPad? Please send us an email via:<a
                    href="#" class="clgreen"> Defi@phpad.io </a>
                </p>

                <p class="text-center cl9F9"> If you would like to be incubated by PHPad, please do not create a sale.
                    AntPad
                    will support with
                    Marketing, KYC, Audit, Hard caps and sale parameters.</p>
                <p class="cl9F9"> Raise around $300k. The best presales raise less. Raise so there is room for your
                    market cap to grow. </p>

                <p class="cl9F9"><span class="clgreen"> Use token vesting</span> to lock as many of your team tokens as
                    you can to increase trust in
                    your project and
                    your tokenomics score in the sale. </p>
                <p class="cl9F9">
                    <span class="clgreen"> Use token vesting </span>to send tokens to marketers if you need to give
                    tokens to anyone before a presale
                    concludes. This ensures no one can create a pair on an exchange with liquidity before a sale
                    concludes
                    and set the initial price (this will cause the sale to fail). </p>

                <p class="cl9F9"> Build trust by applying for Audit and KYC . Alternatively use our PH Mint to mint a
                    pre-audited token. </p>
            </div>
            <div class="box-swap">
                <div class="top-swap m-0 pl-5 pr-5 d-flex align-items-center justify-content-center">
                    <h3 class="text-center">Create Your Sale</h3>
                </div>
                <form v-if="account" class="createsale mt-4">
                    <div class="form-group">
                        <label>Token address</label>
                        <input type="text" class="form-control" v-model="contract_address" @change="loadContract()" :placeholder="$t('placeholder.01')">
                    </div>
                    <div class="form-group">
                        <label>Buyers participate with:</label>

                        <div class="select-style position-relative">
                            <ul class="select">
                                <li class="select_items" style="padding-top: 55px;">
                                    <input class="select_expand" type="radio" name="awesomeness" id="awesomeness-opener" />
                                    <label class="select_closeLabel" for="awesomeness-close"></label>

                                    <ul class="select_options pl-0">
                                        <li class="select_option" @click="onChangeBaseToken(item)" v-for="(item, idx) in baseTokens" :key="idx">
                                            <input class="select_input" type="radio" name="awesomeness" :id="'pancakeswap_'+item['token_symbol']" />
                                            <label class="select_label pl-0" :for="'pancakeswap_'+item['token_symbol']">
                                                <img width="32" alt="" :src="item['avatar'] ? item['avatar'] : ''" class="mr-2 ml-2">
                                                {{item['token_symbol']}}</label>
                                        </li>
                                    </ul>

                                    <label class="select_expandLabel" for="awesomeness-opener"></label>
                                </li>
                            </ul>
                        </div>

                        <div class="d-flex f-Nunito justify-content-between mt-2" v-show="selected_symbol.token_symbol">
                            <span>{{ exchange ? exchange['exchange_name'] : '' }} pair to be created:</span>
                            <span>{{ selected_symbol.token_symbol }} / {{ contract.symbol ? contract.symbol : '?' }}</span>
                        </div>

                        <div class="content-creatot mt-3 f-Nunito" v-show="contract.show && !existed_liquid">
                            <div class="d-flex justify-content-between mb-4">
                                <span class="fs-24 fw-bold">Sale creator</span>
                                <span class="f-Nunito"><strong>{{wallet && wallet['account'] ? formatAddress(wallet['account']) : '--' }}</strong></span>
                            </div>

                            <p class="f-Nunito">This account will be the only account capable of adding sale
                                information, editing
                                sale contract paramaters
                                and unlocking liquidity.</p>
                            <p class="f-Nunito clgreen mb-4">We recommend a minimum liquidity percentage of 60%, and
                                a
                                minimum lock of 1 year.</p>

                            <form class="formcontrol">
                                <div class="form-group">
                                    <label class="d-flex align-items-center justify-content-between">How many {{ contract.symbol }} are up for sale?
                                        <span class="cl5D fw-bold">Balance: {{ formatPrice(contract.user_balance) }}</span></label>
                                    <div class="position-relative mb-2">
                                        <input type="text" class="form-control" @change="changeAmountSaleToken" v-model="amount_sale_token" placeholder="0">
                                        <div class="valuebnb">
                                            <span class="f-Nunito fs-18">{{ contract.symbol }}</span>
                                        </div>
                                    </div>
                                    <p class="text-danger fs-14 f-Nunito" v-show="error.amount_sale_token">{{ error.amount_sale_token }}</p>
                                    <p class="text-danger fs-14 f-Nunito">A minimum divisibility of 10,000 units
                                        (including decimals) is required for a sale.</p>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>Softcap</label>
                                        <div class="position-relative mb-2">
                                            <input id="sortCap" type="text" class="form-control"
                                                   @change="changeSoftCap" v-model="soft_cap" placeholder="0">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ selected_symbol.token_symbol }}</span>
                                            </div>
                                        </div>
                                        <p class="text-danger fs-14 f-Nunito"
                                               v-show="this.error['soft_cap']['show']">{{ this.error['soft_cap']['msg'] }}</p>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="text-right">Hardcap</label>
                                        <div class="position-relative mb-2">
                                            <input type="text" class="form-control"
                                                   @change="changeHardCap" v-model="hard_cap" placeholder="0">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ selected_symbol.token_symbol }}</span>
                                            </div>
                                        </div>
                                        <small class="text-danger fs-14 f-Nunito"
                                               v-show="this.error['hard_cap']['show']">{{ this.error['hard_cap']['msg'] }}</small>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group d-flex col-md-6">
                                        <div class="bg-gray w-100 p-3">
                                            <p class="f-Nunito fs-13">Sale rate</p>
                                            <p class="f-Nunito fs-18 fw-bold">1 {{ selected_symbol.token_symbol }} = <span>{{price > 0 ? price.toFixed(2) : 0 }}</span>
                                                {{ contract.symbol }}</p>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <div class="bg-gray p-3">
                                            <p class="f-Nunito fs-13">{{ exchange ? exchange['exchange_name'] : '' }} Listing rate</p>
                                            <p class="f-Nunito fs-18 fw-bold">1 {{ selected_symbol.token_symbol }} =
                                                {{ listing_price ? listing_price.toFixed(2) : 0 }}
                                                {{ contract.symbol }}</p>
                                            <ul class="nav switch-item mb-3">
                                                <li><a href="javascript:void(0)" data-toggle="tab" aria-expanded="true"
                                                       :class="listing_rate_percent === 0 ? 'active' : ''" @click="changeRate(0)"> 0%</a>
                                                </li>
                                                <li><a href="javascript:void(0)" data-toggle="tab" aria-expanded="false"
                                                       :class="listing_rate_percent === 10 ? 'active' : ''" @click="changeRate(10)">10%</a>
                                                </li>
                                                <li><a href="javascript:void(0)" data-toggle="tab" aria-expanded="false"
                                                       :class="listing_rate_percent === 15 ? 'active' : ''" @click="changeRate(15)">15%</a>
                                                </li>
                                                <li><a href="javascript:void(0)" data-toggle="tab" aria-expanded="false"
                                                       :class="listing_rate_percent === 25 ? 'active' : ''" @click="changeRate(25)">25%</a>
                                                </li>
                                                <li><a href="javascript:void(0)" data-toggle="tab" aria-expanded="false"
                                                       :class="listing_rate_percent === 30 ? 'active' : ''" @click="changeRate(30)">30%</a>
                                                </li>
                                            </ul>
                                            <p class="f-Nunito fs-13">Percent of raised {{ selected_symbol.token_symbol }} used for liquidity</p>
                                            <div>
                                                <span id="rangeValue">{{ valueSlider }}%</span>
                                                <div class="slidecontainer">
                                                    <vue-slider
                                                        class="styled-slider slider-progress w-100"
                                                        ref="slider"
                                                        @change="changeSlider($event)"
                                                        v-model="valueSlider"
                                                        v-bind="optionsSlider">
                                                    </vue-slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6 offset-6">
                                        <p class="f-Nunito cl9F9 fs-13 mb-2">Additional tokens required for liquidity if hardcap is met</p>
                                        <p class="f-Nunito fs-18 fw-bold">{{ formatPrice(sale_token_liquid) + ' ' + contract.symbol }}</p>
                                    </div>
                                </div>
                            </form>
                            <hr>
                            <p class="fs-24 fw-bold mb-2">Sale prediction</p>
                            <p>Use the slider to predict fee and liquidity amounts depending on amounts raised in
                                sale.</p>
                            <div class="mb-5">
                                <div>
                                    <span id="rangeValue">{{ valueSliderFee }} {{ selected_symbol.token_symbol }}</span>
                                    <div class="slidecontainer">
                                        <vue-slider
                                            class="styled-slider slider-progress w-100"
                                            ref="sliderFee"
                                            @change="changeSliderFee($event)"
                                            v-model="valueSliderFee"
                                            v-bind="optionsSliderFee">
                                        </vue-slider>
                                    </div>
                                </div>
                            </div>
                            <form class="formcontrol">
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label>Pushswap Fee</label>
                                        <div class="position-relative active  mb-2">
                                            <input readonly class="form-control"
                                                   v-model="fee['base_fee_amount']" placeholder="">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ selected_symbol.token_symbol }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>{{ selected_symbol.token_symbol }} liquidity</label>
                                        <div class="position-relative active mb-2">
                                            <input type="text" readonly class="form-control"
                                                   v-model="fee['base_liquidity_amount']" placeholder="">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ selected_symbol.token_symbol }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>Your {{ selected_symbol.token_symbol }}</label>
                                        <div class="position-relative active mb-2">
                                            <input type="text" readonly class="form-control"
                                                   v-model="fee['base_amount_receive']" placeholder="">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ selected_symbol.token_symbol }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label>Pushswap Fee</label>
                                        <div class="position-relative active  mb-2">
                                            <input type="text" readonly class="form-control"
                                                   v-model="fee['sold_fee_amount']" placeholder="">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ contract.symbol }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>{{ contract.symbol }} liquidity</label>
                                        <div class="position-relative active mb-2">
                                            <input type="text" readonly class="form-control"
                                                   v-model="fee['sold_liquidity_amount']" placeholder="">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ contract.symbol }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label>{{ contract.symbol }} sold</label>
                                        <div class="position-relative active mb-2">
                                            <input type="text" readonly class="form-control"
                                                   v-model="fee['sold_amount']" placeholder="">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ contract.symbol }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label>{{ selected_symbol['token_symbol'] }} allocation per user</label>
                                        <div class="position-relative mb-2">
                                            <input type="text" class="form-control" @change="checkAllowcation"
                                                   v-model="limit_per_buyer" value="0">
                                            <div class="valuebnb">
                                                <span class="f-Nunito fs-18">{{ selected_symbol['token_symbol'] }}</span>
                                            </div>
                                        </div>
                                        <p class="text-danger cl9F9 fs13 f-Nunito" v-show="error.limit_per_buyer">{{ error.limit_per_buyer.msg }}</p>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="text-right">Lock Liquidity for</label>
                                        <select class="form-control" v-model="lock_period">
                                            <option value="1M">1 month</option>
                                            <option value="2M">2 months</option>
                                            <option value="3M">3 months</option>
                                            <option value="6M">6 months</option>
                                            <option selected value="1y">1 year</option>
                                            <option value="2y">2 years</option>
                                            <option value="3y">3 years</option>
                                            <option value="4y">4 years</option>
                                            <option value="5y">5 years</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <hr class="mb-4">
                            <form class="formcontrol">
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <label class="fs-24 fw-bold">Start Date</label>
                                        <div class="position-relative mb-2">
                                            <div class="formwrapper">
                                                <input type="datetime-local"
                                                       @change="startTime($event)"
                                                       v-model="start_time" name="" value=""
                                                       class="form-control f-Nunito fs-18">
                                            </div>
                                        </div>
                                        
                                        <p class=" fs-14 f-Nunito"
                                           v-show="!this.error['time']['show']">
                                            Sale should ideally start 1 week from
                                            today to give
                                            you time to raise awareness
                                        </p>
                                        <p class="text-danger fs-14 f-Nunito"
                                            v-show="this.error['time']['show']">
                                                 {{ this.error['time']['msg'] }}
                                        </p>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="fs-24 fw-bold">End Date</label>
                                        <div class="position-relative mb-2">
                                            <input type="datetime-local"
                                                   @change="endTime($event)"
                                                   v-model="end_time" name="" value=""
                                                   class="form-control f-Nunito fs-18">

                                        </div>
                                        <p class=" fs-14 f-Nunito"
                                           v-show="!this.error['end_time']['show']">
                                            If your end time is before the current
                                            time. Sale will
                                            instantly fail.
                                        </p>
                                        <p class="text-danger fs-14 f-Nunito"
                                            v-show="this.error['end_time']['show']">
                                                 {{ this.error['end_time']['msg'] }}
                                        </p>
                                    </div>
                                </div>

                            </form>
                            <div class="round mb-3">
                                <div class="d-flex" >
                                <div class="toggle  mr-2 d-flex">
                                    <input type="checkbox" v-model="round_0" id="a" @click="round_0 = !round_0" />
                                    <label for="a">
                                    </label>
                                    </div>
                                <label class="label" for="option1">Round 0</label>
                                </div>
                                <p> In round 0, Investor can purchase token before the sale stage begin </p>

                                <p> - This round is only for those who commit to burn 20,000 PUSH token</p>

                                <p> - Investors can invest in full slot</p>

                                <p> - The maximum of allocation is designed for Round 0 which made up 30% of hardcap
                                </p>

                                <p> * The start time of the event is right after you complete the pre-sale form and
                                    it
                                    will be ended within 10 mins before round 1 begin.</p>

                                <p> * $PUSH will be burnt right after token sale success</p>
                            </div>

                            <div class="round mb-5">
                                <div class="d-flex" >
                                <div class="toggle  mr-2 d-flex">
                                    <input type="checkbox" id="b" v-model="round_1" @click="round_1 = !round_1"/>
                                    <label for="b">
                                    </label>
                                    </div>
                                <label class="label" for="option1">Round 1</label>
                                </div>
                                <p>PUSH holders can purchase tokens in advance within the first 5 minutes when sale
                                    starting</p>

                                <p>- The entry requirement: Hold at least 200,000 PUSH token on personal wallet.</p>

                                <p>Sale: The sale is certainly to open to everyone when round 1 ended.</p>

                                <p>* If the token sale did not reach soft cap , the project owner can get back their
                                    token, and investors can get back your $PUSH

                                </p>
                            </div>
                            <hr>
                            <div class="row mt-5 mb-5">
                                <div class="col-md-6 d-flex">

                                    <div class="push-box w-100">
                                        <p class="fs-24 fw-bold">Fees</p>
                                        <ul class="list">
                                            <li class="fs-16 mb-2">
                                                <span class="cl9F9">Sale & Locking fee</span>
                                                <span class="cl000 fw-bold">
                                                    {{ dataPost ? dataPost.creation_fee : 0 }}
                                                    {{ exchange && exchange['platform'] ? showPlatform(exchange['platform']) : '' }}
                                                </span>
                                            </li>
                                            <li class="fs-16 mb-2">
                                                <span class="cl9F9">{{ selected_symbol.token_symbol }} raised fee</span>
                                                <span class="cl000 fw-bold">{{ dataPost ? dataPost.base_fee_percent : 0 }}%</span>
                                            </li>
                                            <li class="fs-16 mb-2">
                                                <span class="cl9F9">{{ contract.symbol }} sold fee</span>
                                                <span class="cl000 fw-bold">{{ dataPost ? dataPost.token_fee_percent : 0 }}%</span>
                                            </li>
                                            <li class="fs-16">
                                                <span class="cl9F9">PUSH {{ exchange ? exchange['exchange_name'] : '' }} locking fee</span>
                                                <span class="cl000 fw-bold">&nbsp;</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="push-box">
                                        <p class="fs-24 fw-bold">Tokenomics</p>
                                        <div>
                                            <doughnut-chart
                                                :data="chartData([this.amount_sale_token, this.sale_token_liquid, this.amount_fee_token, this.amount_remain_token, 0, 0])"
                                                :options="chartOptions" :width="200" :height="200"
                                                class="mx-auto"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <p class="text-center mt-5">Total {{ contract.symbol }} required</p>
                            <p class="fs-24 fw-bold text-center">{{ formatPrice_total() + ' ' + contract.symbol }}</p>
                            <h4 v-show="error.show" class="text-danger text-center">You do not have enough tokens in
                                your wallet.</h4>
                            <p class="text-center fs-13 mb-2"> Amount for sale: {{ formatPrice(amount_sale_token) }}</p>

                            <p class="text-center fs-13 mb-2"> Amount for liquidity: {{ formatPrice(sale_token_liquid) }}</p>

                            <p class="text-center fs-13"> Fees: {{dataPost ? formatPrice(amount_sale_token * dataPost['token_fee_percent'] / 100) : 0 }}</p>
                            <p class="round fs-14 text-danger mt-5 mb-5">Please note: If the sale is a success, any unsold tokens are sent to the 0x00...dEaD burn address.</p>
                            <div class="d-flex mb-4">
                                <button v-if="allowanceButton" type="button" @click="approveToken()" class="btn-blue linear-blue mr-3 fill w-50 text-center radius6" >
                                    Approve <img alt="" src="@/assets/images/dot-l-white.svg" class="ml-2">
                                </button>
                                <button v-else type="button" class="btn-gray mr-3 fill w-50 text-center radius6" >
                                    Approve<img alt="" src="@/assets/images/dot-l-white.svg" class="ml-2">
                                </button>
                                <button v-if="!allowanceButton" type="button" :disabled='allowanceButton' @click="createPresale()" class="btn-blue linear-blue btn-bluebig w-50" >
                                    Create Sale
                                    <img alt="" src="@/assets/images/dot-l-white.svg" class="ml-3">
                                </button>
                                <button v-else type="button" :disabled='allowanceButton' class="btn-gray btn-bluebig w-50" >
                                    Create Sale
                                    <img alt="" src="@/assets/images/dot-l-black.svg" class="ml-3">
                                </button>
                            </div>
                        </div>

                    </div>

                </form>
                <form v-if="!account">
                    <p class="mt-5 mb-5 text-center">
                        <a style="cursor: pointer;" @click="connectWallet()" class="linear-blue btn-blue btn-bluebig w-50" data-toggle="modal"
                            data-target="#disclaimer">
                            Connect your wallet
                            <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </a>
                    </p>
                </form>

            </div>

            <span class="decor6"> <img alt="" src="@/assets/images/decor1.png"></span>
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import doughnutChart from "@/components/doughnutChart/doughnutChart";
import vueSlider from "vue-slider-component";
import Web3, {utils} from "web3";
import BigNumber from "@/utils/bignumber.min.js";
import {settingsContract} from "@/utils/const";
import axios from "axios";
import {mapGetters} from "vuex";
import {ethers} from "ethers";
export default {
    name: "create",
    components: {
        doughnutChart,
        vueSlider,
        Loading
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
            chainIdUser: 'chainIdUser',
            account: 'account',
        })
    },
    methods: {
        showPlatform(platform) {
            platform = platform.toLowerCase();
            if (platform === 'eth') {
                return 'ETH';
            } else if (platform === 'bnb' || platform === 'bsc') {
                return 'BNB';
            } else if (platform === 'polygon') {
                return 'MATIC';
            } else {
                return '';
            }
        },
        async loadContract() {
            this.contract = {
                show: false,
                symbol: ""
            };
            if (!this.contract_address || this.contract_address.trim() === '') {
                this.contract = {
                    show: false
                };
                return;
            }
            const headers = {
                'Content-Type': 'application/json',
            }
            let formData = new FormData();
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            formData.append('contract_address', this.contract_address);
            // change when live
            formData.append('user_address', this.wallet['account']);
            formData.append('network', network);
            formData.append('platform', platform);
            this.showLoading = true;
            await axios.post(`api/token/get_info`, formData, {
                headers: headers
            }).then(res => {
                this.showLoading = false;
                if (res.data.data) {
                    this.contract = res.data.data;
                    this.contract.show = true;
                    this.checkAllowance();
                } else {
                    this.contract = {
                        show: false
                    };
                }
            }).catch(err => {
                this.showLoading = false;
                this.contract = {
                    show: false
                };
            })
        },
        async loadSettingsBaseToken() {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = '/api/registry/get_presale_setting_address?type=base_token';
            url = url + '&platform=' + platform + '&network=' + network;
            const listBaseToken = await axios.get(url);
            this.baseTokens = listBaseToken.data.data;
            if (this.baseTokens.length > 0) {
                this.selected_symbol = this.baseTokens[0]
            }
        },
        async loadSettingsPlatform() {
            let network = this.exchange['network'];
            let platform = this.exchange['platform'];
            let url = '/api/registry/get_presale_setting_platform';
            url = url + '?platform=' + platform + '&network=' + network;
            const listSettingPlatform = await axios.get(url);
            this.dataPost = listSettingPlatform.data.data.setting;
            this.reInitSliderPercent(this.dataPost['min_liquidity_percent']);
            this.settingPlatform = listSettingPlatform.data.data;
        },
        formatAddress(address) {
            return address ? address.slice(0, 6) + "..." + address.slice(-4) : '';
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        formatPrice_total() {
            let amountSaletoken = parseFloat(this.amount_sale_token) || 0;
            let value = amountSaletoken + this.sale_token_liquid + (this.dataPost ? this.amount_sale_token * this.dataPost['token_fee_percent'] / 100 : 0)
            let val = (value / 1).toFixed(2).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        changeSlider() {
            let price = this.listing_price && this.listing_price > 0 ? this.listing_price : this.price;
            this.sale_token_liquid = (this.hard_cap - (this.hard_cap * this.dataPost['base_fee_percent'] / 100)) * this.valueSlider / 100 * price;
            this.calculator();
            this.reDrawChart();
        },
        changeSliderFee() {
            this.sale_token_liquid = (this.hard_cap - (this.hard_cap * this.dataPost['base_fee_percent'] / 100)) * this.valueSlider / 100 * this.listing_price;
            this.calculator();
            this.reDrawChart();
        },
        changeRate(percent) {
            this.listing_rate_percent = percent;
            this.dataPost.listing_rate_percent = percent;
            this.listing_price = this.price - this.price * percent / 100;
            this.sale_token_liquid = (this.hard_cap - (this.hard_cap * this.dataPost['base_fee_percent'] / 100)) * this.valueSlider / 100 * this.listing_price;
            this.calculator();
            this.reDrawChart();
        },
        onChangeBaseToken(value) {
            if (!value) return;
            this.selected_symbol = value;
        },
        changeAmountSaleToken() {
            this.error.amount_sale_token = "";
            if (isNaN(this.amount_sale_token)) {
                this.error.amount_sale_token = "Must be number"
                return;
            }
            this.amount_sale_token = parseFloat(this.amount_sale_token) || 0;
            if (this.amount_sale_token <= 0) {
                this.error.amount_sale_token = "Must be > 0"
                return;
            } else {
                this.error.amount_sale_token = ""
            }
            if (this.amount_sale_token > this.contract.user_balance) {
                this.amount_sale_token = this.contract.user_balance;
            }
            if (this.amount_sale_token > this.allowanceAmount) {
                this.allowanceButton = true;
            } else {
                this.allowanceButton = false;
            }
            this.changeHardCap();
        },
        changeHardCap() {
            if (isNaN(this.hard_cap)) {
                this.error['hard_cap']['show'] = true;
                this.error['hard_cap']['msg'] = 'Must be number';
                return;
            }
            this.soft_cap = parseFloat(this.soft_cap) || 0;
            this.hard_cap = parseFloat(this.hard_cap) || 0;
            this.soft_cap = this.soft_cap >= 0 ? this.soft_cap : 0;
            this.hard_cap = this.hard_cap > this.soft_cap ? this.hard_cap : this.soft_cap;
            if (this.hard_cap == 0) {
                this.error['hard_cap']['show'] = true;
                this.error['hard_cap']['msg'] = 'Must be > 0';
                this.price = 0;
                this.listing_price = 0;
                this.sale_token_liquid = 0;
                return;
            }
            if (this.hard_cap == this.soft_cap) {
                this.error['hard_cap']['show'] = true;
                this.error['hard_cap']['msg'] = 'Must be > than softcap!';
                return;
            }
            if (this.soft_cap > this.hard_cap) {
                this.error['hard_cap']['show'] = true;
                this.error['hard_cap']['msg'] = 'Hardcap must be > Softcap!';
            }
            this.price = this.amount_sale_token / this.hard_cap;
            this.listing_price = this.price - this.price * this.listing_rate_percent / 100;
            this.sale_token_liquid = (this.hard_cap - (this.hard_cap * this.dataPost['base_fee_percent'] / 100)) * this.valueSlider / 100 * this.listing_price;
            this.valueSliderFee = 1;
            this.calculator();
            this.reDrawChart();
            this.error['hard_cap']['show'] = false;
            this.error['hard_cap']['msg'] = '';
            this.reInitSlider();
        },
        changeSoftCap() {
            if (isNaN(this.soft_cap)) {
                this.error['soft_cap']['show'] = true;
                this.error['soft_cap']['msg'] = 'Must be number';
                return;
            }
            this.soft_cap = parseFloat(this.soft_cap) || 0;
            this.hard_cap = parseFloat(this.hard_cap) || 0;
            this.soft_cap = this.soft_cap >= 0 ? this.soft_cap : 0;
            if (this.soft_cap == 0) {
                this.error['soft_cap']['show'] = true;
                this.error['soft_cap']['msg'] = 'Must be > 0';
                return;
            }
            if (this.hard_cap == this.soft_cap) {
                this.error['hard_cap']['show'] = true;
                this.error['hard_cap']['msg'] = 'Must be > than softcap!';
                return;
            }
            this.error['soft_cap']['show'] = false;
            this.error['soft_cap']['msg'] = '';
            if (this.soft_cap > this.hard_cap) {
                if (this.hard_cap > 0) {
                    this.error['soft_cap']['show'] = true;
                    this.error['soft_cap']['msg'] = 'Sortcap must be < Hardcap!';
                    return;
                } else {
                    this.error['hard_cap']['show'] = true;
                    this.error['hard_cap']['msg'] = 'Must be > ' + this.soft_cap;
                    return;
                }
            }
            this.valueSliderFee = 1;
            this.calculator();
            this.reInitSlider();
        },
        calculator() {
            this.fee['base_fee_amount'] = this.valueSliderFee * this.dataPost['base_fee_percent'] / 100;
            this.fee['base_liquidity_amount'] = (this.valueSliderFee - this.fee['base_fee_amount']) * this.valueSlider / 100;
            this.fee['base_amount_receive'] = (this.valueSliderFee - this.fee['base_liquidity_amount'] - this.fee['base_fee_amount']);
            this.fee['sold_fee_amount'] = this.valueSliderFee * this.price * this.dataPost['token_fee_percent'] / 100;
            this.fee['sold_liquidity_amount'] = ((this.valueSliderFee - this.fee['base_fee_amount']) * this.listing_price) * this.valueSlider / 100;
            this.fee['sold_amount'] = this.valueSliderFee * this.price;
            this.fee['base_fee_amount'] = this.fee['base_fee_amount'] > 0 ? this.formatPrice(this.fee['base_fee_amount']) : 0.00;
            this.fee['base_liquidity_amount'] = this.fee['base_liquidity_amount'] > 0 ? this.formatPrice(this.fee['base_liquidity_amount']) : 0.00;
            this.fee['base_amount_receive'] = this.fee['base_amount_receive'] > 0 ? this.formatPrice(this.fee['base_amount_receive']) : 0.00;
            this.fee['sold_fee_amount'] = this.fee['sold_fee_amount'] > 0 ? this.formatPrice(this.fee['sold_fee_amount']) : 0.00;
            this.fee['sold_liquidity_amount'] = this.fee['sold_liquidity_amount'] > 0 ? this.formatPrice(this.fee['sold_liquidity_amount']) : 0.00;
            this.fee['sold_amount'] = this.fee['sold_amount'] > 0 ? this.formatPrice(this.fee['sold_amount']) : 0.00;
        },
        reInitSlider() {
            const steps = 100;
            this.optionsSliderFee.max = this.hard_cap;
            this.optionsSliderFee.min = this.soft_cap;
            this.optionsSliderFee.interval = parseFloat(((this.hard_cap - this.soft_cap) / steps).toFixed(3))
            this.valueSliderFee = this.soft_cap
        },
        reInitSliderPercent(value) {
            this.optionsSlider.min = value;
            this.valueSlider = value
        },
        reDrawChart() {
            this.amount_fee_token = this.amount_sale_token * this.settingPlatform['setting']['token_fee_percent'] / 100;
            this.amount_remain_token = (this.contract['total_supply'] || 0) - this.amount_sale_token - this.sale_token_liquid - (this.amount_sale_token * this.settingPlatform['setting']['token_fee_percent'] / 100);
        },
        checkAllowcation() {
            this.error.limit_per_buyer = "";
            if (this.limit_per_buyer === "" || isNaN(this.limit_per_buyer)) {
                this.limit_per_buyer = 0;
            }
            this.limit_per_buyer = parseFloat(this.limit_per_buyer) || 0;
            if (!this.limit_per_buyer || this.limit_per_buyer === 'undefined' || this.limit_per_buyer <= 0) {
                this.error.limit_per_buyer = "Must be > 0";
                this.error_allowcation = false;
                return;
            } else {
                this.error.limit_per_buyer = "";
            }
            this.error_allowcation = parseInt(this.hard_cap / this.limit_per_buyer) < this.min_limit_per_buyer;
        },
        startTime() {
            let start_time = new Date(this.start_time).getTime();
            this.error['time']['show'] = false;
            this.error['time']['msg'] = null;
            if ((new Date()).getTime() >= start_time) {
                this.error['time']['show'] = true;
                this.error['time']['msg'] = 'Your start date must be after the now date';
            }
            if (this.end_time && parseInt((new Date(this.end_time)).getTime()) < start_time) {
                this.error['time']['show'] = true;
                this.error['time']['msg'] = 'Your end date must be after the start date';
            }
            //validate time start
        },
        endTime() {
            //validate time end
            let startTime = this.start_time;
            let endTime = this.end_time;
            this.error['end_time']['show'] = false;
            this.error['end_time']['msg'] = null;
            if (endTime) {
                if (!startTime) {
                    this.error['end_time']['show'] = true;
                    this.error['end_time']['msg'] = 'Your end date must be after the start date';
                    return;
                }
                endTime = parseInt((new Date(endTime)).getTime() / 1000);
                startTime = parseInt((new Date(startTime)).getTime() / 1000);
                if (endTime <= startTime) {
                    this.error['end_time']['show'] = true;
                    this.error['end_time']['msg'] = 'Your end date must be after the start date';
                }
            } else {
                return false;
            }
        },
        async approveToken() {
            //check connect
            let saleTokenAddress = this.contract_address;
            let saleTokenRequired = utils.randomHex(32).toString();
            if (saleTokenRequired <= 0) {
                //modal error
                this.$store.commit("setPopupError", {
                    isShow: true,
                    message: ""
                });
                // alert('Invalid sale token amount');
                return;
            }
            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.wallet.account,
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
            const tokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], saleTokenAddress)
            // modal processing
            this.$store.commit("setPopupWallet", true);
            let presale_generator_address = this.exchange['presale_generator_address'];
            try {
                let approveToken = await tokenContract.methods.approve(presale_generator_address, saleTokenRequired).send(obj).on('transactionHash', function (hash) {
                    console.log("Please wait a minute to complete your transaction!");
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // alert("Error");
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (approveToken.status) {
                    // modal success
                    this.$toaster.success('Success!')
                    this.allowanceButton = false;
                } else {
                    // modal error
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                    console.log("error", approveToken);
                }
            } catch (e) {
                this.$store.commit("setPopupWallet", false);
            }

        },
        formatDecimal(number, decimal) {
            number = number.toString();
            number = number.replace(/,/g, "");
            let array = number.split('.');
            let result = array[0];
            decimal = decimal >= 8 ? 8 : decimal;
            if (array[1] && decimal > 0) {
                array[1] = array[1].substr(0, decimal);
                result = result + '.' + array[1];
            }
            return parseFloat(result);
        },

        async createPresale() {
            let saleTokenAmount = parseFloat(this.amount_sale_token) || 0;
            if (!saleTokenAmount || saleTokenAmount <= 0) {
                this.error.amount_sale_token = "Must be > 0"
                return;
            }
            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.wallet.account,
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
            let saleTokenDecimals = parseInt(this.contract.decimals);
            saleTokenAmount = this.formatDecimal(saleTokenAmount, saleTokenDecimals);
            saleTokenAmount = (new BigNumber(saleTokenAmount)).mul((new BigNumber(10)).pow(saleTokenDecimals));
            saleTokenAmount = utils.toBN(saleTokenAmount).toString();

            let tokenPrice = parseFloat(this.price) || 0;
            tokenPrice = this.formatDecimal(tokenPrice, saleTokenDecimals);
            tokenPrice = (new BigNumber(tokenPrice)).mul((new BigNumber(10)).pow(saleTokenDecimals));
            tokenPrice = utils.toBN(tokenPrice).toString();

            let baseTokenDecimals = parseInt(this.selected_symbol.token_decimals);
            let limitPerBuyer = parseFloat(this.limit_per_buyer) || 0;
            if (!limitPerBuyer || limitPerBuyer === 'undefined') {
                this.error_allowcation = true;
                console.log('limitPerBuyer', limitPerBuyer);
                this.error.limit_per_buyer = "Must be > 0";
                return
            } else {
                this.error_allowcation = false;
            }
            limitPerBuyer = this.formatDecimal(limitPerBuyer, baseTokenDecimals);
            limitPerBuyer = (new BigNumber(limitPerBuyer)).mul((new BigNumber(10)).pow(baseTokenDecimals));
            limitPerBuyer = utils.toBN(limitPerBuyer).toString();

            let hardCap = parseFloat(this.hard_cap) || 0;
            hardCap = this.formatDecimal(hardCap, baseTokenDecimals);
            if (!hardCap || hardCap === 'undefined' || hardCap === 0) {
                this.error['hard_cap']['show'] = true;
                this.error['hard_cap']['msg'] = 'Hard cap invalid!';
                console.log('hardCap', hardCap)
                return;
            }
            hardCap = (new BigNumber(hardCap)).mul((new BigNumber(10)).pow(baseTokenDecimals));
            hardCap = utils.toBN(hardCap).toString();

            let softCap = parseFloat(this.soft_cap);
            softCap = this.formatDecimal(softCap, baseTokenDecimals);
            softCap = (new BigNumber(softCap)).mul((new BigNumber(10)).pow(baseTokenDecimals));
            softCap = utils.toBN(softCap).toString();

            let liquidityPercent = parseInt(parseFloat(this.valueSlider) * 10);

            let listingPrice = parseFloat(this.listing_price) || 0;
            if (!listingPrice || listingPrice === 0) {
                console.log('error listingPrice', listingPrice);
                return;
            }
            listingPrice = this.formatDecimal(listingPrice, saleTokenDecimals);
            listingPrice = (new BigNumber(listingPrice)).mul((new BigNumber(10)).pow(saleTokenDecimals));
            listingPrice = utils.toBN(listingPrice).toString();

            let startTime = this.start_time;
            if (!startTime || startTime === 'undefined') {
                this.error['time']['show'] = true;
                this.error['time']['msg'] = 'Your start date invalid!';
                console.log('startTime', startTime);
                return;
            }
            startTime = parseInt((new Date(startTime)).getTime() / 1000);

            let endTime = this.end_time;
            if (!endTime || endTime === 'undefined') {
                this.error['time']['show'] = true;
                this.error['time']['msg'] = 'Your end date invalid!';
                console.log('endTime', endTime);
                return;
            }

            endTime = parseInt((new Date(endTime)).getTime() / 1000);
            if (startTime >= endTime) {
                this.error['time']['show'] = true;
                this.error['time']['msg'] = 'Time invalid!';
                console.log('startTime >= endTime', startTime, endTime);
                return;
            }
            let lockPeriod = 60 * 60 * 24 * 30 * 12;
            if (this.lock_period === '1M') {
                lockPeriod = 60 * 60 * 24 * 30;
            } else if (this.lock_period === '2M') {
                lockPeriod = 60 * 60 * 24 * 30 * 2;
            } else if (this.lock_period === '3M') {
                lockPeriod = 60 * 60 * 24 * 30 * 3;
            } else if (this.lock_period === '6M') {
                lockPeriod = 60 * 60 * 24 * 30 * 6;
            } else if (this.lock_period === '1y') {
                lockPeriod = 60 * 60 * 24 * 30 * 12;
            } else if (this.lock_period === '2y') {
                lockPeriod = 60 * 60 * 24 * 30 * 12 * 2;
            } else if (this.lock_period === '3y') {
                lockPeriod = 60 * 60 * 24 * 30 * 12 * 3;
            } else if (this.lock_period === '4y') {
                lockPeriod = 60 * 60 * 24 * 30 * 12 * 4;
            } else if (this.lock_period === '5y') {
                lockPeriod = 60 * 60 * 24 * 30 * 12 * 5;
            }

            let activeZeroRound = this.round_0 === true ? 1 : 0
            let activeFirstRound = this.round_1 === true ? 1 : 0;
            let vesting = 0;
            let saleTokenAddress = this.contract_address;
            let baseTokenAddress = this.selected_symbol.token_address;

            let params = [
                saleTokenAmount,
                tokenPrice,
                limitPerBuyer,
                hardCap,
                softCap,
                liquidityPercent,
                listingPrice,
                startTime,
                endTime,
                lockPeriod
            ];
            let round = [activeZeroRound, activeFirstRound, vesting];
            let creationFee = parseFloat(this.dataPost['creation_fee']) || 0;
            creationFee = (new BigNumber(creationFee)).mul((new BigNumber(10)).pow(18));
            creationFee = utils.toBN(creationFee.toString())
            let web3 = new Web3(window.ethereum);
            let presale_generator_address = this.exchange['presale_generator_address'];
            const presale = new web3.eth.Contract(settingsContract['ABI_PRESALE_GENERATOR'], presale_generator_address)
            this.$store.commit("setPopupWallet", true);
            obj['value'] = creationFee;
            try {
                let create = await presale.methods.createPresale(this.wallet.account, saleTokenAddress, baseTokenAddress, round, params, [], []).send(
                    obj
                ).on('transactionHash', function (hash) {
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                    console.log("confirmation");
                }).on('receipt', function (receipt) {
                    // this.$store.commit("setPopupProcessing", false)
                    // console.log("receipt");
                }).on('error', function (error, receipt) {
                    // alert("Error");
                    console.log("error", error, receipt);
                    this.$store.commit("setPopupWallet", false);
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                });
                // modal processing
                this.$store.commit("setPopupWallet", false);
                if (create.status) {
                    // alert('success!');
                    // modal success
                    this.$toaster.success('Success!');
                    this.$router.push({path: "/ilo", query: {current_status: 'all'}});
                } else {
                    // modal error
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: 'Create presale error!'
                    })
                }
            } catch (ex) {
                this.$store.commit("setPopupWallet", false);
                console.log(ex);
            }
        },
        checkRound() {
        },
        async checkAllowance() {
            let saleTokenAddress = this.contract_address.trim();
            if (!saleTokenAddress || saleTokenAddress === '') {
                return;
            }
            let saleTokenDecimals = parseInt(this.contract.decimals);
            let web3 = new Web3(window.ethereum);
            const web3Allowance = new web3.eth.Contract(settingsContract['ABI_TOKEN'], saleTokenAddress)
            let address = this.wallet.account;
            let presale_generator_address = this.exchange['presale_generator_address'];
            await web3Allowance.methods.allowance(address, presale_generator_address).call().then(
                resp => {
                    let dicimalsMul = (new BigNumber(10)).pow(saleTokenDecimals);
                    this.allowanceAmount = (new BigNumber(resp)).div(dicimalsMul).toString();
                    this.allowanceButton = this.amount_sale_token > this.allowanceAmount;
                }
            );
        },
        connectWallet() {
            this.$store.dispatch('connect');
        },
        chartData(data) {
            let newData = [];
            data.forEach(dt => {
                let newDt = dt;
                if (Number(dt) === dt && dt % 1 !== 0) {
                    newDt = dt.toFixed(2);
                }
                newData.push(newDt)
            });
            return {
                labels: [
                    'Presale',
                    'Liquid',
                    'Fee',
                    'Other',
                    'Locked',
                    'Unlocked',
                ],
                datasets: [{
                    data: newData,
                    hoverBorderWidth: 3,
                    borderWidth: 0,
                    hoverBorderColor: "#162231",
                    backgroundColor: [
                        '#9751BE', // presale
                        '#1381B2', //liquid
                        '#5CB8E1', //fee
                        '#ECECEC', //other
                        '#EC190D', //Locked
                        '#38EC8D', //UnLocked
                    ],
                    hoverOffset: 4,
                }]
            }
        },
    },
    created() {
        this.loadContract();
        this.loadSettingsBaseToken();
        this.loadSettingsPlatform();
        // this.testApprove();
        // this.testSend();
        //   this.$store.commit("setPopupProcessing", true)
    },
    data() {
        return {
            showLoading: false,
            fullPage: true,
            fee: {
                'base_fee_amount': 0,
                'base_liquidity_amount': 0,
                'base_amount_receive': 0,
                'sold_fee_amount': 0,
                'sold_liquidity_amount': 0,
                'sold_amount': 0,
            },
            amount_sale_token: 0,
            allowanceButton: true,
            allowanceAmount: 0,
            listing_rate_percent: 10,
            min_liquidity_percent: 60,
            settingPlatform: [],
            lock_period: '1y',
            listing_price: 0,
            price: 0,
            soft_cap: 0,
            hard_cap: 0,
            round_0: false,
            round_1: false,
            sale_token_liquid: 0,
            amount_fee_token: 0,
            amount_remain_token: 0,
            error_allowcation: false,
            contract_address: '',
            baseTokens: [],
            dataPost: {},
            limit_per_buyer: 0,
            start_time: 0,
            end_time: 0,
            min_limit_per_buyer: 200,
            user_address: null,
            contract: {
                'show': false,
            },
            existed_liquid: false,
            selected_symbol: [],
            selected_country: {},
            defaultSelectCountry: '',
            error: {
                show: false,
                msg: '',
                amount_sale_token: "",
//                limit_per_buyer: "",
                time: {
                    show: false,
                    msg: null
                },
                end_time: {
                    show: false,
                    msg: null
                },
                hard_cap: {
                    show: true,
                    msg: 'Must be > 0'
                },
                soft_cap: {
                    show: true,
                    msg: 'Must be > 0'
                },
                limit_per_buyer: {
                    show: true,
                    msg: 'Must be > 0'
                }
            },
            chartOptions: {
                radius: 30,
                tooltips: {
                    enabled: true
                },
                cutoutPercentage: 50,
                responsive: true,
                animation: {
                    animateScale: true
                }
            },
            valueSlider: 60,
            optionsSlider: {
                dotSize: 14,
                width: 'auto',
                data: null,
                dataLabel: 'label',
                dataValue: 'value',
                height: 4,
                min: this.valueSlider,
                max: 100,
                interval: 1,
            },
            valueSliderFee: 1,
            optionsSliderFee: {
                dotSize: 14,
                width: 'auto',
                data: null,
                dataLabel: 'label',
                dataValue: 'value',
                height: 4,
                min: this.soft_cap,
                max: this.hard_cap,
                interval: ((this.hard_cap - this.soft_cap) / 100 || 1)
            }
        }
    },
    watch: {
        chainIdUser: function () {
            this.contract_address = ""
        },
        'account': function () {
            this.loadContract();
        },
    },
    destroyed() {
        console.log('destroyed');
    }
}
</script>

<style scoped>
.checkboxRound{
    background: #ADADAD !important;
    width: 21px!important;
    height: 21px !important;
    border-radius: 50%;
    display: inline-block;
    top: -6px;
}
.label{
    font-size: 24px;
    font-weight: 600;
    font-family: 'Nunito';
}
.toggle {
    --toggle-width: 40px;
  --toggle-height: 25px;
  --toggle-offset: 5px;
  --toggle-outer-default: #ddd;
  --toggle-outer-active: #048459;
  --toggle-inner-default: #fff;
  --toggle-inner-active: #fff;
  
  --toggle-transition: 200ms ease-out;
  align-items: center;
}

.toggle input {
  display: none;
}

.toggle label {
  position: relative;
  display: inline-flex;
  align-items: center;
  
  width: var(--toggle-width);
  height: var(--toggle-height);
  
  background-color: var(--toggle-outer-default);
  border-radius: 100vw;
  
  cursor: pointer;
  transition: var(--toggle-transition);
}

.toggle input:checked + label {
  background-color: var(--toggle-outer-active);
}

.toggle label::before {
  content: "";
  position: absolute;
  top: var(--toggle-offset);
  left: var(--toggle-offset);
  bottom: var(--toggle-offset);
  
  aspect-ratio: 1 / 1;
  
  background-color: var(--toggle-inner-default);
  border-radius: 50%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);
  transition: var(--toggle-transition);
}

.toggle input:checked + label::before {
  background-color: var(--toggle-inner-active);
  transform: translateX(
    calc(var(--toggle-width) - var(--toggle-height))
  );
}

</style>