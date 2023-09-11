<template>
    <div>
        <div class="box-dex push-lock mb-5">
            <div class="container" data-aos="fade-up" data-aos-delay="200">
                <span class="decor5"> <img alt="" src="@/assets/images/decor1.png"></span>
                <span class="decor18"> <img alt="" src="@/assets/images/decor2.png" class="w-75"></span>
                <div class="box-swap safety-alert p-4 mb-5">
                    <p class="fs-24 fw-bold">Create ILO</p>
                    <p class="f-Nunito">Get started in just a few simple steps!</p>
                    <p class="f-Nunito cl9F9">
                        For best results we strongly recommend you get your token AUDITED and your launch KYCed prior to
                        setting up the launch!
                        Sales that are both Audited and KYCed will receive a special highlight on the dashboard. </p>
                    <ul class="listilo">
                        <li>
                            To Request an Audit from one of our 3rd Party Partners <a href="javascript:void(0)" class="clgreen">click
                            here.</a>
                        </li>
                        <li>
                            To Request KYC from one of our 3rd Party Partners <a href="javascript:" class="clgreen">click
                            here.</a>
                        </li>
                    </ul>
                </div>
                <p class="f-Nunito fs-18 text-danger text-center mb-5">For tokens with burns, rebase or other special
                    transfers
                    please ensure
                    you have a
                    way to
                    whitelist
                    (excludeFromFee) multiple addresses or turn off the special transfer events (By setting fees to 0
                    for
                    example for the duration of the presale)</p>

                <div class="box-select">
                    <h3 class="fw-bold">Selected network</h3>
                    <button class="btn-whiteBig fw-bold fs-20 collapsed mb-5" type="button"
                            @click="showModalNetwork = true">
                        <img width="32" class="mr-2" :src="selectedPlatform.icon" alt="">
                        {{selectedPlatform.name}}
                        <img alt="" src="@/assets/images/dot-b.svg" class="ml-2">
                    </button>
                    <p class="fs-24 fw-bold f-Nunito mb-4">Launch your token on which exchange?</p>
                    <p v-if="connectInfo['exchanges']">
                        <button type="button" class="btn-list justify-content-center w-100 fs-20" v-for="(item, idx) in connectInfo['exchanges']" :key="idx">
                            <span @click="changeExchange(item)">
                                <img width="30" :src="item.exchange_logo" alt="" class="mr-3">
                                {{item['exchange_name'] ? item['exchange_name'] : ''}}
                            </span>
                        </button>
                    </p>
                </div>
                <b-modal
                    centered
                    hide-footer
                    hide-header
                    hide-header-close
                    v-model="showModalNetwork"
                >
                    <div class="modal-header">
                        <button
                            @click="showModalNetwork = false"
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26.786"
                                height="26.782"
                                viewBox="0 0 26.786 26.782"
                            >
                                <g
                                    id="Group_24168"
                                    data-name="Group 24168"
                                    transform="translate(-4960.994 -447.015)"
                                    opacity="0.23"
                                >
                                    <path
                                        id="Path_1006"
                                        data-name="Path 1006"
                                        d="M4960.994,460.4a13.393,13.393,0,1,1,13.382,13.393A13.391,13.391,0,0,1,4960.994,460.4Zm13.405,11.306a11.3,11.3,0,1,0-11.32-11.294A11.272,11.272,0,0,0,4974.4,471.711Z"
                                    ></path>
                                    <path
                                        id="Path_1007"
                                        data-name="Path 1007"
                                        d="M5068.889,554.836c-.192-.208-.3-.332-.415-.448-.818-.819-1.641-1.634-2.456-2.456a1.068,1.068,0,0,1-.123-1.559,1.056,1.056,0,0,1,1.59.1c.926.927,1.841,1.864,2.789,2.826.15-.137.264-.234.369-.339.831-.826,1.657-1.657,2.49-2.481a1.05,1.05,0,1,1,1.454,1.482c-.816.821-1.638,1.636-2.456,2.455-.106.107-.207.22-.345.367l2.454,2.428c.149.147.3.292.442.445a1.037,1.037,0,1,1-1.464,1.466c-.847-.829-1.68-1.673-2.52-2.509-.117-.116-.239-.228-.451-.43-.174.214-.316.421-.489.6q-1.147,1.161-2.31,2.306A1.041,1.041,0,1,1,5066,557.6q1.219-1.236,2.458-2.453A3.507,3.507,0,0,1,5068.889,554.836Z"
                                        transform="translate(-95.859 -94.416)"
                                    ></path>
                                </g>
                            </svg>
                        </button>
                        <div class="modal-body text-center">
                            <h3 class="mb-4">Switch Network</h3>
                            <div class="listconnect listswitch" v-show="connectInfo['platforms']">
                                <div v-for="item in connectInfo['platforms']['main']" :key="item.chainId">
                                    <a href="javascript:void(0)" @click="changeChain(item,'main'); showModalNetwork = false">
                                        <img width="30" :src="item.icon" :alt='item.name' class="mr-2">
                                        <span>{{ item.name }}</span>
                                    </a>
                                </div>
                                <p v-if="connectInfo['platforms']['test']">
                                    <h4 class="my-3 ">Testnets</h4>
                                </p>
                                <div v-for="item in connectInfo['platforms']['test']" :key="item.chainId">
                                    <a href="javascript:void(0)" @click="changeChain(item, 'test');  showModalNetwork = false">
                                        <img width="30" :src="item.icon" :alt='item.name' class="mr-2">
                                        {{ item.name }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-modal>
                <span class="decor6"> <img alt="" src="@/assets/images/decor1.png"></span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "create_ilo",
    data() {
        return {
            showModalNetwork: false,
            selectType: 1,
            selected: {
                exchange_logo: '',
                exchange_name: '',
            },
            selectedPlatform: {
                icon: '',
                symbol: '',
                name: '',
            },
            selectNetwork: true,
            selectedExchange: false
        }
    },
    computed: {
        web3Modal() {
            return this.$store.state.web3Modal;
        },
        connectInfo() {
            return this.$store.state.connect;
        },
        exchanges() {
            let ex = this.$store.state.connect['exchanges'];
            console.log('ex', ex);
            let chainUser = this.$store.state.connect['chainIdUser'];
            return ex.filter(dexc => {
                return dexc['network'] && dexc['network'] === chainUser['network'] && dexc['platform'] === chainUser['symbol'].toLowerCase();
            });
        },
    },
    methods: {
        changeChain(chain, network) {
            this.selectedPlatform = chain;
            chain['network'] = network;
            this.$store.commit('setChainIdUser', chain);
            let networkExchange = false;
            if (this.exchange === null || this.exchange === undefined) {
                networkExchange = false;
            } else {
                networkExchange = this.exchange['network'];
            }
            if (!networkExchange || networkExchange !== chain['network'] || this.exchange['platform'] !== chain['symbol'].toLowerCase()) {
                // set exchange
                let url = '?network='+chain['network']+'&platform='+chain['symbol'].toLowerCase();
                const listExchanges = axios.get('/api/platform/list-exchange-platform'+url).then(
                    resp => {
                        this.selected = {
                            exchange_logo: '',
                            exchange_name: '',
                        };
                        this.selectedExchange = false;
                        let exchanges = resp.data['data'];
                        if (exchanges) {
                            this.$store.commit('setExchange', resp.data['data'][0]);
                        }
                    }
                );
            }
            if (this.web3Modal.active) {
                this.$store.dispatch('connect');
            }
        },
        changeExchange(item) {
            this.$store.commit('setExchange', item);
            this.selected = item;
            this.selectNetwork = false;
            this.selectedExchange = true;
            if (this.selectType === 1) {
                this.$router.push('/ilo-create');
            } else {
                this.$router.push('/ilov-create');
            }
        },
    },
    created() {
        let type = this.$route.query.type;
        if (type && type === 'ilov') {
            this.selectType = 0;
        }
        let connect = this.$store.state.connect;
        if (connect && connect['exchange']) {
            this.selected = connect['exchange'];
            this.selectedExchange = true;
        }
        const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
        this.selectedPlatform = connect['platforms'][network][0];
    }
}
</script>