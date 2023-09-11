<template>
    <div class="row">
        <div class="col-12 mt-4 mb-3 text-center">
            <h3>Presale info22222</h3>
        </div>

        <div class="col-12 mb-4" v-show="hasShowLinkSocial">
            <div class="card-body text-center">
                <div class="row justify-content-center pt-3">

                    <div class="col-12 col-md-4 mb-3" v-show="presale.website_url">
                        <a target="_blank" :href="presale.website_url ? presale.website_url: 'javascript:'" class="text-dark">
                            <i class="fa-solid fa-earth-americas"></i>
                            Website
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    <div class="col-12 col-md-4 mb-3" v-show="presale.twitter_url">
                        <a :target="presale.twitter_url ? '_blank': ''"
                           :href="presale.twitter_url ? presale.twitter_url: 'javascript:'" class="text-dark">
                            <i class="fa-brands fa-twitter"></i>
                            Twitter
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    <div class="col-12 col-md-4 mb-3" v-show="presale.telegram_url">
                        <a :target="presale.telegram_url ? '_blank': ''"
                           :href="presale.telegram_url ? presale.telegram_url: 'javascript:'" class="text-dark">
                            <i class="fa-solid fa-paper-plane"></i>
                            Telegram
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                    <div class="col-12 col-md-4 mb-3" v-show="presale.facebook_url">
                        <a :target="presale.facebook_url ? '_blank': ''"
                           :href="presale.facebook_url ? presale.facebook_url: 'javascript:'" class="text-dark">
                            <i class="fa-brands fa-facebook-f"></i>
                            Facebook
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>

                    <div class="col-12 col-md-4 mb-3" v-show="presale.medium_url">
                        <a :target="presale.medium_url ? '_blank': ''"
                           :href="presale.medium_url ? presale.medium_url: ''" class="text-dark">
                            <i class="fa-brands fa-medium"></i>
                            Medium
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>

                </div>
            </div>
        </div>


        <div class="col-12 col-lg-6 mb-4 text-16">
            <strong>Start: {{ moment(presale.start_time * 1000) }}</strong>
        </div>
        <div class="col-12 col-lg-6 mb-4 text-16 text-md-end">
            <strong>End: {{ moment(presale.end_time * 1000) }}</strong>
        </div>

        <div class="col-12">
            <div class="card-body">
                <div class="row">
                    <div class="col-12 col-md-6 mb-3 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; {{ locked }} lock duration
                    </div>
                    <div class="col-12 col-md-6 mb-3 ">
                        <strong>{{ presale.liquidity_percent }}% {{ presale.base_token_symbol }} raised liquidity
                            lock</strong>
                    </div>
                    <div class="col-12 col-md-6 mb-3 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; Open to anyone
                    </div>
                    <div class="col-12 col-md-6 mb-3 ">
                        <strong>Public</strong>
                    </div>
                    <div class="col-12 col-md-6 mb-3 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; Softcap
                    </div>
                    <div class="col-12 col-md-6 mb-3 ">
                        <strong>{{ numberWithCommas(presale.soft_cap) }} {{ presale.base_token_symbol }}</strong>
                    </div>
                    <div class="col-12 col-md-6 mb-3 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; Hardcap
                    </div>
                    <div class="col-12 col-md-6 mb-3 ">
                        <strong>{{ numberWithCommas(presale.hard_cap) }} {{ presale.base_token_symbol }}</strong>
                    </div>
                    <div class="col-12 col-md-6 mb-3 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; Max spend per account
                    </div>
                    <div class="col-12 col-md-6 mb-3 ">
                        <strong>{{ numberWithCommas(presale['limit_per_buyer']) }} {{ presale['base_token_symbol'] }}</strong>
                    </div>
                    <div class="col-12 col-md-6 mb-3 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; Presale price
                    </div>
                    <div class="col-12 col-md-6 mb-3 ">
                        <strong>{{ numberWithCommas(presale.token_price) }} {{ presale.sale_token_symbol }} / {{
                                presale.base_token_symbol
                            }}</strong>
                    </div>
                    <div class="col-12 col-md-6 mb-3 mb-md-0 text-md-end" style="color:#6888A0">
                        <i class="fa fa-circle d-md-none" style="color: #0F7BAA"></i> &nbsp; Listing price
                    </div>
                    <div class="col-12 col-md-6 ">
                        <strong>{{ numberWithCommas(presale.listing_price) }} {{ presale.sale_token_symbol }} /
                            {{ presale.base_token_symbol }}</strong>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12" v-if="presale['active_vesting']">
            <div class="row">
                <div class="col-12 mt-4 mb-3 text-center">
                    <h4>Vesting info</h4>
                </div>
                <div class="col-12 mb-4">
                    <table class="table table-striped table-borderless">
                        <thead class="table-success">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Percent</th>
                            <th scope="col">Time</th>
                            <th scope="col" class="text-end">Date (mm/dd/yyyy)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, idx) in presale['list_vesting_period']" :key="idx">
                            <th scope="row">{{ idx + 1 }}</th>
                            <td>{{ presale['list_vesting_percent'][idx] }}%</td>
                            <td>{{ momentDate(presale['list_vesting_period'][idx] * 1000, 1) }}</td>
                            <td class="text-end">{{ momentDate(presale['list_vesting_period'][idx] * 1000, 2) }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="col-12 text-center mt-3">
            <h3>{{ presale.sale_token_name }} Tokenomics</h3>
            <p class="mb-3">Total supply: {{ numberWithCommas(presale.sale_token_total_supply) }}
                {{ presale.sale_token_name }} </p>
        </div>
        <div class="col-12">
            <div class="card-body text-center">
                <span style="color: #8c8c8c;">No history locked</span>
                <!--        <i class="icofont-lock theicon text-gold"></i>-->
                <!--        <div class="d-flex">-->
                <!--          <a href="#" class="text-gold">$0 Locked</a>-->
                <!--          <span class="ml-auto">-->
                <!--              in 7 months-->
                <!--              <i class="icofont-caret-down"></i>-->
                <!--            </span>-->
                <!--        </div>-->

                <!--        <div class="d-flex align-items-center">-->
                <!--          <strong>3.154.214.000 Marnotaur </strong>-->
                <!--          <div class="progress teacup-progress small">-->
                <!--            <div class="progress-bar " role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>-->
                <!--          </div>-->
                <!--        </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import DoughnutChart from "@/components/doughnutChart/doughnutChart";
import moment from "moment";

export default {
    name: "info",
    components: {
        DoughnutChart,
    },
    props: {
        presale: Object,
        locked: String,
    },
    data() {
        return {
            doChartOptions: {
                cutoutPercentage: 60,
                responsive: false,
                tooltips: {
                    enabled: false
                }
            }
        }
    },
    computed: {
        dataChart() {
            return {
                labels: false,
                datasets: [{
                    data: [
                        this.presale.amount,
                        this.presale.sale_token_liquidity_amount,
                        this.presale.sale_token_fee_amount,
                        this.presale.sale_token_free_amount
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
        hasShowLinkSocial() {
            return this.presale.website_url || this.presale.twitter_url || this.presale.telegram_url
                || this.presale.facebook_url || this.presale.medium_url
        }
    },
    methods: {
        numberWithCommas(x) {
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
        },
        moment(date) {
            return moment(date).format('ddd Do MMM HH:mm:ss');
        },
        momentDate(date, time = 1) {
            if (time === 1) {
                return moment(date).format('HH:mm:ss');
            } else if (time === 2) {
                return moment(date).format('MM/DD/Y');
            } else {
                return moment(date).format('MM/DD/Y HH:mm:ss');
            }
        }
    }
}
</script>

<style scoped>
div[class^="col-"] {
    padding: 0 15px 0 15px;
}

.row {
    margin: 0 -15px 0 -15px;
}
</style>
