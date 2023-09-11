<template>
    <div class="ilo_item">
        <div class="thenetwork">
            <img width="14" :src="connectInfo.chainIdUser['icon']" alt="">
            {{connectInfo.chainIdUser['symbol']}}
        </div>
        <router-link v-if="type === 'yourProject'" :to="`/your-project/${presaleData.contract_address}`">
            <img class="thelogo" v-if="presaleData.cover_url" :src="presaleData.cover_url" alt="">
            <img class="thelogo" v-else src="@/assets/images/ilo/cover_ps.png" alt="">
            <div class="thename">
                {{ presaleData.sale_token_name }}
            </div>
        </router-link>
        <router-link v-else-if="type === 'joinedProject'" :to="`/joined-project/${presaleData.contract_address}`">
            <img class="thelogo" v-if="presaleData.cover_url" :src="presaleData.cover_url" alt="">
            <img class="thelogo" v-else src="@/assets/images/ilo/cover_ps.png" alt="">
            <div class="thename">
                {{ presaleData.sale_token_name }}
            </div>
        </router-link>
        <div v-else class="thename">
            {{ presaleData.sale_token_name }}
        </div>
        <div class="thesocial">
            <a :class="!presaleData.website_url ? 'disabled' : ''" :href="presaleData.website_url ? presaleData.website_url : 'javascript:void(0)'"
               :target="presaleData.website_url ? '_blank': ''">
                <i class="fa-solid fa-earth-americas"></i>
            </a>
            <a :class="!presaleData.telegram_url ? 'disabled' : ''" :href="presaleData.telegram_url ? presaleData.telegram_url : 'javascript:void(0)'"
               :target="presaleData.telegram_url ? '_blank': ''">
                <i class="fa-solid fa-paper-plane"></i>
            </a>
            <a :class="!presaleData.facebook_url ? 'disabled' : ''" :href="presaleData.facebook_url ? presaleData.facebook_url : 'javascript:void(0)'"
               :target="presaleData.facebook_url ? '_blank': ''">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a :class="!presaleData.twitter_url ? 'disabled' : ''" :href="presaleData.twitter_url ? presaleData.twitter_url : 'javascript:void(0)'"
               :target="presaleData.twitter_url ? '_blank': ''">
                <i class="fa-brands fa-twitter"></i>
            </a>
            <a :class="!presaleData.discord_url ? 'disabled' : ''" :href="presaleData.discord_url ? presaleData.discord_url : 'javascript:void(0)'"
               :target="presaleData.discord_url ? '_blank': ''">
                <i class="fa-brands fa-discord"></i>
            </a>
        </div>

        <div class="thebody">

            <div class="row">
                <div class="col-12 mb-3 text-center">
                  <span class="btn btn-success rounder btn-sm px-3" v-if="presaleData['current_status'] === 2">
                    <i class="fa-solid fa-file-pen"></i>
                    Success
                  </span>
                    <span class="btn btn-warning rounder btn-sm px-3 text-white"
                          v-if="presaleData['current_status'] === 0 || presaleData['current_status'] === 1">
                    <i class="fa-solid fa-clock"></i>
                    Upcoming
                  </span>
                    <span class="btn btn-danger rounder btn-sm px-3" v-if="presaleData['current_status'] === 3">
                    <i class="fa-solid fa-circle-xmark"></i>
                    Failed
                  </span>
                </div>

                <div class="col-12">
                    <table class="table table-sm table-borderless">

                        <tbody>
                        <tr>
                            <th>Total Raise</th>
                            <td>{{ presaleData.usd_raised ? presaleData.usd_raised : '0.00' }} $</td>
                        </tr>
                        <tr>
                            <th>Time</th>
                            <td>{{ momentDate(presaleData.start_time * 1000,2) }}</td>
                        </tr>
                        <tr>
                            <th>Purchase Limit</th>
                            <td>{{ presaleData.limit_per_buyer }} {{ presaleData.base_token_symbol }}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>{{ formatPrice(1/presaleData.token_price, 5)}} {{ presaleData.base_token_symbol }}</td>
                        </tr>

                        </tbody>
                    </table>
                </div>

                <div class="col-12 m-0">

                    <div class="thebody">
                        <table class="table table-sm table-borderless">
                            <tbody>
                            <tr>
                                <th class="text-start">
                                    {{ formatPrice(presaleData.total_base_collected,4) }} / {{ presaleData.hard_cap }}
                                    {{ presaleData.base_token_symbol }}
                                </th>
                                <td>{{ presaleData.num_buyers }} <i class="fa-solid fa-users"></i></td>
                            </tr>
                            <tr>

                                <th colspan="2">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar"
                                             :style="{width: (presaleData.total_base_collected / presaleData.hard_cap) * 100 +'%'}"
                                             :aria-valuenow="(presaleData.total_base_collected / presaleData.hard_cap) * 100"
                                             aria-valuemin="0"
                                             aria-valuemax="100"
                                        ></div>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td class="text-start text-secondary" v-if="nextclaim && presaleData['current_status'] === 2">
                                    <span><i class="fa-regular fa-clock text-green"></i> Next Claim ({{ percent }}%)</span><br>
                                    <span class="text-secondary"> {{ time }} {{ date }}</span>
                                </td>
                                <td  class="text-start text-secondary" v-else>
                                    <i class="fa-regular fa-clock text-green"></i>&nbsp;
                                    <span class=""
                                         v-if="presaleData['current_status'] !== 2 && presaleData['current_status'] !==3">
                                        <span class="" v-if="presaleData['current_round'] === 0">
                                            <span>Round 0 finish in</span><br>
                                            <countdown class=""
                                                       :key="countdownKey"
                                                       :end="presaleData['zero_round'] ? presaleData['zero_round']['finish_at'] : 0">
                                            </countdown>
                                        </span>
                                        <span class="" v-else-if="presaleData['current_round'] === 1">
                                            <span>Round 1 end in</span><br>
                                            <countdown class=""
                                                       :key="countdownKey"
                                                       :end="presaleData['start_time'] + presaleData['first_round_length']">
                                            </countdown>
                                        </span>
                                        <span class="" v-else-if="presaleData['current_round'] === 2">
                                            <span>{{!presaleData['active_first_round'] && !presaleData['active_zero_round'] ? 'Public sale finish in' : 'Round 2 finish in'}}</span>
                                            <countdown class="" :key="countdownKey" :end="presaleData['end_time']">
                                            </countdown>
                                        </span>
                                        <span v-else>
                                           <span v-if="presaleData['current_status'] === 1 || presaleData['current_status'] === 0">
                                                <span>{{ presaleData['active_first_round']  ? 'Round 1 starts in' : 'Public sale starts in'}}</span><br>
                                                <countdown :key="countdownKey" :end="presaleData['start_time']"></countdown>
                                            </span>
                                            <span v-else>
                                                00:00:00
                                            </span>
                                        </span>
                                    </span>
                                    <span v-else>
                                    <span>{{presaleData['project_type'] === 'sale' ? 'Sale' : 'Presale ended'}}</span><br>
                                    <strong class="text-warning" v-if="presaleData['current_status'] === 3">
                                        Failed
                                    </strong>
                                    <span class="text-success" v-else-if="presaleData['current_status'] === 2">
                                         <strong v-if="presaleData['project_type'] === 'presale' && presaleData['liquidity_at'] === 0">
                                             Awaiting Add Liquidity
                                        </strong>
                                        <strong v-else-if="presaleData['project_type'] === 'sale'">
                                            {{presaleData['active_claim_at'] === 0 ? 'Awaiting Active Claim' : 'Success'}}
                                        </strong>
                                        <strong v-else>
                                            {{presaleData['project_type'] === 'sale' ? 'Success' : 'Markets Initialized'}}
                                        </strong>
                                    </span>
                                    </span>
                                </td>
                                <td class="text-end">
                                    <a :href="presaleData['research_url'] ? presaleData['research_url'] :'javascript:void(0)'" :target="presaleData.research_url ? '_blank': ''" class="btn btn-info rounder btn-sm" :class="presaleData['research_url'] ? '' : 'disabled'">
                                        Research
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Countdown from "@/components/Countdown";
import DoughnutChart from "@/components/doughnutChart/doughnutChart";
import moment from 'moment';
import {mapGetters} from "vuex";
import {Overlay} from "vant";

export default {
    name: "your_project",
    components: {
        // eslint-disable-next-line vue/no-unused-components
        DoughnutChart,
        // eslint-disable-next-line vue/no-unused-components
        Countdown,
        [Overlay.name]: Overlay,
    },
    props: {
        presale: Object,
        type: {
            type: String,
            default: "ilo"
        }
    },
    data() {
        return {
            countdownKey: 0,
            presaleData: this.presale,
            doChartOptions: {
                cutoutPercentage: 70,
                responsive: false,
                tooltips: {enabled: false},
            },
            percent: 0,
            time: '',
            date: '',
            nextclaim: false,
            presaleModal: [],
            isShow: false,
        }
    },
    computed: {
        presalePercent() {
            return parseFloat(((this.presaleData.amount +
                (this.presaleData.project_type !== 'sale' ? this.presaleData.sale_token_liquidity_amount : 0) +
                this.presaleData.sale_token_fee_amount) / this.presaleData.sale_token_total_supply) * 100).toFixed(1);
        },
        dataChart() {
            return {
                labels: false,
                datasets: [{
                    data: [
                        this.presaleData.amount,
                        this.presaleData['project_type'] === 'sale' ? this.presaleData.sale_token_fee_amount : this.presaleData.sale_token_liquidity_amount,
                        this.presaleData['project_type'] === 'sale' ? 0 : this.presaleData.sale_token_fee_amount,
                        this.presaleData.sale_token_free_amount
                    ],
                    backgroundColor: [
                        '#1FA5FF',
                        '#F44336',
                        '#48e886',
                        '#E8E8E8',
                    ],
                    hoverOffset: 4,
                    borderWidth: 0
                }]
            }
        },
        connectInfo() {
            return this.$store.state.connect;
        },
        ...mapGetters({
            socketPresales: 'presales',
            exchange: 'exchange',
        }),
    },
    methods: {
        nextClaim(presale) {
            if (presale['current_status'] === 2 && presale['active_vesting']) {
                let now = new Date().getTime();
                now = Math.floor(now / 1000);
                for (let i = 0; i < presale['list_vesting_period'].length; i++) {
                    if (presale['list_vesting_period'][i] > now) {
                        this.nextclaim = presale['project_type'] === 'sale' ? presale['active_claim_at'] !== 0 : presale['liquidity_at'] !== 0;
                        this.time = this.momentDate(presale['list_vesting_period'][i] * 1000, 1);
                        this.date = this.momentDate(presale['list_vesting_period'][i] * 1000, 2);
                        this.percent = presale['list_vesting_percent'][i];
                        return;
                    }
                }
            }
        },
        momentDate(date, time = '') {
            if (time === 1) {
                return moment(date).format('HH:mm');
            } else if (time === 2) {
                return moment(date).format('MM/DD/Y');
            } else {
                return moment(date).format('MM/DD/Y HH:mm:ss');
            }
        },
        moment(date) {
            return moment(date).format('ddd Do MMM HH:mm');
        },
        formatPrice(x,number) {
            x = x.toFixed(number);
            x = x.toString();
            let array = x.split('.');
            let y = 0;
            if (array[0]) {
                y = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
            if (array[1]) {
                y = y+ '.'+array[1];
            }
            return y !== 0 ? y : x;
        }
    },
    mounted() {
        this.nextClaim(this.presale);
    },
    watch: {
        'socketPresales': function (presales) {
            if (presales.length == 0) return;
            presales.some(presale => {
                if (this.presaleData && presale._id.$oid == this.presaleData._id.$oid) {
                    let round = this.presaleData['current_round'];
                    if (round !== presale['current_round']) {
                        this.countdownKey = this.countdownKey + 1;
                    }
                    this.presaleData = presale;
                }
            })
        },
        presale: function (presale) {
            this.presaleData = presale
        }
    }
}
</script>
