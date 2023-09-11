<template>
    <div v-if="errorModal.isShow">
        <div class="modal-backdrop fade show"></div>
        <div :class="{'show d-block': errorModal.isShow}" class="modal teacup_modal fade" id="modal_error" tabindex="-1"
             aria-labelledby="ilo_modal"
             aria-hidden="true" hide-footer>
            <div class="modal-dialog" v-click-outside="outSide">
                <div class="modal-content">
                    <div class="modal-body">
                        <i class="icofont-close modal-closed" @click="outSide"></i>
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-9">
                                <p class="text-center mb-3">
                                    <img src="@/assets/images/icons/error.png" alt="">
                                </p>
                                <h3 class="text-center text-900 mb-3">
                                    {{$t('common.0013')}}
                                </h3>
                                <p class="text-center mb-3" v-if="!errorModal.message">
                                </p>
                                <p v-else v-html="errorModal.message" class="text-center mb-3"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "modalError",
        methods: {
          outSide() {
            this.$store.commit("setPopupError", {
                isShow: false,
                message: ""
            });
          }
        },
        computed: {
            ...mapGetters({
                errorModal: 'errorModal'
            })
        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
