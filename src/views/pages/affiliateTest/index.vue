<template>
    <div>
        <!--Check connect wallet-->
        <div class="" v-show="!account">
            <disconnectAff></disconnectAff>
        </div>
        <div class="" v-show="account">
            <connectedAff></connectedAff>
        </div>
    </div>
</template>
<script>
import {mapGetters, mapState} from "vuex";
import disconnectAff from './disconnectAff.vue'
import connectedAff from './connectedAff.vue'

export default {
    name : 'affiliateTest',
    components : {
        disconnectAff,
        connectedAff
    },
    computed: {
        ...mapGetters({
            account : 'account'
        })
    }
}
</script>