<template>
    <div>
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <div class="box-dex position-relative">
                <div class="banner-reward"></div>
                <div class="heigh90 text-center">
                <img src="@/assets/images/hotspot.svg" class="m-auto d-block"/>
                <a
                    style="cursor: pointer;"
                    @click="connectWallet()"
                    class="linear-blue btn-blue btn-bluebig w-50 fill mt-5 poiter"
                >
                    Connect Wallet
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
</template>
<script>
export default {
    name : "disconnectAff",
    methods: {
        connectWallet() {
            this.$store.dispatch('connect');
        },
    }
    
}    
</script>