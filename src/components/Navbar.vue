<template>
    <div>
        <header>
            <meta property="og:image" content="https://pushswap.org/favicon.png">
            <link rel='icon' type='image/png' href='https://pushswap.org/favicon.png'>
            <link rel='icon' sizes='192x192' href='https://pushswap.org/favicon.png'>
            <link rel='apple-touch-icon' href='https://pushswap.org/favicon.png'>
            <meta name='msapplication-square310x310logo' content='https://pushswap.org/favicon.png'>
            <div class="main_nav">
                <div class="site-header">
                    <div class="logo mb-0">
                        <a>
                            <router-link to="/" active-class="active" class="router" @click="showPopup()">
                                <img src="@/assets/images/LogoTren.svg" alt="">
                                <img src="@/assets/images/logomobile.svg" alt="" class="mobile">
                            </router-link>
                        </a>
                    </div>
                    <div id="navbar" class="navbar-collapse">
                        <ul class="nav navbar-nav">
                            <li>
                                <a>
                                    <router-link to="/" active-class="active" exact class="router" @click="showPopup()">
                                            {{$t('navbar.0001')}}
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a class="poiter">
                                    {{$t('navbar.0002')}}
                                    <svg class="ic-dot ml-1" xmlns="http://www.w3.org/2000/svg" width="8"
                                        height="4" viewBox="0 0 8 4">
                                    <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                            transform="translate(8 4) rotate(180)"/>
                                    </svg>
                                </a>
                                <div class="sub-menu-wrap sub-service">
                                    <ul class="list p-0">
                                        <li>
                                            <router-link to="/ilo" active-class="active" class="router">
                                                <span class="circle"> <img src="@/assets/images/ic-launch.svg" alt=""> </span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0003')}}</span>
                                                    <span class="f-Nunito fs-14">{{$t('navbar.0004')}}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/swap" active-class="active" class="router">
                                                <span class="circle"><img src="@/assets/images/ic-swap.svg" alt=""></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0005')}}</span>
                                                    <span class="f-Nunito fs-14">{{$t('navbar.0006')}}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/lock" active-class="active" class="router">
                                            <span class="circle"> <img src="@/assets/images/ic-lock.svg" alt=""> </span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0007')}}</span>
                                                <span class="f-Nunito fs-14">{{$t('navbar.0008')}}</span>
                                            </div>
                                        </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/nft" active-class="active" class="router">
                                                <span class="circle"><img src="@/assets/images/ic-nft.svg" alt=""></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">Nft</span>
                                                    <span class="f-Nunito fs-14">Push Nft</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="">
                                            <router-link to="/mint" active-class="active" class="router">
                                            <span class="circle"> <img src="@/assets/images/ic-mint.svg" alt=""> </span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0009')}}</span>
                                                <span class="f-Nunito fs-14">{{$t('navbar.0010')}}</span>
                                            </div>
                                            </router-link>
                                        </li>
                                        <li class="">
                                            <router-link to="/staking" active-class="active" class="router">
                                                <span class="circle"><img src="@/assets/images/ic-staking.svg" alt=""></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0011')}}</span>
                                                    <span class="f-Nunito fs-14">{{$t('navbar.0012')}}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li class="mb-0">
                                            <router-link to="/airdrop" active-class="active" class="router">
                                                <span class="circle"><img src="@/assets/images/ic-airdrop.svg" alt=""></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0013')}}</span>
                                                    <span class="f-Nunito fs-14">{{$t('navbar.0014')}}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a>
                                    <router-link to="/swap" active-class="active" class="router">
                                        {{$t('navbar.0005')}}
                                    </router-link>
                                </a>
                            </li>
                            <li>
                                <a class="poiter">
                                    {{$t('navbar.0015')}}
                                    <svg class="ic-dot ml-1" xmlns="http://www.w3.org/2000/svg" width="8"
                                        height="4" viewBox="0 0 8 4">
                                    <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                            transform="translate(8 4) rotate(180)"/>
                                    </svg>
                                </a>
                                <div class="sub-menu-wrap sub-service">
                                    <ul class="list p-0">
                                        <li>
                                            <router-link to="/staking" active-class="active" class="router">
                                                <span class="circle"> <img src="@/assets/images/ic-staking.svg" alt=""> </span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0011')}}</span>
                                                    <span class="f-Nunito fs-14">{{$t('navbar.0012')}}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/affiliate" active-class="active" class="router">
                                                <span class="circle"><img src="@/assets/images/ic-aff.svg" alt=""></span>
                                                <div class="clearfix">
                                                    <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0016')}}</span>
                                                    <span class="f-Nunito fs-14">{{$t('navbar.0017')}}</span>
                                                </div>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/withdraw" active-class="active" class="router">
                                            <span class="circle"> <img src="@/assets/images/ic-withdraw.svg" alt=""> </span>
                                            <div class="clearfix">
                                                <span class="f-Nunito d-block fw-bold ">{{$t('navbar.0018')}}</span>
                                                <span class="f-Nunito fs-14">{{$t('navbar.0019')}}</span>
                                            </div>
                                        </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                <div class="right-menu">
                    <span v-if="web3Modal.account" class="wallet dis-mobile mr-2">
					<img src="@/assets/images/armorial.svg" class="mr-2"> {{ formatAddress(web3Modal.account) }}
				</span>
                <button v-if="web3Modal.account" @click="resetApp()" type="submit" class="btn anim_btn fill disconnect dis-mobile">{{$t('common.0003')}}</button>
                    <a v-if="!web3Modal.account" type="submit" class="btn anim_btn fill" @click="showModalConnect() ,dcn = 'btn anim_btn fill disconnect btn-dis'" >
                            {{$t('common.0002')}}
                    </a>
                    <div v-if="web3Modal.account" @click="changeDcn" class="tool-wall">
                        <button @click="changeDot" class="btn p-0 group-wallet" data-toggle="collapse" data-target="#collapseOne"
						aria-expanded="true" aria-controls="collapseOne">
                        <span  class="wallet">
                            <img src="@/assets/images/armorial.svg" alt="" class="mr-2"> {{ formatAddress(web3Modal.account) }} <img :src="dot"
								class="ml-2 dot">
                        </span>
                    </button>
                    <button  type="submit" :class="dcn">
                        <a href="javascript:void(0)" @click="resetApp()">
                            {{$t('common.0003')}}
                        </a>
                    </button>
                    </div>
                    <div class="language">
                        <img src="@/assets/images/ic-language.svg" @click="isOpen = !isOpen">
                        <div class="sub-language" :class="{ isOpen: isOpen }">
                            <ul class="list">
                                <li v-for="(lang, index) in langs">
                                    <a href="#" @click="changeLang(lang['code'])">
                                        <img class="mr-1" 
                                            :src="require(`@/assets/images/${lang['img']}`)"
                                            width="20px"> {{lang['name']}}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="toggle-nav">
                        <a  @click="menuMobile"> <img src="@/assets/images/menu.svg" alt=""> </a>
                        <div :class="showsub">
                            <ul class="list">
                                <li @click="menuMobile">
                                    <router-link to="/" exact active-class="active">
                                        <span class="circle"> <img src="@/assets/images/ic-home.svg" alt=""> </span>{{$t('navbar.0001')}}
                                    </router-link>
                                </li>
                                <li>
                                    <a  id="showservice" @click="showService">
                                        <span class="circle"> <img src="@/assets/images/ic-services.svg" alt=""> </span>
                                        {{$t('navbar.0002')}}
                                        <svg class="ic-dot ml-2" xmlns="http://www.w3.org/2000/svg" width="10"
                                            height="10"
                                            viewBox="0 0 8 4">
                                        <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                                transform="translate(8 4) rotate(180)"></path>
                                        </svg>
                                    </a>
                                    <ul :class="listService">
                                        <li @click="menuMobile"><router-link active-class="active" to="/ilo">{{$t('navbar.0004')}}</router-link></li>
                                        <li @click="menuMobile"><router-link active-class="active" to="/lock">{{$t('navbar.0008')}}</router-link></li>
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/mint">{{$t('navbar.0010')}}</router-link>
                                        </li>
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/swap">{{$t('navbar.0006')}}</router-link>
                                        </li>
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/airdrop">{{$t('navbar.0014')}}</router-link>
                                        </li>
                                        <li @click="menuMobile"><a >Push Nft</a></li>
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/staking">{{$t('navbar.0012')}}</router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li @click="menuMobile">
                                    <router-link active-class="active" to="/swap">
                                        <span class="circle"> <img src="@/assets/images/ic-staking.svg" alt=""> </span>{{$t('navbar.0005')}}
                                    </router-link>
                                </li>
                                <li>
                                    <a  id="showsecurty" @click="showSecurity">
                                        <span class="circle"> <img src="@/assets/images/ic-audit.svg" alt=""> </span>{{$t('navbar.0015')}}
                                        <svg
                                            class="ic-dot ml-2" xmlns="http://www.w3.org/2000/svg" width="10"
                                            height="10"
                                            viewBox="0 0 8 4">
                                            <path id="Polygon_64" data-name="Polygon 64" d="M4,0,8,4H0Z"
                                                transform="translate(8 4) rotate(180)"></path>
                                        </svg>
                                    </a>
                                    <ul :class="listSecurity">
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/staking">{{$t('navbar.0011')}} </router-link>
                                        </li>
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/affiliate">{{$t('navbar.0016')}} </router-link>
                                        </li>
                                        <li @click="menuMobile">
                                            <router-link active-class="active" to="/withdraw">{{$t('navbar.0018')}} </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <web3-modal-vue
            ref="web3modal"
            :theme="theme"
            :provider-options="providerOptions"
            cache-provider
        />
    </div>
</template>

<script>
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3ModalVue from 'web3modal-vue';
import web3 from "web3"
import {numberOrNull} from "@/utils/helpers";
import {mapGetters, mapState} from "vuex";
import axios from "axios";
import EventBus from '../utils/event-bus';

export default {
    name: "Navbar",
    components: {
        Web3ModalVue,
    },
    data() {
        return {
            langs: [
                {
                    code: "en",
                    name: "English",
                    img : "eng.png"
                },
                {
                    code: "cn",
                    name: "China",
                    img : "china.png"
                },
                {
                    code: "kor",
                    name: "South Korea",
                    img : "kor.png"
                },
                {
                    code: "vn",
                    name: "Viet nam",
                    img : "vn.png"
                },
                {
                    code: "dubai",
                    name: "Saudi Arabia",
                    img : "dubai.png"
                }
            ],
            isOpen: false,
            error_connect: this.$store.state.error_connect,
            dataUser:{},
            modalConnect: false,
            theme: 'light',
            providerOptions: {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        rpcUrl: process.env.VUE_APP_RPC_URL || "https://bsc-dataseed.binance.org/",
                        infuraId: process.env.infuraId || "11e2e137b38d4fd89eaaeef2090471b1",
                    }
                },
                antex: {
                    package: WalletConnectProvider,
                    options: {
                        rpcUrl: process.env.VUE_APP_RPC_URL || "https://bsc-dataseed.binance.org/",
                        infuraId: process.env.infuraId || "11e2e137b38d4fd89eaaeef2090471b1",
                        hideInMenu: () => !window.ethereumAntex
                    },
                }
            },
            number: 0,
            balance: 0,
            exchanges: [],
            dex: null,
            chainUserInfo: null,
            platforms: [],
            priceToken: 0,
            hidden: true,
            showsub: "sub-menu-wrap",
            listService:"listsub listmenu1 p-0",
            listSecurity:"listsub listmenu1 p-0",
            dcn: "btn anim_btn fill disconnect btn-dis",
            dot: require('@/assets/images/dot-b.svg'),
        }
    },
    created() {
        EventBus.$on('child-event', (value) => {
        console.log(value);
        this.showModalConnect()
    });
    },
    computed: {
        ...mapState(['web3Modal']),
        connectInfo() {
            return this.$store.state.connect;
        },
        ...mapGetters({
            exchange: 'exchange',
            account: 'account',
        }),
    },
    mounted() {
        this.$nextTick(async () => {
            const web3modal = this.$refs.web3modal;
            this.$store.commit('setWeb3Modal', web3modal)

            if (web3modal.cachedProvider) {
                await this.$store.dispatch('connect');
            }
        })
    },
    beforeMount() {
        this.loadPlatform();
    },
    beforeDestroy() {
    },
    methods: {
        showPopup() {
            this.$store.commit('setPopupWellcome', true);
        },
        changeLang(lang) {
            this.$store.dispatch('setLang', lang);
            localStorage.setItem('selectedLanguage', lang);
            this.isOpen = false;
        },
        getPlatforms() {
            return axios.get('/api/index/list-platform', {responseType: 'json'});
        },
        getExchanges() {
            return axios.get('/api/platform/list-exchange-platform', {responseType: 'json'});
        },
        setPlatform(platforms, exchanges) {
            let initPlatform = 'bsc';
            this.platforms = platforms.data.data;
            this.exchanges = exchanges.data['data'];
            this.$store.commit('setPlatforms', this.platforms);
            let total = exchanges.data['optional']['row_count'];
            this.$store.commit('setExchanges', this.exchanges);
            if (!this.exchange['network'] || this.exchange === null || this.exchange['network'] === undefined) {
                for (let i = 0; i < total; i++) {
                    if (this.exchanges[i]['platform'] === initPlatform) {
                        this.$store.commit('setExchange', this.exchanges[i]);
                        break;
                    }
                }
            }
        },
        loadPlatform() {
            let _this = this;
            axios.all([this.getPlatforms(), this.getExchanges()]).then(
                axios.spread(function (platforms, exchanges) {
                    _this.setPlatform(platforms, exchanges)
                })
            );
        },
        connect() {
            this.$store.dispatch('connect');
        },
        resetApp() {
            this.$store.dispatch('resetApp')
        },
        showModalConnect() {
            this.connect()
        },
        formatAddress(address) {
            return address ? address.slice(0, 5) + "..." + address.slice(-4) : '';
        },
        async getBalance() {
            const {active, account} = this.web3Modal
            if (!active) return
            const balance = await this.web3Modal.library.getBalance(account)
            this.balance = numberOrNull(web3.utils.fromWei(balance.toString()))
        },
        menuMobile(){
            if (this.showsub == "sub-menu-wrap") {
                this.showsub = "sub-menu-wrap showsub"
            } else this.showsub = "sub-menu-wrap"
        },
        showService(){
            if (this.listService == "listsub listmenu1") {
                this.listService = "listsub listmenu1 show-menu"
            } else this.listService = "listsub listmenu1"
        },
        showSecurity(){
            if (this.listSecurity == "listsub listmenu") {
                this.listSecurity = "listsub listmenu show-menu"
            } else this.listSecurity = "listsub listmenu"
        },
        changeDcn(){
            if (this.dcn == "btn anim_btn fill disconnect btn-dis") {
                this.dcn = "btn anim_btn fill disconnect btn-dis show"
            } else this.dcn = "btn anim_btn fill disconnect btn-dis"
        },
        changeDot(){
            if (this.dot == require('@/assets/images/dot-b.svg')) {
                this.dot = require('@/assets/images/dot-b-0.svg')
            } else this.dot = require('@/assets/images/dot-b.svg')
        }
    }
}
</script>

<style scoped>
.router-link-active {
    padding: 0px !important;
}

.router-link-exact-active {
    padding: 0px !important;
}

.router {
    padding: 0px !important;
}
.poiter {
    cursor: pointer;
}
.isOpen {
  display: block;
}
ol, ul {
   padding-left: 0rem
}
</style>
