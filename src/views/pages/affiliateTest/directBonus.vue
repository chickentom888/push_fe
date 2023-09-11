<template>
    <div>
        <div class="tab-pane">
            <div class="panel-content">
                <ul class="tree">
                    <li>
                        <div class="d-flex pb-2">
                            <img @click="changePlus" :src="imgPlus" class="mr-3">
                                <div class="d-flex">
                                    <span class="mr-4">
                                        <img v-if="showTree" src="@/assets/images/ic-address.svg" class="mr-1"/>
                                        <img v-if="!showTree" src="@/assets/images/ic-address-gray.svg" class="mr-1"/>
                                            Address: <b>{{ dataWallet.address | truncateMiddle_(8) }}</b>
                                    </span>
                                    <span><img src="@/assets/images/ic-commis.svg" class="mr-1"> Total Commission:
                                            <b>{{this.formatNumber(dataWallet.direct_bonus)}}</b>
                                    </span>
                                </div>
                        </div>
                        <ul v-if="showTree && dataDirectBonus.length > 0">
                            <li v-for="data in dataDirectBonus">
                                <span class="mr-4"><img src="@/assets/images/ic-address-gray.svg" class="mr-1">
                                    Address: <b>{{ data.address | truncateMiddle_(8) }}</b></span>
                                <span class="mr-4"><img src="@/assets/images/ic-commis-gray.svg" class="mr-1">
                                    Commission: <b>{{ data.direct_bonus ? formatNumber(data.direct_bonus) : 0 }}</b></span>
                                <span><img src="@/assets/images/ic-stacking.svg" class="mr-1"> 
                                    Stacking PUSH: <b>{{ formatNumber(data.personal_invest) }}</b></span>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="mt-5 position-relative">
                    <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
                    <span class="decor6"> <img src="@/assets/images/decor1.png"></span>
                    <p class="fs-24 fw-bold">History</p>

                    <table class="table tableblue1 tableblue">
                        <thead>
                            <tr>
                                <th scope="col" style="width: 40%;" class="text-left">Time</th>
                                <th scope="col" style="width: 20%;">Coin</th>
                                <th scope="col" style="width: 20%;" class="text-left">Amount</th>
                                <th scope="col" style="width: 20%;" class="text-left">From</th>
                            </tr>
                        </thead>
                        <tbody v-if="dataHistory.length > 0">
                            <tr v-for="data in dataHistory">
                                <td class="text-left">
                                    <span> 
                                            {{
                                                data && data["created_at"]
                                                    ? momentTimeHistory(data["created_at"] * 1000, 1)
                                                    : "--"
                                            }} <svg
                                            xmlns="http://www.w3.org/2000/svg" width="5" height="5"
                                            viewBox="0 0 5 5">
                                            <circle id="Ellipse_2423" data-name="Ellipse 2423" cx="2.5"
                                                    cy="2.5" r="2.5" fill="#34a759" />
                                            </svg> 
                                            {{
                                                data && data["created_at"]
                                                    ? momentTimeHistory(data["created_at"] * 1000, 2)
                                                    : "--"
                                            }}
                                    </span> 
                                </td>
                                <td>PUSH</td>
                                <td class="text-left">
                                    <span class="fw-bold clgreen">
                                        {{formatNumber(data.bonus_amount)}}
                                    </span>
                                </td>
                                <td class="text-left">
                                    <span class="text-info">{{ data.message }}</span>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-if="dataHistory.length == 0">
                            <tr>
                                <td colspan="4">
                                    <div class="py-5 text-center">
                                        <img src="@/assets/images/icons/nodata.png" alt="">
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--Paginate-->
                    <Paginate
                        v-show="dataHistory.length > 0 && totalPage > 1"
                        @pageChange="changePage($event)"
                        :totalPage="totalPage"
                        :page="page">
                    </Paginate>
                </div>
            </div>
        </div>
    <!-- -----Loading---- -->
    <loading
        :active.sync="showLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
    ></loading>
    </div>
</template>
<script>
import Paginate from "@/components/Paginate";
import moment from "moment";
import {formatNumber_} from "@/utils/formatBalance.js";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import {mapGetters, mapState} from "vuex";
export default {
    data() {
        return {
            dataDirectBonus: {},
            dataHistory: {},
            showLoading: false,
            fullPage: true,
            page: 1,
            limit: 20,
            totalPage: 1,
            currentPage: 1,
            type: "direct_bonus",
            showTree: false,
            imgPlus: require("@/assets/images/plus.svg")
        }
    },
    components: {
        Loading,
        Paginate
    },
    props: {
        dataWallet: {}
    },
    mounted() {
        this.teamDirectBonus();
        this.history();
    },
    methods: {
        async teamDirectBonus() {
            const user = JSON.parse(localStorage.getItem("user"));
            try {
                this.showLoading = true;
                const res = await axios.get("/api/user/referral", {
                    headers: {
                        Authorization: "Bearer " + user.token
                    }
                });
                if(res.data.status == 1) this.dataDirectBonus = res.data.data;
            }catch(error){
                console.log(error);
            }finally{
                this.showLoading = false;
            }
        },
        async history() {
            try {
                this.showLoading = true;
                const user = JSON.parse(localStorage.getItem("user"));
                const res = await axios.get(`/api/staking/bonusLog?type=${this.type}&p=${this.page}&limit=${this.limit}`, {
                    headers: {
                        Authorization: "Bearer " + user.token
                    }
                });
                if(res.data.status != 1) return;
                this.dataHistory = res.data.data.list_data;
                this.totalPage = res.data.optional.paging_info.total_page;
                this.currentPage = this.page;
            }catch(error) {
                
            }finally{
                this.showLoading = false;
            }
        },
        formatNumber(number) {
            return formatNumber_(number);
        },
        momentTimeHistory(date, number) {
            if (number && number == 1) {
                return moment(date).format("D/M/Y");
            } else if (number && number == 2) {
                return moment(date).format("HH:mm:ss");
            } else {
                return moment(date).format("HH:mm D/M/Y");
            }
        },
        changePlus() {
            //showTree == true => gray và show Tree
            this.showTree = false ? this.showTree == true : this.showTree == false;
            //Nếu showTree == false => green và hide tree
            this.showTree == true
                ? (this.imgPlus = require("@/assets/images/icon-minus.svg"))
                : (this.imgPlus = require("@/assets/images/plus.svg"));
        },
        changePage(page) {
            this.page = page;
            this.history();
        },
    },
    computed: {
        ...mapGetters({
            account : 'account'
        })
    },
    watch: {
        'account': function () {
        setTimeout(() => {
            this.teamDirectBonus();
            this.history();
          }, 1000);
        }
    }
}
</script>