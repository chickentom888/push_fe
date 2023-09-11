<template>
<div class="container" data-aos="fade-up" data-aos-delay="200">
    <!-- ------Airdrop------ -->
    <div class="box-dex" v-if="!flagHistory">
        <div class="triggers-card">
            <div class="row position-relative">
                <div class="col-md-4">
                    <h3 class="title">
                        {{$t('navbar.0014')}} <br/>
                        <span>{{$t('airdrop.01')}}</span>
                    </h3>
                    <p class="f-Nunito">
                        {{$t('airdrop.02')}}
                    </p>

                    <p class="hero-img mt-5">
                        <img alt="" src="@/assets/images/banner9.png" class="animated"/>
                    </p>
                    <span class="decor10"><img alt="" src="@/assets/images/decor2.png" class="w-75"/></span>
                    <span class="decor5"><img alt="" src="@/assets/images/decor1.png"/></span>
                </div>
                <div class="col-md-8 position-relative">
                    <div class="box-swap pb-5">
                        <div class="content-swap">
                            <div class="clearfix mb-4">
                                <label class="f-Nunito d-block fw-bold">{{$t('airdrop.03')}} </label>
                                <Select2 v-model="tokenType" @change="changeTokenType()" :options="tokenOptions"/>
                            </div>
                            <p class="f-Nunito fw-bold">{{$t('airdrop.04')}}:</p>
                            <p class="cl5D f-Nunito">
                                - {{$t('airdrop.05')}}
                            </p>

                            <p class="cl5D f-Nunito">
                                - {{$t('airdrop.06')}}
                            </p>

                            <p class="cl5D f-Nunito">- {{$t('airdrop.07')}}</p>

                            <p class="cl5D f-Nunito">
                                - {{$t('airdrop.08')}}
                            </p>
                            <a
                                v-if="!account"
                                @click="connectWallet()"
                                class="linear-blue btn-blue btn-bluebig w-100 poiter">
                                {{$t('common.0001')}}
                                <img
                                    src="@/assets/images/dot-l-white.svg"
                                    alt=""
                                    class="ml-2"
                                />
                            </a>
                            <div v-if="account">
                                <p class="cl5D f-Nunito text-center">
                                    {{$t('airdrop.09')}}:<span class="cl000 fw-bold"> {{ fee_amount + ' ' + symbol }}</span>
                                </p>
                                <div class="clearfix mb-4">
                                    <div v-if="tokenType === 'bep20'">
                                        <label class="f-Nunito d-block mb-2">{{$t('common.0039')}}</label>
                                        <input
                                            type="text"
                                            @change="loadContractInfo"
                                            v-model="contract_address"
                                            class="form-control f-Nunito mb-2"
                                            :placeholder="$t('common.0017')"
                                        />
                                        <div>
                                            <div>
                                                <label class="f-Nunito mb-2">{{$t('common.0018')}}: </label>
                                                <strong><span class="f-Nunito"> {{ token_name }}</span></strong>
                                            </div>
                                            <div>
                                                <label class="f-Nunito mb-2">{{$t('common.0024')}}: </label>
                                                <strong><span class="f-Nunito"> {{ token_symbol }}</span></strong>
                                            </div>
                                            <div>
                                                <label class="f-Nunito mb-2">{{$t('common.0025')}}: </label>
                                                <strong><span class="f-Nunito"> {{ token_decimals }}</span></strong>
                                            </div>
                                            <div>
                                                <label class="f-Nunito mb-2">{{$t('common.0040')}}: </label>
                                                <strong><span class="f-Nunito"> {{ balance ? this.formatNumber(balance, 6) : '' }}</span></strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="tokenType === 'main'">
                                        <div>
                                            <div>
                                                <label class="f-Nunito mb-2">{{$t('mint.10')}}: </label>
                                                <span class="f-Nunito"> {{ symbol }}</span>
                                            </div>
                                            <div>
                                                <label class="f-Nunito mb-2">{{$t('common.0040')}}: </label>
                                                <span class="f-Nunito"> {{ balance ? this.formatNumber(balance, 6) : '0.00' }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix mb-4 ">
                                    <label class="f-Nunito d-block fw-bold">{{$t('airdrop.10')}} </label>
                                    <Select2 v-model="amountType" @change="changeAmountType" class="mb-2" :options="amountOptions"/>
                                    <label v-if="amountType === 'same'" class="f-Nunito d-block mb-2">{{$t('common.0008')}} </label>
                                    <input
                                        v-if="amountType === 'same'"
                                        type="number"
                                        @change="inputAmountType"
                                        v-model="amount_per_address"
                                        class="form-control f-Nunito"
                                        :placeholder="$t('placeholder.02')"
                                    />
                                    <small class="text-danger" v-if="error_amount.show">
                                        {{ error_amount.msg }}
                                    </small>
                                </div>
                                <p class="f-Nunito">{{$t('airdrop.11')}}</p>
                                <textarea class="form-control f-Nunito mb-2" rows="12" @change="calculateAddress" v-model="list_airdrop"></textarea>
                                <p class="clpink fs-14 f-Nunito text-center mb-4">
                                    <span> {{$t('airdrop.12')}}: <strong :class="total_adddresses <= max_address ?  'text-success' : 'text-danger'">{{total_adddresses}} / {{max_address}}</strong> <br></span>
                                    <span style="cursor:pointer" v-show="duplicate_address.length > 0" @click="showDuplicateAddress()">{{$t('airdrop.13')}}:
                                                <strong class="text-danger">
                                                    {{duplicate_address.length}} / {{total_adddresses}} <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                                </strong> <br>
                                            </span>
                                    <span style="cursor:pointer" v-show="invalid_addresses.length > 0" @click="showWrongAddress()"> {{$t('airdrop.14')}}:
                                                <strong class="text-danger">  {{invalid_addresses.length}} <i class="fa-solid fa-arrow-up-right-from-square"></i> </strong>
                                            </span>
                                </p>
                                <p class="f-Nunito cl5D text-centerr">
                                    {{$t('airdrop.15')}}: <b class="cl000"> {{ this.formatNumber(total_airdrop) }}</b>
                                </p>
                                <div v-if="tokenType === 'bep20' && !allowance" class="d-flex align-items-center mb-4">
                                    <button v-if="is_airdrop || total_airdrop === 0 || !contract_address"
                                            class="btn-gray btn-blue btn-bluebig w-100 mr-2" >
                                        {{$t('common.0033')}}
                                    </button>
                                    <button v-else @click="approveToken" class="linear-blue btn-blue btn-bluebig w-100 mr-2">
                                        {{$t('common.0033')}}
                                    </button>
                                </div>
                                <div v-if="allowance" class="d-flex align-items-center mb-4">
                                    <button v-if="!is_airdrop || total_airdrop === 0 || error_balance['show'] || !allowance"
                                            class="btn-gray btn-blue btn-bluebig w-100" >
                                        {{$t('navbar.0013')}}
                                    </button>
                                    <button v-else @click="airdrop" class="linear-blue btn-blue btn-bluebig w-100">
                                        {{$t('navbar.0013')}}
                                    </button>
                                </div>

                                <a
                                    @click="showHistory()"
                                    href="javascript:void(0)"
                                    class="d-flex align-items-center fs-18 fw-bold f-Nunito clgreen justify-content-center">
                                    <img alt="" src="@/assets/images/icon-history.svg" class="mr-2"/>
                                    {{$t('common.0020')}}
                                </a>
                            </div>
                        </div>
                    </div>

                    <span class="decor7">
            <img alt="" src="@/assets/images/decor1.png"
            /></span>
                </div>
                <span class="decor18">
        <img alt="" src="@/assets/images/decor2.png" class="w-75"
        /></span>
            </div>
        </div>
    </div>
    <!-- --------End Airdrop-------- -->
    <!-- ---------History---------- -->
    <div class="box-dex" v-if="flagHistory && account">
    <span class="decor18">
    <img alt="" src="@/assets/images/decor2.png" class="w-75"
    /></span>
        <span class="decor5"> <img alt="" src="@/assets/images/decor1.png"/></span>
        <div class="mt-5 position-relative">
            <span class="decor5"> <img alt="" src="@/assets/images/decor1.png"/></span>
            <span class="decor6"> <img alt="" src="@/assets/images/decor1.png"/></span>
            <a
                href=""
                @click="flagHistory = false"
                class="btn-gray btn-blue pt-2 pb-2 poiter"
            >
                {{$t('common.0007')}}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="12.316"
                    viewBox="0 0 14.803 12.316"
                >
                    <path
                        id="Path_87904"
                        data-name="Path 87904"
                        d="M-525.343,209.85c-.094-.1-.144-.158-.2-.211l-2.792-2.8a.852.852,0,0,1,0-1.379c.109-.109.216-.219.327-.327a.816.816,0,0,1,1.246.008q1.483,1.476,2.96,2.958l2.223,2.223a.842.842,0,0,1,.006,1.361q-2.566,2.566-5.133,5.132a.84.84,0,0,1-1.361,0c-.11-.108-.22-.216-.328-.326a.81.81,0,0,1,.02-1.259q1.208-1.211,2.424-2.414c.205-.2.424-.392.637-.588l-.047-.069h-9.677c-.7,0-.995-.3-1-1,0-.17,0-.339,0-.509a.792.792,0,0,1,.808-.8c.085,0,.169,0,.254,0h9.627Z"
                        transform="translate(-521.231 217.166) rotate(180)"
                    />
                </svg>
            </a>
            <p class="fs-24 fw-bold text-center">{{$t('airdrop.16')}}</p>
            <form class="fomsearch">
                <img alt="" src="@/assets/images/icon-search.svg" class="btn-search"/>
                <input
                    type="text"
                    v-model="searchQuery" @blur="loadHistoryAirdrop()"
                    :placeholder="$t('placeholder.08')"
                    class="form-control"
                    value=""
                />
            </form>
            <table class="table tableblue1 tableblue styletable table-responsive">
                <thead>
                <tr>
                    <th scope="col" style="width: 5%">{{$t('common.0021')}}</th>
                    <th scope="col" style="width: 12%" class="text-left">{{$t('common.0022')}}</th>
                    <th scope="col" style="width: 10%" class="text-left">{{$t('common.0023')}}</th>
                    <th scope="col" style="width: 10%" class="text-left">
                        {{$t('mint.10')}}
                    </th>
                    <th scope="col" style="width: 12%" class="text-left">
                        {{$t('airdrop.17')}}
                    </th>
                    <th scope="col" style="width: 12%" class="text-left">
                        {{$t('airdrop.18')}}
                    </th>
                    <th scope="col" style="width: 6%" class="text-left">
                        {{$t('airdrop.19')}}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-if="historys.length === 0">
                    <td class="noresult py-5" colspan="7" style="text-align: center;">
                        <img src="@/assets/images/icons/nodata.png" alt="">
                        {{$t('common.0027')}} &nbsp;
                    </td>
                </tr>

                <tr v-for="(item, idx) in historys" :key="idx">
                    <td>{{ idx + 1 }}</td>
                    <td class="text-left">{{ moment(item['created_at'] * 1000) }}</td>
                    <td class="text-left">
                        <img alt="" src="@/assets/images/bnb.svg" class="mr-2"/>{{ item['platform'].toUpperCase() }}
                    </td>
                    <td class="text-left">{{ item['token_name'] }}</td>
                    <td class="text-left">
                        <span
                            v-if="item['token_address'] && item['token_type'] !== 'main'"
                            href="javascript:void(0)">
                            {{item['token_address'] && item['token_type'] !== 'main' ? contractCompact(item['token_address']) : '' }}
                            &nbsp;
                            <button class="btn-none" @click="copy(item['token_address'])">
                                <img alt="" src="@/assets/images/icon-save.svg"/>
                            </button>
                        </span>
                    </td>
                    <td class="text-left">{{ item['total_token_amount'] }} {{ item['token_symbol'] }}</td>
                    <td class="text-left">
                        <button
                            @click="openModal(item)"
                            type="button"
                            class="btn-list">
                            <img alt="" src="@/assets/images/icon-list.svg" class="mr-2"/>
                            {{$t('swap.0023')}}
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            <Paginate
                v-show="historys.length > 0 && totalPage > 1"
                @pageChange="changePage($event)"
                :totalPage="totalPage"
                :page="page">
            </Paginate>
        </div>
    </div>
    <!-- ---------End History---------- -->
    <!-- ----Modal--- -->
    <b-modal
        centered
        hide-footer
        hide-header
        hide-header-close
        v-model="listDistribution"
    >
        <div class="modal-content">
            <div class="modal-header">
                <button
                    @click="listDistribution = false"
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
                <h3 class="mb-4">{{$t('airdrop.19')}}</h3>
                <div class="d-flex align-items-center w-100 mb-4">
                    <span class="f-Nunito mr-2"> {{$t('common.0017')}} </span>
                    <form class="fomsearch">
                        <img alt="" src="@/assets/images/icon-search.svg" class="btn-search"/>
                        <input
                            type="text"
                            v-model="searchQueryAddress" @change="seachAddress()"
                            :placeholder="$t('placeholder.09')"
                            class="form-control"
                            value=""
                        />
                    </form>
                </div>
                <div class="scrollbar" id="style-3">
                    <table
                        class="table tableblue1 tableblue styletable table-responsive"
                    >
                        <thead>
                        <tr>
                            <th scope="col" style="width: 5%">{{$t('common.0021')}}</th>
                            <th scope="col" style="width: 10%" class="text-left">
                                {{$t('common.0017')}} ({{ addressAirdrop ? addressAirdrop.length : 0 }} {{$t('common.0017')}})
                            </th>
                            <th scope="col" style="width: 10%" class="text-left">
                                {{$t('common.0008')}}
                            </th>
                        </tr>
                        </thead>
                        <tbody class="force-overflow">
                        <tr v-for="(address, index) in addressAirdrop" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td class="text-left">{{ address }}</td>
                            <td class="text-left">{{ amountAirdrop[index] }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal
        centered
        hide-footer
        hide-header
        hide-header-close
        v-model="errorData.isVisible"
    >
        <div class="modal-header">
            <button
                @click="closeErrorModal()"
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
                <h3 class="mb-4">{{errorData.title}}</h3>
                <div class="scrollbar" id="style-3">
                    <table class="table tableblue1 tableblue styletable table-responsive">
                        <thead>
                        <tr>
                            <th scope="col" style="width: 5%">{{$t('common.0021')}}</th>
                            <th scope="col" style="width: 15%" class="text-left">
                                {{$t('common.0017')}}
                            </th>
                            <th v-if="errorData.type === 1" scope="col" style="width: 10%" class="text-left">
                                {{$t('airdrop.20')}}
                            </th>
                        </tr>
                        </thead>
                        <tbody class="force-overflow">
                        <tr v-for="(item, index) in errorData.key" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td class="d-flex text-left">{{item  ? item : ''}} &nbsp;
                                <button class="btn-none" @click="copy(item)">
                                    <img alt="" src="@/assets/images/icon-save.svg"/>
                                </button>
                            </td>
                            <td v-if="errorData.type === 1" class="text-left">{{item && errorData.data[item] ? errorData.data[item] : ''}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </b-modal>
    <!-- -----Loading---- -->
    <loading
        :active.sync="showLoading"
        :can-cancel="true"
        :is-full-page="fullPage">
    </loading>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import Web3, {utils} from "web3"
import BigNumber from "@/utils/bignumber.min.js";
import {settingsContract} from "@/utils/const";
import axios from "axios";
import {ethers} from "ethers";
import moment from "moment";
import Loading from "vue-loading-overlay";
import Paginate from "@/components/Paginate";
import { $t } from '@/lang/i18n.js';
export default {
name: 'airdrop',
components: {
    Loading,
    Paginate
},
data() {
    return {
        showLoading: false,
        fullPage: true,
        flagHistory: false,
        listDistribution: false,
        tokenOptions: [
            { id: 'main', text: 'BNB' },
            { id: 'bep20', text: 'BEP20' }
        ],
        amountOptions: [
            { id: 'same', text: 'Same Amount' },
            { id: 'custom', text: 'Custom Amount' }
        ],
        amountType: "same",
        tokenType: "main",
        is_airdrop: false,
        contract_address: '',
        token_decimals: 0,
        token_name: '',
        token_symbol: '',
        fee_amount: 0,
        total_airdrop: 0,
        balance: 0,
        settingPlatform: Object,
        list_airdrop: '',
        amount_per_address: 0,
        symbol: '',
        error_balance: {
            show: false,
            msg: '',
        },
        error_amount: {
            show: false,
            msg: '',
        },
        errorData: {
            type: 1,
            title: '',
            data: {},
            key: [],
            isVisible: false
        },
        allowance: true,
        max_address: 500,
        totalRows: 0,
        wrong_address: 0,
        address_adds: [],
        invalid_addresses: [],
        duplicate_address: [],
        address_airdrops: 0,
        total_adddresses: 0,
        // history
        historys: [],
        addressItems: [],
        amountitems: [],
        historysAdress: [],
        amountAirdrop: [],
        addressAirdrop: [],
        loaded: false,
        searchQuery: '',
        searchQueryAddress: '',
        active: null,
        page: 1,
        totalPage: 1,
        pageSize: 20,
        airdropList: false
    };
},
computed: {
    wallet() {
        return this.$store.state.web3Modal;
    },
    connectInfo() {
        return this.$store.state.connect;
    },
    ...mapGetters({
        exchange: 'exchange',
        account: 'account',
    })
},
methods: {
    closeErrorModal() {
        this.errorData = {
            type: 1,
            title: '',
            data: {},
            key: [],
            isVisible: false
        }
    },
    showPlatform(platform) {
        platform = platform.toLowerCase();
        if (platform === 'eth') {
            return 'ETH';
        } else if (platform === 'bnb' || platform === 'bsc') {
            return 'BNB';
        } else if (platform === 'polygon') {
            return 'MATIC';
        } else {
            return '';
        }
    },
    inputAmountType() {
        this.error_amount['show'] = false;
        this.amount_per_address = this.amount_per_address > 0 ? this.amount_per_address : 0;
        this.calculateAddress();
    },
    changeAmountType() {
        this.error_amount['show'] = false;
        this.calculateAddress();
    },
    changeTokenType() {
        this.contract_address = '';
        this.token_name = '';
        this.token_decimals = '';
        this.token_symbol = '';
        this.balance = 0;
        this.total_airdrop = 0;
        this.resetData();
        if (this.tokenType === 'main') {
            this.getBaseBalance();
            this.allowance = true;
        } else {
            this.getTokenBalance();
        }
    },
    formatDecimal(number, decimal) {
        number = number.toString();
        number = number.replace(/,/g, "");
        let array = number.split('.');
        let result = array[0];
        decimal = decimal >= 8 ? 8 : decimal;
        if (array[1] && decimal > 0) {
            array[1] = array[1].substr(0, decimal);
            result = result + '.' + array[1];
        }
        return parseFloat(result);
    },
    formatNumber(number, decimal = 2) {
        if (number === 0 || !number) {
                return "0.00";
        }
        number = number.toString();
        number = number.replace(/,/g, "");
        let array = number.split(".");
        let result = array[0];
        decimal = decimal >= 8 ? 8 : decimal;

        if (array[1] && decimal > 0) {
                array[1] = array[1].substr(0, decimal);
                result = result + "." + array[1];
        }
        result = parseFloat(result);
        if (Number.isInteger(result)) {
                return parseInt(result).toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                });
        }
        let options = {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
        };
        return parseFloat(result).toLocaleString('en-US', options);
},
    init() {
        // let platform = this.exchange['platform'];
        this.flagHistory = false;
        const platform = 'bsc';
        this.symbol = settingsContract['BASE_TOKEN_PLATFORM'][platform];
        if (this.tokenType === 'main') {
            this.getBaseBalance();
        } else {
            this.getTokenBalance()
        }
    },
    connectWallet() {
        this.$store.dispatch('connect')
    },
    showHistory() {
        this.loadHistoryAirdrop();
    },
    async loadSettingsAirdrop() {
        // if (!this.exchange) {
        //     this.settingPlatform = {};
        //     this.fee_amount = 0;
        //     return;
        // }
        const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
        let platform = 'bsc';
        let userAccount = JSON.parse(localStorage.getItem('user'));
        if (!userAccount) return;
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userAccount['token'],
        }
        let url = '/api/registry/get-airdrop-setting';
        url = url + '?platform=' + platform + '&network=' + network;
        this.showLoading = true;
        try {
            const listSettingPlatform = await axios.get(url, {headers: headers});
            this.showLoading = false;
            if (listSettingPlatform.data.data) {
                this.settingPlatform = listSettingPlatform.data.data;
                this.fee_amount = this.settingPlatform['fee_amount'];
            }
        } catch (e) {
            this.showLoading = false;
            console.log('Error', e);
        }

    },
    resetData() {
        this.amount_per_address = 0;
        this.total_adddresses = 0;
        this.invalid_addresses = [];
        this.is_airdrop = false
        this.allowance = false;
        this.error_balance.show = false;
        this.error_balance.msg = '';
    },
    async loadContractInfo() {
        this.token_name = '';
        this.token_decimals = '';
        this.token_symbol = '';
        this.balance = 0;
        if (!this.contract_address || this.contract_address.trim() === '') {
            this.resetData();
            return;
        }
        let userAccount = JSON.parse(localStorage.getItem('user'));
        if (!userAccount) return;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userAccount['token'],
        }
        let formData = new FormData();
        const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
        let platform = 'bsc';
        // change when live
        formData.append('network', network);
        formData.append('platform', platform);
        let contract_address = this.contract_address.trim();
        if (!contract_address || contract_address === '') {
            // error contract address
            return;
        }
        formData.append('contract_address', contract_address);

        this.showLoading = true;
        try {
            await axios.post(`api/token/get_info`, formData, {
                headers: headers
            }).then(res => {
                this.showLoading = false;
                if (res.data.data) {
                    this.token_name = res.data.data.name;
                    this.token_symbol = res.data.data.symbol;
                    this.token_decimals = res.data.data.decimals;
                    this.balance = res.data.data.user_balance
                    this.getAmountAllowance();
                    this.getTokenBalance();
                    this.calculateAddress();
                } else {
                    this.resetData();
                }
            }).catch(err => {
                this.showLoading = false;
            })
        } catch (e) {
            console.log('Error', e);
            this.showLoading = false;
        }

    },
    async approveToken() {
        //check connect
        let airdropTokenAddress = this.contract_address;
        let totalTokenAmount = utils.randomHex(32).toString();
        const isProduction = process.env.NODE_ENV === 'production';
        let obj = {
            'from': this.wallet.account,
        };
        if (this.exchange['platform'] === 'polygon') {
            // get max fees from gas station
            let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            try {
                const { data } = await axios({
                    method: 'get',
                    url: isProduction
                        ? 'https://gasstation-mainnet.matic.network/v2'
                        : 'https://gasstation-mumbai.matic.today/v2',
                })
                maxFeePerGas = ethers.utils.parseUnits(
                    Math.ceil(data.fast.maxFee) + '',
                    'gwei'
                )
                maxPriorityFeePerGas = ethers.utils.parseUnits(
                    Math.ceil(data.fast.maxPriorityFee) + '',
                    'gwei'
                )
                obj['gasPrice'] = maxFeePerGas;
            } catch {
                // ignore
            }
        }
        let web3 = new Web3(window.ethereum);
        const tokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], airdropTokenAddress)
        // modal processing
        this.$store.commit("setPopupWallet", true)
        try {
            let approveToken = await tokenContract.methods.approve(this.settingPlatform['airdrop_contract_address'], totalTokenAmount).send(obj).on('transactionHash', function (hash) {
                // alert("Please wait a minute to complete your transaction!");
            }).on('confirmation', function (confirmationNumber, receipt) {
            }).on('receipt', function (receipt) {
            }).on('error', function (error, receipt) {
                // alert("Error");
                console.log("error", error, receipt);
            });
            this.$store.commit("setPopupWallet", false)
            if (approveToken.status) {
                // modal success
                this.$toaster.success('Success!')
                this.is_airdrop = true;
                this.allowance = true;
            } else {
                // modal error
                this.$store.commit("setPopupError", {
                    isShow: true,
                    message: ""
                });
                console.log("error", approveToken);
            }
        } catch (e) {
            this.$store.commit("setPopupWallet", false)
            console.log(e);
        }

    },
    async getAmountAllowance() {
        let airDropTokenAddress = this.contract_address.trim();
        if (!airDropTokenAddress || airDropTokenAddress === '') {
            return;
        }
        if (!this.account || this.account.trim() === '') {
            return;
        }
        let saleTokenDecimals = parseInt(this.token_decimals);
        let web3 = new Web3(window.ethereum)
        const web3Allowance = new web3.eth.Contract(settingsContract['ABI_TOKEN'], airDropTokenAddress)
        let address = this.account;
        await web3Allowance.methods.allowance(address, this.settingPlatform['airdrop_contract_address']).call().then(
            resp => {
                let dicimalsMul = (new BigNumber(10)).pow(saleTokenDecimals);
                this.allowanceAmount = (new BigNumber(resp)).div(dicimalsMul).toString();
                this.is_airdrop = this.allowanceAmount >= this.total_airdrop && this.allowanceAmount > 0;
                this.allowance = this.is_airdrop;
            }
        );
    },
    calculateAddress() {
        this.total_airdrop = 0;
        this.address_adds = [];
        this.invalid_addresses = [];
        this.duplicate_address = [];
        this.address_airdrops = 0;
        this.total_adddresses = 0;
        let amountType = this.amountType;
        let tokenType = this.tokenType;
        let tokenDecimals;
        if (tokenType === 'main') {
            tokenDecimals = 18;
        } else {
            tokenDecimals = parseInt(this.token_decimals || 0);
        }
        this.amount_per_address =  parseFloat(this.amount_per_address || 0);
        this.validateAddress(this.list_airdrop.split(/\n/));
        if (amountType === 'same') {
            if (!this.amount_per_address || this.amount_per_address <= 0) {
                this.error_amount['show'] = true;
                this.error_amount['msg'] = $t('staking.17');
                return;
            } else {
                this.error_amount['show'] = false;
                this.error_amount['msg'] = '';
            }
        }
        let amount = this.amount_per_address;
        amount = amount.toFixed(tokenDecimals);
        let totalTokenAmount = 0;

        let totalAmountDecimals = new BigNumber(0);
        let listAddress = [];
        let listAmount = [];

        this.list_airdrop.split(/\n/).forEach((value, index) => {
            if (amountType === 'custom') {
                let addressAmount = value.split(';');
                let address = addressAmount[0].trim();
                address = address.toLowerCase();
                if (address.length) {
                    let amount = parseFloat(addressAmount[1] || 0);
                    amount = amount.toFixed(tokenDecimals);
                    let amountDecimals = (new BigNumber(amount)).mul((new BigNumber(10)).pow(tokenDecimals));
                    totalAmountDecimals = totalAmountDecimals.plus(amountDecimals);
                    amountDecimals = utils.toBN(amountDecimals);
                    if (utils.isAddress(address) && amountDecimals >= 0) {
                        this.address_adds.push(address);
                        listAddress.push(address);
                        listAmount.push(amountDecimals);
                        totalTokenAmount += parseFloat(amount);
                    }
                }
            } else {
                value = value.trim();
                value = value.toLowerCase();
                if (value.length) {
                    if (utils.isAddress(value)) {
                        this.address_adds.push(value);
                        listAddress.push(value);
                        let amountDecimals = (new BigNumber(amount)).mul((new BigNumber(10)).pow(tokenDecimals));
                        totalAmountDecimals = totalAmountDecimals.plus(amountDecimals);
                        amountDecimals = utils.toBN(amountDecimals);
                        listAmount.push(amountDecimals);
                        totalTokenAmount += parseFloat(amount);
                    }
                }
            }
        });

        if (!listAddress.length) {
            return false;
        }
        this.address_airdrops = listAddress.length;

        this.total_airdrop = totalTokenAmount;
        let balance = parseFloat(this.balance) || 0;
        if (this.total_airdrop > balance) {
            //warning
            this.error_balance.show = true;
            this.error_balance.msg = $t('airdrop.21');
        } else {
            this.error_balance.show = false;
            this.error_balance.msg = '';
        }
        if (this.tokenType === 'main') {
            this.is_airdrop = true
        } else {
            this.is_airdrop = this.allowanceAmount >= this.total_airdrop && this.allowanceAmount > 0;
        }
        if (this.invalid_addresses.length) {
            console.log('invalid address', this.invalid_addresses);
        }
        return [listAddress, listAmount, totalAmountDecimals];
    },
    validateAddress(addressData) {
        let listAddress = [];
        addressData.forEach(address => {
            let item;
            if (this.amountType === 'custom') {
                address = address.split(';');
                item = address[0].trim();
            } else {
                item = address;
            }
            item = item.trim();
            item = item.toLowerCase();
            if (item.length) {
                this.total_adddresses = this.total_adddresses + 1;
                if (utils.isAddress(item)) {
                    if (listAddress.includes(item)) {
                        this.duplicate_address.push(item);
                    }
                    listAddress.push(item);
                } else {
                    this.invalid_addresses.push(item);
                }
            }
        })
    },
    async airdrop() {
        let addressAmount = this.calculateAddress();
        if (!addressAmount) {
            this.$store.commit("setPopupError", {
                isShow: true,
                message: $t('airdrop.22')
            });
            return;
        }
        let listAddress = addressAmount[0];
        let listAmount = addressAmount[1];
        let totalAmountDecimals = new BigNumber(addressAmount[2]);
        if (listAddress.length <= 0) {
            this.$store.commit("setPopupError", {
                isShow: true,
                message: $t('airdrop.22')
            });
            return;
        }
        if (listAddress.length > this.max_address) {
            this.$store.commit("setPopupError", {
                isShow: true,
                message: $t('airdrop.23') +this.max_address+ $t('airdrop.24')
            });
            return;
        }
        const isProduction = process.env.NODE_ENV === 'production';
        let obj = {
            'from': this.wallet.account,
        };
        if (this.exchange['platform'] === 'polygon') {
            // get max fees from gas station
            let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
            try {
                const { data } = await axios({
                    method: 'get',
                    url: isProduction
                        ? 'https://gasstation-mainnet.matic.network/v2'
                        : 'https://gasstation-mumbai.matic.today/v2',
                })
                maxFeePerGas = ethers.utils.parseUnits(
                    Math.ceil(data.fast.maxFee) + '',
                    'gwei'
                )
                maxPriorityFeePerGas = ethers.utils.parseUnits(
                    Math.ceil(data.fast.maxPriorityFee) + '',
                    'gwei'
                )
                obj['gasPrice'] = maxFeePerGas;
            } catch {
                // ignore
            }
        }


        let feeAmount = parseFloat(this.fee_amount || 0);
        feeAmount = (new BigNumber(feeAmount)).mul((new BigNumber(10)).pow(18));
        totalAmountDecimals = totalAmountDecimals.plus(feeAmount).toString();
        let web3 = new Web3(window.ethereum)
        let airdropContract = new web3.eth.Contract(settingsContract['ABI_AIRDROP_CONTRACT'], this.settingPlatform['airdrop_contract_address']);
        let tokenType = this.tokenType;
        let result;
        this.$store.commit("setPopupWallet", true)
        try {
            if (tokenType === 'main') {
                obj['value'] = totalAmountDecimals;
                result = await airdropContract.methods.airdropMain(listAddress, listAmount).send(obj).on('transactionHash', function (hash) {
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
            } else {
                let tokenAddress = this.contract_address.trim();
                obj['value'] = feeAmount;
                result = await airdropContract.methods.airdropToken(tokenAddress, listAddress, listAmount).send(obj).on('transactionHash', function (hash) {
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    console.log("error", error, receipt);
                });
            }

            this.$store.commit("setPopupWallet", false)
            if (result.status) {
                this.$toaster.success('Success!')
                this.resetData();
                this.list_airdrop = '';
                this.getAmountAllowance();
                if (this.tokenType === 'main') {
                    this.getBaseBalance();
                } else {
                    this.getTokenBalance()
                }
            } else {
                this.$store.commit("setPopupError", {
                    isShow: true,
                    message: $t('airdrop.25')
                });
            }
        } catch (ex) {
            this.$store.commit("setPopupWallet", false)
            console.log(ex);
        }
    },
    async getBaseBalance() {
        // baseInMainTokenBalance
        this.balance = 0;
        if (this.tokenType !== 'main') return;
        let web3 = new Web3(window.ethereum);
        let address = this.account;
        if (!address) {
            return;
        }
        await new web3.eth.getBalance(address).then(
            resp => {
                let dicimalsMul = (new BigNumber(10)).pow(18);
                if (this.tokenType === 'main') {
                    this.balance = (new BigNumber(resp)).div(dicimalsMul).toString();
                    if (this.total_airdrop >  this.balance) {
                        //warning
                        this.error_balance.show = true;
                        this.error_balance.msg = $t('airdrop.21');
                    } else {
                        this.error_balance.show = false;
                        this.error_balance.msg = '';
                    }
                } else {
                    this.balance = 0;
                }
            }
        )
    },
    async getTokenBalance() {
        // getTokenBalance
        this.balance = 0;
        if (this.tokenType === 'main') return;
        let web3 = new Web3(window.ethereum);
        let address = this.account
        let walletAddress = this.contract_address || '';
        if (walletAddress.trim() === '') return;
        let web3Contract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], walletAddress);
        await web3Contract.methods.balanceOf(address).call().then(
            resp => {
                let dicimalsMul = (new BigNumber(10)).pow(this.token_decimals);
                if (this.tokenType === 'main') {
                    this.balance = 0;
                } else {
                    this.balance = (new BigNumber(resp)).div(dicimalsMul).toString();
                    if (this.total_airdrop >  this.balance) {
                        //warning
                        this.error_balance.show = true;
                        this.error_balance.msg = $t('airdrop.21');
                    } else {
                        this.error_balance.show = false;
                        this.error_balance.msg = '';
                    }
                }
            }
        )
    },
    showWrongAddress() {
        this.errorData.type = 2;
        this.errorData.title = $t('airdrop.26');
        this.errorData.isVisible = true;
        this.errorData.data = {};
        this.errorData.key = [];
        let array_keys = {};
        if (this.invalid_addresses) {
            for (let i = 0; i < this.invalid_addresses.length; i++) {
                if (!array_keys || !array_keys[this.invalid_addresses[i]]) {
                    array_keys[this.invalid_addresses[i]] = 1;
                    this.errorData.key.push(this.invalid_addresses[i]);
                } else {
                    array_keys[this.invalid_addresses[i]] = array_keys[this.invalid_addresses[i]] + 1;
                }
                this.errorData.data = array_keys;
            }
        }
    },
    showDuplicateAddress() {
        this.errorData.type = 1;
        this.errorData.title = $t('airdrop.27');
        this.errorData.isVisible = true;
        this.errorData.data = {};
        this.errorData.key = [];
        let array_keys = {};
        if (this.duplicate_address) {
            for (let i = 0; i < this.duplicate_address.length; i++) {
                if (!array_keys || !array_keys[this.duplicate_address[i]]) {
                    array_keys[this.duplicate_address[i]] = 1;
                    this.errorData.key.push(this.duplicate_address[i]);
                } else {
                    array_keys[this.duplicate_address[i]] = array_keys[this.duplicate_address[i]] + 1;
                }
                this.errorData.data = array_keys;
            }
        }
    },
    focusOut() {
        this.addressItems = [];
        this.amountItems = [];
        this.searchQueryAddress = '';
    },
    openModal(item) {
        this.searchQueryAddress = '';
        this.addressItems = item['list_address'];
        this.amountItems = item['list_amount'];
        this.active = item['_id']['$oid'];
        this.queryAddress(this.active);
        this.airdropList = true;
        this.listDistribution = true;
    },
    seachAddress() {
        this.queryAddress(this.active);
    },
    amount(address) {
        return this.amountItems[address];
    },
    moment(date) {
        return moment(date).format('MM/DD/YYYY H:m');
    },
    copy(item) {
        var tempInput = document.createElement("input");
        tempInput.value = item;
        document.body.appendChild(tempInput);
        tempInput.select();
        tempInput.focus();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        this.$toaster.success('Copied!')
    },
    fomatBigNumber(item, decimals) {
        let dicimalsMul = (new BigNumber(10)).pow(decimals);
        return (new BigNumber(item)).div(dicimalsMul).toString();
    },
    contractCompact(item) {
        if (!item) return '';
        return item.substr(0, 6) + '...' + item.substr(item.length - 4, 4);
    },
    async loadHistoryAirdrop() {
        this.totalPage = 0;
        this.totalRows = 0;
        this.historys = [];
        if (!this.account || this.account.trim() === '') {
            return;
        }
        let userAccount = JSON.parse(localStorage.getItem("user"));
        if (!userAccount) return;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userAccount['token'],
        }
        const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
        let platform = 'bsc';
        let url = '/api/airdrop/index';
        url = url + '?network=' + network + '&platform=' + platform;
        url += `&p=${this.page}&limit=${this.pageSize}`;
        if (this.searchQuery) {
            url += '&q='+ this.searchQuery;
        }
        this.flagHistory = true;
        this.showLoading = true;
        try {
            const listHistorys = await axios.get(url, {
                headers: headers
            });
            this.showLoading = false;
            if (listHistorys.data && listHistorys.data.data) {
                this.historys = listHistorys.data.data;
                this.totalPage = listHistorys.data['optional']['total_page'];
                this.totalRows = listHistorys.data['optional']['row_count'];
            }
            this.flagHistory = true;
        } catch (e) {
            console.log('Error', e);
            this.showLoading = false;
        }
    },

    async queryAddress(id) {
        this.amountAirdrop = [];
        this.addressAirdrop = [];
        if (!this.account || this.account.trim() === '') {
            return;
        }
        let userAccount = JSON.parse(localStorage.getItem('user'));
        if (!userAccount) return;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + userAccount['token'],
        }
        let url = '/api/airdrop/detail/'+id;
        if (this.searchQueryAddress) {
            url += '?address='+ this.searchQueryAddress;
        }
        this.showLoading = true;
        try {
            const listHistorysAddress = await axios.get(url,{headers: headers});
            this.showLoading = false;
            if (listHistorysAddress.data && listHistorysAddress.data.data) {
                this.historysAdress = listHistorysAddress.data.data;
                this.amountAirdrop = this.historysAdress['list_amount'];
                this.addressAirdrop = this.historysAdress['list_address'];
            }
        } catch (e) {
            console.log('Error', e);
            this.showLoading = false;
        }
    },
    changePage(page) {
        this.page = page;
        this.loadHistoryAirdrop();
    }
},
created() {
    this.loadSettingsAirdrop();
},
mounted() {
    setTimeout(() => this.init(), 1000);
},
watch: {
    'exchange': function () {
        this.loadSettingsAirdrop();
    },
    'account': function () {
        this.init();
    },
}
};
</script>

<style scoped>
.modal-body {
margin: 20px;
}
</style>
