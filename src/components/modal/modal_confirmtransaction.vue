<template>
    <div v-if="isPopupWallet">
        <div class="modal-backdrop fade show"></div>
        <div :class="{'show d-block': isPopupWallet}" class="modal teacup_modal fade" id="modal_processing_wallet" tabindex="-1"
             aria-labelledby="ilo_modal"
             aria-hidden="true" hide-footer>
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <p><img src="@/assets/images/loading22.gif" alt=""/></p>
                        <p class="f-Nunito fs-20 fw-bold">
                            {{$t('modal.02')}}
                        </p>
                        <p class="f-Nunito">{{$t('modal.03')}}</p>
                        <p class="f-Nunito">
                            {{$t('modal.04')}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "modal_confirmtransaction",
    data() {
      return {
          // isPopupWallet: true
      }
    },
    methods: {
    },
    computed: {
        ...mapGetters({
            isPopupWallet: 'isPopupWallet'
        })
    },
}
</script>

<style scoped>
    .teacup_modal .modal-dialog {
        max-width: 480px;
    }
    .modal-body{
        margin: 20px;
    }
</style>
