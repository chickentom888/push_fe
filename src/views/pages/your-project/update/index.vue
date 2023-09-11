<template>
    <main class="ilopage py-5">
        <section id="ilo_detail1">
            <div class="container">
                <div class="row ">
                    <div class="col-12 mb-3">
                        <router-link :to="`/your-project/${presale.contract_address}`" class="text-green">
                            <i class="fa-solid fa-arrow-left"></i>
                            Back
                        </router-link>
                    </div>
                    <div class="col-12">
                        <div class="card card-teacup">

                            <div class="card-header align-items-center justify-content-between d-flex ">

                                <div class="ilo_coinname">
                                    <img v-if="presale.avatar_url" width="62" :src="presale.avatar_url"
                                         :alt="presale.sale_token_name">
                                    <img v-else width="62" src="@/assets/images/ilo/ava_ant.svg"
                                         :alt="presale.sale_token_name">
                                    <h3>{{ presale.sale_token_name }}</h3>
                                </div>


                                <div class="thelinks">
                                    <a class="text-dark copylink text-14" href="javascript:"
                                       v-clipboard:copy="presale.sale_token_address" v-clipboard:success="onCopy"
                                       v-clipboard:error="onError">
                                        {{ contractCompact }}
                                        <i class="fa-regular fa-copy"></i>
                                    </a>&nbsp;
                                    <a target="_blank" v-if="presale.platform === 'bsc'"
                                       :href="`https://bscscan.com/address/${presale.sale_token_address}`"
                                       class="text-dark text-14">
                                        BscScan
                                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                    <a target="_blank" v-if="presale.platform === 'eth'"
                                       :href="`https://etherscan.io/address/${presale.sale_token_address}`"
                                       class="text-dark text-14">
                                        EthScan
                                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </a>
                                </div>

                            </div>
                            <div class="card-body">
                                <div class="row  justify-content-center">
                                    <div class="col-12 col-lg-10">
                                        <div class="row justify-content-center">

                                            <div class="col-12">
                                                <div class="formwrapper mb-4">
                                                    <div class="thesubdata left thesocial">
                                                        <i class="fa-solid fa-earth-americas m-0"></i>
                                                    </div>
                                                    <input type="text" v-model="model.website_url" class="form-control"
                                                           :placeholder="$t('placeholder.15')">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="formwrapper mb-4">
                                                    <div class="thesubdata left thesocial">
                                                        <i class="fa-solid fa-paper-plane m-0"></i>
                                                    </div>
                                                    <input type="text" v-model="model.telegram_url" class="form-control"
                                                           :placeholder="$t('placeholder.11')">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="formwrapper mb-4">
                                                    <div class="thesubdata left thesocial">
                                                        <i class="fa-brands fa-facebook m-0"></i>
                                                    </div>
                                                    <input type="text" v-model="model.facebook_url" class="form-control"
                                                           :placeholder="$t('placeholder.12')">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="formwrapper mb-4">
                                                    <div class="thesubdata left thesocial">
                                                        <i class="fa-brands fa-medium m-0"></i>
                                                    </div>
                                                    <input type="text" v-model="model.medium_url" class="form-control"
                                                           :placeholder="$t('placeholder.14')">
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="formwrapper mb-4">
                                                    <div class="thesubdata left thesocial">
                                                        <i class="fa-brands fa-twitter m-0"></i>
                                                    </div>
                                                    <input type="text" v-model="model.twitter_url" class="form-control"
                                                           :placeholder="$t('placeholder.13')">
                                                </div>
                                            </div>

                                            <div class="col-12" v-if="presale.project_type === 'sale'">
                                                <div class="formwrapper mb-4">
                                                    <div class="thesubdata left thesocial">
                                                        <i class="fa-solid fa-earth-americas m-0"></i>
                                                    </div>
                                                    <input type="text" v-model="model.research_url" class="form-control"
                                                           :placeholder="$t('placeholder.21')">
                                                </div>
                                            </div>

                                            <div class="col-12 ">
                                                <div class="row align-items-center">

                                                    <div class="col-12 col-md-7 ">
                                                        <label>Avatar</label>
                                                        <div class="formwrapper mb-4 ">
                                                            <input type="text" v-model="model.avatar_url" id="avatarimg"
                                                                   :placeholder="$t('placeholder.16')"
                                                                   class="form-control">
                                                            <i class="text-gray">Your picture must be at lease 60px x
                                                                60px</i>
                                                        </div>

                                                        <hr class="my-3 d-none d-md-block">
                                                        <label>Cover</label>
                                                        <div class="formwrapper mb-4">
                                                            <input type="text" v-model="model.cover_url"
                                                                   :placeholder="$t('placeholder.17')"
                                                                   class="form-control">
                                                            <i class="text-gray">Your picture must be at lease 355px x
                                                                155px</i>
                                                        </div>
                                                    </div>

                                                    <div class="col-12 col-md-5">

                                                        <div class="ilo_item preview">

                                                            <div class="thenetwork">
                                                                <img width="14" :src="exchange['logo']" alt="">
                                                                {{exchange['platform']}}
                                                            </div>
                                                            <a href="javascript:void(0)">
                                                                <img v-if="model.cover_url" class="thelogo"
                                                                     :src="model.cover_url" alt="">
                                                                <img v-else class="thelogo"
                                                                     src="@/assets/images/ilo/cover_ps.png"
                                                                     alt="">
                                                            </a>
                                                            <a href="javascript:void(0)" class="thename">
                                                                <img width="32" v-if="model.avatar_url"
                                                                     :src="model.avatar_url" alt="">
                                                                <img v-else width="32"
                                                                     src="@/assets/images/icon/ps_bullet.png"
                                                                     alt="">
                                                                {{ presale.sale_token_name }}
                                                            </a>

                                                            <div class="thesocial">
                                                                <a :href="model.website_url" target="_blank">
                                                                    <i class="fa-solid fa-paper-plane"></i>
                                                                </a>
                                                                <a :href="model.facebook_url" target="_blank">
                                                                    <i class="fa-brands fa-facebook"></i>
                                                                </a>
                                                                <a :href="model.medium_url" target="_blank">
                                                                    <i class="fa-brands fa-medium"></i>
                                                                </a>
                                                                <a :href="model.twitter_url" target="_blank">
                                                                    <i class="fa-brands fa-twitter"></i>
                                                                </a>
                                                                <a :href="model.telegram_url" target="_blank">
                                                                    <i class="fa-solid fa-paper-plane"></i>
                                                                </a>
                                                            </div>

                                                            <div class="thebody">

                                                                <div class="row">

                                                                    <div class="col-12 mb-3 text-center">
                                                                        <span
                                                                            class="btn btn-success rounder btn-sm px-3"
                                                                            v-if="presale['current_status'] === 2">
                                                                            <i class="fa-solid fa-file-pen"></i>
                                                                            Success
                                                                        </span>
                                                                        <span
                                                                            class="btn btn-warning rounder btn-sm px-3 text-white"
                                                                            v-if="presale['current_status'] === 0 || presale['current_status'] === 1">
                                                                            <i class="fa-solid fa-clock"></i>
                                                                            Upcoming
                                                                        </span>
                                                                        <span class="btn btn-danger rounder btn-sm px-3"
                                                                              v-if="presale['current_status'] === 3">
                                                                            <i class="fa-solid fa-circle-xmark"></i>
                                                                            Failed
                                                                        </span>
                                                                    </div>

                                                                    <div class="col-12">
                                                                        <table class="table table-sm table-borderless">
                                                                            <tbody>
                                                                            <tr>
                                                                                <th>Start Time</th>
                                                                                <td>
                                                                                    {{ moment(presale['start_time'] * 1000) }}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Purchase Limit</th>
                                                                                <td>{{ presale.limit_per_buyer }}
                                                                                    {{ presale.base_token_symbol }}
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th>Price</th>
                                                                                <td>{{ presale.token_price }}
                                                                                    {{ presale.base_token_symbol }}
                                                                                </td>
                                                                            </tr>

                                                                            </tbody>
                                                                        </table>
                                                                    </div>


                                                                    <div class="col-12 m-0">

                                                                        <div class="thebody">
                                                                            <table
                                                                                class="table table-sm table-borderless">

                                                                                <tbody>
                                                                                <tr>
                                                                                    <td class="text-start">{{
                                                                                            presale.total_base_collected
                                                                                        }} / {{ presale.hard_cap }}
                                                                                        {{ presale.base_token_symbol }}
                                                                                    </td>
                                                                                    <td>{{ presale.num_buyers }} <i
                                                                                        class="fa-solid fa-users"></i>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>

                                                                                    <td colspan="2">
                                                                                        <div class="progress">
                                                                                            <div class="progress-bar"
                                                                                                 role="progressbar"
                                                                                                 :style="{width: (presale.total_base_collected / presale.hard_cap) * 100 +'%'}"
                                                                                                 :aria-valuenow="(presale.total_base_collected / presale.hard_cap) * 100"
                                                                                                 aria-valuemin="0"
                                                                                                 aria-valuemax="100">
                                                                                            </div>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="text-start text-secondary">
                                                                                        <i class="fa-regular fa-clock text-green"></i>
                                                                                        Start in<br>
                                                                                        <strong class="text-dark">
                                                                                            00:00:00 </strong>
                                                                                    </td>
                                                                                    <td class="text-end"
                                                                                        v-if="presale.project_type === 'sale'">
                                                                                        <a :href="presale['research_url'] ? presale['research_url'] :'javascript:void(0)'"
                                                                                           :target="presale.research_url ? '_blank': ''"
                                                                                           class="btn btn-info rounder btn-sm disabled">

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

                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-12 col-lg-6 text-center mt-4">
                                                <button class="btn rounder w-100 px-md-5"
                                                        :class="checkDisabled ? 'btn-secondary' : 'btn-pushswap'"
                                                        :disabled="checkDisabled" @click="onSave()">
                                                    Save
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
        </section>
    </main>
</template>

<script>

import axios from 'axios';
import CommonMixin from "@/mixins/CommonMixin"
import AuthMixin from "@/mixins/AuthMixin";
import DoughnutChart from "@/components/doughnutChart/doughnutChart";
import moment from "moment";
import {mapGetters} from "vuex";

export default {
    name: "ILOUpdate",
    mixins: [CommonMixin, AuthMixin],
    components: {
        DoughnutChart,
    },
    data() {
        return {
            presale: Object,
            model: {
                website_url: '',
                telegram_url: '',
                youtube_url: '',
                twitter_url: '',
                medium_url: '',
                avatar_url: '',
                facebook_url: '',
                cover_url: '',
                research_url: '',
                token: ''
            },
            doChartOptions: {
                cutoutPercentage: 70,
                responsive: false,
                tooltips: {enabled: false},
            },
        }
    },
    created() {
        this.fetchPresaleDetail()
    },
    methods: {
        moment(date) {
            return moment(date).format('m/d/Y');
        },
        async fetchPresaleDetail() {
            this.$store.commit("setPopupProcessing", true)
            const res = await axios.get('/api/presale/detail', {
                params: {
                    contract_address: this.$route.params.contract_address
                }
            });
            this.$store.commit("setPopupProcessing", false)
            this.presale = res.data.data;
            this.model.website_url = this.presale.website_url;
            this.model.telegram_url = this.presale.telegram_url;
            this.model.youtube_url = this.presale.youtube_url;
            this.model.twitter_url = this.presale.twitter_url;
            this.model.medium_url = this.presale.medium_url;
            this.model.avatar_url = this.presale.avatar_url;
            this.model.facebook_url = this.presale.facebook_url;
            this.model.cover_url = this.presale.cover_url;
            this.model.research_url = this.presale.research_url;
        },
        onSave() {
            const headers = {
                'Content-Type': 'application/json'
            }
            let userAccount = JSON.parse(localStorage.getItem('user'));
            if (!userAccount) {
                this.$store.commit("setPopupError", {
                    isShow: true,
                    message: "Not connected wallet!"
                });
            }
            headers['Authorization'] = userAccount['token'];
            this.model.token = userAccount['token'];
            this.$store.commit("setPopupProcessing", true);
            axios.post(`/api/presale/update/${this.presale._id.$oid}`, this.model, {
                headers: headers
            }).then(res => {
                this.$store.commit("setPopupProcessing", false)
                if (res.data.status === 1) {
                    this.presale.avatar_url = this.model.avatar_url;
                    this.$store.commit("setPopupSuccess", {
                        isShow: true,
                        message: ""
                    });
                    setTimeout(() => {
                        this.$store.commit("setPopupSuccess", {
                            isShow: false,
                            message: ""
                        });
                    }, 1000);
                    return;
                }
                this.$store.commit("setPopupError", {
                    isShow: true,
                    message: res.data.message
                });
            }, (err) => {
                this.$store.commit("setPopupProcessing", false)
                this.$store.commit("setPopupError", {
                    isShow: true,
                    message: ""
                });
            })
        },
    },
    computed: {
        presalePercent() {
            return parseFloat(((this.presale.amount +
                (this.presale.project_type !== 'sale' ? this.presale.sale_token_liquidity_amount : 0) +
                this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
        },
        contractCompact() {
            if (!this.presale['sale_token_address']) return '';
            let contractAddress = this.presale['sale_token_address'];
            contractAddress = contractAddress.substr(0, 6) + '...' + contractAddress.substr(contractAddress.length - 4, 4);
            return contractAddress;
        },
        dataChart() {
            return {
                labels: false,
                datasets: [{
                    data: [
                        this.presale.amount,
                        this.presale['project_type'] === 'sale' ? this.presale.sale_token_fee_amount : this.presale.sale_token_liquidity_amount,
                        this.presale['project_type'] === 'sale' ? 0 : this.presale.sale_token_fee_amount,
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
        checkDisabled() {
            return !this.model.website_url && !this.model.telegram_url && !this.model.youtube_url && !this.model.twitter_url && !this.model.medium_url
                && !this.model.avatar_url && !this.model.facebook_url && !this.model.cover_url && !this.model.research_url
        },
        ...mapGetters({
            account: 'account',
            exchange: 'exchange',
        }),
    },
    watch: {
        'account': function (data) {
            if (data && data !== undefined && this.presale !== undefined && this.presale.presale_owner_address != data) {
                this.$router.push("/your-project")
            }
        },
    }
}
</script>

<style scoped>

</style>
