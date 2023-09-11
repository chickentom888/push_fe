<template>
    <div class="box-swap safety-alert p-4 mb-3" v-show="isShow">
        <p class="d-flex align-items-center fs-20 fw-bold f-Nunito text-danger">
            <img alt="" src="@/assets/images/icon-alert.svg" class="mr-2" /> Safety Alert
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
                <a href="javascript:void(0)">Terms And Conditions</a>
            </li>
            <li>
                <a href="javascript:void(0)">More info</a>
            </li>
            <li>
                <a href="javascript:void(0)" class="active" @click="isShow = false">I understand</a>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: "securityAlert",
    data() {
        return {
            isShow: true
        }
    }
}
</script>

<style scoped>

</style>