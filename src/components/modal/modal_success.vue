<template>
    <div v-if="successModal.isShow">
        <div class="modal-backdrop fade show" ></div>
        <div :class="{'show d-block': successModal.isShow}" class="modal teacup_modal fade" id="modal_error" tabindex="-1"
            aria-labelledby="ilo_modal"
            aria-hidden="true" hide-footer
            data-aos="fade-up" data-aos-delay="200"
            >
            <div class="modal-dialog" v-click-outside="outSide">
                <!-- <div class="modal-content">
                    <div class="modal-body">
                        <i class="icofont-close modal-closed" @click="outSide"></i>
                        <div class="row justify-content-center">
                            <div class="col-12 col-lg-9">
                                <p class="text-center mb-3">
                                    <img src="@/assets/images/icons/icon_success.png" alt="">
                                </p>
                                <h3 class="text-center text-900 mb-3">Success</h3>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="modal-content">
				<div class="modal-body text-center">
                    <i class="icofont-close modal-closed" @click="outSide"></i>
					<div class="d-flex align-items-center justify-content-center mb-4 mt-4">
						<img src="@/assets/images/icon-success.svg" class="mr-2 ml-2">
					</div>
					<h3 class="mb-2 clgreen text-center text-900 mb-3">{{$t('common.0012')}}</h3>
					<p class="f-Nunito cl8C">{{ successModal.message }}</p>
				</div>
			</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "modalSuccess",
        methods: {
          outSide() {
            this.$store.commit("setPopupSuccess", {
                isShow: false,
                message: ""
            });
          }
        },
        computed: {
            ...mapGetters({
                successModal: 'successModal'
            })
        },
        watch: {

        }
    }
</script>

<style scoped>

</style>
