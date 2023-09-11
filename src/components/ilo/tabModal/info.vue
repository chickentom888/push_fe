<template>
    <div>
        <router-link class="viewtoken" :to="(presale['project_type'] === 'sale' ? '/idov/' : '/ilo/')+ presale.contract_address">
            <img v-if="presale.avatar_url" width="30" :src="presale.avatar_url" alt="" class="img mr-2">
            <img v-else width="30" src="@/assets/images/push.svg" alt="">&nbsp;
            View Token page
        </router-link>

        <div class="d-flex align-items-center justify-content-center f-Nunito cl9F9">
            <span v-if="presale.sale_token_address" class="mr-3"
                  style="cursor:pointer;"
                    v-clipboard:copy="presale.sale_token_address"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError">{{ presale.sale_token_address ? formatAddress(presale.sale_token_address) : ''}}
                <img src="@/assets/images/icon-copy.svg">
            </span>
            <a target="_blank" class="mr-3"
               :href="dexExchange()['url']"
               v-if="presale.sale_token_address">
                {{dexExchange()['dex']}}
                <img src="@/assets/images/icon-growth.svg">
            </a>
            <a class="mr-3" href="javascript:void(0);" v-else>
                {{dexExchange()['dex']}}
                <img src="@/assets/images/icon-growth.svg">
            </a>
            <a target="_blank" class="mr-3"
               :href="urlExchange()['url']">
                {{urlExchange()['platform']}}
                <img src="@/assets/images/icon-growth.svg">
            </a>
            <a v-if="presale.twitter_url" target="_blank" class=""
               :href="presale.twitter_url">
                Twitter
                <img alt="" src="@/assets/images/icon-growth.svg">
            </a>
            <a v-else class="disabled" href="javascript:void(0);">
                Twitter
                <img alt="" src="@/assets/images/icon-growth.svg">
            </a>
        </div>
        <p class="f-Nunito cl9F9 text-center mb-0 mt-4">Total Supply:</p>
        <p class="f-Nunito text-center fs-24 fw-bold mb-0">{{ sale_token_total_supply ? this.formatNumber(sale_token_total_supply) : ''}}</p>
        <p class="f-Nunito cl9F9 text-center mb-0">Decimals: {{ presale ? presale.sale_token_decimals : '' }}</p>
<!--        <div class="mt-3" v-if="!presale['project_type'] || presale['project_type'] !== 'sale'">
            <div class="text-center" v-if="presale.current_status == 0">
                <span>
                    No pairs on {{dexExchange()['dex']}} for this token yet
                </span>
            </div>
            <div v-else>
                <p class="f-Nunito cl9F9 text-center mb-0">Most liquid pair</p>
                <div class="locked-liqui">
                    <div class="clearfix text-left">
                        <div class="top-upcoming mb-1">
                            <img v-if="presale.avatar_url" width="30" :src="presale.avatar_url" alt="" class="img">
                            <img v-else width="30" src="@/assets/images/push.svg" alt="">&nbsp;
                            <span class="name fs-18 m-0">{{ presale.sale_token_symbol }} </span>
                        </div>
                        <span class="f-Nunito ">Liquidity: $0 </span>
                    </div>
                    <div class="clearfix">
                        <div class="top-upcoming mb-0">
                            <img width="30" :src="presale['base_token_avatar_url']" alt="" class="img">
                            <span class="name fs-18 m-0">{{ presale.base_token_symbol }}</span>
                        </div>
                    </div>
                    <div class="text-right">
                        <div v-if="type === 'ilo'" v-show="presale.liquidity_at == 0 || presale.success_at == 0">
                            <span class="d-flex f-Nunito"> No locked liquidity
                            <img src="@/assets/images/icon-warring-liqui.svg" class="ml-2"></span>
                        </div>
                        <div v-if="type === 'ilo' && presale.current_status === 2 && presale.liquidity_at != 0">
                            Liquidity: $0
                        </div>
                        <div id="accordion" v-if="type === 'ilo' && presale.current_status === 2 && presale.liquidity_at != 0">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button @click="showDrop == 'collapse content-musk' ? showDrop = 'collapse content-musk show'  : showDrop = 'collapse content-musk' " class="btn f-Nunito p-0" data-toggle="collapse"
                                                data-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                            on PushSwap <img src="@/assets/images/dot.svg">
                                        </button>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="collapseOne" :class="showDrop" aria-labelledby="headingOne"
                     data-parent="#accordion">
                    <div class="card-body">
                        <div class="d-flex justify-content-center align-items-center">
                            <span class="musk-blue">
                                <img v-if="presale.avatar_url" width="30" :src="presale.avatar_url" :alt="presale.sale_token_name" class="img mr-2">
                                <img v-else width="30" src="@/assets/images/push.svg" :alt="presale.sale_token_name" class="img mr-2">&nbsp;0
                            </span>
                            <span class="musk-blue ml-2 mr-2">
                                <img width="30" :src="presale['base_token_avatar_url']" alt="" class="img mr-2">&nbsp;
                                0
                            </span>
                            <a href="javascript:void(0)" class=""><img src="@/assets/images/icon-refresh.svg" alt="" class="mr-2"></a>
                        </div>
                        <p class="f-Nunito clfff mt-3">Pancakeswap V2 index: 377395</p>
                        <div class="d-flex justify-content-center">
                            <span class="mr-3 clfff f-Nunito fw-bold">Pair
                                <img src="@/assets/images/icon-growth-white.svg"></span>
                            <span class="mr-3 clfff f-Nunito fw-bold">
                                <img src="@/assets/images/dext.svg"> <a target="_blank" :href="`https://www.dextools.io/app/ether/pair-explorer/${presale.sale_token_address}`">Dext</a>
                                <img src="@/assets/images/icon-growth-white.svg">
                            </span>
                            <a target="_blank" :href="`/lock/${presale.contract_address}`" class="clfff f-Nunito fw-bold">View lock page</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>


<script>
import {truncateAddress, numberWithCommas} from '@/utils/helpers';
import CommonMixin from "@/mixins/CommonMixin"

export default {
    name: 'Info',
    mixins: [CommonMixin],
    props: {
        presale: {},
        type: {
            type: String,
            default: 'ilo'
        }
    },
    data() {
        return {
            isShow: false,
            sale_token_total_supply: this.presale.sale_token_total_supply,
            contractAddress: this.presale.sale_token_address,
            showDrop:"collapse content-musk",
            showDropToken:"collapse content-musk",
        }
    },
    methods: {
        onCopy() {
            this.$toaster.success('Copied!')
        },
        onError() {
            this.$toaster.error('Somethings wrong!')
        },
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
        formatAddress(address) {
            return address ? address.slice(0, 5) + "..." + address.slice(-4) : '';
        },
        urlExchange() {
            let data = {
                url: '',
                platform: ''
            };
            if (this.presale.platform === 'bsc') {
                data.platform = 'BscScan';
                if (this.presale.network === 'test') {
                    data.url = 'https://testnet.bscscan.com/address/' + this.presale.contract_address
                } else {
                    data.url = 'https://bscscan.com/address/' + this.presale.contract_address
                }
            } else if (this.presale.platform === 'eth') {
                data.platform = 'EthScan';
                if (this.presale['network'] === 'main') {
                    data.url = 'https://etherscan.io/address/' + this.presale.contract_address
                } else {
                    data.url = 'https://ropsten.etherscan.io/address/' + this.presale.contract_address
                }
            } else if (this.presale.platform === 'polygon') {
                data.platform = 'PolygonScan';
                if (this.presale['network'] === 'main') {
                    data.url = 'https://polygonscan.com/address/' + this.presale.contract_address;
                } else {
                    data.url = 'https://mumbai.polygonscan.com/address/' + this.presale.contract_address;
                }
            } else if (this.presale['platform'] === 'fantom') {
                data.platform = 'FantomScan';
                if (this.presale['network'] === 'main') {
                    data.url = 'https://ftmscan.com/address/' + this.presale.contract_address;
                } else {
                    data.url = 'https://testnet.ftmscan.com/address/' + this.presale.contract_address;
                }
            }
            return data;
        },
        dexExchange() {
            let data = {
                url: '',
                dex: ''
            };
            if (this.presale.platform === 'bsc') {
                data.dex = 'Pancakeswap V2';
                data.url = 'https://pancakeswap.finance/info/token/' + this.presale.sale_token_address
            } else if (this.presale.platform === 'eth') {
                data.dex = 'Uniswap';
                data.url = 'https://v2.info.uniswap.org/token/' + this.presale.sale_token_address
            } else if (this.presale.platform === 'polygon') {
                data.dex = 'Quickswap V1';
                data.url = 'https://info.quickswap.exchange/#/token/' + this.presale.sale_token_address;
            } else if (this.presale['platform'] === 'fantom') {
                data.dex = '';
                data.url = '';
            }
            return data;
        }
    },
//    watch: {
//        countShow: function (data) {
//            if (data.sale_token_total_supply) {
//                this.sale_token_total_supply = numberWithCommas(this.presale.sale_token_total_supply);
//            }
//            if (this.presale.sale_token_address) {
//                this.contractAddress = truncateAddress(this.presale.sale_token_address);
//            }
//        }
//    }
}
</script>

<style scoped>

</style>
