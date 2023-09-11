<template>
    <div v-show="isShowExchange" class="modal teacup_modal layer2nd fade" id="modal_switch_exchange" tabindex="-1" aria-labelledby="ilo_modal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <i class="icofont-close-line"></i>
                </button>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-10">
                            <h3 class="text-center mb-3">{{$t('modal.09')}}</h3>
                            <hr>
                            <ul class="modal_switcher" v-show="connectInfo['exchanges']">
                                <li v-for="(item, idx) in connectInfo['exchanges']" :key="idx">
                                    <a href="javascript:void(0)" @click="changeExchange(item)" data-dismiss="modal">
                                        <img width="25" :src="item['exchange_logo']" alt="">
                                        <strong>{{item['exchange_name']}}</strong>
                                        <div class="d-flex">
                                            <div class="text-white">
                                                {{item['type']}}
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "modal_exchanges",
    data() {
        return {
            isShowExchange: true
        }
    },
    computed: {
        ...mapGetters({
            exchange: 'exchange'
        }),
        connectInfo() {
            return this.$store.state.connect;
        },
    },
    methods: {
        changeExchange(item) {
            this.$store.dispatch('connect');
            this.$store.commit('setExchange', item);
        }
    },
    created() {

    }
}
</script>

<style scoped>
.modal_switcher a img {
    width: 25px;
}

.modal_switcher a {
    font-size: 16px;
}
</style>
