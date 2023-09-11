<template>
<div>
    <div class="container" data-aos="fade-up" data-aos-delay="200">
    <div class="" v-show="!account">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="box-dex position-relative">
            <div class="banner-reward"></div>
            <div class="heigh90 text-center">
            <img src="@/assets/images/hotspot.svg" class="m-auto d-block"/>
            <a
                @click="connectWallet"
                class="linear-blue btn-blue btn-bluebig w-50 fill mt-5 poiter"
            >
                {{$t('common.0001')}}
                <img src="@/assets/images/dot-l-white.svg" class="ml-2"/>
            </a>
            </div>
            <span class="decor5">
            <img src="@/assets/images/decor1.png"
            /></span>
            <span class="decor18">
            <img src="@/assets/images/decor2.png" class="w-75"
            /></span>
            <span class="decor10">
            <img src="@/assets/images/decor2.png"
            /></span>
        </div>
        </div>
    </div>
    <div class="box-dex" v-show="account">
        <span class="decor18">
        <img src="@/assets/images/decor2.png" class="w-75"
        /></span>
        <span class="decor5"> <img src="@/assets/images/decor1.png"/></span>

        <div class="banner-reward">
        <div class="referral-link">
            <h3>{{$t('aff.01')}}</h3>
            <div class="form-refer">
            <div class="position-relative mb-2" v-if="linkLeft != ''">
                <span class="txtlink">L</span>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    :value="linkLeft"
                    disabled
                />
                <button
                    class="btn-none saves"
                    v-clipboard:copy="linkLeft"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.066"
                    height="23.062"
                    viewBox="0 0 23.066 23.062"
                >
                    <path
                        id="Path_98894"
                        data-name="Path 98894"
                        d="M8638.23,4766.261a4.444,4.444,0,0,1,.461-2.495,3.748,3.748,0,0,1,3.348-2.091c3.6-.033,7.2-.041,10.8,0a3.825,3.825,0,0,1,3.8,3.815q.059,5.963,0,11.928a3.872,3.872,0,0,1-3.811,3.814c-.258.01-.516,0-.791,0-.062.235-.111.44-.172.643a3.856,3.856,0,0,1-3.6,2.8c-3.615.034-7.232.042-10.848,0a3.822,3.822,0,0,1-3.781-3.79q-.062-5.4,0-10.8a3.905,3.905,0,0,1,3.9-3.823C8637.756,4766.258,8637.967,4766.261,8638.23,4766.261Zm2.359,0h.455q3.416,0,6.832,0a3.98,3.98,0,0,1,4.186,4.173v8.487c1.559.139,2.313-.535,2.313-2v-10.98a1.75,1.75,0,0,0-1.988-1.992h-9.855C8641.063,4763.947,8640.373,4764.752,8640.59,4766.26Z"
                        transform="translate(-8633.609 -4761.647)"
                        fill="#34a759"
                    />
                </svg>
                </button>
            </div>
            <div class="position-relative" v-if="linkRight != ''">
                <span class="txtlink">R</span>
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    :value="linkRight"
                    disabled
                />
                <button
                    class="btn-none saves"
                    v-clipboard:copy="linkRight"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.066"
                    height="23.062"
                    viewBox="0 0 23.066 23.062"
                >
                    <path
                        id="Path_98894"
                        data-name="Path 98894"
                        d="M8638.23,4766.261a4.444,4.444,0,0,1,.461-2.495,3.748,3.748,0,0,1,3.348-2.091c3.6-.033,7.2-.041,10.8,0a3.825,3.825,0,0,1,3.8,3.815q.059,5.963,0,11.928a3.872,3.872,0,0,1-3.811,3.814c-.258.01-.516,0-.791,0-.062.235-.111.44-.172.643a3.856,3.856,0,0,1-3.6,2.8c-3.615.034-7.232.042-10.848,0a3.822,3.822,0,0,1-3.781-3.79q-.062-5.4,0-10.8a3.905,3.905,0,0,1,3.9-3.823C8637.756,4766.258,8637.967,4766.261,8638.23,4766.261Zm2.359,0h.455q3.416,0,6.832,0a3.98,3.98,0,0,1,4.186,4.173v8.487c1.559.139,2.313-.535,2.313-2v-10.98a1.75,1.75,0,0,0-1.988-1.992h-9.855C8641.063,4763.947,8640.373,4764.752,8640.59,4766.26Z"
                        transform="translate(-8633.609 -4761.647)"
                        fill="#34a759"
                    />
                </svg>
                </button>
            </div>
            </div>
        </div>
        </div>
        <div class="direct-warpper">
        <div class="total-commi" v-if="dataWallet.address">
            <span>{{$t('aff.02')}}</span>
            <span class="number">{{ dataWallet.total_bonus ? this.formatNumber(dataWallet.total_bonus) : 0 }} PUSH</span>
        </div>
        <div class="">
            <div class="tab-bonus mt-5 mb-4">
            <ul class="nav m-b-20">
                <li
                    class="poiter"
                    @click="
                    changeTab('direct'),
                    teamDirectBonusTab(),
                    fetchDataHistory()
                "
                >
                <a data-toggle="tab" aria-expanded="true" :class="direct"
                >{{$t('aff.03')}}</a
                >
                </li>
                <li
                    class="poiter"
                    @click="
                    changeTab('teamBonus'),
                    teamBonusTab(),
                    fetchDataHistory()
                "
                >
                <a data-toggle="tab" aria-expanded="false" :class="teamBonus"
                >{{$t('aff.04')}}</a
                >
                </li>
                <li
                    class="poiter"
                    @click="
                    changeTab('matchingBonus'), fetchDataHistory()
                "
                >
                <a
                    data-toggle="tab"
                    aria-expanded="false"
                    :class="matchingBonus"
                >{{$t('aff.05')}}</a
                >
                </li>
            </ul>
            </div>
            <div class="tab-content">
            <div :class="tabDirect" id="bonus1">
                <div class="panel-content">
                <ul class="tree">
                    <li>
                    <div class="d-flex pb-2 pointer">
                        <img
                            @click="showPlus"
                            :src="imgPlus"
                            class="mr-2"
                            width="20px"
                        />
                        <div class="d-flex">
                        <span class="mr-4" v-if="dataWallet.address">
                            <img
                                v-if="plus"
                                src="@/assets/images/ic-address.svg"
                                class="mr-1"
                            />
                            <img
                                v-if="!plus"
                                src="@/assets/images/ic-address-gray.svg"
                                class="mr-1"
                            />
                            {{$t('common.0017')}}:
                            <b>
                            {{ dataWallet.address | truncateMiddle(7) }}</b
                            ></span
                        >
                        <span v-if="dataWallet.address"
                        ><img
                            src="@/assets/images/ic-commis.svg"
                            class="mr-1"
                        />
                            {{$t('aff.02')}}:
                            <b>{{ this.formatNumber(dataWallet.direct_bonus) }}</b></span
                        >
                        </div>
                    </div>
                    <ul v-if="plus && dataDirectBonus.length > 0">
                        <li
                            v-for="data in dataDirectBonus"
                            :key="data.address"
                            class="pointer"
                        >
                        <span class="mr-4"
                        ><img
                            src="@/assets/images/ic-address-gray.svg"
                            class="mr-1"
                        />
                            {{$t('common.0017')}}:
                            <b> {{ data.address | truncateMiddle(6) }}</b></span
                        >
                        <span class="mr-4"
                        ><img
                            src="@/assets/images/ic-commis-gray.svg"
                            class="mr-1"
                        />
                            {{$t('common.0041')}}:
                            <b>
                            {{ data.direct_bonus ? formatNumber(data.direct_bonus) : 0 }}</b
                            ></span
                        >
                        <span
                        ><img
                            src="@/assets/images/ic-stacking.svg"
                            class="mr-1"
                        />
                            {{$t('navbar.0011')}} PUSH:
                            <b> {{ formatNumber(data.personal_invest) }}</b></span
                        >
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div :class="tabTeamBonus" id="bonus2">
                <div class="panel-content">
                <div class="tree1 clearfix">
                    <div class="d-flex fs-18 f-Nunito justify-content-center">
                    <span class="mr-4" v-if="dataWallet.address">
                        <img
                        src="@/assets/images/ic-address.svg"
                        class="mr-1"
                    />
                        {{$t('common.0017')}}:
                        <b>
                        {{ dataWallet.address | truncateMiddle(7) }}</b
                        >
                    </span>
                    <span v-if="dataWallet.address"
                    ><img
                        src="@/assets/images/ic-commis.svg"
                        class="mr-1"
                    />
                        {{$t('aff.02')}} :
                        <b>{{
                            dataWallet.team_bonus ? this.formatNumber(dataWallet.team_bonus) : 0
                        }}</b></span
                    >
                    </div>
                    <ul class="">
                        <li>
                            <div v-if="showBack == true" @click="teamBonusTab(parentTree)" class="d-flex fs-18 fw-bold f-Nunito justify-content-center mb-2"> 
                                <img style="cursor: pointer;" src="@/assets/images/ic-muiten-teanbomus.svg"/>
                            </div>
                        <ul class="muiten" >
                        <li v-if="dataTeamBonus.address">
                            <a
                                @click="bonusModal = true"
                                data-toggle="modal"
                                data-target="#bonusitem"
                                class="pointer"
                            >
                            <span class="icon-temp"
                            ><img src="@/assets/images/ic-teambonus.svg"
                            /></span>
                            <span
                                v-if="dataTeamBonus.address"
                                class="d-flex justify-content-center w200"
                            >
                                {{ dataTeamBonus.address | truncateMiddle(7) }}
                            </span></a
                            >
                            <!-- -------------Cây dưới------------- -->
                            <ul>
                            <!-- ----------------Left-------------- -->
                            <li>
                                <a v-if="dataTeamBonusChildLeft.length > 0">
                                <span class="icon-temp"
                                ><img
                                    src="@/assets/images/ic-teambonus.svg"
                                /></span>
                                <span

                                    class="d-flex justify-content-center w200 pointer"
                                    @click="teamBonusTab(dataTeamBonusChildLeft[0]._id.$oid)"
                                >
                                    <div class="mr-2">
                                    {{
                                        dataTeamBonusChildLeft[0].address
                                            | truncateMiddle(7)
                                    }}
                                    </div>
                                </span>
                                </a>
                                <a v-if="dataTeamBonusChildLeft.length == 0 || dataTeamBonusChildLeft.length == undefined">
                                <span class="icon-temp">
                                    <img src="@/assets/images/ic-teambonus.svg"/>
                                </span>
                                <span 
                                    v-clipboard:copy="linkTreeLeft"
                                    v-clipboard:success="onCopy"
                                    v-clipboard:error="onError"
                                    class="d-flex justify-content-center w200 pointer">
                                    <img
                                        src="@/assets/images/plus-blue.svg"
                                        class="index index0"
                                    /> 
                                </span>
                                </a>
                            </li>
                            <!-- ------------Right-------------- -->
                            <li>
                                <a v-if="dataTeamBonusChildRight.length > 0">
                                <span class="icon-temp"
                                ><img
                                    src="@/assets/images/ic-teambonus.svg"
                                /></span>
                                <span
                                    class="d-flex justify-content-center w200 pointer mr-2"
                                    @click="
                                    teamBonusTab(
                                        dataTeamBonusChildRight[0]._id.$oid
                                    )
                                    "
                                >
                                    <div class="mr-2">
                                    {{
                                        dataTeamBonusChildRight[0].address
                                            | truncateMiddle(7)
                                    }}
                                    </div>

                                    </span
                                    ></a>
                                <a v-if="dataTeamBonusChildRight.length == 0 || dataTeamBonusChildRight.length == undefined">
                                <span class="icon-temp"
                                ><img
                                    src="@/assets/images/ic-teambonus.svg"
                                /></span>
                                <span
                                     v-clipboard:copy="linkTreeRight"
                                     v-clipboard:success="onCopy"
                                     v-clipboard:error="onError"
                                    class="d-flex justify-content-center w200 pointer mr-2"
                                >
                                    <img
                                        src="@/assets/images/plus-blue.svg"
                                        class="index index0"
                                    /> </span
                                ></a>
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
                <div :class="tabMatchingBonus" id="bonus3">
<!--                    <div class="places">
                        <img src="@/assets/images/medal/ruby.png" height="127px;" class="mr-4">
                        <div class="clearfix">
                            <h3 class="fw-bold text-uppercase">{{level}}</h3>
                            <p class="fs-18 mb-2">{{dataWallet.address}}</p>
                            <p class="fs-20">{{$t('aff.05')}}:
                                <span class="fw-bold">{{totalMatchingBonus | formatNumber}} PUSH</span>
                            </p>
                        </div>
                    </div>-->
                </div>
            </div>
        </div>
        <!-- ---------History---------- -->
        <div class="mt-5 position-relative">
            <span class="decor5"><img src="@/assets/images/decor1.png"/></span>
            <span class="decor6"><img src="@/assets/images/decor1.png"/></span>
            
            <table class="table tableblue1 tableblue none-mobile">
            <thead>
            <tr>
                <th scope="col" style="width: 40%" class="text-left">{{$t('common.0037')}}</th>
                <th scope="col" style="width: 20%">{{$t('common.0035')}}</th>
                <th scope="col" style="width: 20%" class="text-left">
                {{$t('common.0008')}}
                </th>
                <th scope="col" style="width: 20%" class="text-left">
                {{$t('common.0042')}}
                </th>
            </tr>
            </thead>
            <tbody v-show="dataHistory.length > 0">
            <tr v-for="data in dataHistory" :key="data.address">
                <td class="text-left">
                    <span>
                    {{
                        data && data["created_at"]
                            ? momentTimeHistory(data["created_at"] * 1000, 1)
                            : "--"
                    }}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                    >
                        <circle
                            id="Ellipse_2423"
                            data-name="Ellipse 2423"
                            cx="2.5"
                            cy="2.5"
                            r="2.5"
                            fill="#34a759"
                        ></circle>
                    </svg>
                    {{
                        data && data["created_at"]
                            ? momentTimeHistory(data["created_at"] * 1000, 2)
                            : "--"
                    }}</span
                    >
                </td>
                <td>PUSH</td>
                <td class="text-left">
                    <span class="fw-bold clgreen">{{
                        data.bonus_amount | formatNumber
                    }}</span>
                </td>
                <td class="text-left">{{ data.message }}</td>
            </tr>
            </tbody>
            <tbody v-show="dataHistory.length === 0">
            <tr>
                <td colspan="4">
                <div class="py-5 text-center">
                    <img src="@/assets/images/icons/nodata.png" alt="">
                </div>
                </td>
            </tr>
            </tbody>
            </table>
            <ul v-show="dataHistory.length > 0" class="tablestyle f-Nunito">
                <li v-for="data in dataHistory" :key="data.address" v-show="dataHistory.length > 0">
                    <div class="clearfix">
                        <label>
                            {{$t('common.0037')}}
                        </label>
                        <span>
                    {{
                        data && data["created_at"]
                            ? momentTimeHistory(data["created_at"] * 1000, 1)
                            : "--"
                    }}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                    >
                        <circle
                            id="Ellipse_2423"
                            data-name="Ellipse 2423"
                            cx="2.5"
                            cy="2.5"
                            r="2.5"
                            fill="#34a759"
                        ></circle>
                    </svg>
                    {{
                        data && data["created_at"]
                            ? momentTimeHistory(data["created_at"] * 1000, 2)
                            : "--"
                    }}</span
                    >
                    </div>
                    <div class="clearfix"><label>{{$t('common.0035')}}</label>
                        <span>
                            PUSH
                        </span></div>
                    <div class="clearfix"><label>{{$t('common.0008')}}</label>
                        <span class="fw-bold clgreen">{{data.bonus_amount | formatNumber}}</span></div>
                    <div class="clearfix"><label>{{$t('common.0042')}}</label>
                        <span class="text-info">{{ data.message }}</span></div>
                </li>
                <div v-show="dataHistory.length === 0" class="py-5 text-center">
                    <img src="@/assets/images/icons/nodata.png" alt="">
                </div>
            </ul>
            <div class="row mt-5" v-if="totalPage > 0">
            <div class="col-sm-12 col-md-7">
                <div class="d-flex justify-content-end">
                <a
                    @click="nextPage()"
                    class="btn-gray btn-blue pt-2 pb-2"
                    data-toggle="modal"
                    data-target="#connectWallet"

                >
                    {{$t('common.0028')}}
                    <svg
                        class="ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="15.133"
                        viewBox="0 0 26.645 15.133"
                    >
                    <path
                        id="Path_88594"
                        data-name="Path 88594"
                        d="M-1180.526,1698.888h-.575q-9.273,0-18.546,0a1.67,1.67,0,0,1-1.793-1.665,1.667,1.667,0,0,1,1.546-1.657c.166-.011.333-.006.5-.006h18.857c-.146-.163-.235-.27-.333-.368-.891-.893-1.789-1.779-2.673-2.678a1.583,1.583,0,0,1-.4-1.723,1.6,1.6,0,0,1,1.3-1.1,1.538,1.538,0,0,1,1.414.436c2,1.983,3.991,3.967,5.966,5.971a1.574,1.574,0,0,1,0,2.256q-2.962,3.006-5.969,5.968a1.615,1.615,0,0,1-2.319-.035,1.627,1.627,0,0,1-.009-2.32c.875-.908,1.779-1.788,2.67-2.681C-1180.794,1699.18-1180.7,1699.071-1180.526,1698.888Z"
                        transform="translate(1201.44 -1689.661)"
                    ></path>
                    </svg>
                </a>
                </div>
            </div>
            <div class="col-sm-12 col-md-5">
                <div class="paginate">
                {{$t('common.0029')}}
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    v-model="page"
                    @blur="changePage()"
                    style="width: 90px"
                />
                <span>of {{ totalPage }}</span>
                <div class="page-item">
                    <button class="next mr-2" :disabled="currentPage < 2" @click="prevPage()">
                    <img src="@/assets/images/next.svg">
                    </button>
                    <button class="prev" :disabled="currentPage >= totalPage" @click="nextPage()">
                    <img src="@/assets/images/prev.svg">
                    </button>
                </div>
                </div>
            </div>
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
            v-model="bonusModal"
        >
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
                {{$t('common.0017')}}: <b> {{ dataTeamBonus.address | truncateMiddle(7) }}</b>
            </p>

            <ul class="listbonus f-Nunito fs-18 pl-3 pr-3">
                <li class="mb-2">
                <span class="cl8C">{{$t('navbar.0011')}}:</span>
                <span class="fw-bold">{{
                    dataTeamBonus.personal_invest ? this.formatNumber(dataTeamBonus.personal_invest) : 0
                    }} PUSH</span>
                </li>
                <li class="mb-2">
                <span class="cl8C">{{$t('aff.06')}}:</span>
                <span class="fw-bold">
                    {{ dataTeamBonus.left_invest ? this.formatNumber(dataTeamBonus.left_invest) : 0 }} PUSH</span
                >
                </li>
                <li>
                <span class="cl8C">{{$t('aff.07')}}:</span>
                <span class="fw-bold"
                >{{ dataTeamBonus.right_invest ? this.formatNumber(dataTeamBonus.right_invest) : 0 }} PUSH</span
                >
                </li>
            </ul>
            </div>
        </div>
        </b-modal>
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
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import moment from "moment";
import EventBus from "../../../utils/event-bus";
import {mapGetters, mapState} from "vuex";
import { $t } from '@/lang/i18n.js';
export default {
data() {
    return {
    tabTypeDirectBonus: "direct",
    tabTypeTeamBonus: "teamBonus",
    direct: "active",
    matchingBonus: "",
    teamBonus: "",
    tabDirect: "tab-pane fade active show",
    tabTeamBonus: "tab-pane fade",
    tabMatchingBonus: "tab-pane fade",
    plus: false,
    modal: "modal fade",
    bonusModal: false,
    dataDirectBonus: {},
    dataTeamBonus: {},
    dataTeamBonusChild: {},
    dataTeamBonusChildLeft: {},
    dataTeamBonusChildRight: {},
    dataWallet: {},
    dataHistory: {},
    address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    maxLength: 8,
    showLoading: false,
    fullPage: true,
    moment: moment,
    message: "",
    token: null,
    linkLeft: "",
    linkRight: "",
    linkTreeLeft: "",
    linkTreeRight: "",
    codeRoot: "",
    imgPlus: require("@/assets/images/plus.svg"),
    page: 1,
    limit: 20,
    totalPage: 1,
    currentPage: 1,
    type: "direct_bonus",
    parentTree: "",
    parentRoot: "",
    showBack: false,
    totalMatchingBonus: 0,
    level: "",
    };
},
components: {
    Loading,
},
methods: {
    onCopy() {
        this.$toaster.success($t('common.0012'));
    },
    onError() {
        this.$toaster.error($t('common.0013'));
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
    changeTab(data) {
    if (data == this.tabTypeDirectBonus) {
        this.type = "direct_bonus"
        this.direct = "active";
        this.matchingBonus = "";
        this.teamBonus = "";
        this.tabDirect = "tab-pane fade active show";
        this.tabTeamBonus = "tab-pane fade";
        this.tabMatchingBonus = "tab-pane fade";
    } else if (data == this.tabTypeTeamBonus) {
        this.type = "team_bonus"
        this.direct = "";
        this.matchingBonus = "";
        this.teamBonus = "active";
        this.tabDirect = "tab-pane fade";
        this.tabTeamBonus = "tab-pane fade active show";
        this.tabMatchingBonus = "tab-pane fade";
    } else {
        this.type = "matching_bonus"
        this.direct = "";
        this.matchingBonus = "active";
        this.teamBonus = "";
        this.tabDirect = "tab-pane fade";
        this.tabTeamBonus = "tab-pane fade";
        this.tabMatchingBonus = "tab-pane fade  active show";
    }
    },
    showPlus() {
    this.plus == false ? (this.plus = true) : (this.plus = false);
    this.plus == true
        ? (this.imgPlus = require("@/assets/images/icon-minus.svg"))
        : (this.imgPlus = require("@/assets/images/plus.svg"));
    },
    async teamBonusTab(params) {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
        this.showLoading = true;
        if (params) {
        const res = await axios.get(`/api/user/tree/${params}`, {
            headers: {
            Authorization: "Bearer " + user.token,
            },
        });
        if (res.data.status == 1) {
            this.dataTeamBonus = res.data.data;
            if (res.data.data.child.length == 2) {
            this.dataTeamBonusChild = res.data.data.child;
            const childData = res.data.data.child;
            this.dataTeamBonusChildLeft = childData.filter(e => e.branch == "left")
            this.dataTeamBonusChildRight = childData.filter(e => e.branch == "right")
            
            this.getLevel(this.dataTeamBonusChildLeft, this.dataTeamBonusChildRight, this.dataTeamBonus);
            
            } else if (res.data.data.child.length == 1) {
            this.dataTeamBonusChild = res.data.data.child;
            const childData = res.data.data.child;
            if (childData[0].branch == 'left') {
                this.dataTeamBonusChildLeft = childData.filter(e => e.branch == "left")
                if(this.codeRoot != res.data.data.code) {
                    this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=right`;
                } else {
                    this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&branch=right`;
                }
                this.dataTeamBonusChildRight = [];
            } else {
                this.dataTeamBonusChildRight = childData.filter(e => e.branch == "right")
                if(this.codeRoot != res.data.data.code) {
                    this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=left`;
                } else {
                    this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&branch=left`;
                }
                
                this.dataTeamBonusChildLeft = [];
            }
            } else {
                this.dataTeamBonusChildLeft = [];
                this.dataTeamBonusChildRight = [];
                if(this.codeRoot != res.data.data.code) {
                    this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=left`;
                    this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=right`;
                } else {
                    this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&branch=left`;
                    this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&branch=right`;
                }
            }
        }
            if(res.data.data.parent_id) {
                this.parentTree = res.data.data.parent_id.$oid;
            }
            res.data.data.address == this.dataWallet.address ? this.showBack = false : this.showBack = true;
            
        } else {
        const res = await axios.get("/api/user/tree", {
            headers: {
            Authorization: "Bearer " + user.token,
            },
        });
        if (res.data.status == 1) {
            this.dataTeamBonus = res.data.data;
            if (res.data.data.child.length == 2) {
                this.dataTeamBonusChild = res.data.data.child;
                const childData = res.data.data.child;
                this.dataTeamBonusChildLeft = childData.filter(e => e.branch == "left")
                this.dataTeamBonusChildRight = childData.filter(e => e.branch == "right")
            } else if (res.data.data.child.length == 1) {
                this.dataTeamBonusChild = res.data.data.child;
                const childData = res.data.data.child;
                if (childData[0].branch == 'left') {
                    this.dataTeamBonusChildLeft = childData.filter(e => e.branch == "left")
                    if(this.codeRoot != res.data.data.code) {
                        this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=right`;
                    } else {
                        this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&branch=right`;
                    }
                    
                    this.dataTeamBonusChildRight = [];
                } else {
                    this.dataTeamBonusChildRight = childData.filter(e => e.branch == "right")
                    if(this.codeRoot != res.data.data.code) {
                        this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=left`;
                    } else {
                        this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&branch=left`;
                    }
                    this.dataTeamBonusChildLeft = [];
                }
            } else {
                this.dataTeamBonusChildLeft = [];
                this.dataTeamBonusChildRight = [];
                if(this.codeRoot != res.data.data.code) {
                    this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=left`;
                    this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&pcode=${res.data.data.code}&branch=right`;
                } else {
                    this.linkTreeLeft = window.location.origin + `/?ref=${this.codeRoot}&branch=left`;
                    this.linkTreeRight = window.location.origin + `/?ref=${this.codeRoot}&branch=right`;
                }
                
            }
        }
        }
    } catch (error) {
    } finally {
        this.showLoading = false;
    }
    },
    
    getLevel(leftChild, rightChild, infor) {
        let personalInvestLeft = leftChild.personal_invest;
        let personalInvestRight = rightChild.personal_invest;
        //1: Mỗi nhánh có 1 F1 tgia gói thấp nhất
        if(personalInvestLeft < 1000 || personalInvestRight < 1000) return; 
        //2: DS nhánh yếu
        let leftInvest = infor.left_invest;
        let rightInvest = infor.right_invest;
        let branchWeak = leftInvest > rightInvest ? rightInvest : leftInvest;
        if(800000 > branchWeak >= 400000) this.level = "SILVER";
        if(1500000 > branchWeak >= 800000) this.level = "GOLD";
        if(3000000 > branchWeak >= 1500000) this.level = "SAPPHIRE";
        if(6000000 > branchWeak >= 3000000) this.level = "RUBY";
        if(10000000 > branchWeak >= 6000000) this.level = "EMERALD";
        if(15000000 > branchWeak >= 10000000) this.level = "DIAMOND";
        if(branchWeak >= 15000000) this.level = "CROWN DIAMOND";
    },
    
    async teamDirectBonusTab() {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
        this.showLoading = true;
        const res = await axios.get("/api/user/referral", {
        headers: {
            Authorization: "Bearer " + user.token,
        },
        });
        if (res.data.status == 1) {
        this.dataDirectBonus = res.data.data;
        }
    } catch (error) {
    } finally {
        this.showLoading = false;
    }
    },
    async infoWallet() {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
        this.showLoading = true;
        const res = await axios.get("/api/user/index", {
        headers: {
            Authorization: "Bearer " + user.token,
        },
        });
        if (res.data.status == 1) {
        this.teamDirectBonusTab();
        this.fetchDataHistory();
        this.dataWallet = res.data.data;
        this.linkLeft = window.location.origin + `/?ref=${res.data.data.code}&branch=left`;
        this.linkRight = window.location.origin + `/?ref=${res.data.data.code}&branch=right`;
        this.parentRoot = res.data.data._id.$oid;
        this.codeRoot = res.data.data.code;
        this.dataWallet.direct_bonus = res.data.data.direct_bonus
            ? res.data.data.direct_bonus
            : 0;
        } else {
        this.message = res.data.message;
        }
    } catch (error) {
    } finally {
        this.showLoading = false;
    }
    },
    async fetchDataHistory() {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
        this.showLoading = true;
        const res = await axios.get(`/api/staking/bonusLog?type=${this.type}&p=${this.page}&limit=${this.limit}`, {
        headers: {
            Authorization: "Bearer " + user.token,
        },
        });
        if (res.data.status == 1) {
        this.dataHistory = res.data.data.list_data;
        if(this.type == "matching_bonus") {
            for(let i = 0; i < this.dataHistory.length; i++) {
                this.totalMatchingBonus = this.totalMatchingBonus + this.dataHistory[i].bonus_amount;
            }
        }
        this.totalPage = res.data.optional.paging_info.total_page;
        this.currentPage = this.page;
        }
    } catch (error) {
    } finally {
        this.showLoading = false;
    }
    },
    copyToClipboard(data) {
    navigator.clipboard
        .writeText(data)
        .then(this.$toaster.success("Copied to clipboard!"));
    },
    connectWallet() {
        EventBus.$emit("child-event", "Hello Vue.js!");
    },
    close() {
    this.bonusModal = false;
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

    prevPage() {
    if (this.page <= 1) {
        return;
    }
    this.page = parseInt(this.page) - 1;
    this.fetchDataHistory();
    },
    nextPage() {
    if (this.page >= this.totalPage) {
        return;
    }
    this.page = parseInt(this.page) + 1;
    this.fetchDataHistory();
    },
    changePage() {
    this.fetchDataHistory();
    },
    reverseTree(address) {
        console.log(address);
    }
},
mounted() {
    this.infoWallet();
},
filters: {
    truncateMiddle(value, limit) {
    if (value.length <= limit) {
        return value;
    }
    const separator = "...";
    const charsToShow = limit - separator.length;
    const frontChars = Math.ceil(charsToShow / 1);
    const backChars = Math.floor(charsToShow / 1);
    const front = value.substr(0, frontChars);
    const back = value.substr(value.length - backChars);
    return front + separator + back;
    },
    formatNumber(value) {
    if (typeof value !== "number") {
        return value;
    }
    return value.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    },
},
computed: {
    ...mapState(['web3Modal']),
    ...mapGetters({
    exchange: 'exchange',
    account: 'account',
    }),
},
watch: {
    'account': function () {
    setTimeout(() => {
        this.infoWallet();
        this.teamBonusTab();
      }, 1000);
    }
}
};
</script>

<style scoped>
.poiter {
cursor: pointer;
}

.index0 {
z-index: 0;
}

.modal-body {
margin: 20px;
}
.muiten{
    padding: 0px;
    margin-top: 35px!important;
}
ul{
    padding-left: 0px!important;
}
.tree1 li {
    z-index: 2;
}
.mt-5 {
    margin-top: 1rem !important;
}
.places {
    display: flex;
    background: #f9f9f9;
    padding: 25px 45px;
}
</style>
