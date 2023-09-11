<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <button type="button" class="close" @click="$emit('closeWhitelistOn')">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="modal-body">
                <div v-if="!whitelist" class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <p class="text-center mb-4">
                            <img src="@/assets/images/icons/onoff_on.png" alt="">
                        </p>
                        <p class="text-dark text-center mb-3 text-18">
                            After enabling this function, Only users with the whitelist
                            address can purchase tokens from your presale. <br>
                            Are you sure do you want to <strong>Enable Whitelist</strong>  ?
                        </p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-5 mt-3">
                        <button class="btn btn-outline-pushswap rounder w-100" @click="$emit('closeWhitelistOn')">
                            Cancel
                        </button>
                    </div>
                    <div class="col-12 col-md-6 col-lg-5 mt-3">
                        <button class="btn btn-pushswap rounder w-100" data-dismiss="modal" @click="onWhitelist(true)">
                            OK
                        </button>
                    </div>

                </div>

                <div v-else class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <p class="text-center mb-4">
                            <img src="@/assets/images/icons/onoff_off.png" alt="">
                        </p>
                        <p class="text-dark text-center mb-3 text-18">
                            After disable Whitelist, all user can purchase token from
                            your presale <br>
                            Are you sure do you want <strong> Disable Whitelist</strong> ?
                        </p>
                    </div>

                    <div class="col-12 col-md-6 col-lg-5 mt-3">
                        <button class="btn btn-outline-pushswap rounder w-100" @click="$emit('closeWhitelistOn')">
                            Cancel
                        </button>
                    </div>
                    <div class="col-12 col-md-6 col-lg-5 mt-3">
                        <button class="btn btn-pushswap rounder w-100" @click="onWhitelist(false)">
                            OK
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "whitelistOn",
    props: ['whitelist'],
    methods: {
        onWhitelist(data) {
            this.$emit('whitelistWasUpdated', data)
            this.$emit('closeWhitelistOn')
        }
    }
}
</script>

<style scoped>

</style>
