<template>
    <div>
        <div class="bg-token mb-4">
            <div class="top-upcoming mb-3 justify-content-center" v-show="hasShowLinkSocial">
                <ul class="list">
                    <li v-show="presale.website_url">
                        <a target="_blank" :href="presale.website_url ? presale.website_url: 'javascript:'">
                            <img src="@/assets/images/social1.svg" alt="" />
                        </a>
                    </li>
                    <li v-show="presale.twitter_url">
                        <a :target="presale.twitter_url ? '_blank': ''"
                           :href="presale.twitter_url ? presale.twitter_url: 'javascript:'">
                            <img src="@/assets/images/social2.svg" alt="" />
                        </a>
                    </li>
                    <li v-show="presale.telegram_url">
                        <a :target="presale.telegram_url ? '_blank': ''"
                           :href="presale.telegram_url ? presale.telegram_url: 'javascript:'"><img src="@/assets/images/social3.svg" alt="" />
                        </a>
                    </li>
                    <li v-show="presale.facebook_url">
                        <a :target="presale.facebook_url ? '_blank': ''"
                           :href="presale.facebook_url ? presale.facebook_url: 'javascript:'"><img src="@/assets/images/social4.svg" alt="" />
                        </a>
                    </li>
                    <li v-show="presale.medium_url">
                        <a :target="presale.medium_url ? '_blank': ''"
                           :href="presale.medium_url ? presale.medium_url: ''"><img src="@/assets/images/social5.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
            <p class="fw-bold f-Nunito text-center fs-24">Token {{presale ? presale['sale_token_symbol'] : ''}}</p>
            <div
                class="clearfix f-Nunito d-flex cl9F9 justify-content-center">
                <span class="mr-3"
                      style="cursor:pointer"
                        v-clipboard:copy="presale['sale_token_address']"
                        v-clipboard:success="onCopy"
                        v-clipboard:error="onError">
                    {{presale ? formatAddress(presale['sale_token_address']) : ''}}
                    <img
                        alt=""
                        src="@/assets/images/icon-save-small.svg"
                        class="ml-1"
                        style="opacity: 0.3"/>
                </span>
                <span>
                    BscScan
                    <a :href="urlExchange()" target="_blank">
                        <img
                            alt=""
                            src="@/assets/images/icon-growth-black.svg"
                            class="ml-1"
                            style="opacity: 0.3"/>
                    </a>
                </span>
            </div>
        </div>
        <ul class="listbull">
            <li v-if="type && type === 'ilo'">
                <label>{{ locked }} lock duration</label>
                <span>{{ presale.liquidity_percent }}% {{ presale.base_token_symbol }} raised liquidity lock</span>
            </li>
            <li>
                <label>Softcap</label>
                <span>{{ numberWithCommas(presale.soft_cap) }} {{ presale.base_token_symbol }}</span>
            </li>
            <li>
                <label>Hardcap</label>
                <span>{{ numberWithCommas(presale.hard_cap) }} {{ presale.base_token_symbol }}</span>
            </li>
            <li>
                <label>Max spend per account</label>
                <span>{{ numberWithCommas(presale['limit_per_buyer']) }} {{ presale['base_token_symbol'] }}</span>
            </li>
            <li>
                <label>{{type && type === 'ido' ? 'Sale' : 'Presale'}} price</label>
                <span class="d-flex">{{ numberWithCommas(presale.token_price) }} {{ presale.sale_token_symbol }}  /<span class="fw-regular ml-1"> per {{
                        presale.base_token_symbol
                    }} </span>
                </span>
            </li>
            <li v-if="type && type === 'ilo'">
                <label>Listing price</label>
                <span class="d-flex">
                    {{ numberWithCommas(presale.listing_price) }} {{ presale.sale_token_symbol }} /
                    <span class="fw-regular ml-1"> per {{ presale.base_token_symbol }}</span>
                </span>
            </li>
            <li v-if="presale['project_type'] === 'sale' && presale['active_claim_at'] !== 0">
                <label>
                    Refund token
                </label>
                <span class="d-flex">
                    {{ presale.refund_token ? numberWithCommas(presale.refund_token) : 0 }} {{ presale.sale_token_symbol }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import moment from "moment";
import { $t } from '@/lang/i18n.js';
export default {
    name: "info",
    components: {
    },
    props: {
        presale: Object,
        locked: String,
        type: String,
    },
    data() {
        return {

        }
    },
    computed: {
        hasShowLinkSocial() {
            if (this.presale && this.presale['project_type'] === 'sale') {
                return this.presale.website_url || this.presale.twitter_url || this.presale.telegram_url
                    || this.presale.facebook_url || this.presale.medium_url || this.presale.research_url
            } else {
                return this.presale.website_url || this.presale.twitter_url || this.presale.telegram_url
                    || this.presale.facebook_url || this.presale.medium_url
            }
        }
    },
    methods: {
        onCopy() {
            this.$toaster.success($t('common.0012'));
        },
        onError() {
            this.$toaster.error($t('common.0013'));
        },
        urlExchange() {
            let url = '';
            if (this.presale.platform === 'bsc') {
                if (this.presale.network === 'test') {
                    url = 'https://testnet.bscscan.com/address/' + this.presale.contract_address
                } else {
                    url = 'https://bscscan.com/address/' + this.presale.contract_address
                }
            } else if (this.presale.platform === 'eth') {
                if (this.presale['network'] === 'main') {
                    url = 'https://etherscan.io/address/' + this.presale.contract_address
                } else {
                    url = 'https://ropsten.etherscan.io/address/' + this.presale.contract_address
                }
            } else if (this.presale.platform === 'polygon') {
                if (this.presale['network'] === 'main') {
                    url = 'https://polygonscan.com/address/' + this.presale.contract_address;
                } else {
                    url = 'https://mumbai.polygonscan.com/address/' + this.presale.contract_address;
                }
            } else if (this.presale['platform'] === 'fantom') {
                if (this.presale['network'] === 'main') {
                    url = 'https://ftmscan.com/address/' + this.presale.contract_address;
                } else {
                    url = 'https://testnet.ftmscan.com/address/' + this.presale.contract_address;
                }
            }
            return url;
        },
        formatAddress(address) {
            return address ? address.slice(0, 6) + "..." + address.slice(-4) : '';
        },
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

</style>
