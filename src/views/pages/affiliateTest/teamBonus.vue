<template>
    <div>
        <div class=" tab-pane" id="bonus2">
            <div class="panel-content">
                <div class="tree1 clearfix">
                    <div class="d-flex fs-18 f-Nunito justify-content-center">
                        <span class="mr-4"><img src="@/assets/images/ic-address.svg" class="mr-1">
                                Address: <b>
                                    {{ dataWallet.address | truncateMiddle_(8) }}</b></span>
                        <span><img src="@/assets/images/ic-commis.svg" class="mr-1"> Total Commission:
                                <b>{{dataWallet.team_bonus ? this.formatNumber(dataWallet.team_bonus) : 0}}</b></span>
                    </div>
                    <div v-if="showBack == true" @click="teamBonus(parentTree)" class="d-flex fs-18 fw-bold f-Nunito justify-content-center mb-2"> 
                        <img style="cursor: pointer;" src="@/assets/images/ic-muiten-teanbomus.svg"/>
                    </div>
                    <ul class="mt-3">
                        <li>
                            <ul >
                                <li>
                                    <a 
                                        @click="bonusModal = true"
                                        href="javascript:">
                                        <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                        <span class="d-flex justify-content-center w200"> 
                                            {{ dataTeamBonus.address | truncateMiddle_(8) }}
                                        </span>
                                    </a>
                                    <ul>
                                        <li><a href="javascript:">
                                                <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                                <span 
                                                    v-if="dataLevelOneLeft.length == 0 || dataLevelOneLeft.length == undefined"
                                                    @click="copyToClipboard(linkTreeLeft)"
                                                    class="d-flex justify-content-center w200 pointer mr-2">
                                                    <img src="@/assets/images/plus-blue.svg" class="ml-2">
                                                </span>
                                                <span
                                                    v-if="dataLevelOneLeft.length > 0"
                                                    @click="teamBonus(dataLevelOneLeft[0]._id.$oid)"
                                                    class="d-flex justify-content-center w200">
                                                    {{dataLevelOneLeft[0].address | truncateMiddle_(8)}}
                                                </span>
                                            </a>
                                            <ul v-if="isHaveChildLevelOneLeft">
                                                <li>
                                                    <a href="javascript:">
                                                        <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                                        <span 
                                                            v-if="dataLevelTwoLeft_OneLeft.length == 0 || dataLevelTwoLeft_OneLeft.length == undefined"
                                                            @click="copyToClipboard(linkLevelTwoLeft_OneLeft)"
                                                            class="d-flex justify-content-center w200 pointer mr-2">
                                                            <img src="@/assets/images/plus-blue.svg" class="ml-2">
                                                        </span>
                                                        <span v-if="dataLevelTwoLeft_OneLeft.length > 0"
                                                              @click="teamBonus(dataLevelTwoLeft_OneLeft[0]._id.$oid)"
                                                            class="d-flex justify-content-center w200">
                                                            {{dataLevelTwoLeft_OneLeft[0].address | truncateMiddle_(8)}}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:">
                                                        <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                                        <span 
                                                            v-if="dataLevelTwoRight_OneLeft.length == 0 || dataLevelTwoRight_OneLeft.length == undefined"
                                                            @click="copyToClipboard(linkLevelTwoRight_OneLeft)"
                                                            class="d-flex justify-content-center w200 pointer mr-2">
                                                            <img src="@/assets/images/plus-blue.svg" class="ml-2">
                                                        </span>
                                                        <span
                                                            v-if="dataLevelTwoRight_OneLeft.length > 0"
                                                            @click="teamBonus(dataLevelTwoRight_OneLeft[0]._id.$oid)"
                                                            class="d-flex  justify-content-center w200">
                                                            {{dataLevelTwoRight_OneLeft[0].address | truncateMiddle_(8)}}
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:">
                                                <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                                <span 
                                                    v-if="dataLevelOneRight.length == 0 || dataLevelOneRight.length == undefined"
                                                    @click="copyToClipboard(linkTreeRight)"
                                                    class="d-flex justify-content-center w200 pointer mr-2">
                                                    <img src="@/assets/images/plus-blue.svg" class="ml-2">
                                                </span>
                                                <span 
                                                    v-if="dataLevelOneRight.length > 0"
                                                    @click="teamBonus(dataLevelOneRight[0]._id.$oid)"
                                                    class="d-flex  justify-content-center w200">
                                                    {{dataLevelOneRight[0].address | truncateMiddle_(8)}}
                                                </span>
                                            </a>
                                            <ul v-if="isHaveChildLevelOneRight">
                                                <li>
                                                    <a href="javascript:">
                                                        <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                                        <span 
                                                            v-if="dataLevelTwoLeft_OneRight.length == 0 || dataLevelTwoLeft_OneRight.length == undefined"
                                                            @click="copyToClipboard(linkLevelTwoLeft_OneRight)"
                                                            class="d-flex justify-content-center w200 pointer mr-2">
                                                            <img src="@/assets/images/plus-blue.svg" class="ml-2">
                                                        </span>
                                                        <span
                                                            v-if="dataLevelTwoLeft_OneRight.length > 0"
                                                            @click="teamBonus(dataLevelTwoLeft_OneRight[0]._id.$oid)"
                                                            class="d-flex  justify-content-center w200">
                                                            {{dataLevelTwoLeft_OneRight[0].address | truncateMiddle_(8)}}
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:">
                                                        <span class="icon-temp"><img src="@/assets/images/ic-teambonus.svg"></span>
                                                        <span 
                                                            v-if="dataLevelTwoRight_OneRight.length == 0 || dataLevelTwoRight_OneRight.length == undefined"
                                                            @click="copyToClipboard(linkLevelTwoRight_OneRight)"
                                                            class="d-flex justify-content-center w200 pointer mr-2">
                                                            <img src="@/assets/images/plus-blue.svg" class="ml-2">
                                                        </span>
                                                        <span
                                                            v-if="dataLevelTwoRight_OneRight.length > 0"
                                                            @click="teamBonus(dataLevelTwoRight_OneRight[0]._id.$oid)"
                                                            class="d-flex  justify-content-center w200">
                                                            {{dataLevelTwoRight_OneRight[0].address | truncateMiddle_(8)}}
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
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
                            <tr v-for="(data, index) in dataHistory" :key="index">
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
            </div>
        </div>
        <!-- ----Modal--- -->
        <b-modal
            v-if="dataTeamBonus.address"
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="bonusModal">
                <div class="modal-content">
                    <div class="modal-header">
                    <button
                        @click="close()"
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
                    </div>
                    <div class="modal-body text-center">
                    <p><img src="@/assets/images/ic-teambonus.svg"/></p>
                    <p class="f-Nunito fs-20">
                        Address: <b> {{ dataTeamBonus.address | truncateMiddle_(8) }}</b>
                    </p>

                    <ul class="listbonus f-Nunito fs-18 pl-3 pr-3">
                        <li class="mb-2">
                        <span class="cl8C">Staking:</span>
                        <span class="fw-bold">{{
                            dataTeamBonus.personal_invest ? this.formatNumber(dataTeamBonus.personal_invest) : 0
                            }} PUSH</span>
                        </li>
                        <li class="mb-2">
                        <span class="cl8C">Total staking left:</span>
                        <span class="fw-bold">
                            {{ dataTeamBonus.left_invest ? this.formatNumber(dataTeamBonus.left_invest) : 0 }} PUSH</span
                        >
                        </li>
                        <li>
                        <span class="cl8C">Total staking rigth:</span>
                        <span class="fw-bold"
                        >{{ dataTeamBonus.right_invest ? this.formatNumber(dataTeamBonus.right_invest) : 0 }} PUSH</span
                        >
                        </li>
                    </ul>
                    </div>
                </div>
        </b-modal>
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import Paginate from "@/components/Paginate";
import moment from "moment";
import {mapGetters, mapState} from "vuex";
export default {
    data() {
        return {
            
            dataTeamBonus: {},
            dataRoot: {},
            dataLevelOneLeft: {},
            dataLevelOneRight: {},
            dataLevelTwoLeft_OneLeft: {},
            dataLevelTwoRight_OneLeft: {},
            dataLevelTwoLeft_OneRight: {},
            dataLevelTwoRight_OneRight: {},
            bonusModal: false,
            parentTree: "",
            showBack: false,
            isHaveChildLevelOneLeft: false,
            isHaveChildLevelOneRight: false,
            linkTreeLeft: "",
            linkTreeRight: "",
            linkLevelTwoLeft_OneLeft: "",
            linkLevelTwoRight_OneLeft: "",
            linkLevelTwoLeft_OneRight: "",
            linkLevelTwoRight_OneRight: "",
            codeRoot: this.dataWallet.code,
            dataHistory: {},
            type: "team_bonus",
            page: 1,
            limit: 20,
            totalPage: 1,
            currentPage: 1,
            showLoading: false,
            fullPage: true
        }
    },
    components: {
        Loading,
        Paginate
    },
    props: {
        dataWallet: {},
    },
    mounted() {
        this.teamBonus(this.dataWallet._id.$oid);
        this.history();
    },
    methods: {
        copyToClipboard(data) {
            navigator.clipboard
                .writeText(data)
                .then(this.$toaster.success("Copied to clipboard!"));
        },
        formatNumber(number) {
            return formatNumber_(number);
        },
        async teamBonus(params) {
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                this.showLoading = true;
                const res = await axios.get(`/api/user/tree/${params}`, {
                    headers : {
                        Authorization: "Bearer " + user.token
                    }
                });
                if (res.data.status !== 1) return;
                this.dataTeamBonus = res.data.data;
                if(res.data.data.parent_id) {
                    this.parentTree = res.data.data.parent_id.$oid;
                }
                res.data.data.address == this.dataWallet.address ? this.showBack = false : this.showBack = true;
                //Nếu 2 con tầng 1
                if (res.data.data.child.length == 2) {
                    this.isHaveChildLevelOneLeft = true;
                    this.isHaveChildLevelOneRight = true;
                    //Vẽ con tầng 1 trái - Vẽ con tầng 2 phải
                    const childData = res.data.data.child;
                    this.dataLevelOneLeft = childData.filter(e => e.branch == "left");
                    this.dataLevelOneRight = childData.filter(e => e.branch == "right");
                    //Tầng 1 trái Có con tầng 2
                    if(this.dataLevelOneLeft[0].child.length > 0) {
                        this.setDataLevelTwo(this.dataLevelOneLeft[0]);
                    } else {
                        this.dataLevelTwoLeft_OneLeft = "";
                        this.dataLevelTwoRight_OneLeft = "";
                    }
                    //Tầng 1 phải Có con tầng 2
                    if(this.dataLevelOneRight[0].child.length > 0) {
                        this.setDataLevelTwo(this.dataLevelOneRight[0]);
                    } else {
                        this.dataLevelTwoLeft_OneRight = "";
                        this.dataLevelTwoRight_OneRight = "";
                    }
                }
                //Nếu 1 con tầng 1
                else if(res.data.data.child.length == 1) {
                    if(res.data.data.child[0].branch == "left") {
                        this.dataLevelOneLeft = res.data.data.child;
                        this.isHaveChildLevelOneLeft = true;
                        this.isHaveChildLevelOneRight = false;
                        //Set data "" right
                        this.dataLevelOneRight = "";
                        this.dataLevelTwoLeft_OneRight = "";
                        this.dataLevelTwoRight_OneRight = "";
                        
                        this.linkTreeRight = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=right`;
                    } else {
                        this.dataLevelOneRight = res.data.data.child;
                        this.isHaveChildLevelOneRight = true;
                        this.isHaveChildLevelOneLeft = false;
                        //Set data "" left
                        this.dataLevelOneLeft = "";
                        this.dataLevelTwoLeft_OneLeft = "";
                        this.dataLevelTwoRight_OneLeft = "";
                        
                        this.linkTreeLeft = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=left`;
                    }
                    this.setDataLevelTwo(res.data.data.child[0]);
                }
                //Ko có con nào ở tầng 1
                else {
                    this.isHaveChildLevelOneLeft = false;
                    this.isHaveChildLevelOneRight = false;
                    this.dataLevelOneLeft = "";
                    this.dataLevelOneRight = "";
                    this.dataLevelTwoLeft_OneLeft = "";
                    this.dataLevelTwoRight_OneLeft = "";
                    this.dataLevelTwoLeft_OneRight = "";
                    this.dataLevelTwoRight_OneRight = "";
                    this.linkTreeLeft = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=left`;
                    this.linkTreeRight = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=right`;
                }
            }catch(error) {
                console.log(error);
            }finally{
                this.showLoading = false;
            }
        },
        setDataLevelTwo(dataLevelOne) {
            //Cha Level 1 là left
            if(dataLevelOne.branch == "left") {
                //Nếu có 2 con tầng 2
                if(dataLevelOne.child.length == 2) {
                    const childData = dataLevelOne.child;
                    this.dataLevelTwoLeft_OneLeft = childData.filter(e => e.branch == "left");
                    this.dataLevelTwoRight_OneLeft = childData.filter(e => e.branch == "right");
                }
                //Nếu có 1 con tầng 2
                else if(dataLevelOne.child.length == 1) {
                    if(dataLevelOne.child[0].branch == "left" ) {
                        this.dataLevelTwoLeft_OneLeft = dataLevelOne.child;
                        this.dataLevelTwoRight_OneLeft = "";
                        this.linkLevelTwoRight_OneLeft = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=right`;
                    } else {
                        this.dataLevelTwoRight_OneLeft = dataLevelOne.child;
                        this.dataLevelTwoLeft_OneLeft = "";
                        this.linkLevelTwoLeft_OneLeft = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=left`;
                    }
                }
                //Nếu ko có con tầng 2
                else{
                    this.dataLevelTwoLeft_OneLeft = "";
                    this.dataLevelTwoRight_OneLeft = "";
                    this.linkLevelTwoLeft_OneLeft = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=left`;
                    this.linkLevelTwoRight_OneLeft = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=right`;
                }
            }
            //Cha Level 2 là right
            else {
                //Nếu có 2 con tầng 2
                if(dataLevelOne.child.length == 2) {
                    const childData = dataLevelOne.child;
                    this.dataLevelTwoLeft_OneRight = childData.filter(e => e.branch == "left");
                    this.dataLevelTwoRight_OneRight = childData.filter(e => e.branch == "right");
                }
                //Nếu có 1 con tầng 2
                else if(dataLevelOne.child.length == 1) {
                    if(dataLevelOne.child[0].branch == "left") {
                        this.dataLevelTwoLeft_OneRight = dataLevelOne.child;
                        this.dataLevelTwoRight_OneRight = "";
                        this.linkLevelTwoRight_OneRight = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=right`;
                    } else {
                        this.dataLevelTwoRight_OneRight = dataLevelOne.child;
                        this.dataLevelTwoLeft_OneRight = "";
                        this.linkLevelTwoLeft_OneRight = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=left`;
                    }
                } 
                //Nếu ko có con tầng 2
                else {
                    this.dataLevelTwoLeft_OneRight = "";
                    this.dataLevelTwoRight_OneRight = "";
                    this.linkLevelTwoLeft_OneRight = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=left`;
                    this.linkLevelTwoRight_OneRight = window.location.hostname + `/?ref=${this.codeRoot}&pcode=${dataLevelOne.code}&branch=right`;
                }
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
            this.teamBonus(this.dataWallet._id.$oid);
            this.history();
          }, 2000);
        }
    }
}
</script>