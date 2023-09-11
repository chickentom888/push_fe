<template>
<div>
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="box-dex">
            <div class="triggers-card">
                <div class="row  position-relative">
                    <div class="col-md-8">
                        <div class="trigge-warper">

                            <h3 class="title" v-html="$t('swap.0001')"></h3>
                            <p class="decrip">{{$t('swap.0002')}}</p>
                            <ul class=" nav-swap m-b-20">
                                <li> <img src="@/assets/images/icon-veryfast.svg" class="mr-2">{{$t('swap.0003')}}</li>
                                <li> <img src="@/assets/images/icon-verycheap.svg" class="mr-2">{{$t('swap.0004')}}</li>
                                <li> <img src="@/assets/images/icon-verysafe.svg" class="mr-2">{{$t('swap.0005')}}</li>
                            </ul>

                            <p class="hero-img mt-5"> <img src="@/assets/images/swap.png" class="animated"> </p>
                        </div>
                        <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
                    </div>
                    <div class="col-md-4 position-relative">

                        <div class="box-swap">
                            <div class="top-swap">
                                <h3>{{$t('navbar.0005')}}</h3>
                                <p class="f-Nunito mb-0">{{$t('swap.0006')}}</p>
                            </div>
                            <div class="content-swap">
                                <div class="tool">
                                    <button class="btn-none mr-2" @click="settingModal = true">
                                        <img src="@/assets/images/ic-tool.svg">
                                    </button>
                                    <button class="btn-none" @click="reloadRate()">
                                        <img src="@/assets/images/ic-refresh.svg" alt="reload">
                                    </button>
                                </div>
                                <div class="swap-currency">
                                    <div class="d-flex align-items-center justify-content-between mb-2">
                                        <div class="d-flex">
                                            <button class="btn-none d-flex align-items-center mr-2"
                                                @click="manageModal = true; selectedSwap = 1">
                                            <img v-if="fromToken" width="32" :src="fromToken['avatar']" alt="">
                                            <img v-else width="32" src="@/assets/images/push.svg" alt="">
                                            <span
                                                class="fw-bold fs-16 ml-2 mr-2">{{ fromToken ? fromToken['symbol'] : '-' }}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10.011"
                                                 viewBox="0 0 17.023 10.011">
                                                <path id="Path_98590" data-name="Path 98590"
                                                      d="M8156.554,5372.3c-.2-.175-.361-.3-.5-.442q-2.906-2.9-5.807-5.8a.9.9,0,0,1-.305-1.07,2.331,2.331,0,0,1,1.1-1.107.89.89,0,0,1,1.055.279q1.536,1.545,3.081,3.082l4.265,4.265a.977.977,0,0,1,0,1.618l-7.271,7.273a.987.987,0,0,1-1.621.007c-.12-.119-.24-.236-.356-.358a.927.927,0,0,1,.007-1.428c.842-.85,1.689-1.692,2.535-2.538q1.775-1.775,3.552-3.55C8156.345,5372.459,8156.418,5372.408,8156.554,5372.3Z"
                                                      transform="translate(5380.816 -8149.856) rotate(90)"/>
                                            </svg>
                                            </button>
                                            <button v-if="fromToken && fromToken['symbol'] !== 'BNB'" class="btn-none mr-2" @click="copyAddressToken(fromToken)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 19.978 19.973">
                                                    <path id="Path_98593" data-name="Path 98593"
                                                          d="M8637.611,4765.643a3.844,3.844,0,0,1,.4-2.161,3.247,3.247,0,0,1,2.9-1.811c3.119-.029,6.238-.035,9.357,0a3.314,3.314,0,0,1,3.293,3.3q.05,5.165,0,10.331a3.354,3.354,0,0,1-3.3,3.3c-.223.009-.446,0-.684,0-.055.2-.1.381-.15.557a3.338,3.338,0,0,1-3.118,2.428c-3.132.03-6.265.037-9.4,0a3.309,3.309,0,0,1-3.273-3.283q-.056-4.678,0-9.357a3.382,3.382,0,0,1,3.38-3.311C8637.2,4765.641,8637.383,4765.643,8637.611,4765.643Zm2.043,0h.395q2.959,0,5.916,0a3.447,3.447,0,0,1,3.625,3.614v7.351c1.35.121,2-.463,2-1.734v-9.51a1.516,1.516,0,0,0-1.723-1.725h-8.535C8640.064,4763.639,8639.467,4764.336,8639.654,4765.642Z"
                                                          transform="translate(-8633.608 -4761.647)"
                                                          fill="#c2c2c2"/>
                                                </svg>
                                            </button>
                                            <button v-if="fromToken && fromToken['symbol'] !== 'BNB'" class="btn-none" @click="addToken(fromToken)">
                                                <img src="@/assets/images/icon-metamask.svg" alt="">
                                            </button>
                                        </div>
                                        <span class="dis-value">{{$t('swap.0007')}}: {{ fromBalance ? formatDecimal(fromBalance, 6) : '0.00' }}</span>
                                    </div>
                                    <div class="inputValue">
                                        <label>
                                            <div class="token-input">
                                                <input class="amount-input" title="Token Amount" autocomplete="off"
                                                       autocorrect="off" type="number" @change="changeAmountFromSwap()"
                                                       v-model="amountFromSwap">
                                            </div>
                                            <div class="percent">
                                                <button @click="caculateAmountSwap(25)" class="sc-a8cf5f33-0 kqMeal" scale="xs" style="text-transform: uppercase;">25%</button>
                                                <button @click="caculateAmountSwap(50)" class="sc-a8cf5f33-0 kqMeal" scale="xs" style="text-transform: uppercase;">50%</button>
                                                <button @click="caculateAmountSwap(75)" class="sc-a8cf5f33-0 kqMeal" scale="xs" style="text-transform: uppercase;">75%</button>
                                                <button @click="caculateAmountSwap(100)" class="sc-a8cf5f33-0 kqMeal" scale="xs" style="text-transform: uppercase;">{{$t('swap.0008')}}</button>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div class="styledown mt-3 mb-5">
                                    <button class="btn-none" @click="changeFromToToken()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                                        <g id="Group_27738" data-name="Group 27738" transform="translate(-1378 -465)">
                                            <circle id="Ellipse_2271" data-name="Ellipse 2271" cx="18.5" cy="18.5" r="18.5" transform="translate(1378 465)" fill="#08638f"/>
                                            <g id="Group_27736" data-name="Group 27736" transform="translate(-2883.747 5605.184) rotate(-90)">
                                            <path id="Path_99122" data-name="Path 99122" d="M5111.951,4280.568a6.229,6.229,0,0,1,6.127-6.939c.329-.013.66-.019.988,0s.417-.118.41-.425c-.016-.755,0-1.51,0-2.36l5.65,4.646-5.61,4.621c-.016-.137-.035-.227-.036-.317,0-.684-.005-1.368,0-2.053,0-.218-.041-.364-.3-.379a7.829,7.829,0,0,0-5.646,1.541,14.5,14.5,0,0,0-1.2,1.208C5112.206,4280.233,5112.108,4280.375,5111.951,4280.568Z" fill="#fff"/>
                                            <path id="Path_99123" data-name="Path 99123" d="M5200.515,4400.821l-5.643-4.644,5.641-4.644v2.231c0,.534,0,.523.551.547a8.518,8.518,0,0,0,3.725-.549,7.17,7.17,0,0,0,2.846-2.157c.111-.137.221-.276.333-.414.006-.007.021-.007.07-.021a6.425,6.425,0,0,1-.7,3.587,6.14,6.14,0,0,1-5.339,3.281,9.924,9.924,0,0,1-1.064,0c-.31-.015-.431.1-.424.416C5200.526,4399.213,5200.515,4399.969,5200.515,4400.821Z" transform="translate(-76.624 -111.17)" fill="#fff"/>
                                            </g>
                                        </g>
                                        </svg>


                                    </button>
                                </div>
                                <div class="swap-currency mb-3">
                                    <div class=" mb-2 d-flex align-items-center justify-content-between">
                                        <div class="d-flex">
                                            <button class="btn-none d-flex align-items-center mr-2"
                                                    @click="manageModal = true; selectedSwap = 2">
                                                <img v-if="toToken" width="32" :src="toToken['avatar']" alt="">
                                                <img v-else width="32" src="@/assets/images/push.svg" alt="">
                                                <span
                                                    class="fw-bold fs-16 ml-2 mr-2">{{ toToken ? toToken['symbol'] : '--' }}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10.011"
                                                     viewBox="0 0 17.023 10.011">
                                                    <path id="Path_98590" data-name="Path 98590"
                                                          d="M8156.554,5372.3c-.2-.175-.361-.3-.5-.442q-2.906-2.9-5.807-5.8a.9.9,0,0,1-.305-1.07,2.331,2.331,0,0,1,1.1-1.107.89.89,0,0,1,1.055.279q1.536,1.545,3.081,3.082l4.265,4.265a.977.977,0,0,1,0,1.618l-7.271,7.273a.987.987,0,0,1-1.621.007c-.12-.119-.24-.236-.356-.358a.927.927,0,0,1,.007-1.428c.842-.85,1.689-1.692,2.535-2.538q1.775-1.775,3.552-3.55C8156.345,5372.459,8156.418,5372.408,8156.554,5372.3Z"
                                                          transform="translate(5380.816 -8149.856) rotate(90)"/>
                                                </svg>
                                            </button>
                                            <button v-if="toToken && toToken['symbol'] !== 'BNB'" class="btn-none mr-2" @click="copyAddressToken(toToken)">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 19.978 19.973">
                                                    <path id="Path_98593" data-name="Path 98593"
                                                          d="M8637.611,4765.643a3.844,3.844,0,0,1,.4-2.161,3.247,3.247,0,0,1,2.9-1.811c3.119-.029,6.238-.035,9.357,0a3.314,3.314,0,0,1,3.293,3.3q.05,5.165,0,10.331a3.354,3.354,0,0,1-3.3,3.3c-.223.009-.446,0-.684,0-.055.2-.1.381-.15.557a3.338,3.338,0,0,1-3.118,2.428c-3.132.03-6.265.037-9.4,0a3.309,3.309,0,0,1-3.273-3.283q-.056-4.678,0-9.357a3.382,3.382,0,0,1,3.38-3.311C8637.2,4765.641,8637.383,4765.643,8637.611,4765.643Zm2.043,0h.395q2.959,0,5.916,0a3.447,3.447,0,0,1,3.625,3.614v7.351c1.35.121,2-.463,2-1.734v-9.51a1.516,1.516,0,0,0-1.723-1.725h-8.535C8640.064,4763.639,8639.467,4764.336,8639.654,4765.642Z"
                                                          transform="translate(-8633.608 -4761.647)"
                                                          fill="#c2c2c2"/>
                                                </svg>
                                            </button>
                                            <button v-if="toToken && toToken['symbol'] !== 'BNB'" class="btn-none" @click="addToken(toToken)">
                                                <img src="@/assets/images/icon-metamask.svg" alt="">
                                            </button>
                                        </div>
                                        <span class="dis-value">{{$t('swap.0008')}}: {{toBalance ? formatDecimal(toBalance, 6) : '0.00'}}</span>
                                    </div>
                                    <div class="inputValue">
                                        <label>
                                            <div class="token-input">
                                                <input class="amount-input" readonly title="Token Amount" autocomplete="off"
                                                       autocorrect="off" type="number" @change="changeAmountToSwap()"
                                                       v-model="amountToSwap">
                                            </div>
                                            <div class="percentcheck">
                                            </div>
                                            
                                        </label>
                                    </div>
                                </div>

                                <div class="tolerance mb-2">
                                    <div class="d-flex">
                                        <span class="fs-16 mr-2">{{$t('swap.0009')}}</span>
                                        <button class="btn-none" @click="settingModal = true;">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11.773" height="11.781"
                                                 viewBox="0 0 11.773 11.781">
                                                <g id="Group_27021" data-name="Group 27021"
                                                   transform="translate(-8235.939 -4467.741)">
                                                    <g id="Group_27020" data-name="Group 27020"
                                                       transform="translate(8235.939 4467.741)">
                                                        <path id="Path_98594" data-name="Path 98594"
                                                              d="M8242.649,4525.884l2.561,2.45c-.64.633-1.252,1.237-1.861,1.844-1,.992-1.985,1.989-2.983,2.979a1.71,1.71,0,0,1-.423.31c-1.03.518-2.066,1.025-3.1,1.539a.617.617,0,0,1-.61.012.58.58,0,0,1-.215-.805c.479-.976.967-1.948,1.44-2.926a2.861,2.861,0,0,1,.576-.8q2.247-2.232,4.48-4.478C8242.571,4525.954,8242.631,4525.9,8242.649,4525.884Z"
                                                              transform="translate(-8235.939 -4523.314)"
                                                              fill="#34a759"/>
                                                        <path id="Path_98595" data-name="Path 98595"
                                                              d="M8410.325,4471.833l-2.458-2.458c.407-.4.81-.818,1.242-1.206a1.754,1.754,0,0,1,2.338.035,1.716,1.716,0,0,1,.225,2.354A15.477,15.477,0,0,1,8410.325,4471.833Z"
                                                              transform="translate(-8400.268 -4467.741)"
                                                              fill="#34a759"/>
                                                    </g>
                                                    <path id="Path_98596" data-name="Path 98596"
                                                          d="M8359.034,4708.937c-.869,0-1.738,0-2.607,0a.573.573,0,0,1-.607-.688.563.563,0,0,1,.466-.468,1.342,1.342,0,0,1,.2-.011q2.563,0,5.127,0c.408,0,.651.2.669.546a.561.561,0,0,1-.593.62c-.641.008-1.282,0-1.923,0Z"
                                                          transform="translate(-114.573 -229.417)" fill="#34a759"/>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    <span class="sale fs-20 fw-bold">{{ slippage }}%</span>
                                </div>
                                <div class="row" v-if="!this.account">
                                    <div class="col-12">
                                        <button class="linear-blue btn-blue btn-bluebig w-100 fill" @click="connectWallet()">
                                            {{$t('common.0001')}}
                                            <img
                                                src="@/assets/images/dot-l-white.svg"
                                                class="ml-2" alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div class="row" v-else>
                                    <div class="col-12" v-if="error">
                                        <button class="linear-blue btn-blue btn-bluebig w-100 fill" disabled>
                                            {{$t('swap.0010')}}
                                        </button>
                                        <button class="linear-blue btn-blue btn-bluebig w-100 fill" disabled>
                                            {{$t('swap.0011')}} {{ fromToken ? fromToken['symbol'] : '-' }} {{$t('swap.0007')}}
                                        </button>
                                    </div>
                                    <div class="col-12" v-else-if="approveSwap">
                                        <button @click="approveToken()"
                                                class="linear-blue btn-blue btn-bluebig w-100 fill"
                                                :disabled="!approveSwap">
                                            {{$t('swap.0012')}} {{ fromToken ? fromToken['symbol'] : '' }}
                                        </button>
                                    </div>
                                    <div class="col-12" v-else-if="!approveSwap && !error">
                                        <button class="linear-blue btn-blue btn-bluebig w-100 fill" @click="swapToken()">
                                            {{$t('navbar.0005')}}
                                            <img src="@/assets/images/dot-l-white.svg" class="ml-2" alt="">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span class="decor7"> <img src="@/assets/images/decor1.png"></span>
                    </div>
                    <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
                </div>
            </div>
        </div>
    </div>
    <!-- ----Modal--- -->
    <b-modal centered hide-footer hide-header hide-header-close v-model='settingModal'>
        <div class="modal-content">
            <div class="modal-header">
                <button @click="settingModal = false"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.786" height="26.782"
                         viewBox="0 0 26.786 26.782">
                        <g id="Group_24168" data-name="Group 24168" transform="translate(-4960.994 -447.015)"
                           opacity="0.23">
                            <path id="Path_1006" data-name="Path 1006"
                                  d="M4960.994,460.4a13.393,13.393,0,1,1,13.382,13.393A13.391,13.391,0,0,1,4960.994,460.4Zm13.405,11.306a11.3,11.3,0,1,0-11.32-11.294A11.272,11.272,0,0,0,4974.4,471.711Z"/>
                            <path id="Path_1007" data-name="Path 1007"
                                  d="M5068.889,554.836c-.192-.208-.3-.332-.415-.448-.818-.819-1.641-1.634-2.456-2.456a1.068,1.068,0,0,1-.123-1.559,1.056,1.056,0,0,1,1.59.1c.926.927,1.841,1.864,2.789,2.826.15-.137.264-.234.369-.339.831-.826,1.657-1.657,2.49-2.481a1.05,1.05,0,1,1,1.454,1.482c-.816.821-1.638,1.636-2.456,2.455-.106.107-.207.22-.345.367l2.454,2.428c.149.147.3.292.442.445a1.037,1.037,0,1,1-1.464,1.466c-.847-.829-1.68-1.673-2.52-2.509-.117-.116-.239-.228-.451-.43-.174.214-.316.421-.489.6q-1.147,1.161-2.31,2.306A1.041,1.041,0,1,1,5066,557.6q1.219-1.236,2.458-2.453A3.507,3.507,0,0,1,5068.889,554.836Z"
                                  transform="translate(-95.859 -94.416)"/>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="modal-body text-center">
                <h3>{{$t('common.0044')}}</h3>
                <div class="clearfix mb-4">
                    <p class="f-Nunito fs-18 text-left">{{$t('swap.0013')}} (GWEI)</p>
                    <ul class="nav switch-item m-b-20">
                        <li><a href="javascript:" data-toggle="tab" @click="selectTransaction(1);"
                               aria-expanded="true" :class="selectedTransaction == 1 ? 'active' : ''">{{$t('swap.0014')}}</a>
                        </li>
                        <li><a href="javascript:" data-toggle="tab" @click="selectTransaction(2);"
                               aria-expanded="false" :class="selectedTransaction == 2 ? 'active' : ''">{{$t('swap.0015')}}
                            (5)</a>
                        </li>
                        <li><a href="javascript:" data-toggle="tab" @click="selectTransaction(3);"
                               aria-expanded="false" :class="selectedTransaction == 3 ? 'active' : ''">{{$t('swap.0016')}} (6)</a>
                        </li>
                        <li><a href="javascript:" data-toggle="tab" @click="selectTransaction(4);"
                               aria-expanded="false" :class="selectedTransaction == 4 ? 'active' : ''">{{$t('swap.0017')}}
                            (7)</a>
                        </li>
                    </ul>
                </div>
                <div class="clearfix mb-4">
                    <p class="f-Nunito fs-18 text-left">{{$t('swap.0009')}}</p>
                    <ul class="nav switch-item m-b-20">
                        <li>
                            <a href="javascript:" @click="selectSlippage('0.1')" data-toggle="tab"
                               aria-expanded="false" :class="slippage == 0.1 ? 'active' : ''">0.1%</a>
                        </li>
                        <li><a href="javascript:" @click="selectSlippage('0.5')" data-toggle="tab"
                               aria-expanded="false" :class="slippage == 0.5 ? 'active' : ''">0.5%</a>
                        </li>
                        <li><a href="javascript:" @click="selectSlippage('1.0')" data-toggle="tab"
                               aria-expanded="false" :class="slippage == 1 ? 'active' : ''">1.0%</a>
                        </li>
                        <li><input type="text" @blur="changeSlippage()" v-model="slippage" placeholder="0.50"
                                   class="" value="" style="width: 100px;"> <span
                            class="fs-16 fw-bold f-Nunito"> % </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </b-modal>
    <b-modal centered hide-footer hide-header hide-header-close v-model='manageModal'>
        <div class="modal-content ">
            <div class="modal-header">
                <button @click="closeManageTokenModal()"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26.786" height="26.782"
                        viewBox="0 0 26.786 26.782">
                    <g id="Group_24168" data-name="Group 24168" transform="translate(-4960.994 -447.015)"
                        opacity="0.23">
                        <path id="Path_1006" data-name="Path 1006"
                                d="M4960.994,460.4a13.393,13.393,0,1,1,13.382,13.393A13.391,13.391,0,0,1,4960.994,460.4Zm13.405,11.306a11.3,11.3,0,1,0-11.32-11.294A11.272,11.272,0,0,0,4974.4,471.711Z"/>
                        <path id="Path_1007" data-name="Path 1007"
                                d="M5068.889,554.836c-.192-.208-.3-.332-.415-.448-.818-.819-1.641-1.634-2.456-2.456a1.068,1.068,0,0,1-.123-1.559,1.056,1.056,0,0,1,1.59.1c.926.927,1.841,1.864,2.789,2.826.15-.137.264-.234.369-.339.831-.826,1.657-1.657,2.49-2.481a1.05,1.05,0,1,1,1.454,1.482c-.816.821-1.638,1.636-2.456,2.455-.106.107-.207.22-.345.367l2.454,2.428c.149.147.3.292.442.445a1.037,1.037,0,1,1-1.464,1.466c-.847-.829-1.68-1.673-2.52-2.509-.117-.116-.239-.228-.451-.43-.174.214-.316.421-.489.6q-1.147,1.161-2.31,2.306A1.041,1.041,0,1,1,5066,557.6q1.219-1.236,2.458-2.453A3.507,3.507,0,0,1,5068.889,554.836Z"
                                transform="translate(-95.859 -94.416)"/>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="modal-body text-center">

                <h3>{{$t('swap.0018')}}</h3>
                <p class="ext-left"><input type="text" @input="seachTokenAddress()" v-model="tokenAddress"
                class="form-control" :placeholder="$t('swap.0027')"></p>

                <div class="clearfix mb-4">
                    <p class="f-Nunito fs-18 text-left fw-bold">{{$t('swap.0019')}}</p>
                    <ul class="nav switch-item m-b-20">
                        <li class="pointer" v-for="(itemx, index) in listMainTokenSwap.slice(0, 3)" :key="index"><a href="javascript:" @click="selectSwapToken(itemx)">
                            <img :src="itemx['avatar']" alt="">
                            {{itemx['symbol']}}</a>
                        </li>
                    </ul>
                    <div class="clearfix scrollbar token-select mt-4" id="style-3">
                        <ul class="list force-overflow">
                            <li v-for="(item, idx) in objectData.slice(0, 80)" :key="idx" class="token-hover pointer">
                                <div class="d-flex align-items-center" @click="selectSwapToken(item)">
                                    <img width="32" :src="item ? item['logoURI'] : ''" class="mr-2" alt="">
                                    <div class="clearfix text-left">
                                            <span class="d-block fw-bold f-Nunito fs-16">{{ item ? item['symbol'] : '' }}</span>
                                        <span class="f-Nunito fs-14">{{ item ? item['name'] : '' }}</span>
                                    </div>
                                </div>
                                <span class="d-block f-Nunito fs-16" v-if="item && item['total_supply'] > 0">
                                    <img src="@/assets/images/ic-checked.svg" class="mr-2" alt=""/>
                                    <span class="textActive f-Nunito" >{{$t('swap.0020')}}</span>
                                </span>
                            </li>
                        </ul>

                    </div>
                    <a href="javascript:" class="linear-blue btn-blue btn-bluebig w-75 fill" @click="closeManageTokenModal(); manageTokenModal = true">
                        {{$t('swap.0021')}}
                        <img alt="" src="@/assets/images/dot-l-white.svg" class="ml-3">
                    </a>
                </div>
            </div>
        </div>
    </b-modal>
    <!-- --------Manage token modal----- -->
    <b-modal centered hide-footer hide-header hide-header-close v-model='manageTokenModal'>
        <div class="modal-content ">
            <div class="modal-header">
                <button @click="manageTokenModal = false"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="26.786" height="26.782"
                        viewBox="0 0 26.786 26.782">
                    <g id="Group_24168" data-name="Group 24168" transform="translate(-4960.994 -447.015)"
                        opacity="0.23">
                        <path id="Path_1006" data-name="Path 1006"
                                d="M4960.994,460.4a13.393,13.393,0,1,1,13.382,13.393A13.391,13.391,0,0,1,4960.994,460.4Zm13.405,11.306a11.3,11.3,0,1,0-11.32-11.294A11.272,11.272,0,0,0,4974.4,471.711Z"/>
                        <path id="Path_1007" data-name="Path 1007"
                                d="M5068.889,554.836c-.192-.208-.3-.332-.415-.448-.818-.819-1.641-1.634-2.456-2.456a1.068,1.068,0,0,1-.123-1.559,1.056,1.056,0,0,1,1.59.1c.926.927,1.841,1.864,2.789,2.826.15-.137.264-.234.369-.339.831-.826,1.657-1.657,2.49-2.481a1.05,1.05,0,1,1,1.454,1.482c-.816.821-1.638,1.636-2.456,2.455-.106.107-.207.22-.345.367l2.454,2.428c.149.147.3.292.442.445a1.037,1.037,0,1,1-1.464,1.466c-.847-.829-1.68-1.673-2.52-2.509-.117-.116-.239-.228-.451-.43-.174.214-.316.421-.489.6q-1.147,1.161-2.31,2.306A1.041,1.041,0,1,1,5066,557.6q1.219-1.236,2.458-2.453A3.507,3.507,0,0,1,5068.889,554.836Z"
                                transform="translate(-95.859 -94.416)"/>
                    </g>
                </svg>
            </button>
                <button @click="manageTokenModal = false; manageModal = true"
                        type="button"
                        class="back ml-3"
                        data-dismiss="modal"
                        aria-label="Close"
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="23.513" height="19.567" viewBox="0 0 23.513 19.567">
                <path id="Path_98619" data-name="Path 98619" d="M17.07,11.62H1.574C.488,11.62,0,11.138,0,10.06c0-.221,0-.441,0-.661A1.288,1.288,0,0,1,1.44,7.945c1.138,0,2.276,0,3.415,0h12.13c-.143-.152-.234-.255-.33-.352q-2.218-2.223-4.434-4.443a1.342,1.342,0,0,1,0-2.165c.173-.173.343-.349.519-.52a1.308,1.308,0,0,1,2.007.009q1.952,1.94,3.9,3.892Q20.8,6.532,22.97,8.7a1.346,1.346,0,0,1,0,2.161l-8.124,8.126a1.351,1.351,0,0,1-2.213,0c-.165-.164-.333-.325-.495-.492a1.273,1.273,0,0,1,0-1.97c1.286-1.293,2.582-2.576,3.873-3.863C16.339,12.343,16.668,12.019,17.07,11.62Z" transform="translate(23.513 19.567) rotate(180)" fill="#c3c3c3"/>
                </svg>
            </button>
        </div>
        <div class="modal-body text-center">

            <h3>{{$t('swap.0022')}}</h3>
            <div class="total-staking mb-3">
            <div class="tab w-100">
                <ul class="nav nav-blue m-b-20">
                    <li>
                        <a
                            href="javascript:"
                            @click="activeTabManage = '1'"
                            data-toggle="tab"
                            aria-expanded="true"
                            :class="activeTabManage == 1 ? 'active' : ''">
                            {{$t('swap.0023')}}
                        </a>
                    </li>
                    <li>
                        <a
                            href="javascript:"
                            @click="activeTabManage = '2'"
                            data-toggle="tab"
                            aria-expanded="false"
                            :class="activeTabManage == 2 ? 'active' : ''">
                            {{$t('common.0005')}}
                        </a>
                    </li>
                </ul>
            </div>
            </div>
            <p class="ext-left"><input v-if="activeTabManage == 2" type="text" v-model="searchTokenContract" @blur="getInfoToken()"
                class="form-control" :placeholder="$t('common.0039')"></p>
                <!-- ----tab content---- -->
                <div class="tab-content">
                <div
                    class="tab-pane fade"
                    id="token1"
                    :class="activeTabManage == 1 ? 'active show' : ''">
                    <div class="content">
                        <div class="clearfix settingSwap mt-3">
                        <ul class="list">
                            <li class="checkToken">
                                <div class="d-flex align-items-center p-sm-2" >
                                    <img width="32" src="@/assets/images/push.svg" class="mr-2" alt="">
                                    <div class="clearfix text-left">
                                    <span
                                        class="d-block fw-bold f-Nunito fs-16">{{$t('swap.0025')}}</span>
                                        <div class="tokenSetting">
                                            <div class="f-Nunito fs-14 mr-2">{{listExtend.length}} {{$t('common.0005')}} </div>
                                            <div class="image-setting" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
										<span class="switch switch-sm">
											<input type="checkbox" @change="changeManageToken()" v-model="enableExtend" class="switch" id="switch-sm1">
											<label for="switch-sm1">&nbsp;</label>
										</span>
                                </div>
                            </li>
                            <li class="checkToken">
                                <div class="d-flex align-items-center p-sm-2" >
                                    <img width="32" src="https://ipfs.io/ipfs/QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx" class="mr-2" alt="">
                                    <div class="clearfix text-left">
                                            <span
                                                class="d-block fw-bold f-Nunito fs-16">Coinmarketcap</span>
                                                <div class="tokenSetting">
                                                    <div class="f-Nunito fs-14 mr-2">{{listCMC.length}} {{$t('common.0005')}} </div>
                                                    <div class="image-setting"></div>
                                                </div>
                                    </div>
                                </div>
                                <div class="form-group">
										<span class="switch switch-sm">
											<input type="checkbox" @change="changeManageToken()" v-model="enableCMC" class="switch" id="switch-sm2">
											<label for="switch-sm2">&nbsp;</label>
										</span>
                                </div>
                            </li>
                            <li class="checkToken">
                                <div class="d-flex align-items-center p-sm-2" >
                                    <img width="32" src="https://assets.coingecko.com/coins/images/20673/thumb/QmPzxUCBJgBsTDnUGhnT1MhXXPi4xoCm2one622RJysx12.png" class="mr-2" alt="">
                                    <div class="clearfix text-left">
                                            <span
                                                class="d-block fw-bold f-Nunito fs-16">CoinGecko</span>
                                                <div class="tokenSetting">
                                                    <div class="f-Nunito fs-14 mr-2">{{listCoinGecko.length}} {{$t('common.0005')}} </div>
                                                    <div class="image-setting"></div>
                                                </div>
                                    </div>
                                </div>
                                <div class="form-group">
										<span class="switch switch-sm">
											<input type="checkbox" @change="changeManageToken()" v-model="enableCKC" class="switch" id="switch-sm3">
											<label for="switch-sm3">&nbsp;</label>
										</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
                    <div
                    class="tab-pane fade"
                    id="token2"
                    :class="activeTabManage == 2 ? 'active show' : ''">
                    <div class="panel-content">
                        <div class="content">
                            <div class="clearfix settingSwap mt-3">
                        <ul class="list" v-if="searchTokenData && searchTokenData['symbol']">
                            <li class="">
                                <div class="d-flex align-items-center p-sm-2">
                                    <img width="32" :src="searchTokenData && searchTokenData['avatar'] ? searchTokenData['avatar'] : ''" class="mr-2" alt="">
                                    <div class="clearfix text-left">
                                        <div>
                                        <span class="fw-bold f-Nunito fs-16">{{searchTokenData && searchTokenData['symbol'] ? searchTokenData['symbol'] : '--'}} </span>
                                        <span class="f-Nunito textCheck">{{searchTokenData && searchTokenData['name'] ? searchTokenData['name'] : '--'}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group" v-if="!imported || imported.length === 0 || !checkImportToken(searchTokenData)">
                                    <span @click="importToken(searchTokenData)" class="textActive f-Nunito" >{{$t('swap.0026')}}</span>
                                </div>
                                <div class="form-group" v-if="imported && imported.length > 0 && checkImportToken(searchTokenData)">
                                    <img src="@/assets/images/ic-checked.svg" class="mr-2" alt=""/>
                                    <span class="textActive f-Nunito" >{{$t('common.0004')}}</span>
                                </div>
                            </li>
                        </ul>
                        <ul class="list" v-else>
                            <li class="">
                                <img src="@/assets/images/icons/nodata.png" class="mr-2" alt=""/>
                            </li>
                        </ul>
                    </div>
                    <div >
                    <span class="import-token fw-bold f-Nunito">{{imported.length}} {{$t('swap.0026')}} {{$t('common.0005')}}</span>
                </div>
                </div>
                    </div>
                    </div>
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
import {mapGetters, mapState} from "vuex";
import axios from 'axios';
import Web3, {utils} from "web3";
import {settingsContract} from "@/utils/const";
import BigNumber from "@/utils/bignumber.min.js";
import {ethers} from "ethers";
import moment from "moment";
import Loading from "vue-loading-overlay";
import { $t } from '@/lang/i18n.js';
import _debounce from 'lodash/debounce';

export default {
    name: "index",
    components: {
        Loading
    },
    data() {
        return {
            enableSwapPush: true,
            activeTabManage: 1,
            loading: false,
            showLoading: false,
            fullPage: true,
            error: false,
            errorBalance: false,
            settingModal: false,
            manageModal: false,
            manageTokenModal: false,
            loadingMaintoken: false,
            showConfirmModal: false,
            showHistoryModal: false,
            showSelectCoinModal: false,
            showSettingModal: false,
            approveSwap: true,
            enableCMC: false,
            enableCKC: false,
            enableExtend: true,
            symbol: '',
            debounceDelay: 300,
            fromToken: {
                'avatar': '',
                'address': '',
                'decimal': '',
                'name': '',
                'symbol': '',
                'balance': '',
            },
            toToken: {
                'avatar': '',
                'address': '',
                'decimal': '',
                'name': '',
                'symbol': '',
                'balance': '',
            },
            isShow: false,
            fromBalance: 0,
            toBalance: 0,
            msgError: null,
            priceUsd: 1,
            selectedSwap: 1, //1: from, 2: to
            slippage: 0.5,
            selectedTransaction: 2,
            amountFromSwap: 0,
            amountToSwap: 0,
            priceFromToken: 0,
            percentBalance: 0,
            pricePool: null,
            index: 0,
            tokenAddress: '',
            listMainTokenSwap: [],
            transactions: [],
            swapInfo: {
                'spenderAddress': '',
                'toAddress': '',
                'input': '',
                'output': '',
                'adjustedOutput': '',
                'data': '',
            },
            listData: [],
            listDataImport: [],
            imported: [],
            objectData: [],
            listExtend: [],
            listCMC: [],
            listCoinGecko: [],
            scanSuccess: 1,
            timeScan: 0,
            searchTokenContract: '',
            searchTokenData: [],
        }
    },
    methods: {
        reloadRate() {
            this.getRate();
        },
        changeManageToken() {
            this.tokenAddress = '';
            this.searchTokenContract = '';
            this.listData = [];
            this.objectData = [];
            let platform = 'bsc';
            if (this.imported && this.imported.length > 0) {
                let userImported = JSON.parse(localStorage.getItem('user_imported_'+ platform));
                this.listData = [...this.listData, ...userImported];
                this.objectData = [...new Set(this.listData)];
            }
            if (this.enableExtend) {
                this.listData = [...this.listData, ...this.listExtend];
                this.objectData = [...new Set(this.listData)];
            }
            if (this.enableCMC) {
                this.listData = [...this.listData, ...this.listCMC];
                this.objectData = [...new Set(this.listData)];
            }
            if (this.enableCKC) {
                this.listData = [...this.listData, ...this.listCoinGecko];
                this.objectData = [...new Set(this.listData)];
            }
        },
        closeManageTokenModal() {
            this.manageModal = false;
            this.tokenAddress = '';
            this.objectData = this.listData;
        },
        selectSymbol(index) {
            this.index = index;
            this.showSelectCoinModal = true;
        },
        changeFromToToken() {
            const fromToken = this.fromToken;
            const toToken = this.toToken;
            this.fromToken = toToken;
            this.toToken = fromToken;
            this.amountFromSwap = 0;
            this.amountToSwap = 0;
            this.getTokenBalance();
        },
        caculateAmountSwap: _debounce(function(percent) {
            if (this.fromBalance == 0) {
                return;
            }
            this.amountFromSwap = this.formatNumber(this.fromBalance * percent / 100, 4);
            if (this.fromToken && this.toToken) {
                this.amountToSwap = 0;
                this.getRate();
            }
        }, 300),
        changeAmountFromSwap: _debounce(function() {
            this.amountFromSwap = this.amountFromSwap > 0 ? this.amountFromSwap : 0;
            this.errorBalance = false;
            if (this.amountFromSwap > this.fromBalance) {
                this.errorBalance = true;
            }
            if (this.fromToken && this.toToken) {
                this.amountToSwap = 0;
                this.getRate();
            }
        }, 300),
        changeAmountToSwap: _debounce(function() {
            this.amountToSwap = this.amountToSwap > 0 ? this.amountToSwap : 0;
            this.errorBalance = false;
            if (this.amountToSwap > this.toBalance) {
                this.errorBalance = true;
            }
            if (this.fromToken && this.toToken) {
                this.amountFromSwap = 0;
                this.getRate();
            }
        }, 300),
        checkSwap() {
            if (this.amountFromSwap > this.fromBalance) {
                this.errorBalance = true;
                return;
            }
            this.showConfirmModal = true;
        },
        changeSlippage: _debounce(function() {
            this.slippage = parseFloat(this.slippage) || 0;
            this.getRate();
        }, 300),
        selectSlippage: _debounce(function(percent) {
            const percentValue = parseFloat(percent);
            this.slippage = percentValue;
            this.getRate();
        }, 300),
        selectTransaction(method) {
            this.selectedTransaction = method;
        },
        selectSwapToken(item) {
            item['symbol'] = item['symbol'].replace("$", "");
            if (item['logoURI']) {
                item['avatar'] = item['logoURI'];
            }
            if (this.selectedSwap == 1) {
                const from = this.fromToken;
                this.fromToken = item;
                if (this.toToken && this.toToken['address'] === this.fromToken['address'] && from) {
                    this.toToken = from;
                    this.toBalance = 0;
                }
            } else {
                const to = this.toToken;
                this.toToken = item;
                if (this.fromToken && this.fromToken['address'] === this.toToken['address'] && to) {
                    this.fromToken = to;
                    this.fromBalance = 0;
                }
            }
            this.amountFromSwap = 0;
            this.amountToSwap = 0;
            this.closeManageTokenModal();
            this.getTokenBalance();
        },
        onCopy() {
            this.$toaster.success($t('swap.success.0001'))
        },
        copyAddressToken(token) {
            if (!token || !token['address'] || token['address'].trim() === '') {
                return false;
            }
            let tempInput = document.createElement("input");
            tempInput.value = token['address'];
            document.body.appendChild(tempInput);
            tempInput.select();
            tempInput.focus();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            this.$toaster.success($t('swap.success.0001'))
        },
        onError() {
            this.$toaster.error($t('swap.error.0002'))
        },
        connectWallet() {
            this.$store.dispatch('connect');
        },
        momentTimeHistory(date) {
            return moment(date).format('HH:mm D/M/Y');
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
        seachTokenAddress() {
            let address = this.tokenAddress.trim().toLowerCase();
            if (address.trim() === '') {
                this.objectData = this.listData;
                return;
            }
            this.objectData = [];
            for (let i = 0; i < this.listData.length; i++) {
                if (this.findText(this.listData[i]['name'], address) || this.findText(this.listData[i]['symbol'], address) || this.findText(this.listData[i]['address'], address)) {
                    this.objectData.push(this.listData[i]);
                }
            }
        },
        findText(arr, text) {
            var regex = new RegExp(text, 'i')
            return arr.match(regex) ? arr.match(regex)[0] : null
        },
        async getListMainTokenSwap() {
            if (this.loadingMaintoken) {
                return;
            }
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            if (platform !== 'bsc') {
                // error exchange
                this.$toaster.error('Not support ' + platform);
                return;
            }
            const headers = {
                'Content-Type': 'application/json',
            }
            // let network = this.exchange['network'];
            // let platform = this.exchange['platform'];
            let userAccount = JSON.parse(localStorage.getItem('user'));
            if (this.account) {
                headers['Authorization'] = userAccount['token'];
            }
            let baseUrl = `api/token/listMainTokenSwap`;
            let url = baseUrl + `?network=${network}&platform=${platform}`;
            this.$store.commit("setPopupProcessing", true);
            this.listMainTokenSwap = [];
            this.loadingMaintoken = true;
            await axios.get(url, {
                headers: headers
            }).then(res => {
                if (res.data && res.data.data) {
                    this.listMainTokenSwap = res['data']['data'] || [];
                    if (this.listMainTokenSwap) {
                        this.listMainTokenSwap.map(v => {
                            v['symbol'] = v['symbol'].replace("$", "");
                            if (v.symbol === 'BNB') {
                                this.fromToken = v;
                                this.checkAllowance();
                            }
                            if (v.symbol.toUpperCase() === 'USDT') {
                                this.toToken = v;
                            }
                        })
                        setTimeout(() => {
                            this.getTokenBalance();
                        }, 500);
                    }
                }
                this.loadingMaintoken = false;
                this.$store.commit("setPopupProcessing", false)
            }, () => {
                //Errror load api
                this.listMainTokenSwap = [];
                this.loadingMaintoken = false;
                this.$store.commit("setPopupProcessing", false)
            });
        },

        async checkAllowance() {
            this.approveSwap = true;
            if (this.fromToken['symbol'].toLowerCase() === 'bnb') {
                this.approveSwap = false;
                return;
            }
            const contract_address = this.fromToken['address'];
            if (!contract_address) return;
            const web3 = new Web3(window.ethereum);
            if (!this.swapInfo.spenderAddress) return;
            const token_address = this.swapInfo.spenderAddress;
            const tokenAllowance = new web3.eth.Contract(settingsContract['ABI_TOKEN'], contract_address)
            const address = this.account;
            if (!this.account) return;
            await tokenAllowance.methods.allowance(address, token_address).call().then(
                resp => {
                    if (resp && resp > 0) {
                        this.approveSwap = false;
                    }
                }
            );
        },

        async approveToken() {
            //check connect
            if (this.fromToken['symbol'].toLowerCase() === 'bnb') {
                this.approveSwap = false;
                return;
            }
            const contract_address = this.fromToken['address'];
            if (!contract_address) return;
            let amountTokenRequired = utils.randomHex(32).toString();
            let web3 = new Web3(window.ethereum);
            const tokenContract = new web3.eth.Contract(settingsContract['ABI_TOKEN'], contract_address)
            // modal processing
            if (!this.account) return;
            const isProduction = process.env.NODE_APP_ENV === 'production';
            let obj = {
                'from': this.account,
            };
            if (this.exchange['platform'] === 'polygon') {
                // get max fees from gas station
                let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                try {
                    const {data} = await axios({
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
                let approveToken = await tokenContract.methods.approve(this.swapInfo.spenderAddress, amountTokenRequired).send(obj).on('transactionHash', function (hash) {
                    console.log("Please wait a minute to complete your transaction!");
                    // alert("Please wait a minute to complete your transaction!");
                }).on('confirmation', function (confirmationNumber, receipt) {
                }).on('receipt', function (receipt) {
                }).on('error', function (error, receipt) {
                    // alert("Error");
                    console.log("error", error, receipt);
                });
                this.$store.commit("setPopupWallet", false);
                if (approveToken.status) {
                    // modal success
                    this.$toaster.success($t('swap.success.0002'))
                    this.approveSwap = false;
                } else {
                    // modal error
                    this.$store.commit("setPopupError", {
                        isShow: true,
                        message: ""
                    });
                    console.log("error", approveToken);
                }
            } catch (e) {
                this.$store.commit("setPopupWallet", false);
            }

        },

        importToken(item) {
            if (!item || !item['symbol']) return;
            let platform = 'bsc';
            let userImported = JSON.parse(localStorage.getItem('user_imported_'+ platform));
            let array_raw = [];
            let array_symbols = [];
            if (!userImported || userImported.length === 0) {
                array_raw.push(item);
                array_symbols.push(item['symbol']);
                this.imported = [...new Set(array_symbols)];
                localStorage.setItem('user_imported_'+ platform, JSON.stringify(array_raw))
                return;
            }

            array_raw = userImported;
            for (let i = 0; i < userImported.length ; i++) {
                if (userImported[i] && userImported[i]['symbol']) {
                    array_symbols.push(userImported[i]['symbol']);
                    this.imported = [...new Set(array_symbols)];
                }
            }
            if (array_symbols && array_symbols.length > 0 && array_symbols[item['symbol']]) {
                return false;
            } else {
                array_raw.push(item);
                localStorage.setItem('user_imported_'+ platform, JSON.stringify(array_raw))
            }
        },

        checkImportToken(item) {
            if (!item || !this.imported || this.imported.length === 0) return false;
            return this.imported.indexOf(item['symbol']) !== -1;
        },

        async addToken(token) {
            if (!token || !token['address'] || token['address'].trim() === '') {
                return false;
            }
            try {
                // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                const tokenAddress = token['address'];
                let tokenSymbol = token['symbol'];
                tokenSymbol = tokenSymbol.replace("$", "");
                const tokenDecimals = token['decimals'];
                const tokenImage = token['avatar'];
                const wasAdded = await window.ethereum.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                            address: tokenAddress, // The address that the token is at.
                            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                            decimals: tokenDecimals, // The number of decimals in the token
                            image: tokenImage, // A string url of the token logo
                        },
                    },
                });

                if (wasAdded) {
                    this.$toaster.success($t('swap.success.0003'))
                } else {
                    this.$toaster.error($t('swap.error.0003'))
                }
            } catch (error) {
                console.log(error);
            }
        },

        async swapToken() {
            if (!this.swapInfo.data || this.swapInfo.data.trim() ==='') {
                this.$toaster.error($t('swap.error.0001'))
                return;
            }
            if (!this.account) {
                this.$toaster.error($t('swap.error.0004'))
                return;
            }
            if(!this.enableSwapPush) {
                if(this.fromToken['symbol'].trim().toLowerCase() == "push" || 
                   this.toToken['symbol'].trim().toLowerCase() == "push") {
                    this.$toaster.warning('Thanks you! Pair PUSH will open at 04/17/2023')
                    return;
                }
            }
            
            this.$store.commit("setPopupWallet", true);
            try {
                const web3 = new Web3(window.ethereum);
                let gasPrice = await web3.eth.getGasPrice();
                let nonce = await web3.eth.getTransactionCount(this.account, "pending");
                gasPrice = web3.utils.toHex(gasPrice);
                nonce = web3.utils.toHex(nonce);
                let gas = web3.utils.toHex(1000000);
                let chainId = await web3.eth.getChainId();
                chainId = web3.utils.toHex(chainId);

                let sellTokenAddress = this.fromToken['address'].trim().toLowerCase();
                let amount = 0;
                if (sellTokenAddress === 'bnb' || this.fromToken['symbol'] === 'BNB') {
                    let decimals = 18;
                    amount = parseFloat(this.amountFromSwap) || 0;
                    if (amount <= 0) {
                        this.$store.commit("setPopupWallet", false);
                        this.$toaster.error($t('swap.error.0005'))
                        return;
                    }
                    amount = parseFloat(amount.toFixed(decimals));
                    amount = (new BigNumber(amount)).times((new BigNumber(10)).pow(decimals)).toFixed();
                }

                amount = web3.utils.toHex(amount);

                let transactionParameters = {
                    nonce: nonce,
                    gasPrice: gasPrice,
                    gas: gas,
                    to: this.swapInfo.toAddress,
                    from: this.account,
                    value: amount,
                    data: this.swapInfo.data,
                    chainId: chainId
                };

                const txHash = await window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                }).then(tx => {
                    this.scanSuccess = 0;
                    this.timeScan = 0;
                    let _this = this;
                    let transactionInterval = setInterval(function () {
                        _this.checkTransaction(tx);
                        if (_this.scanSuccess || _this.timeScan >= 12) {
                            clearInterval(transactionInterval);
                            _this.timeScan = 0;
                            _this.$store.commit("setPopupWallet", false);
                            if (_this.scanSuccess === 0) {
                                _this.$toaster.error($t('swap.error.0006'))
                            }
                        }
                    }, 2000);
                }).catch(e => {
                    this.$store.commit("setPopupWallet", false);
                    console.log('error', e);
                });
            } catch (ex) {
                console.log(ex);
                this.$store.commit("setPopupWallet", false);
            }
        },

        async checkTransaction(txid) {
            this.timeScan = this.timeScan + 2;
            if (this.scanSuccess === 1) return;
            await window.ethereum.request({
                method: 'eth_getTransactionReceipt',
                params: [txid],
            }).then(resp => {
                if (resp && resp.status) {
                    if (resp.status === '0x0' || resp.status === '0x1') {
                        this.scanSuccess = 1;
                        this.$toaster.success($t('swap.success.0002'))
                        this.$store.commit("setPopupWallet", false);
                        if (resp.status === '0x1') {
                            this.amountFromSwap = 0;
                            this.amountToSwap = 0;
                            this.getTokenBalance();
                        }
                    }
                }
            }).catch(e => {
                this.$toaster.error($t('swap.error.0007'))
                console.log('error', e);
            });
        },

        async getInfoToken() {
            this.searchTokenData = []
            const headers = {
                'Content-Type': 'application/json',
            }
            let formData = new FormData();
            // let network = this.exchange['network'];
            // let platform = this.exchange['platform'];
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            formData.append('network', network);
            formData.append('platform', platform);
            let contract_address = this.searchTokenContract.trim();
            if (!contract_address || contract_address === '') {
                // error contract address
                return;
            }
            formData.append('contract_address', contract_address);
            this.showLoading = true;
            try {
                await axios.post(`api/token/getInfo`, formData, {
                    headers: headers
                }).then(res => {
                    this.showLoading = false;
                    if (res.data.data) {
                        this.searchTokenData = res.data.data;
                    }
                }).catch(err => {
                    this.showLoading = false;
                    this.searchTokenData = []
                })
            } catch (e) {
                this.showLoading = false;
                this.searchTokenData = []
            }

        },
        getRate() {
            if (!this.fromToken['address'] && !this.toToken['address']) {
                console.log('invalid param address from & to');
                return;
            }
            if (!this.amountFromSwap && !this.amountToSwap) {
                console.log('invalid param amount from & to');
                return;
            }
            let inputType = '';
            let sellTokenAddress = this.fromToken.address;
            if (this.fromToken.symbol.toLowerCase() === 'bnb') {
                sellTokenAddress = 'bnb';
            }
            let sellTokenDecimals = this.fromToken.decimals;
            let sellTokenAmount = parseFloat(this.amountFromSwap) || 0;
            if (sellTokenAddress === 'bnb') {
                sellTokenDecimals = 18;
            }

            let buyTokenAddress = this.toToken.address;
            if (this.toToken.symbol.toLowerCase() === 'bnb') {
                buyTokenAddress = 'bnb';
            }
            let buyTokenDecimals = parseInt(this.toToken.decimals);
            let buyTokenAmount = parseFloat(this.amountToSwap) || 0;
            if (sellTokenAddress === 'bnb') {
                buyTokenDecimals = 18;
            }

            if (sellTokenAmount > 0) {
                sellTokenAmount = parseFloat(sellTokenAmount.toFixed(sellTokenDecimals));
                sellTokenAmount = (new BigNumber(sellTokenAmount)).mul((new BigNumber(10)).pow(sellTokenDecimals)).toFixed();
                buyTokenAmount = 0;
                inputType = 'sell';
            }

            if (buyTokenAmount > 0) {
                buyTokenAmount = parseFloat(buyTokenAmount.toFixed(buyTokenDecimals));
                buyTokenAmount = (new BigNumber(buyTokenAmount)).mul((new BigNumber(10)).pow(buyTokenDecimals)).toFixed();
                sellTokenAmount = 0;
                inputType = 'buy';
            }
            let headers = {
                'Content-Type': 'application/json',
                // 'Authorization': "Bearer " + userAccount['token'],
            }
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            // const network = 'main';
            let platform = 'bsc';
            let baseUrl = `api/swap/getRate`;
            let url = baseUrl + `?network=${network}&platform=${platform}&sell_token=${sellTokenAddress}&sell_amount=${sellTokenAmount}&buy_token=${buyTokenAddress}&buy_amount=${buyTokenAmount}&slippage=${this.slippage}`;
            this.showLoading = true;
            try {
                axios.get(url, {
                    headers: headers
                }).then(res => {
                    if (res.data.data) {
                        this.swapInfo.spenderAddress = utils.toChecksumAddress(res.data.data.spender_address);
                        this.swapInfo.toAddress = utils.toChecksumAddress(res.data.data.to_address);
                        this.swapInfo.input = res.data.data.input;
                        this.swapInfo.output = res.data.data.output;
                        this.swapInfo.adjustedOutput = res.data.data.adjusted_output;
                        this.swapInfo.data = res.data.data.data;
                        let outputAmount;
                        if (inputType === 'sell') {
                            outputAmount = (new BigNumber(this.swapInfo.output)).div((new BigNumber(10)).pow(buyTokenDecimals)).toFixed();
                            this.amountToSwap = this.formatDecimal(outputAmount, 6);
                        } else {
                            outputAmount = (new BigNumber(this.swapInfo.output)).div((new BigNumber(10)).pow(sellTokenDecimals)).toFixed();
                            this.amountFromSwap = this.formatDecimal(outputAmount, 6);
                        }
                        this.checkAllowance();
                    }
                    this.showLoading = false;
                }).catch(err => {
                    this.showLoading = false;
                    this.swapInfo.spenderAddress = '';
                    this.swapInfo.toAddress = '';
                    this.swapInfo.input = '';
                    this.swapInfo.output = '';
                    this.swapInfo.adjustedOutput = '';
                    this.swapInfo.data = '';
                })
            } catch (e) {
                this.showLoading = false;
                this.swapInfo.spenderAddress = '';
                this.swapInfo.toAddress = '';
                this.swapInfo.input = '';
                this.swapInfo.output = '';
                this.swapInfo.adjustedOutput = '';
                this.swapInfo.data = '';
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
        async getTokenBalance() {
            this.fromBalance = 0;
            this.toBalance = 0;
            let web3 = new Web3(window.ethereum);
            let address = this.account;
            if (!address) return;
            const fromAddress = this.fromToken && this.fromToken ? this.fromToken["address"] : null;
            const toAddress = this.toToken && this.toToken ? this.toToken["address"] : null;
            const fromDecimals = parseInt(
                this.fromToken && this.fromToken ? this.fromToken["decimals"] : ''
            );
            const toDecimals = parseInt(
                this.toToken && this.toToken ? this.toToken["decimals"] : ''
            );
            if (fromAddress) {
                let web3FromContract = new web3.eth.Contract(
                    settingsContract["ABI_TOKEN"],
                    fromAddress
                );
                if (this.fromToken['symbol'] === 'BNB') {
                    const balance = await web3.eth.getBalance(address)
                    let dicimalsMul = new BigNumber(10).pow(18);
                    this.fromBalance = new BigNumber(balance).div(dicimalsMul).toString();
                    this.fromToken['balance'] = this.fromBalance;
                } else {
                    await web3FromContract.methods
                        .balanceOf(address)
                        .call()
                        .then((resp) => {
                            let dicimalsMul = new BigNumber(10).pow(fromDecimals);
                            this.fromBalance = new BigNumber(resp).div(dicimalsMul).toString();
                            this.fromToken['balance'] = this.fromBalance;
                        });
                }
            }
            if (toAddress) {
                let web3ToContract = new web3.eth.Contract(
                    settingsContract["ABI_TOKEN"],
                    toAddress
                );

                if (this.toToken['symbol'] === 'BNB' || this.toToken['symbol'] === 'WBNB') {
                    const balance = await web3.eth.getBalance(address)
                    let dicimalsMul = new BigNumber(10).pow(18);
                    this.toBalance = new BigNumber(balance).div(dicimalsMul).toString();
                    this.toToken['balance'] = this.toBalance;
                } else {
                    await web3ToContract.methods
                        .balanceOf(address)
                        .call()
                        .then((resp) => {
                            let dicimalsMul = new BigNumber(10).pow(toDecimals);
                            this.toBalance = new BigNumber(resp).div(dicimalsMul).toString();
                            this.toToken['balance'] = this.toBalance;
                        });
                }
            }

        },
        async getListExtend() {
            this.listExtend = [];
            const headers = {
                'Content-Type': 'application/json',
            }
            // let network = this.exchange['network'];
            // let platform = this.exchange['platform'];
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            let baseUrl = `api/swap/extended`;
            let url = baseUrl + `?network=${network}&platform=${platform}`;
            await axios.get(url, {
                headers: headers
            }).then(res => {
                if (res.data.data) {
                    this.listExtend = JSON.parse(res.data.data)['tokens'];
                    this.listData = [...this.listData, ...this.listExtend];
                    this.objectData = [...new Set(this.listData)];
                }
            }).catch(err => {
            })
        },
        async getListCmc() {
            this.listCMC = [];
            const headers = {
                'Content-Type': 'application/json',
            }
            // let network = this.exchange['network'];
            // let platform = this.exchange['platform'];
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            let baseUrl = `api/swap/cmc`;
            let url = baseUrl + `?network=${network}&platform=${platform}`;
            await axios.get(url, {
                headers: headers
            }).then(res => {
                if (res.data.data) {
                    this.listCMC = JSON.parse(res.data.data)['tokens'];
                }
            }).catch(err => {
            })
        },
        async getListCoingecko() {
            this.listCoinGecko = [];
            const headers = {
                'Content-Type': 'application/json',
            }
            // let network = this.exchange['network'];
            // let platform = this.exchange['platform'];
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            let baseUrl = `api/swap/coingecko`;
            let url = baseUrl + `?network=${network}&platform=${platform}`;
            await axios.get(url, {
                headers: headers
            }).then(res => {
                if (res.data.data) {
                    this.listCoinGecko = JSON.parse(res.data.data)['tokens'];
                }
            }).catch(err => {
            })
        },
    },
    created() {
        setTimeout(() => {
            this.getListMainTokenSwap();
            this.getListExtend();
            this.getListCmc();
            this.getListCoingecko();
        }, 500);
    },
    mounted() {
        let platform = 'bsc';
        let userImported = JSON.parse(localStorage.getItem('user_imported_'+ platform));
        let array_symbols = [];
        if (userImported && userImported.length > 0) {
            for (let i = 0; i < userImported.length; i++) {
                array_symbols.push(userImported[i]['symbol']);
            }
            this.imported = [...new Set(array_symbols)];
            this.listData = [...this.listData, ...userImported];
            this.objectData = [...new Set(this.listData)];
        }
    },
    computed: {
        ...mapState(['web3Modal']),
        ...mapGetters({
            exchange: 'exchange',
            account: 'account',
        }),
    },
    watch: {
        'exchange': function () {
            let platform = this.exchange['platform'];
            if (platform !== 'bsc') {
                // error exchange
                this.$toaster.error($t('swap.error.0008') + platform);
                return;
            }
            this.getListMainTokenSwap();
        },
        'account': function () {
            this.getTokenBalance();
        }
    }
}
</script>

<style scoped>
.modal-body{
    margin: 15px;
}
.token-hover{
    padding: 0px 10px;
}
.token-hover:hover{
    background: #F9F9F9;
}
.force-overflow{
    padding: 0px;
}
.nav-blue a.active::before {
    width: 300px;
}
.list{
    padding: 0px;
}
.checkToken:hover{
    background: #08638F;
    color: #fff
}
.checkToken{
    background: #F9F9F9;
}
.image-setting{
    width: 12px;
    height: 12px;
    background-image: url(../../../assets/images/ic-setting.svg);
}
.checkToken:hover .image-setting {
    width: 12px;
    height: 12px;
    background-image: url(../../../assets/images/ic-setting-white.svg);
}
.tokenSetting{
display: flex;
align-items: center;
}
.textActive{
    color: #34A759;
}
.textCheck{
    font-size: 14px!important;
    color: #A8A8A8;
}
.textCoin{
    color: #08638F;
}
.import-token{
    font-size: 18px;
    color: #6D6D6D;
}
.nodata {
    display:inline-block;
}
.kqMeal {
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 16px;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-weight: 600;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0px;
    transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
    height: 20px;
    font-size: 12px;
    padding: 0px 8px;
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
    border-image: initial;
    border-color: #6AD114;
    box-shadow: none;
    color: #6AD114;
    margin-right: 5px;
}
.percent{
display: flex;
flex-flow: row nowrap;
-webkit-box-align: center;
align-items: center;
color: var(--colors-text);
font-size: 0.75rem;
line-height: 1rem;
padding: 0.75rem 1rem 0px;
justify-content: end;
}
.kqMeal:hover{
    border-color: #b3f080;
    color: #b3f080;
}
.percentcheck{
    height: 32px;
}
</style>