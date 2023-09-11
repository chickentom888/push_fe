<template>
<div class="box-dex push-lock mb-5">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
    <span class="decor5"> <img src="@/assets/images/decor1.png" /></span>
    <span class="decor18">
        <img src="@/assets/images/decor2.png" class="w-75"
    /></span>
    <div class="box-swap safety-alert p-4 mb-3">
        <p class="d-flex align-items-center fs-20 fw-bold f-Nunito text-danger">
        <img src="@/assets/images/icon-alert.svg" class="mr-2" /> Safety Alert
        </p>
        <p class="f-Nunito text-danger">
        This is a decentralized and open sale platform. Similar to Uniswap
        anyone can create and name a sale freely including fake versions of
        existing tokens. It is also possible for developers of a token to mint
        near infinite tokens and dump them on locked liquidity. Please do your
        own research before using this platform.
        </p>
        <ul class="list">
        <li>
            <a href="#">Terms And Conditions</a>
        </li>
        <li>
            <a href="#">More info</a>
        </li>
        <li>
            <a href="#" class="active">I understand</a>
        </li>
        </ul>
    </div>
    <div class="box-swap position-relative">
        <span class="decor19"> <img src="@/assets/images/decor2.png" /></span>
        <div
        class="top-swap m-0 pl-5 pr-5 d-flex align-items-center justify-content-between"
        >
        <div class="top-upcoming m-0">
            <img src="@/assets/images/avar1.png" alt="" class="img" />
            <span class="name fs-24 m-0">Ai Musk </span>
        </div>
        <div class="clearfix f-Nunito d-flex">
            <span class="mr-3"
            >0x2345...5Ra3
            <img src="@/assets/images/icon-save-small.svg" class="ml-1"
            /></span>
            <span
            >BscScan
            <img src="@/assets/images/icon-growth-black.svg" class="ml-1"
            /></span>
        </div>
        </div>

        <div class="creat-ilo">
        <div class="mb-5">
            <div>
            <PieChartVue class="mt-5 mb-3 margin-auto" />
            </div>
        </div>
        <p class="fs-18 f-Nunito text-center">Round 0 finish in</p>
        <div class="digit-wrapper mb-5">
            <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> 34 </span>
            <span class="fs-14 cl9F9"> Day </span>
            </div>
            <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> 24 </span>
            <span class="fs-14 cl9F9"> Hours </span>
            </div>
            <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> 15 </span>
            <span class="fs-14 cl9F9"> Minutes </span>
            </div>
            <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> 40 </span>
            <span class="fs-14 cl9F9"> Seconds </span>
            </div>
        </div>
        <p class="text-center">
            <button type="submit" class="btn-blues disabled">
            Live Round 2
            </button>
        </p>
        <div class="reserve mb-4">
            <button
            class="btn-whiteBig collapsed"
            type="button"
            data-toggle="collapse"
            @click="collapseTab"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
            >
            Reserve your spot with 2 Ai Musk
            <img src="@/assets/images/dot-b.svg" class="ml-2" />
            </button>
            <div :class="collapse" id="collapseExample">
            <div class="card-body p-0">
                <div class="progress position-relative mb-4">
                <div
                    class="progress-bar"
                    role="progressbar"
                    style="width: 25%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
                <span class="txtprocess">2/50</span>
                </div>

                <p class="clfff f-Nunito text-center">50 spots left!</p>

                <div class="d-flex">
                <a
                    href="#"
                    class="linear-blue btn-blue fill w-50 mr-3 text-center"
                >
                    Approve
                    <img src="@/assets/images/dot-l-white.svg" class="ml-2" />
                </a>
                <a
                    href="#"
                    class="btn-gray btn-blue btn-bluebig w-50"
                    data-toggle="modal"
                    data-target="#connectWallet"
                >
                    Reserve
                    <img src="@/assets/images/dot-l-black.svg" class="ml-3" />
                </a>
                </div>
            </div>
            </div>
        </div>
        <p class="d-flex justify-content-center fs-24">
            <span class="f-Nunito fw-bold"> 71,2458 </span> /<span>
            1.500 BNB</span
            >
        </p>
        <div class="styleprogress mb-5">
            <div class="progress position-relative mb-4">
            <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
            <span class="txtprocess">4.9% complete</span>
            </div>
        </div>
        <ul class="listdata">
            <li>
            <div class="countdown">
                <svg viewBox="-50 -50 100 100" stroke-width="7">
                <circle r="45"></circle>
                <circle
                    r="45"
                    stroke-dasharray="282.7433388230814"
                    stroke-dashoffset="282.7433388230814px"
                ></circle>
                </svg>
            </div>
            <p class="fs-24 fw-bold text-center f-Nunito mb-0">75%</p>
            <p class="f-Nunito fs-16 text-center cl9F9">Lock 11 Months</p>
            </li>
            <li>
            <div class="countdown">
                <svg viewBox="-50 -50 100 100" stroke-width="7">
                <circle r="45"></circle>
                <circle
                    r="45"
                    stroke-dasharray="282.7433388230814"
                    stroke-dashoffset="282.7433388230814px"
                ></circle>
                </svg>
            </div>
            <p class="fs-24 fw-bold text-center f-Nunito mb-0">0</p>
            <p class="f-Nunito fs-16 text-center cl9F9">Participants</p>
            </li>
            <li>
            <div class="countdown">
                <svg viewBox="-50 -50 100 100" stroke-width="7">
                <circle r="45"></circle>
                <circle
                    r="45"
                    stroke-dasharray="282.7433388230814"
                    stroke-dashoffset="282.7433388230814px"
                ></circle>
                </svg>
            </div>
            <p class="fs-24 fw-bold text-center f-Nunito mb-0">95%</p>
            <p class="f-Nunito fs-16 text-center cl9F9">Tokenomics</p>
            </li>
        </ul>
        <div class="connnect-wallet mb-5">
            <div class="tab-blue w-100">
            <ul class="nav m-b-20">
                <li @click="changeTab('pre')">
                <a
                    data-toggle="tab"
                    aria-expanded="true"
                    :class="tabActivePre"
                    >Presale</a
                >
                </li>
                <li @click="changeTab('info')">
                <a
                    data-toggle="tab"
                    aria-expanded="false"
                    :class="tabActiveInfo"
                    >Info</a
                >
                </li>
            </ul>
            </div>
            <div class="tab-content">
            <div :class="tabPre" id="presale">
                <div class="panel-content">
                <p class="f-Nunito fs-24 fw-bold text-center mt-4">
                    Round 1 Requirements
                </p>
                <p class="f-Nunito fs-14 text-center cl9F9">
                    To participate in round 1 you need to hold at least the
                    specified amount of ONE of the following tokens.
                </p>
                <div class="box-requirem f-Nunito">
                    <div class="d-flex clearfix">
                    <img src="@/assets/images/avar1.png" alt="" class="img" />
                    <div class="clearfix">
                        <span class="fw-bold d-block">WHITELIST_2 on bsc</span>
                        <span
                        >Pancakeswap
                        <img
                            src="@/assets/images/icon-growth-white.svg"
                            class="ml-1"
                        /></span>
                    </div>
                    </div>
                    <div class="clearfix text-right">
                    <span class="fw-bold d-block">10.3 WHITELIST_2</span>
                    <span>Your balance: 0</span>
                    </div>
                </div>
                <ul class="listbonus f-Nunito border-0 mt-4">
                    <li class="mb-2">
                    <span class="cl9F9 fs-14">Your spent allowance:</span>
                    <span class="cl9F9 fs-14">You get:</span>
                    </li>
                    <li class="mb-2">
                    <span class="text-right fs-18 fw-bold"
                        >T0 / 10 BNB (BEP20)</span
                    >
                    <span class="text-right fs-18 fw-bold">0.00 Ai Musk</span>
                    </li>
                </ul>
                <form class="formcontrol mt-4">
                    <div class="form-group">
                    <label
                        class="d-flex align-items-center justify-content-between"
                        >Spend how much BNB? <span>Balance: 0</span></label
                    >
                    <div class="position-relative border-active">
                        <input
                        type="text"
                        class="form-control heigh54"
                        placeholder=""
                        value="9"
                        />
                        <div class="valuebnb">
                        <span class="f-Nunito fs-18">BNB</span>
                        <button type="submit" class="btn btnblue">Max</button>
                        </div>
                    </div>
                    </div>
                </form>
                <p class="f-Nunito">
                    Please be aware if the token you are purchasing has
                    deflationary mechanisms such as burn on transfer you may
                    receive less than the amount stated.
                </p>

                <p class="f-Nunito">
                    Your tokens will be locked in the contract until the presale
                    has concluded.
                </p>
                <div class="box-swap safety-alert p-4 mb-5">
                    <p
                    class="d-flex align-items-center fs-20 fw-bold f-Nunito text-danger"
                    >
                    <img src="@/assets/images/icon-alert.svg" class="mr-2" />
                    Safety Alert
                    </p>
                    <p class="f-Nunito text-danger">
                    This is a decentralized and open sale platform. Similar to
                    Uniswap anyone can create and name a sale freely including
                    fake versions of existing tokens. It is also possible for
                    developers of a token to mint near infinite tokens and
                    dump them on locked liquidity. Please do your own research
                    before using this platform.
                    </p>
                    <ul class="list justify-content-end">
                    <li>
                        <a href="#">More info</a>
                    </li>
                    <li>
                        <a href="#" class="active">Accept and proceed</a>
                    </li>
                    </ul>
                </div>
                <div class="d-flex mb-4">
                    <button
                    class="btn-gray btn-blue btn-bluebig w-50 mr-3"
                    data-toggle="modal"
                    data-target="#connectWallet"
                    >
                    Approve
                    <img src="@/assets/images/dot-l-black.svg" class="ml-3" />
                    </button>
                    <button
                    @click="flag = false"
                    class="linear-blue btn-blue fill w-50 text-center radius6"
                    >
                    Purchase
                    <img src="@/assets/images/dot-l-white.svg" class="ml-2" />
                    </button>
                </div>
                <p class="f-Nunito text-center">
                    Any excess BASE_2 above your allowance is immediately
                    refunded
                </p>
                </div>
            </div>
            <div :class="tabInfo" id="info">
                <div class="panel-content">
                <div class="bg-token mb-4">
                    <div class="top-upcoming mb-3 justify-content-center">
                    <ul class="list">
                        <li>
                        <a href="#"
                            ><img src="@/assets/images/social1.svg" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="@/assets/images/social2.svg" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="@/assets/images/social3.svg" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="@/assets/images/social4.svg" alt="" />
                        </a>
                        </li>
                        <li>
                        <a href="#"
                            ><img src="@/assets/images/social5.svg" alt="" />
                        </a>
                        </li>
                    </ul>
                    </div>
                    <p class="fw-bold f-Nunito text-center fs-24">Token BULL</p>
                    <div
                    class="clearfix f-Nunito d-flex cl9F9 justify-content-center"
                    >
                    <span class="mr-3"
                        >0x2345...5Ra3
                        <img
                        src="@/assets/images/icon-save-small.svg"
                        class="ml-1"
                        style="opacity: 0.3"
                    /></span>
                    <span
                        >BscScan
                        <img
                        src="@/assets/images/icon-growth-black.svg"
                        class="ml-1"
                        style="opacity: 0.3"
                    /></span>
                    </div>
                </div>
                <ul class="listbull">
                    <li>
                    <label>12 months lock duration</label>
                    <span>60% BNB raised liquidity lock</span>
                    </li>
                    <li>
                    <label>Softcap</label>
                    <span>9 BNB</span>
                    </li>
                    <li>
                    <label>Hardcap</label>
                    <span>18 BNB</span>
                    </li>
                    <li>
                    <label>Max spend per account</label>
                    <span>0,001 BNB</span>
                    </li>
                    <li>
                    <label>Presale price</label>
                    <span class="d-flex"
                        >4 000 000 BULL /
                        <span class="fw-regular ml-1"> per BNB </span></span
                    >
                    </li>
                    <li>
                    <label>Listing price</label>
                    <span class="d-flex"
                        >2 600 000 BULL /
                        <span class="fw-regular ml-1"> per BNB</span></span
                    >
                    </li>
                </ul>
                </div>
            </div>
            <p class="mt-5 text-center">
                <a href="#" class="linear-blue btn-blue btn-bluebig w-50">
                Connect your wallet to continue
                <img src="@/assets/images/dot-l-white.svg" class="ml-2" />
                </a>
            </p>
            </div>
        </div>
        </div>
    </div>
    <span class="decor6"> <img src="@/assets/images/decor1.png" /></span>
    </div>
</div>
</template>

<script>
import PieChartVue from "../../../../components/PieChart.vue";
export default {
data() {
    return {
    collapse: "collapse mt-4",
    tabPre: "tab-pane fade active show",
    tabInfo: "tab-pane fade",
    tabActivePre: "active",
    tabActiveInfo: "",
    flag: true,
    };
},
components: { PieChartVue },
methods: {
    collapseTab() {
    if (this.collapse == "collapse mt-4") {
        this.collapse = "collapse mt-4 show";
    } else this.collapse = "collapse mt-4";
    },
    changeTab(tab) {
    if (tab == "pre") {
        this.tabActivePre = "active";
        this.tabActiveInfo = "";
        this.tabPre = "tab-pane fade active show";
        this.tabInfo = "tab-pane fade";
    } else if (tab == "info") {
        this.tabActivePre = "";
        this.tabActiveInfo = "active";
        this.tabPre = "tab-pane fade";
        this.tabInfo = "tab-pane fade active show";
    }
    },
},
};
</script>

<style>
.margin-auto {
margin: auto;
}
</style>
