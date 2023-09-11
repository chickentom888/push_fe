<template>
    <div v-if="isPopupProcessing" class="theloading" id="globalloading">

    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "modal_processing",
        computed: {
            ...mapGetters({
                isPopupProcessing: 'isPopupProcessing'
            })
        }
    }
</script>

<style scoped>
    .processing {
        position: fixed;
        top: 45%;
        right: 45%;
        z-index: 100001;
    }
</style>
