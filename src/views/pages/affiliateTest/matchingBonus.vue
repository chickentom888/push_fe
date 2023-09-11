<template>
    <div>
        <div class="mt-5 position-relative">
            <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
            <span class="decor6"> <img src="@/assets/images/decor1.png"></span>
            <p class="fs-24 fw-bold">History</p>
            <table class="table tableblue1 tableblue">
                <thead>
                    <tr>
                        <th scope="col" style="width: 40%;" class="text-left">
                            Time</th>
                        <th scope="col" style="width: 20%;">Coin</th>
                        <th scope="col" style="width: 20%;" class="text-left">
                            Amount</th>
                        <th scope="col" style="width: 20%;" class="text-left">
                            From</th>
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
            <Paginate
                v-show="dataHistory.length > 0 && totalPage > 1"
                @pageChange="changePage($event)"
                :totalPage="totalPage"
                :page="page">
            </Paginate>
        </div>
        <loading
            :active.sync="showLoading"
            :can-cancel="true"
            :is-full-page="fullPage"
        ></loading>
    </div>
</template>
<script>
import axios from "axios";
import {formatNumber_} from "@/utils/formatBalance.js";
import Paginate from "@/components/Paginate";
import moment from "moment";
import {mapGetters, mapState} from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
    data() {
        return {
            dataHistory: {},
            type: "matching_bonus",
            page: 1,
            limit: 20,
            totalPage: 1,
            currentPage: 1,
            showLoading: false,
            fullPage: true
        }
    },
    mounted() {
        this.history();
    },
    components: {
        Loading,
        Paginate
    },
    methods: {
        formatNumber(number) {
            return formatNumber_(number);
        },
        async history() {
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                this.showLoading = true;
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
        changePage(page) {
            this.page = page;
            this.history();
        },
        momentTimeHistory(date, number) {
            if (number && number == 1) {
                return moment(date).format("D/M/Y");
            } else if (number && number == 2) {
                return moment(date).format("HH:mm:ss");
            } else {
                return moment(date).format("HH:mm D/M/Y");
            }
        }
    },
    computed: {
        ...mapGetters({
            account : 'account'
        })
    },
    watch: {
        'account': function () {
        setTimeout(() => {
            this.history();
          }, 2000);
        }
    }
}


</script>