<template>
    <div class="container index1 position-relative pt-5" data-aos="fade-up" data-aos-delay="200">
        <span class="decor5 index0"> <img src="@/assets/images/decor1.png"></span>
        <span class="decor18 index0"> <img src="@/assets/images/decor2.png" class="w-75"></span>
        <router-link to="/lock"
            class="btn-gray btn-blue pt-2 pb-2 poiter position-relative index1">
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
        </router-link>
        <p class="fs-24 fw-bold text-center position-relative index1">{{$t('lock.history.01')}}</p>
        <table class="table tableblue styletable middle position-relative index1">
            <tbody v-if="userHistorys.length === 0">
            <tr>
                <td colspan="4">
                <div class="py-5 text-center">
                    <img src="@/assets/images/icons/nodata.png" alt="">
                </div>
                </td>
            </tr>
            </tbody>
            <tbody v-else v-for="(item, idx) in userHistorys" :key="idx">
                <tr>
                    <td style="width: 45%;">
                        <div class="d-flex  align-items-center">
                            <!-- ----image--- -->
                            <div class="w-60 avartar" v-if="item && item['type'] ==='liquid'">
                                <ul class="list d-flex">
                                    <li class="active">
                                        <a href="#">
                                            <img v-if="item['image']" class="icon1" :src="item['image']"
                                                    :alt="item['symbol']">
                                            <img v-else class="icon1" src="@/assets/images/ic-default.svg"
                                                    :alt="item['symbol']">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img v-if="item['liquid_info']['sub_token'] && item['liquid_info']['sub_token']['image']" class="icon2" :src="item['liquid_info']['sub_token']['image']"
                                                    :alt="item['liquid_info']['sub_token']['symbol']">
                                            <img v-else class="icon2" src="@/assets/images/ic-default.svg"
                                                    :alt="item['liquid_info']['sub_token']['symbol']">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div v-else class="w-60 avartar">
                                <img v-if="item['image']" class="mw-50" :src="item['image']"
                                        :alt="item['symbol']">
                                <img v-else class="mw-50" src="@/assets/images/ic-default.svg"
                                        :alt="item['symbol']">
                            </div>
                            <!-- ----image--- -->
                            <div class="w-100 clearfix">
                                <div class="clearfix text-left f-Nunito fs-14 mb-1">
                                    {{$t('lock.detail.03')}} {{item ? item['contract_name'] : ''}} {{item && item['type'] === 'token' ? 'Tokens' : ''}} Tokens - {{item['amount'] > 1 ? formatNumber(item['amount'], 2) : item['amount']}} {{item ? item['contract_symbol'] : ''}} {{item && item['type'] ==='liquid' ? '(' + formatNumber(item['percent'],2) + '%)' : ''}}
                                    <a class="btn-none" :href="getLink(item)" target="_blank">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.95" height="19.504"
                                            viewBox="0 0 19.95 19.504">
                                            <g id="Group_26695" data-name="Group 26695" transform="translate(1)">
                                                <path id="Path_64294" data-name="Path 64294"
                                                    d="M481.619,395.5H473.6v13.542h14.434V400.7"
                                                    transform="translate(-473.6 -390.538)" fill="none" stroke="#777"
                                                    stroke-width="2" />
                                                <path id="Path_64295" data-name="Path 64295"
                                                    d="M6.446,5.618a.162.162,0,0,0-.142-.13H4.617V.211C4.617.095,4.548,0,4.463,0H2c-.085,0-.154.095-.154.211V5.488H.154a.162.162,0,0,0-.142.13.271.271,0,0,0,.033.23l3.07,4.225a.137.137,0,0,0,.109.062h0a.138.138,0,0,0,.109-.062L6.412,5.848A.27.27,0,0,0,6.446,5.618Z"
                                                    transform="translate(11.783 11.733) rotate(-135)" fill="#777" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                                <div class="d-flex align-items-center">

                                    <span v-if="item && item['withdraw_status'] === 0 && !checkUnlock(item['unlock_time'])" class="status status-lock mr-1"><svg xmlns="http://www.w3.org/2000/svg"
                                            id="Group_26696" data-name="Group 26696" width="7.872" height="10.496"
                                            viewBox="0 0 7.872 10.496" class="mr-2">
                                            <path id="Path_64195" data-name="Path 64195"
                                                d="M402.888,351.936h-.328v-1.312a2.624,2.624,0,0,0-5.248,0v1.312h-.328a.985.985,0,0,0-.984.984v4.592a.985.985,0,0,0,.984.984h5.9a.985.985,0,0,0,.984-.984V352.92a.985.985,0,0,0-.984-.984Zm-4.7-1.312a1.749,1.749,0,1,1,3.5,0v1.312h-3.5Zm2.187,4.689v1a.437.437,0,1,1-.875,0v-1a.875.875,0,1,1,.875,0Zm0,0"
                                                transform="translate(-396 -348)" fill="#fff" />
                                        </svg> {{$t('lock.detail.03')}}
                                    </span>

                                    <span v-else-if="item && item['withdraw_status'] === 0 && checkUnlock(item['unlock_time'])" class="status status-unLocked mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="7.341" height="10.497"
                                            viewBox="0 0 7.341 10.497" class="mr-2">
                                            <path id="Path_98514" data-name="Path 98514"
                                                d="M294.2,1409.26c0-.477-.019-.93.006-1.381a4.1,4.1,0,0,1,.154-.98,2.614,2.614,0,0,1,2.764-1.824,2.644,2.644,0,0,1,2.315,2.534.528.528,0,1,1-1.05.049,1.587,1.587,0,0,0-1.258-1.521,1.534,1.534,0,0,0-1.858,1.382c-.05.542-.02,1.092-.018,1.638,0,.034.064.078.107.1a.339.339,0,0,0,.13,0h4.328a1.565,1.565,0,0,1,.261.018.444.444,0,0,1,.386.371,1.117,1.117,0,0,1,.022.227q0,2.524,0,5.049a1.066,1.066,0,0,1-.007.147.517.517,0,0,1-.534.475q-3.123,0-6.246,0a.556.556,0,0,1-.55-.506,1.509,1.509,0,0,1,0-.164q0-2.475,0-4.951c0-.479.187-.667.663-.668Zm3.688,2.678a1.112,1.112,0,0,0-.939-1.072,1.029,1.029,0,0,0-1.15.8,1,1,0,0,0,.394,1.026.245.245,0,0,1,.106.219c-.007.185-.007.372,0,.557a.522.522,0,0,0,1.043,0c.007-.18.007-.36,0-.541a.24.24,0,0,1,.113-.23A.974.974,0,0,0,297.893,1411.938Z"
                                                transform="translate(-293.156 -1405.053)" fill="#fff" />
                                        </svg>
                                        {{$t('lock.detail.14')}}
                                    </span>

                                    <span v-else class="status status-withdraw mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9.2" height="7.651"
                                            viewBox="0 0 9.2 7.651" class="mr-2">
                                            <path id="Path_88077" data-name="Path 88077"
                                                d="M-730.165,522.731a5.1,5.1,0,0,1,3.011.659,4.854,4.854,0,0,1,1.761,1.772c.012.021.023.042.036.062a.3.3,0,0,0,.352.153.289.289,0,0,0,.2-.31,5.021,5.021,0,0,0-.384-1.96,5.406,5.406,0,0,0-4.284-3.4,3.456,3.456,0,0,0-.529-.045c-.127,0-.172-.04-.169-.174.008-.459,0-.919,0-1.379,0-.147-.02-.282-.172-.348a.329.329,0,0,0-.383.115q-1.554,1.513-3.111,3.022c-.228.222-.229.343,0,.562q1.566,1.521,3.131,3.042a.317.317,0,0,0,.361.1.308.308,0,0,0,.177-.33c0-.464,0-.929,0-1.393Z"
                                                transform="translate(734.002 -517.741)" fill="#fff" />
                                        </svg>
                                        {{$t('navbar.0018')}}
                                    </span>

                                    <span class="cl5D">
                                        {{$t('lock.detail.03')}} {{ convertDate(item['created_at'])}} <svg xmlns="http://www.w3.org/2000/svg" width="5"
                                            height="5" viewBox="0 0 5 5">
                                            <circle id="Ellipse_2423" data-name="Ellipse 2423" cx="2.5" cy="2.5"
                                                r="2.5" fill="#9F9AA5"></circle>
                                        </svg> {{$t('lock.detail.15')}} {{ convertDate(item['unlock_time']) }} </span>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td style="width: 20%;" class="text-left">
                        <span class="f-Nunito d-block">{{$t('lock.detail.16')}}</span>
                            <div class="progress intable">
                                <div class="progress-bar" :class="convertTimesProgressbar(item['unlock_time'], item['created_at']) < 50 ? 'bg-down' : 'bg-up'" role="progressbar" :style="'width:' + convertTimesProgressbar(item['unlock_time'], item['created_at']) + '%' "
                                        :aria-valuenow="convertTimesProgressbar(item['unlock_time'], item['created_at'])" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        <span class="f-Nunito d-block cl5D"><countdown :end="item['unlock_time']"></countdown></span>
                    </td>
                    <td style="width: 30%;" class="text-left" @click="selectedLock(item)">
                        <div class="d-flex">
                            <button v-if="item && item['withdraw_status'] === 0" class="btn-list status-unLocked" href="javascript:void(0)"
                                    @click="transferModal = true">
                                <img src="@/assets/images/icon-transfer.svg" class="mr-2">
                                {{$t('lock.history.02')}}
                                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                            </button>
                            <button v-if="item['withdraw_status'] !== 0" style="background: gray;" disabled  class="btn-list status-unLocked">
                                <img src="@/assets/images/icon-transfer.svg" class="mr-2">
                                {{$t('lock.history.02')}}
                                <i class="fa-solid fa-arrow-right-arrow-left"></i>
                            </button>
                            &nbsp;
                            <button v-if="item['withdraw_status'] === 0" class="btn-list status-warring ml-2 mr-2" href="javascript:void(0)"
                                    @click="extendModal = true">
                                <img src="@/assets/images/icon-extend.svg" class="mr-2">
                                {{$t('lock.history.03')}}
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </button>
                            <button v-if="item['withdraw_status'] !== 0" style="background: gray;" class="btn-list status-warring ml-2 mr-2" disabled>
                                <img src="@/assets/images/icon-extend.svg" class="mr-2">
                                {{$t('lock.history.03')}}
                                <i class="fa-solid fa-up-right-from-square"></i>
                            </button>
                            &nbsp;
                            <button v-if="item && item['withdraw_status'] === 0 && checkUnlock(item['unlock_time'])" class="btn-list" href="javascript:void(0)"
                                    @click="withdraw = true">
                                <img src="@/assets/images/icon-withdraw.svg" class="mr-2">
                                {{$t('navbar.0018')}}
                            </button>
                            <button v-else style="background: gray;" class="btn-list" disabled>
                                <img src="@/assets/images/icon-withdraw.svg" class="mr-2">
                                {{$t('navbar.0018')}}
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <Paginate
            v-show="userHistorys.length > 0 && totalPage > 1"
            @pageChange="changePage($event)"
            :totalPage="totalPage"
            :page="page">
        </Paginate>
        <span class="decor6 index0"> <img src="@/assets/images/decor1.png"></span>
        <span class="decor7 index0"> <img src="@/assets/images/decor1.png"></span>
            <!-- ----Modal Withdraw--- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="withdraw"
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
            <div class="modal-body px-4 text-center">
                <p>
                    <img src="@/assets/images/ic-share.svg" alt="">
                </p>
                <h3 class="mb-0">{{$t('lock.history.04')}}</h3>
                <p >
                    <small class="f-Nunito fs-14" >
                        {{$t('lock.history.05')}}
                    </small>
                </p>
                <label  class="d-block text-start f-Nunito fs-14">{{$t('navbar.0018')}}</label>
                <div class="formwrapper mb-4 position-relative">
                    <input type="text" readonly :value="lockSelected ? lockSelected['real_token_amount'] : ''" class="form-control heigh54 f-Nunito inputfocus" :placeholder="$t('placeholder.18')">
                    <button class="btn fs-18 f-Nunito text-Symbol">{{lockSelected ? lockSelected['contract_symbol'] : ''}}</button>
                </div>
                <div class="formwrapper mb-5">
                    <label class="d-block text-start f-Nunito fs-14">Deposit to</label>
                    <input type="text" readonly :value="lockSelected ? lockSelected['address_withdraw'] : ''" class="form-control heigh54 f-Nunito inputfocus" :placeholder="$t('placeholder.18')">
                </div>
                <button type="button" class="linear-blue btn-blue btn-bluebig w-100 mb-5 pointer"  @click="withdraw_confirm = true, withdraw = false">Continue <img src="@/assets/images/ic-mui-ten-trang.svg" class="ml-1" alt=""></button>
            </div>
        </div>
        </b-modal>
        <!-- ----Modal Withdraw Confirm --- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="withdraw_confirm"
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
            <div class="modal-body px-4 text-center">
                <p>
                    <img src="@/assets/images/ic-confirm-withdraw.svg" alt="">
                </p>
                <h3 class="">{{$t('lock.history.06')}}</h3>

                <table class="table table-borderless">
                    <tbody>
                    <tr>
                        <td class="text-secondary f-Nunito fs-14 text-start">{{$t('common.0008')}}</td>
                        <td class="text-end fs-14 f-Nunito fw-bold"> {{lockSelected ? lockSelected['real_token_amount'] : ''}} {{lockSelected ? lockSelected['contract_symbol'] : ''}}</td>
                    </tr>

                    <tr>
                        <td class="text-secondary fs-14 f-Nunito text-start">{{$t('lock.history.07')}}</td>
                        <td class="text-end f-Nunito fs-14">{{lockSelected ? lockSelected['address_withdraw'] : ''}}</td>
                    </tr>
                    </tbody>
                </table>
                <div class="row">
                    <div class="col-6 mb-5">
                        <button type="button" class="btn-gray btn-blue btn-bluebig w-100 pointer"  @click="closeWithdrawLock()"><img src="@/assets/images/dot-r-black.svg" class="ml-2 "> {{$t('common.0015')}}</button>
                    </div>
                    <div class="col-6">
                        <button type="button" @click="withdrawToken()" class="linear-blue btn-blue btn-bluebig w-100  pointer" >{{$t('common.0016')}} <img src="@/assets/images/dot-l-white.svg" class="ml-2 "></button>
                    </div>
                </div>
                </div>
        </div>
        </b-modal>
        <!-- -------Modal Transfer----- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="transferModal"
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
            <div class="modal-body p-4 text-center">
					<p><img src="@/assets/images/ic-transfer-lock.svg"></p>
					<p class="f-Nunito fs-20 fw-bold">{{$t('lock.history.08')}}</p>
					<p class="f-Nunito fs-14 text-center">{{$t('lock.history.09')}}
					</p>
					<form class="f-Nunito mt-5">
						<div class="form-group text-left">
							<label>{{$t('lock.history.10')}}</label>
							<input type="text" class="form-control heigh54" v-model="address" @input="checkAddress()" :placeholder="$t('placeholder.18')">
                            <small class="text-danger" v-show="errorTransfer['show']">
                                {{errorTransfer['msg']}}
                            </small>
						</div>
					</form>
					<div v-if="isvalid" class="d-flex mb-4 mt-5">
						<a @click="updateTransferAddress(address)" href="#" class="linear-blue btn-blue btn-blues w-100">
                                                    {{$t('common.0016')}} <img src="@/assets/images/dot-l-white.svg" class="ml-3">
						</a>
					</div>
					<div v-if="!isvalid" class="d-flex mb-4 mt-5">
						<a href="#" class="linear-blue btn-blue btn-blues w-100 disabled">
							{{$t('common.0016')}}
							<img src="@/assets/images/dot-l-white.svg" class="ml-3">
						</a>
					</div>
				</div>
        </div>
        </b-modal>
        <!-- -------Modal Extend----- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="extendModal"
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
            <div class="modal-body p-4 text-center">
                <p><img src="@/assets/images/icon-duration.svg"></p>
                <p class="f-Nunito fs-20 fw-bold">{{$t('lock.history.11')}}</p>

                <p class="f-Nunito">{{$t('lock.history.12')}}</p>

                <div class="d-flex fs-14 f-Nunito justify-content-between">
                    <span>{{$t('lock.history.13')}}</span>
                    <span>{{lockSelected ? convertDate(lockSelected['unlock_time']) : ''}}</span>
                </div>
                <div class="original-date mt-2">
                    <div class="clearfix text-left">
                        <label>
                            {{$t('lock.history.14')}}:
                        </label>
                        <input type="number" v-model="unlock_day" @change="resetUnlockedTime()" class="border-0 bg-transparent" placeholder="0">
                    </div>
                    
                    <div class="clearfix text-right">
                        <label>
                            {{unlocked_date}}
                        </label>
                        <div class="col-6 text-end">
                            <div class="form-select2-extend">
                                <Select2 v-model="typeLock" class="p-0 border-0 bg-transparent" @change="changeTokenType($event)" :options="timeOptions"/>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 v-show="error['unlock_day']['show']" class="text-danger text-10" style="float:left;">
                    <br>
                    {{error['unlock_day']['msg']}}
                </h6>
                <div class="d-flex mb-4 mt-5">
                    <a @click="confirmExtendLockDuration()" href="#" class="linear-blue btn-blue btn-blues w-100 ">
                        {{$t('common.0016')}}
                        <img src="@/assets/images/dot-l-white.svg" class="ml-3">
                    </a>
                </div>

            </div>
        </div>
        </b-modal>
        <!-- -------Modal Confirm Extend----- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="confirmExtendModal"
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
            <div class="modal-body p-4 text-center">
					<p><img src="@/assets/images/ic-confirm-withdraw.svg"></p>
					<p class="f-Nunito fs-20 fw-bold">{{$t('lock.history.15')}}</p>

					<ul class="listbonus f-Nunito border-0">
						<li class="mb-2">
							<span class="cl9F9">{{$t('lock.history.14')}}</span>
							<span class="fw-bold">{{convertTime(lockSelected ? lockSelected['unlock_time'] : 0)}}</span>
						</li>
						<li class="mb-2">
							<span class="cl8C">{{$t('lock.history.16')}}</span>
							<span class="fw-bold">
								{{convertTime(unlockTimeByTimestamp)}}</span>
						</li>
					</ul>
					<div class="d-flex mb-4 mt-5">

						<a @click="extendModal = true, confirmExtendModal = false" href="#" class="btn-gray btn-blue mr-3 btn-bluebig w-50" data-toggle="modal"
							data-target="#connectWallet">
							<img src="@/assets/images/dot-r-black.svg" class="mr-2">
							{{$t('common.0015')}}

						</a>
						<a @click="updateExtend(unlockTimeByTimestamp)" href="#" class=" linear-blue btn-blue fill w-50 text-center radius6">
							{{$t('common.0016')}} <img src="@/assets/images/dot-l-white.svg" class="ml-2">
						</a>
					</div>
				</div>
        </div>
        </b-modal>
        <!-- -----Loading---- -->
	<loading
	:active.sync="showLoading"
	:can-cancel="true"
	:is-full-page="fullPage"
    ></loading>
    </div>
</template>

<script>
import Countdown from "@/components/Countdown";
import Loading from "vue-loading-overlay";
import {mapGetters} from "vuex";
import moment from 'moment';
import axios from "axios";
import Web3, {utils} from "web3";
import {ethers} from "ethers";
import {settingsContract} from "@/utils/const";
import Paginate from "@/components/Paginate";
export default {
    components:{
        Countdown,
        Loading,
        Paginate
    },
data(){
    return {
        userHistorys:[],
        page: 1,
        totalPage: 1,
        totalRows: 0,
        pageSize: 20,
        showLoading: false,
        fullPage: true,
        withdraw: false,
        isShowWithdraw: false,
        lockSelected: Object,
        isShowWithdrawConfirm: false,
        withdraw_confirm: false,
        error: {
                'transferAddress': {
                    'show': false,
                    'msg': '',
                },
                'lockHistoryId': {
                    'show': false,
                    'msg': '',
                },
                'unlock_day': {
                    'show':  false,
                    'msg':  '',
                }
            },
        errorTransfer: {
            show: false,
            msg: 'abc'
        },
        lockHistoryId: 0,
        settingLock: Object,
        transferModal:false,
        extendModal:false,
        confirmExtendModal:false,
        isvalid:false,
        address: '',
        transfer_address: '',
        unlocked_date: '',
        unlock_day: 30,
        typeLock: 'days',
        timeOptions: [
            { id: 'days', text: 'Days' },
            { id: 'months', text: 'Months' },
            { id: 'timestamp', text: 'Timestamp' },
        ],
        timeSelect:"days",
        extendDate: 1,
        unlockTimeByTimestamp: '',
    }
},
methods:{
    confirmExtendLockDuration() {
        if(!this.error['unlock_day']['show']) {
            this.confirmExtendModal = true;
            this.extendModal = false;
        }
    },
    formatNumber(number, minPrecision = 2, maxPrecision = 2) {
            if (number === 0 || !number) {
                return '0.00';
            }
            const options = {
                minimumFractionDigits: minPrecision,
                maximumFractionDigits: maxPrecision,
            }
            let val = (number / 1).toFixed(minPrecision).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        getLink(item, name, address = false) {
            let explorerUrl = '';
            if (item['platform'] === 'bsc') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://bscscan.com/';
                } else {
                    explorerUrl = 'https://testnet.bscscan.com/';
                }
            } else if (item['platform'] === 'eth') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://etherscan.io/';
                } else {
                    explorerUrl = 'https://ropsten.etherscan.io/';
                }
            } else if (item['platform'] === 'polygon') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://polygonscan.com/';
                } else {
                    explorerUrl = 'https://mumbai.polygonscan.com/';
                }
            } else if (item['platform'] === 'fantom') {
                if (item['network'] === 'main') {
                    explorerUrl = 'https://ftmscan.com/';
                } else {
                    explorerUrl = 'https://testnet.ftmscan.com/';
                }
            }

            return address ? explorerUrl + 'address/' + item[name] : explorerUrl + 'tx/'+item['hash'];
        },
        checkUnlock(unlock) {
            unlock = parseInt(unlock) || 0 ;
            let now = new Date().getTime();
            now = parseInt(now/1000);
            return unlock <= now;
        },
        convertDate(time) {
            let date = moment(time*1000);
            return date.format('MM/DD/YYYY');
        },
        convertTimesProgressbar(unlockTime,lockTime)
        {
            let now = new Date().getTime();
            now = parseInt(now/1000);
            let timeDiff = unlockTime - lockTime;
            if (unlockTime <= now) {
                return 0;
            }
            let fromLockToNow = now - lockTime;
            return Math.round(100 - (fromLockToNow / timeDiff * 100), 2);
        },
        selectedLock(item) {
            this.lockSelected = item;
        },
        async loadHistorys() {
            try{
                this.showLoading = true;
            this.userHistorys = []
            let address = this.account;
            if (!address) return;
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            let url = '/api/lock/get-by-user/' + address;
            url = url + '?platform=' + platform + '&network=' + network + '&order=withdraw_status,unlock_time&by=asc,asc';
            url += `&p=${this.page}&limit=${this.pageSize}`;
            this.totalPage = 0;
            this.totalRows = 0;
            const userData = await axios.get(url);
            if (userData.data.data) {
                this.userHistorys = userData.data.data;
                this.totalPage = userData.data['optional']['total_page'];
                this.totalRows = userData.data['optional']['row_count'];
            } else {
                this.userHistorys = []
            }
            } catch (error) {
        } finally {
        this.showLoading = false;
        }
        },
        async withdrawToken() {
            this.withdraw_confirm = false;
            this.lockHistoryId = this.lockSelected['lock_id'];
            if (this.lockHistoryId <= 0) {
                this.error['lockHistoryId']['show'] = true;
                this.error['lockHistoryId']['msg'] = 'Invalid Lock History ID';
                return false;
            } else {
                this.error['lockHistoryId']['show'] = false;
                this.error['lockHistoryId']['msg'] = '';
            }
            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.account,
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
            this.$store.commit("setPopupWallet", true);
            try {
                let web3 = new Web3(window.ethereum);
                let lockContractInstance = new web3.eth.Contract(settingsContract['ABI_LOCK'], this.settingLock['lock_contract_address']);
                let resultTransaction = await lockContractInstance.methods.withdrawToken(this.lockHistoryId).send(obj).on('transactionHash', function (hash) {
                    // $('#modal_withdraw').modal('hide');
                    // toastr["success"]("Please wait a minute to complete your transaction!");
                    // $("#global_loading").show();
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // console.log("error", error, receipt);
                    // $("#global_loading").hide();
                    // toastr["error"]("Something went wrong");
                    // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
                this.$store.commit("setPopupWallet", false);
                if (resultTransaction.status) {
                    this.isShowWithdraw = false;
                    // success!
                    this.close()
                    this.$toaster.success('Success!');
                    this.lockSelected = [];
                    setTimeout(() =>   this.loadHistorys(), 1000);
                } else {
                    // error
                }
            } catch (e) {
                console.log(e);
                this.$store.commit("setPopupWallet", false);
            }

        },
        hideModal() {
            this.$emit('closeWithdraw');
        },
        showConfirmModal() {
            this.$emit('showConfirmWithdrawModal');
        },
        async loadSettingsLock() {
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            let url = '/api/registry/get_lock_setting_platform';
            url = url + '?platform=' + platform + '&network=' + network;
            const settingsLock = await axios.get(url);
            this.settingLock = settingsLock.data.data;
        },
        close(){
            this.withdraw_confirm = false
            this.withdraw = false
            this.extendModal = false
            this.transferModal = false
            this.confirmExtendModal = false
        },
        closeWithdrawLock(){
            this.withdraw_confirm = false
            this.withdraw = true
        },
        checkAddress() {
            let length = this.address.length;
            if (length > 0 && length !== 42) {
                this.isvalid = false;
                this.errorTransfer['show'] = true;
                this.errorTransfer['msg'] = 'Address invalid!';
            } else {
                this.isvalid = true;
                this.errorTransfer['show'] = false;
                this.errorTransfer['msg'] = 'Address can not empty';
            }
        },
        async updateTransferAddress(address) {
            this.transfer_address = address;
            this.transferLock();
        },
        async transferLock() {
            let transferAddress = this.transfer_address.trim();
            this.lockHistoryId = this.lockSelected['lock_id'];
            if (transferAddress.length < 42 || !transferAddress.startsWith("0x")) {
                this.error['transferAddress']['show'] = true;
                this.error['transferAddress']['msg'] = 'Invalid Address';
                return false;
            } else {
                this.error['transferAddress']['show'] = false;
                this.error['transferAddress']['msg'] = '';
            }
            if (this.lockHistoryId <= 0) {
                this.error['lockHistoryId']['show'] = true;
                this.error['lockHistoryId']['msg'] = 'Invalid Lock History ID';
                return false;
            } else {
                this.error['lockHistoryId']['show'] = false;
                this.error['lockHistoryId']['msg'] = '';
            }

            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.account,
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
            this.transferModal = false
            this.$store.commit("setPopupWallet", true);
            try {
                let web3 = new Web3(window.ethereum);
                let lockContractInstance = new web3.eth.Contract(settingsContract['ABI_LOCK'], this.settingLock['lock_contract_address']);
                let resultTransaction = await lockContractInstance.methods.transferLock(this.lockHistoryId, transferAddress).send(obj).on('transactionHash', function (hash) {
                    // $('#modal_transfer').modal('hide');
                    // toastr["success"]("Please wait a minute to complete your transaction!");
                    // $("#global_loading").show();
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // $("#global_loading").hide();
                    // console.log("error", error, receipt);
                    // toastr["error"]("Something went wrong");
                    // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
                // $("#global_loading").hide();
                this.close()
                this.$store.commit("setPopupWallet", false);
                this.isShowTransfer = false;
                if (resultTransaction.status) {
                    this.$toaster.success('Success!');
                    // toastr["success"]("Transfer Lock Successfully");
                    this.lockSelected = [];
                    this.transfer_address = '';
                    setTimeout(() =>   this.loadHistorys(), 1000);
                } else {
                    // error
                }
            } catch (e) {
                console.log(e);
                this.isShowTransfer = false;
                this.close()
                this.$store.commit("setPopupWallet", false);
            }
        },
        resetUnlockedTime() {
            this.unlock_day = parseInt(this.unlock_day) || 0;
            let time = this.lockSelected['unlock_time']*1000;
            let now = new Date().getTime();
            now = Math.floor(now/1000);
            if (!this.unlock_day) {
                this.error['unlock_day']['show'] = true;
                this.error['unlock_day']['msg'] = 'Unlock date invalid!';
                return;
            }
            if (this.typeLock === 'days') {
                let day = this.unlock_day;
                if (day <= 0) {
                    this.error['unlock_day']['show'] = true;
                    this.error['unlock_day']['msg'] = 'Day invalid!';
                    return;
                } else {
                    this.error['unlock_day']['show'] = false;
                    this.error['unlock_day']['msg'] = '';
                }
                let date = moment(time).add(day, 'days');
                if (date.unix() <= now) {
                    this.error['unlock_day']['show'] = true;
                    this.error['unlock_day']['msg'] = 'Day invalid!';
                    return;
                } else {
                    this.error['unlock_day']['show'] = false;
                    this.error['unlock_day']['msg'] = '';
                }
                this.unlocked_date = date.format('MM/DD/YYYY');
                this.unlockTimeByTimestamp = date.unix();
            } else if (this.typeLock === 'months') {
                let months = this.unlock_day;
                if (months <= 0) {
                    this.error['unlock_day']['show'] = true;
                    this.error['unlock_day']['msg'] = 'Months invalid!';
                    return;
                } else {
                    this.error['unlock_day']['show'] = false;
                    this.error['unlock_day']['msg'] = '';
                }
                let date = moment(time).add(months*30, 'days');
                if (date.unix() <= now) {
                    this.error['unlock_day']['show'] = true;
                    this.error['unlock_day']['msg'] = 'Day invalid!';
                    return;
                } else {
                    this.error['unlock_day']['show'] = false;
                    this.error['unlock_day']['msg'] = '';
                }
                this.unlocked_date = date.format('MM/DD/YYYY');
                this.unlockTimeByTimestamp = date.unix();
            } else if (this.typeLock === 'timestamp') {
                let timestamp = this.unlock_day;
                if (timestamp*1000 <= now) {
                    this.error['unlock_day']['show'] = true;
                    this.error['unlock_day']['msg'] = 'Timestamp invalid!';
                    return;
                } else {
                    this.error['unlock_day']['show'] = false;
                    this.error['unlock_day']['msg'] = '';
                }
                let date = moment(timestamp*1000);
                this.unlocked_date = date.format('MM/DD/YYYY');
                this.unlockTimeByTimestamp = timestamp;
            }
        },
        changeTokenType(type){
            if (type == 'timestamp') {
                    let date = moment().add(this.unlock_day, 'days');
                    this.unlock_day = date.unix();
                } else if (this.typeLock == 'timestamp'){
                    let now = moment(new Date());
                    let date = moment(this.unlock_day*1000).diff(now, 'days')
                    this.unlock_day = date + 1;
                }
                this.typeLock = type
                this.resetUnlockedTime();
            },
            convertTime(date) {
            date = moment(date*1000);
            return date.format('MM/DD/YYYY hh:mm:ss A');
        },
        updateExtend(newUnlockTimestamp) {
            this.extendLock(newUnlockTimestamp);
        },
        async extendLock(newUnlockTimestamp) {
            this.showExtendConfirm = false;
            newUnlockTimestamp = parseInt(newUnlockTimestamp) || 0;
            if (newUnlockTimestamp === 0) {
                return false;
            }
            this.lockHistoryId = this.lockSelected['lock_id'];
            if (this.lockHistoryId <= 0) {
                this.error['lockHistoryId']['show'] = true;
                this.error['lockHistoryId']['msg'] = 'Invalid Lock History ID';
                return false;
            } else {
                this.error['lockHistoryId']['show'] = false;
                this.error['lockHistoryId']['msg'] = '';
            }
            const isProduction = process.env.NODE_ENV === 'production';
            let obj = {
                'from': this.account,
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
            this.confirmExtendModal = false
            this.$store.commit("setPopupWallet", true);
            try {
                let web3 = new Web3(window.ethereum);
                let lockContractInstance = new web3.eth.Contract(settingsContract['ABI_LOCK'], this.settingLock['lock_contract_address']);
                let resultTransaction = await lockContractInstance.methods.extendLockDuration(this.lockHistoryId, newUnlockTimestamp).send(obj).on('transactionHash', function (hash) {
                    // toastr["success"]("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // console.log("error", error, receipt);
                    // toastr["error"]("Something went wrong");
                    // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
                });
                this.$store.commit("setPopupWallet", false);
                if (resultTransaction.status) {
                    this.showExtend = false;
                    this.$toaster.success('Success!');
                    // success
                    // toastr["success"]("Extend Lock Duration Successfully");
                    this.lockSelected = [];
                    setTimeout(() =>   this.loadHistorys(), 1000);
                } else {
                    // fail
                }
            } catch (e) {
                console.log(e);
                this.$store.commit("setPopupWallet", false);
            }
        },
        changePage(page) {
        this.page = page;
        this.loadHistorys()
        }
    },
    watch: {
        // 'exchange': function () {
        //     this.loadSettingsLock();
        //     setTimeout(() =>   this.loadHistorys(), 500);
        // },
        'account': function () {
            setTimeout(() =>   this.loadHistorys(), 500);
        },
        'lock': function() {
            let date = moment(this.lock['unlock_time']*1000 + this.unlock_day*24*60*60*1000);
            this.unlocked_date = date.format('MM/DD/YYYY');
            this.unlockTimeByTimestamp = date.unix();
        }
    },
    computed: {
        ...mapGetters({
            exchange: 'exchange',
            account: 'account',
        })
    },
    created(){
        this.loadSettingsLock();
        setTimeout(() =>   this.loadHistorys(), 1000);
    }
}
</script>

<style scoped>
ul{
    padding: 0px!important;
}
.index1{
	z-index: 1;
}
.index0{
	z-index: 0;
}
.text-Symbol{
    position: absolute;
    top: 0;
    right: 0;
}
input:read-only {
  background-color: #fff;
  border: 1px solid #6AD114;
}

</style>