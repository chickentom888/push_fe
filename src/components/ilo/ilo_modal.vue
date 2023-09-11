<template>
    <b-modal
        centered
        hide-footer
        hide-header
        hide-header-close
        v-model="internalShowModal"
    >
        <div class="" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button @click="$emit('closeModal')" type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.786" height="26.782"
                             viewBox="0 0 26.786 26.782">
                            <g id="Group_24168" data-name="Group 24168" transform="translate(-4960.994 -447.015)"
                               opacity="0.23">
                                <path id="Path_1006" data-name="Path 1006"
                                      d="M4960.994,460.4a13.393,13.393,0,1,1,13.382,13.393A13.391,13.391,0,0,1,4960.994,460.4Zm13.405,11.306a11.3,11.3,0,1,0-11.32-11.294A11.272,11.272,0,0,0,4974.4,471.711Z">
                                </path>
                                <path id="Path_1007" data-name="Path 1007"
                                      d="M5068.889,554.836c-.192-.208-.3-.332-.415-.448-.818-.819-1.641-1.634-2.456-2.456a1.068,1.068,0,0,1-.123-1.559,1.056,1.056,0,0,1,1.59.1c.926.927,1.841,1.864,2.789,2.826.15-.137.264-.234.369-.339.831-.826,1.657-1.657,2.49-2.481a1.05,1.05,0,1,1,1.454,1.482c-.816.821-1.638,1.636-2.456,2.455-.106.107-.207.22-.345.367l2.454,2.428c.149.147.3.292.442.445a1.037,1.037,0,1,1-1.464,1.466c-.847-.829-1.68-1.673-2.52-2.509-.117-.116-.239-.228-.451-.43-.174.214-.316.421-.489.6q-1.147,1.161-2.31,2.306A1.041,1.041,0,1,1,5066,557.6q1.219-1.236,2.458-2.453A3.507,3.507,0,0,1,5068.889,554.836Z"
                                      transform="translate(-95.859 -94.416)"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                <div class="modal-body text-center p-0">
                    <div class="top-upcoming mb-2 pl-3 pr-2">
                        <img v-if="presaleData.avatar_url" :src="presaleData.avatar_url" alt="" class="img">
                        <img v-else src="@/assets/images/push.svg" alt="" class="img">
                        <span class="name fs-24 m-0">{{ presaleData ? presaleData.sale_token_symbol : '' }} <span class="fs-16">{{ presaleData ? presaleData.sale_token_name: '' }}</span></span>
                    </div>
                    <div class="detail-tokenuser mb-5">
                        <div class="tab-blue w-100">
                            <ul class="nav m-b-20">
                                <li class="poiter" @click="active = 1"><a data-toggle="tab" aria-expanded="true" :class="active === 1 ? 'active' : ''" href="javascript:void(0)" >Info</a>
                                </li>
                                <li class="poiter" @click="active = 2"><a data-toggle="tab" aria-expanded="false" :class="active === 2 ? 'active' : ''" href="javascript:void(0)" >Tokenomics</a>
                                </li>
                            </ul>
                            <span class="clfff f-Nunito d-flex align-items-center">
                                <img src="@/assets/images/icon-start.svg" class="mr-2"> Watchlist</span>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade" :class="active === 1 ? 'active show' : ''" id="token1">
                                <Info :countShow="countShow" :type="type" :presale="presaleData"/>
                            </div>
                            <div class="tab-pane fade" :class="active === 2 ? 'active show' : ''" id="token2">
                                <Tokenomics :countShow="countShow" :presale="presaleData" :presaleLocked="presaleLocked"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
    import Info from './tabModal/info';
    import Tokenomics from './tabModal/tokenomics';
    import axios from "axios";
    import {mapGetters} from "vuex";
    export default {
        name: "IloModal",
        components: {
            // Chart,
            Info,
            Tokenomics,
        },
        data() {
            return {
                presaleLocked: [],
                active: 1,
                presaleData: {},
                internalShowModal: false
            }
        },
        props: {
            countShow: Number,
            presale: Object,
            type: {
                type: String,
                default: 'ilo'
            },
        },
        methods: {
            getLockTokenPresale() {
                const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
                let platform = "bsc";
                let address_token = this.presale.sale_token_address;
                let url = '/api/lock/get-by-token/'+ address_token;
                url = url + '?platform=' + platform + '&network=' + network + '&order=withdraw_status,unlock_time&by=asc,asc';
                axios.get(url).then(res => {
                    this.presaleLocked = res.data.data;
                })
            },
        },
        computed: {
            ...mapGetters({
                socketPresales: 'presales',
            }),
        },
        watch: {
            countShow: function() {
                this.internalShowModal = true;
                this.presaleData = this.presale;
                this.getLockTokenPresale();
            },
            'socketPresales': function (presales) {
                if (presales.length == 0) return;
                presales.some(presale => {
                    if (this.presaleData && presale._id.$oid == this.presaleData._id.$oid) {
                        this.presaleData = presale;
                    }
                })
            }
        },
        destroyed() {
            let el = document.getElementsByClassName("modal-backdrop fade show");
            if (el.length > 0) {
                el[0].parentNode.removeChild(el[0]);
            }
        }
    }
</script>

<style scoped>

</style>
