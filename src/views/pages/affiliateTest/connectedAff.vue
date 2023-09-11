<template>
    <div class="container" data-aos="fade-up" data-aos-delay="200">
            <div class="box-dex">
                <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
                <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
                <div class="banner-reward">
                    <!--My referral-->
                    <Referral :dataWallet='dataWallet' :count="count"></Referral>
                </div>
                <div class="direct-warpper">
                    <div class="total-commi">
                        <span>Total commission</span>
                        <span class="number">{{ dataWallet.total_bonus ? this.formatNumber(dataWallet.total_bonus) : 0 }} PUSH</span>
                    </div>
                    <div class="clearfix">
                        <div class="tab-bonus mt-5 mb-4">
                            <ul class="nav m-b-20">
                                <li><a href="javascript:" @click="changeTab(1)" aria-expanded="true" :class="showDirectBonus == true ? 'active' : ''">Direct bonus</a></li>
                                <li><a href="javascript:" @click="changeTab(2)" aria-expanded="false" :class="showTeamBonus == true ? 'active' : ''">Team bonus</a></li>
                                <li><a href="javascript:" @click="changeTab(3)" aria-expanded="false" :class="showMatchingBonus == true ? 'active' : ''">Matching bonus</a></li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <DirectBonus v-if="showDirectBonus == true" :dataWallet='dataWallet' :count="count"></DirectBonus>
                            <TeamBonus v-if="showTeamBonus == true" :dataWallet='dataWallet' :count="count"></Teambonus>
                            <MatchingBonus v-if="showMatchingBonus == true" :dataWallet='dataWallet' :count="count"></MatchingBonus>
                        </div>
                    </div>
                </div>
            </div>
        <loading
            :active.sync="showLoading"
            :can-cancel="true"
            :is-full-page="fullPage"
        ></loading>
        </div>
</template>
<script>
//import
import {formatNumber_} from "@/utils/formatBalance.js";
import axios from "axios";
import Referral from './referral.vue'
import DirectBonus from './directBonus.vue'
import TeamBonus from './teamBonus.vue'
import MatchingBonus from './matchingBonus.vue'
import {mapGetters, mapState} from "vuex";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
    name : "connectedAff",
    data() {
        return {
            showDirectBonus: true,
            showTeamBonus: false,
            showMatchingBonus: false,
            linkLeft: "",
            linkRight: "",
            dataWallet: {},
            showLoading: false,
            fullPage: true,
            count: 1
        }
    },
    components: {
        Referral,
        DirectBonus,
        TeamBonus,
        MatchingBonus,
        Loading
    },
    methods: {
        formatNumber(number) {
            return formatNumber_(number);
        },
        changeTab(tab) {
            if(tab == 1) {
                this.showDirectBonus = true;
                this.showTeamBonus = false;
                this.showMatchingBonus = false;
            } else if(tab == 2) {
                this.showDirectBonus = false;
                this.showTeamBonus = true;
                this.showMatchingBonus = false;
            } else {
                this.showDirectBonus = false;
                this.showTeamBonus = false;
                this.showMatchingBonus = true;
            }
        },
        async infoWallet() {
            const user = JSON.parse(localStorage.getItem("user"));
            try {
                this.showLoading = true;
                const res = await axios.get("/api/user/index", {
                    headers: {
                        Authorization: "Bearer " + user.token
                    }
                });
                if (res.data.status == 1) {
                    this.dataWallet = res.data.data;
                    this.count++;
                } 
            }catch(error) {
                console.log(error);
            }finally{
                this.showLoading = false;
            }
        },
    },
    mounted() {
        this.infoWallet();
    },
    computed: {
        ...mapGetters({
            account : 'account'
        })
    },
    watch: {
        'account': function () {
        setTimeout(() => {
            this.infoWallet();
          }, 1000);
        }
    }
};
</script>
