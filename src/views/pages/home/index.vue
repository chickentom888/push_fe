<template>
<div>
<!--    <img src="@/assets/images/scam_2.jpg" />-->
<!--    <img src="@/assets/images/scam_1.jpg" />-->
<!--    <img src="@/assets/images/scam_3.png" />-->
<!--    <img src="@/assets/images/scam_4.png" />-->
<!--    <img src="@/assets/images/scam_5.jpg" />-->
<!--    <img src="@/assets/images/scam_6.png" />-->

    <div class="box-Launch">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row align-items-center">
        <div
            class="col-md-6 position-relative"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <span class="decor1">
            <img src="@/assets/images/decor1.png"
            /></span>
            <h2 v-html="$t('home.0001')"></h2>
            <p class="decrip">
                {{$t('home.0002')}}
            </p>
            <div class="totalValue">
            <span class="d-block titleValue fw-bold">{{$t('home.0003')}}</span>
                <span v-if="totalValue" class="bgTotal numberValue fw-bold"> <img src="@/assets/images/ic-dolar-value.svg" alt=""/> {{ totalValue }}</span>
            </div>
        </div>
        <div
            class="col-md-6 position-relative hero-img text-center"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <span class="decor2">
            <img src="@/assets/images/decor2.png"
            /></span>
            <span class="decor3">
            <img src="@/assets/images/decor1.png"
            /></span>
<!--            <img src="@/assets/images/banner01.png" class="animated" />-->
            <img src="@/assets/images/scam_2.jpg" class="animated" />
        </div>
        </div>
    </div>
    </div>
    <div class="box-Supported">
    <h3 class="title text-center" v-html="$t('home.0004')"></h3>
    <div class="experience">
        <div class="container">
        <div class="slider">
            <div class="slide-track">
            <div class="slide">
                <div class="listToken">
                <img src="@/assets/images/token1.svg" class="imghover" />
                <span>ETHEREUM</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token2.svg"
                    class="imghover"
                    style="--color: rgba(232, 65, 66, 0.3)"
                />
                <span>AVALANCHE</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token3.svg"
                    class="imghover"
                    style="--color: rgba(0, 0, 0, 0.3)"
                />
                <span>SOLANA</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token4.svg"
                    class="imghover"
                    style="--color: rgba(240, 185, 11, 0.3)"
                />
                <span>BNB</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token5.svg"
                    class="imghover"
                    style="--color: rgba(18, 105, 255, 0.3)"
                />
                <span>FANTOM</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token6.svg"
                    class="imghover"
                    style="--color: rgba(130, 71, 229, 0.3)"
                />
                <span>POLYGON</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token7.svg"
                    class="imghover"
                    style="--color: rgba(0, 0, 0, 0.3)"
                />
                <span>DEXSCREENER</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token9.svg"
                    class="imghover"
                    style="--color: rgba(85, 90, 190, 0.3)"
                />
                <span>cronos</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token10.svg"
                    class="imghover"
                    style="--color: rgba(254, 4, 32, 0.3)"
                />
                <span>optimism</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token8.svg"
                    class="imghover"
                    style="--color: rgba(45, 55, 75, 0.3)"
                />
                <span>arbitrum</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token11.svg"
                    class="imghover"
                    style="--color: rgba(185, 158, 51, 0.3)"
                />
                <span>dogechain</span>
                </div>
            </div>
            <div class="slide">
                <div class="listToken">
                <img
                    src="@/assets/images/token12.svg"
                    class="imghover"
                    style="--color: rgba(22, 22, 22, 0.3)"
                />
                <span>aptos</span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    <div class="box-Technology">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row align-items-center">
        <div
            class="col-md-6 position-relative hero-img text-center"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <span class="decor5">
            <img src="@/assets/images/decor2.png"
            /></span>
            <span class="decor6">
            <img src="@/assets/images/decor1.png"
            /></span>
            <img src="@/assets/images/scam_1.jpg" class="animated" />
        </div>
        <div
            class="col-md-6 position-relative"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <h3 class="title">
            {{$t('home.0005')}} <br />
            <span> {{$t('home.0006')}}</span>
            </h3>
            <p class="decrip mb-5">
            {{$t('home.0007')}}
            </p>
<!--            <div class="d-flex">-->
<!--            <a href="javascript:0" class="linear-blue btn-blue1 mr-3 fill">-->
<!--                {{$t('home.0008')}}-->
<!--                <img src="@/assets/images/dot-l-white.svg" class="ml-3" />-->
<!--            </a>-->
<!--            </div>-->
        </div>
        </div>
    </div>
    </div>
    <div class="box-Services">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <h3 class="title text-center" v-html="$t('home.0009')"></h3>
        <div class="row align-items-center">
        <div
            class="col-md-7 position-relative"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <h3>{{$t('home.0010')}}</h3>
            <p class="decrip" v-html="$t('home.0011')"></p>
        </div>
        <div
            class="col-md-5 position-relative text-center hero-img"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <span class="decor7">
            <img src="@/assets/images/decor1.png"
            /></span>
            <img src="@/assets/images/scam_3.png" class="animated" />
        </div>
        </div>
    </div>
    </div>
    <div class="box-PushLock">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row align-items-center">
        <div
            class="col-md-5 position-relative text-center hero-img"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <span class="decor8">
            <img src="@/assets/images/decor1.png"
            /></span>
            <img src="@/assets/images/scam_4.png" class="animated" />
        </div>
        <div
            class="col-md-7 position-relative"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <h3>{{$t('home.0012')}}</h3>
            <p class="decrip">{{$t('home.0013')}}</p>
            <p class="decrip">{{$t('home.0014')}}</p>
            <p class="decrip">{{$t('home.0015')}}</p>
        </div>
        </div>
    </div>
    </div>
    <div class="box-PushMint">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row align-items-center">
        <div
            class="col-md-7 position-relative"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <h3>{{$t('home.0016')}}</h3>
            <p class="decrip">{{$t('home.0017')}}</p>
            <p class="decrip">{{$t('home.0018')}}</p>
        </div>
        <div
            class="col-md-5 position-relative text-center hero-img"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <span class="decor9">
            <img src="@/assets/images/decor2.png" class="w-50"
            /></span>
            <img src="@/assets/images/scam_5.jpg" class="animated" />
        </div>
        </div>
    </div>
    </div>
    <div class="box-Dex">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row align-items-center">
        <div
            class="col-md-5 position-relative text-center hero-img"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <span class="decor10">
            <img src="@/assets/images/decor2.png"
            /></span>
            <span class="decor11">
            <img src="@/assets/images/decor1.png"
            /></span>
            <img src="@/assets/images/scam_6.png" class="animated" />
        </div>
        <div
            class="col-md-7 position-relative"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <h3 v-html="$t('home.0019')"></h3>
            <p class="decrip" v-html="$t('home.0020')"></p>
        </div>
        </div>
    </div>
    </div>
    <div class="box-NFT">
    <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row align-items-center">
        <div
            class="col-md-7 position-relative"
            data-aos="zoom-in"
            data-aos-delay="400"
        >
            <h3>{{$t('home.0021')}}</h3>
            <p class="decrip">{{$t('home.0022')}}</p>
            <p class="decrip">{{$t('home.0023')}}</p>
        </div>
        <div
            class="col-md-5 position-relative text-center hero-img"
            data-aos="zoom-in"
            data-aos-delay="500"
        >
            <span class="decor12">
            <img src="@/assets/images/decor1.png"
            /></span>
            <img src="@/assets/images/banner7.png" class="animated" />
        </div>
        </div>
    </div>
    </div>
    <div class="box-Partner">
    <h3 class="title text-center" v-html="$t('home.0024')"></h3>
    <div class="experience">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
        <ul class="list">
            <li><img src="@/assets/images/backer1.png"  alt="" /></li>
            <li><img src="@/assets/images/backer2.png"  alt="" /></li>
            <li><img src="@/assets/images/backer3.png"  alt="" /></li>
            <li><img src="@/assets/images/backer4.png"  alt="" /></li>
            <li><img src="@/assets/images/backer5.png"  alt="" /></li>
            <li><img src="@/assets/images/backer6.png"  alt="" /></li>
            <li><img src="@/assets/images/backer7.png"  alt="" /></li>
        </ul>
        </div>
    </div>
    <!-- -----Loading---- -->
    <loading
        :active.sync="showLoading"
        :can-cancel="true"
        :is-full-page="fullPage"
    ></loading>
    </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import Loading from "vue-loading-overlay";
export default {
name: "index",
data() {
    return {
    activeTab: 1,
    showLoading: false,
    fullPage: true,
    totalValue: "",
    };
},
components: {
    Loading,
},
methods: {
    stacking() {
    this.$router.push("/staking");
    },
    async fetchData() {
    try {
        const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
		let platform = 'bsc';
		let url = 'api/index/totalValueLock';
		url = url + '?network=' + network + '&platform=' + platform;
        const res = await axios.get(url);
        if (res.data.status == 1) {
        const value = res.data.data;
        const splitDot = String(value).split(".")
        this.totalValue = Number(splitDot[0]).toLocaleString();
        }
    } catch (error) {
    }
    },
},
mounted() {
    const lang = localStorage.getItem('selectedLanguage');
    this.$i18n.locale = lang ? lang : "en";
    this.$store.commit('setPopupWellcome', false);
},
created() {
    let branch = "left";
    const query = this.$route.query;
    if (query.ref) {
        localStorage.setItem("referral", JSON.stringify(query.ref));
        if (query.branch) {
            branch = query.branch.trim();
        }
        localStorage.setItem("branch", JSON.stringify(branch));
        localStorage.removeItem("pcode");
        if(query.pcode) {
            localStorage.setItem("pcode", JSON.stringify(query.pcode));
        }
    }
    this.fetchData();
    // setInterval(() => {
    // }, 2000)
},
computed: {
    connectInfo() {
    return this.$store.state.connect;
    },
    ...mapGetters({
    exchange: "exchange",
    }),
},
};
</script>

<style scoped>
.numberValue{
    font-size: 60px;
    font-family: Rajdhani;
    color: #34A759;
}
.bgTotal{
    background: url(../../../assets/images/bg-total-value.svg) repeat-x -7px 49px;
    display: inline-block;
}
.titleValue{
    font-size: 17px;
    font-family: Rajdhani;
}
@media only screen and (max-width: 768px) {
    .box-Partner .experience ul.list {
        display: flex;
        justify-content: space-around;
    }
    .box-Partner .experience ul.list li {
        margin-bottom: 15px;
    }
}
</style>
