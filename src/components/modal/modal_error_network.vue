<template>
    <div v-show="isPopupNetWork" :class="{'show d-block': isPopupNetWork}" class="modal fade" id="modal_error_network" tabindex="-1"
         aria-labelledby="ilo_modal"
         aria-hidden="true" hide-footer>
        <div class="modal-dialog" v-click-outside="outSide">
            <div class="modal-content">
                <div class="modal-body  px-4">
                    <div class="row justify-content-center">
                        <div class="col-12 text-dark">
                          <h3 class="text-center">{{$t('modal.05')}}</h3>

                        <p class="text-center">
                          <img width="30" :src="chain ? chain.chainIdUser.icon : ''" alt=''> <br>

                            {{$t('modal.06')}}: <br>

                           <span class="text-green">

                               {{chain ? chain.chainIdUser.name : ''}}
                           </span> <br>
                                {{$t('modal.07')}} <br>
                                {{$t('modal.08')}}
                            </p>
                        </div>
                      <div class="col-12 col-md-6">
                        <button
                            class="btn btn-pushswap rounder py-1 w-100"
                            @click="resetApp()"
                        >
                          {{$t('common.0003')}}
                            <i class="fa-solid fa-right-long"></i>
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex';

    export default {
        name: "modalErrorNetWork",
        data() {
            return {
                isShow: false
            }
        },
        methods: {
          outSide() {
            // this.isShow = true;
          },
          resetApp() {
            this.$store.dispatch('resetApp')
            this.$store.commit('setPopupErrorNetWork', false)
            this.isShow = false
          },
        },
        computed: {
            ...mapState(['web3Modal']),
            ...mapGetters({
              isPopupNetWork: 'isPopupNetWork'
          }),
          chain() {
            return this.$store.state.connect;
          }
        },
        watch: {
        }
    }
</script>

<style scoped>
  .teacup_modal .modal-dialog {
    max-width: 450px;
}
  .wrong-network {

  }
</style>
