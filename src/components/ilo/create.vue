<template>
    <section id="ilo_create1">
        <div class="container pb-5">
            <div class="row justify-content-center">
                <div class="col-12 col-lg-10">
                    <div class="card card-teacup">
                        <div class="card-header align-items-center justify-content-center d-flex ">
                            <div class="card-title">
                                Create your presale
                            </div>
                        </div>
                        <div class="card-body" v-if="!this.wallet.active">
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-6 text-center">
                                    <a class="btn btn-pushswap rounder w-100" href="javascript:void(0)"
                                       @click="connectWallet()">
                                        Connect your wallet to continue
                                        <i class="fa-solid fa-right-long"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="card-body" v-else>
                            <div class="row">
                                <div class="col-12 mb-3">
                                    <div class="formwrapper">
                                        <label>Token address</label>
                                        <input type="text" class="form-control" v-model="contract_address"
                                               @change="loadContract()"
                                               :placeholder="$t('placeholder.01')">
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="dropdown mb-2">
                                        <label>Buyers participate with:</label>
                                        <div class="dropdown mb-2">
                                            <button class="btn btn-networkselect w-100 d-flex justify-content-between  align-items-center bg-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>
                                          <img :src="selected_symbol.avatar ? selected_symbol.avatar : ''" alt="">
                                          {{selected_symbol.token_name}}
                                        </span>
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li @click="onChangeBaseToken(item)" v-for="(item, idx) in baseTokens" :key="idx"><a class="dropdown-item ms-0" href="javascript:void(0)">{{item['token_symbol']}}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-12" v-show="selected_symbol.token_symbol">
                                        <span>{{ exchange ? exchange['exchange_name'] : '' }} pair to be created:</span>
                                        <strong class="float-end"> {{ selected_symbol.token_symbol }} /
                                            {{ contract.symbol ? contract.symbol : '?' }}</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="row" v-show="contract.show && !existed_liquid">
                                <div class="col-6">
                                    Presale creator:
                                </div>
                                <div class="col-6 text-end">
                                    <strong>{{ formatAddress(wallet['account']) }}</strong>
                                </div>
                                <div class="col-12">
                                    <p>
                                        This account will be the only account capable of adding presale
                                        information, editing presale contract paramaters and unlocking
                                        liquidity.
                                    </p>
                                    <p class="text-success">
                                        We recommend a minimum liquidity percentage of 60%, and a minimum lock
                                        of 1 year.
                                    </p>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="form-group">
                                        <label>How many {{ contract.symbol }} are up for presale?</label>
                                        <div class="float-end">
                                            Balance: {{ formatPrice(contract.user_balance) }}
                                        </div>

                                        <div class="formwrapper">
                                            <div class="thesubdata text-dark text-14">
                                                {{ contract.symbol }}
                                            </div>
                                            <input type="text" class="form-control"
                                                   @change="changeAmountSaleToken" v-model="amount_sale_token"
                                                   :placeholder="$t('placeholder.02')">
                                        </div>
                                        <small class="text-danger d-block mt-1"
                                               v-show="error.amount_sale_token">{{ error.amount_sale_token }}</small>
                                        <small class="text-warning">A minimum divisibility of 10,000 units
                                            (including decimals) is required for a presale.</small>
                                    </div>

                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label>Softcap</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ selected_symbol.token_symbol }}
                                        </div>

                                        <input id="sortCap" type="text" class="form-control"
                                               @change="changeSoftCap" v-model="soft_cap"
                                               :placeholder="$t('placeholder.03')">
                                    </div>
                                    <small class="text-danger"
                                           v-show="this.error['soft_cap']['show']">{{ this.error['soft_cap']['msg'] }}</small>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label>Hardcap</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ selected_symbol.token_symbol }}
                                        </div>

                                        <input type="text" class="form-control"
                                               @change="changeHardCap" v-model="hard_cap"
                                               :placeholder="$t('placeholder.04')">
                                    </div>
                                    <small class="text-danger"
                                           v-show="this.error['hard_cap']['show']">{{ this.error['hard_cap']['msg'] }}</small>
                                </div>

                                <div class="col-12 col-md-6 mb-3">
                                    <div class="card-body bg-secondary h-100">
                                        <div class="row ">

                                            <div class="col-12 ">
                                                <p>Presale rate</p>
                                                <h4 class="text-gold m-0">1 {{ selected_symbol.token_symbol }} =
                                                    <span v-show="price">{{ price.toFixed(2) }}</span>
                                                    {{ contract.symbol }}</h4>
                                                <p v-show="price">(1 {{ contract.symbol }} =
                                                    {{ formatDecimal(1 / price, contract.decimals) }}
                                                    {{ selected_symbol.token_symbol }})</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <div class="card-body bg-secondary h-100">
                                        <div class="row">
                                            <div class="col-12">
                                                <p class="m-0">{{ exchange ? exchange['exchange_name'] : '' }} Listing
                                                    rate</p>
                                                <h4 class="text-gold m-0">1 {{ selected_symbol.token_symbol }} =
                                                    {{ listing_price ? listing_price.toFixed(2) : 0 }}
                                                    {{ contract.symbol }}</h4>
                                                <p v-show="listing_price">
                                                    (1 {{ contract.symbol }} = {{
                                                        listing_price ? formatDecimal(1 / listing_price, contract.decimals) : 0
                                                    }} {{ selected_symbol.token_symbol }})
                                                </p>

                                                <div class="teacup-radio">
                                                    <label>
                                                        <input type="radio" name="ilo_create2_radio_price"
                                                               value="0" @click="changeRate(0)">
                                                        <span>0%</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="ilo_create2_radio_price"
                                                               value="10" @click="changeRate(10)" checked="">
                                                        <span>10%</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="ilo_create2_radio_price"
                                                               value="25" @click="changeRate(25)">
                                                        <span>25%</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="ilo_create2_radio_price"
                                                               value="50" @click="changeRate(50)">
                                                        <span>50%</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name="ilo_create2_radio_price"
                                                               value="75" @click="changeRate(75)">
                                                        <span>75%</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <p class="m-0">Percent of raised {{ selected_symbol.token_symbol }} used
                                                    for
                                                    liquidity</p>
                                                <h4 class="text-center">{{ valueSlider }}%</h4>
                                                <div class="slidecontainer">
                                                    <vue-slider
                                                        class="styled-slider slider-progress w-100"
                                                        ref="slider"
                                                        @change="changeSlider($event)"
                                                        v-model="valueSlider"
                                                        v-bind="optionsSlider"
                                                    ></vue-slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 ">
                                    <p>Additional tokens required for liquidity if hardcap is met</p>
                                    <h3>{{ formatPrice(sale_token_liquid) + ' ' + contract.symbol }}</h3>
                                </div>
                                <div class="col-12">
                                    <hr>
                                </div>
                                <div class="col-12 mb-3">
                                    <h3>Presale prediction</h3>
                                    <p>Use the slider to predict fee and liquidity amounts depending on amounts
                                        raised in presale.</p>
                                </div>

                                <div class="col-12 mb-3">
                                    <h3 class="text-center">{{ valueSliderFee }}
                                        {{ selected_symbol.token_symbol }}</h3>
                                    <div class="slidecontainer">
                                        <vue-slider
                                            class="styled-slider slider-progress w-100"
                                            ref="sliderFee"
                                            @change="changeSliderFee($event)"
                                            v-model="valueSliderFee"
                                            v-bind="optionsSliderFee"
                                        ></vue-slider>
                                    </div>
                                </div>

                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <label>PHEx fee</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ selected_symbol.token_symbol }}
                                        </div>
                                        <input type="text" readonly class="form-control"
                                               v-model="fee['base_fee_amount']">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <label>{{ selected_symbol.token_symbol }} liquidity</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ selected_symbol.token_symbol }}
                                        </div>
                                        <input type="text" readonly class="form-control"
                                               v-model="fee['base_liquidity_amount']">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <label>Your {{ selected_symbol.token_symbol }}</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ selected_symbol.token_symbol }}
                                        </div>
                                        <input type="text" readonly class="form-control"
                                               v-model="fee['base_amount_receive']">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <label>PHEx fee</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ contract.symbol }}
                                        </div>
                                        <input type="text" readonly class="form-control"
                                               v-model="fee['sold_fee_amount']">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <label>{{ contract.symbol }} liquidity</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ contract.symbol }}
                                        </div>
                                        <input type="text" readonly class="form-control"
                                               v-model="fee['sold_liquidity_amount']">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-4 mb-3">
                                    <label>{{ contract.symbol }} sold</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ contract.symbol }}
                                        </div>
                                        <input type="text" readonly class="form-control"
                                               v-model="fee['sold_amount']">
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-3">
                                    <label>{{ selected_symbol['token_symbol'] }} allocation per user</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            {{ selected_symbol['token_symbol'] }}
                                        </div>
                                        <input type="text" class="form-control" @change="checkAllowcation"
                                               v-model="limit_per_buyer" value="0">
                                    </div>
                                    <small class="text-danger"
                                           v-show="error.limit_per_buyer">{{ error.limit_per_buyer }}
                                    </small>
                                    <div class="row mt-2">
                                        <div class="col-6" v-if="error_allowcation">
                                            Allocation too high
                                        </div>
                                        <div class="col-6" v-if="error_allowcation">
                                            <button @click="limit_per_buyer = (hard_cap/min_limit_per_buyer); error_allowcation = false"
                                               class="btn btn-sm btn-warning w-100">
                                                Set allocation to <br>
                                                {{ hard_cap / min_limit_per_buyer }}
                                                {{ selected_symbol.token_symbol }}
                                            </button>
                                        </div>
                                        <div class="col-12">
                                            {{ limit_per_buyer != 0 ? parseInt(hard_cap / limit_per_buyer) : 0 }} unique
                                            participants
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-6  mb-3">
                                    <label>Lock Liquidity for</label>
                                    <div class="formwrapper">
                                        <div class="thesubdata text-dark text-14">
                                            <i class="icofont-caret-down"></i>
                                        </div>
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
                                <div class="col-12">
                                    <hr>
                                </div>
                                <div class="col-12">
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-lg-6 ">
                                            <h3 class="mb-4">
                                                Start Date
                                            </h3>
                                            <div class="formwrapper">
                                                <input type="datetime-local" @change="startTime($event)"
                                                       v-model="start_time" name="" value=""
                                                       class="form-control">
                                            </div>
                                            <small class="text-warning">Presale should ideally start 1 week from today
                                                to give you time to raise awareness</small>
                                        </div>

                                        <div class="col-12 col-lg-6 ">
                                            <h3 class="mb-4">
                                                End Date
                                            </h3>

                                            <div class="formwrapper">
                                                <input type="datetime-local" @change="endTime($event)"
                                                       v-model="end_time" name="" value="" class="form-control">
                                            </div>
                                            <small class="text-warning">If your end time is before the current time.
                                                Presale will instantly fail.</small>
                                            <small class="text-danger"></small>
                                        </div>
                                        <small class="d-block text-danger px-3"
                                               v-show="error['time']['show']">{{ error['time']['msg'] }}</small>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <hr>
                                </div>
                                <div class="col-12 col-lg-12 mt-4">
                                    <div class="card-body bg-secondary">
                                        <label class="h3">
                                            <div class="form-check form-switch">
                                                <input type="checkbox" v-model="round_0" class="form-check-input" id="round_0">
                                                <div class="form-check-label" for="round_0">  Round 0</div>
                                            </div>
                                        </label>
                                        <div class="">
                                            <p> In round 0, Investor can purchase token before the sale stage begin</p>

                                            <p> - This round is only for those who commit to burn 20,000 PH token</p>

                                            <p> - Investors can invest in full slot</p>

                                            <p> - The maximum of allocation is designed for Round 0 which made up 30% of hardcap</p>

                                            <p> * The start time of the event is right after you complete the pre-sale form and it will be ended within 10 mins before round 1 begin.</p>

                                            <p> * $PH will be burnt right after token sale success</p>
                                        </div>

                                    </div>


                                </div>

                                <div class="col-12">
                                    <hr class="my-4">
                                </div>

                                <div class="col-12 col-lg-12">
                                    <div class="card-body bg-secondary">
                                        <label class="h3">
                                            <div class="form-check form-switch">
                                                <input type="checkbox" v-model="round_1" class="form-check-input" id="round_1">
                                                <div class="form-check-label" for="round_1">  Round 1</div>
                                            </div>


                                        </label>

                                        <div class="">

                                            <p> PushSwap holders can purchase tokens in advance within the first 5 minutes when sale starting</p>

                                            <p>- The entry requirement: Hold at least 200,000 PH token on personal wallet.</p>

                                            <p>Sale: The sale is certainly to open to everyone when round 1 ended.</p>

                                            <p>* If the token sale did not reach soft cap , the project owner can get back their token, and investors can get back your $PH</p>


                                        </div>

                                    </div>
                                </div>

                                <div class="col-12">
                                    <h3 class="mb-4 text-center">
                                        Fees
                                    </h3>

                                    <table class="table table-borderless table-sm">
                                        <tbody>
                                        <tr>
                                            <td>Presale & Locking fee</td>
                                            <td class="text-end text-gold text-18">
                                                {{ dataPost ? dataPost.creation_fee : 0 }}
                                                {{ exchange && exchange['platform'] ? showPlatform(exchange['platform']) : '' }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ selected_symbol.token_symbol }} raised fee</td>
                                            <td class="text-end text-gold text-18">
                                                {{ dataPost ? dataPost.base_fee_percent : 0 }}%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>{{ contract.symbol }} sold fee</td>
                                            <td class="text-end text-gold text-18">
                                                {{ dataPost ? dataPost.token_fee_percent : 0 }}%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>PHEx {{ exchange ? exchange['exchange_name'] : '' }} locking
                                                fee
                                            </td>
                                            <td class="text-end text-gold text-18">Standard locker fee</td>
                                        </tr>

                                        </tbody>
                                    </table>


                                </div>
                                <div class="col-12">
                                    <hr class="my-5">
                                </div>

                                <div class="col-12">
                                    <h3 class="mb-4 text-center">
                                        Tokenomics
                                    </h3>


                                </div>
                                <div class="col-12">
                                    <div class="row justify-content-center align-items-center">

                                        <div class="col-6 col-md-6 col-lg-6 mb-3">
                                            <doughnut-chart
                                                :data="chartData([this.amount_sale_token, this.sale_token_liquid, this.amount_fee_token, this.amount_remain_token, 0, 0])"
                                                :options="chartOptions" :width="200" :height="200"
                                                class="mx-auto"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <hr class="my-5">
                                </div>

                                <div class="col-12 text-center mb-3">

                                    <h3 class="mb-4">Total {{ contract.symbol }} required</h3>

                                    <h2 class="text-gold">
                                        {{ formatPrice_total() + ' ' + contract.symbol }}</h2>
                                    <h4 v-show="error.show" class="text-danger">You do not have enough tokens in
                                        your wallet.</h4>

                                    <p>Amount for sale: {{ formatPrice(amount_sale_token) }}</p>

                                    <p>Amount for liquidity: {{ formatPrice(sale_token_liquid) }}</p>

                                    <p class="mb-4">Fees:
                                        {{
                                            dataPost ? formatPrice(amount_sale_token * dataPost['token_fee_percent'] / 100) : 0
                                        }}</p>

                                    <p>Please note: If the presale is a success, any unsold tokens are sent to
                                        the 0x00...dEaD burn address.</p>

                                </div>
                                <div class="col-12 mb-4" v-show="error.show">
                                    <div class="alert alert-danger text-16 p-3 mb-4" role="alert">
                                        You do not have enough {{showPlatform(exchange['platform'])}} coin your wallet to perform this transaction.
                                        {{ dataPost ? dataPost.creation_fee : 0 }} {{showPlatform(exchange['platform'])}} required.
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row justify-content-center">
                                        <div class="col-md-6 col-lg-4 text-center">
                                            <btn class="btn rounder w-100" :class="allowanceButton ? 'btn-pushswap' : 'btn-secondary'"
                                               @click="allowanceButton ? approveToken() : 'javascript:void(0)'">
                                                Approve	&nbsp;
                                                <i class="fa-solid fa-right-long"></i>
                                            </btn>
                                        </div>
                                        <div class="col-md-6 col-lg-4 text-center">
                                            <btn class="btn rounder w-100 "
                                               :class="allowanceButton ? 'btn-secondary' : 'btn-pushswap'"
                                               :disabled='allowanceButton' @click="!allowanceButton ? createPresale() : 'javascript:void(0)'">
                                                Create presale	&nbsp;
                                                <i class="fa-solid fa-right-long"></i>
                                            </btn>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import doughnutChart from "@/components/doughnutChart/doughnutChart";
import vueSlider from "vue-slider-component"
import 'vue-slider-component/theme/default.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import Web3, {utils} from "web3"
import BigNumber from "@/utils/bignumber.min.js";
import {settingsContract} from "@/utils/const";
import axios from "axios";
import {mapGetters} from "vuex";
import {ethers} from "ethers";

export default {
    name: "create",
    components: {
        doughnutChart,
        vueSlider
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
            this.$store.commit("setPopupProcessing", true)
            await axios.post(`api/token/get_info`, formData, {
                headers: headers
            }).then(res => {
                this.$store.commit("setPopupProcessing", false)
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
                this.$store.commit("setPopupProcessing", false)
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
                this.error['hard_cap']['msg'] = 'Must be > 0!';
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
                this.error['soft_cap']['msg'] = 'Must be > 0!';
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
            this.error['time']['show'] = false;
            this.error['time']['msg'] = null;
            if (endTime) {
                if (!startTime) {
                    this.error['time']['show'] = true;
                    this.error['time']['msg'] = 'Your end date must be after the start date';
                    return;
                }
                endTime = parseInt((new Date(endTime)).getTime() / 1000);
                startTime = parseInt((new Date(startTime)).getTime() / 1000);
                if (endTime <= startTime) {
                    this.error['time']['show'] = true;
                    this.error['time']['msg'] = 'Your end date must be after the start date';
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
            round_0: 0,
            round_1: 0,
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
                limit_per_buyer: "",
                time: {
                    show: false,
                    msg: null
                },
                hard_cap: {
                    show: true,
                    msg: 'Must be > 0!'
                },
                soft_cap: {
                    show: true,
                    msg: 'Must be > 0!'
                },
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

</style>
