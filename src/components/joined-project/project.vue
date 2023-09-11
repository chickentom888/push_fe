<template>
    <div class="card">
        <div class="top-upcoming">
            <img v-if="presaleData.cover_url" :src="presaleData.cover_url" alt="" class="img">
            <img v-else src="@/assets/images/avar2.png" alt="" class="img">
            <span @click="$emit('showModal', presaleData)">
                {{ presaleData.sale_token_name }}
            </span>
            <div class="clearfix">
                <span class="name" @click="$emit('showModal', presaleData)">{{ presaleData.sale_token_name }}</span>
                <ul class="list">
                    <li>
                        <a :class="!presaleData.telegram_url ? 'disabled' : ''" :href="presaleData.telegram_url ? presaleData.telegram_url : 'javascript:void(0)'"
                           :target="presaleData.telegram_url ? '_blank': ''"><img src="@/assets/images/social1.svg" alt=""> </a>
                    </li>
                    <li>
                        <a :class="!presaleData.facebook_url ? 'disabled' : ''" :href="presaleData.facebook_url ? presaleData.facebook_url : 'javascript:void(0)'"
                           :target="presaleData.facebook_url ? '_blank': ''"><img src="@/assets/images/social2.svg" alt=""> </a>
                    </li>
                    <li>
                        <a :class="!presaleData.discord_url ? 'disabled' : ''" :href="presaleData.discord_url ? presaleData.discord_url : 'javascript:void(0)'"
                           :target="presaleData.discord_url ? '_blank': ''"><img src="@/assets/images/social3.svg" alt=""> </a>
                    </li>
                    <li>
                        <a :class="!presaleData.github_url ? 'disabled' : ''" :href="presaleData.github_url ? presaleData.github_url : 'javascript:void(0)'"
                           :target="presaleData.github_url ? '_blank': ''"><img src="@/assets/images/social4.svg" alt=""> </a>
                    </li>
                    <li>
                        <a :class="!presaleData.twitter_url ? 'disabled' : ''" :href="presaleData.twitter_url ? presaleData.twitter_url : 'javascript:void(0)'"
                           :target="presaleData.twitter_url ? '_blank': ''"><img src="@/assets/images/social5.svg" alt=""> </a>
                    </li>
                </ul>
            </div>
            <span class="armorial"><img width="14" :src="connectInfo.chainIdUser['icon']" alt=""> {{connectInfo.chainIdUser['symbol']}}</span>
        </div>
        <div class="body-upcoming">
            <div class="custom-process mb-4">
                <div class="d-flex justify-content-between mb-2">
                    <span class="f-Nunito fs-14">
                        {{ formatPrice(presaleData.total_base_collected,4) }} / {{ presaleData.hard_cap }}
                        {{ presaleData.base_token_symbol }}
                    </span>
                    <span class="f-Nunito fs-14 d-flex"> {{ presaleData.num_buyers }}
                        <img src="@/assets/images/people.svg" alt=""
                             class="ml-1">
                    </span>
                </div>
                <div class="progress">
                    <div class="progress-bar" role="progressbar"
                         :style="{width: (presaleData.total_base_collected / presaleData.hard_cap) * 100 +'%'}"
                         :aria-valuenow="(presaleData.total_base_collected / presaleData.hard_cap) * 100"
                         aria-valuemin="0"
                         aria-valuemax="100">
                    </div>
                </div>
            </div>
            <p class="text-center f-Nunito mb-4 fs-14">Starts {{moment(presaleData.start_time * 1000)}} in your time</p>
            <div class="box-gray">
                <ul class="list">
                    <li class="m-0" v-if="presaleData.project_type !== 'sale'">
                        <span class="txtname">Lock</span>
                        <span class="f-Nunito fs-14 cl5D">{{ presaleData.liquidity_percent }}%</span>
                    </li>
                    <li class="m-0">
                        <span class="txtname">Tokennomics</span>
                        <span class="f-Nunito fs-14 cl5D">{{ presalePercent }}%</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom-upcoming">
            <div class="time-in d-flex" v-if="presaleData['current_status'] !== 2 && presaleData['current_status'] !==3">
                <div class="" v-if="presaleData['current_round'] === 0">
                    <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span class="f-Nunito d-block fw-bold ">Round 2 finish in</span>
                        <span class="f-Nunito fs-14 cl5D">
                            <countdown class="" :key="countdownKey" :end="presaleData['zero_round'] ? presaleData['zero_round']['finish_at'] : 0"></countdown>
                        </span>
                    </div>
                </div>
                <div class="" v-else-if="presaleData['current_round'] === 1">
                    <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span class="f-Nunito d-block fw-bold ">Round 1 end in</span>
                        <span class="f-Nunito fs-14 cl5D">
                            <countdown class=""
                                       :key="countdownKey"
                                       :end="presaleData['start_time'] + presaleData['first_round_length']"></countdown>
                        </span>
                    </div>
                </div>
                <div class="" v-else-if="presaleData['current_round'] === 2">
                    <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span class="f-Nunito d-block fw-bold ">{{!presaleData['active_first_round'] && !presaleData['active_zero_round'] ? 'Public sale finish in' : 'Round 2 finish in'}}</span>
                        <span class="f-Nunito fs-14 cl5D">
                            <countdown class="" :key="countdownKey" :end="presaleData['end_time']"></countdown>
                        </span>
                    </div>
                </div>
                <div class="" v-else>
                    <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span v-if="presaleData['current_status'] === 1 || presaleData['current_status'] === 0">
                            <span class="f-Nunito d-block fw-bold ">{{ presaleData['active_first_round']  ? 'Round 1 starts in' : 'Public sale starts in'}}</span>
                            <span class="f-Nunito fs-14 cl5D">
                                <countdown :key="countdownKey" :end="presaleData['start_time']"></countdown>
                            </span>
                        </span>
                        <span class="" v-else>
                            00:00:00
                        </span>
                    </div>
                </div>
            </div>
            <div class="time-in d-flex"
                 v-if="presaleData['current_status'] === 2 || presaleData['current_status'] ===3">
                <div class="">
                    <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span class="f-Nunito d-block fw-bold ">{{presaleData['project_type'] === 'sale' ? 'Sale' : 'Presale ended'}}</span>
                        <span class="f-Nunito fs-14 cl5D text-warning" v-if="presaleData['current_status'] === 3">
                            Failed
                        </span>
                        <span class="f-Nunito fs-14 cl5D text-success" v-else-if="presaleData['current_status'] === 2">
                             <span v-if="presaleData['project_type'] === 'presale' && presaleData['liquidity_at'] === 0">
                                 Awaiting Add Liquidity
                            </span>
                            <span v-else-if="presaleData['project_type'] === 'sale'">
                                {{presaleData['active_claim_at'] === 0 ? 'Awaiting Active Claim' : 'Success'}}
                            </span>
                            <span v-else>
                                {{presaleData['project_type'] === 'sale' ? 'Success' : 'Markets Initialized'}}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <div class="time-lissting d-flex">
                <div class="" v-if="presaleData['current_status'] === 0 || presaleData['current_status'] === 1">
                    <img src="@/assets/images/time-listing.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span class="f-Nunito d-block fw-bold " v-if="presaleData.current_round === 1">
                            LIVE: {{ presaleData['active_first_round']  ?  'Round 1' : 'Public sale' }}
                        </span>
                        <span class="f-Nunito d-block fw-bold " v-else-if="presaleData.current_round === 2">
                            LIVE: {{!presaleData['active_first_round'] && !presaleData['active_zero_round']  ?  'Public sale' : 'Round 2'}}
                        </span>
                        <span class="f-Nunito d-block fw-bold " v-else>
                            Awaiting Start
                        </span>
                    </div>

                </div>
                <div v-if="nextclaim && presaleData['current_status'] === 2" class="">
                    <img src="@/assets/images/time-in.svg" alt="" class="mr-2">
                    <div class="clearfix">
                        <span class="f-Nunito d-block fw-bold ">Next Claim ({{ percent }}%)</span>
                        <span class="f-Nunito fs-14 cl5D">
                            {{ time }} {{ date }}
                        </span>
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

export default {
    name: "project_ilo",
    components: {
        // eslint-disable-next-line vue/no-unused-components
        DoughnutChart,
        // eslint-disable-next-line vue/no-unused-components
        Countdown,
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
            account: 'account',
        }),
    },
    methods: {
        showNamePlatform(platform) {
            if (platform === 'eth') {
                return 'ETH';
            } else if (platform === 'bnb') {
                return 'BSC';
            } else if (platform === 'polygon') {
                return 'MATIC';
            } else {
                return '';
            }
        },
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
