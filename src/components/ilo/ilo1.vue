<template>
    <div class="box-dex push-lock mb-5">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <div class="row align-items-center position-relative">
                <div class="col-md-7">
                    <h3 class="title mb-4">Initial Liquidity<span> Offering (ILO)</span></h3>
                    <p class="f-Nunito cl9F9 fs-18 mb-4">ILO Launchpad Decentralized is a new fundraising mechanism through which many projects and startups raise funds by selling tokens on the DeFi based Decentralized Exchanges without undergoing the process of ICO.
                    </p>

                    <div class=" d-flex align-items-center mb-4">
                        <router-link to="/ilo-pre-create"  class="pointer linear-blue btn-blue fill mr-3 text-center">
                            Create ILO <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </router-link>
                        <a href="javascript:void(0)" class="pointer btn-white fill mr-3">
                            Guide <img src="@/assets/images/dot-l-black.svg" class="ml-2">
                        </a>
                        <a href="javascript:void(0)" class="w10"><img src="@/assets/images/ask.svg"></a>
                    </div>
                    <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
                </div>

                <div class="col-md-5 position-relative">
                    <p class="hero-img mt-5"> <img src="@/assets/images/banner10.png" class="animated"> </p>


                    <span class="decor7"> <img src="@/assets/images/decor1.png"></span>
                </div>
                <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ilo1",
    components: {
    },
    data() {
        return {
            isclaimer: true,
            aggree: false,
        }
    },
    methods: {
        closeModal() {
            this.isclaimer = false;
        },
        checked(e) {
            this.aggree = e.target.checked;
        }
    },
    computed: {
        currentPath() {
            return this.$route.path;
        }
    }
}
</script>

<style scoped>
.container {
    padding: 0 15px 0 15px;
}
</style>
