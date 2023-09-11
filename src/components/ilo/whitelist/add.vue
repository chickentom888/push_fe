<template>
    <div>
        <div>
            <div class="modal-dialog">
                <div class="modal-content card card-teacup">
                    <button type="button" class="close"  aria-label="Close" @click="$emit('closeAddedOn')">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    <div class="modal-body">
                        <div class="row row-small-gutter justify-content-center ">
                            <div class="col-12">
                                <h3 class="text-center text-900 mb-3">Add to Whitelist</h3>
                                <div class="alert alert-warning rounded-30 alert-dismissible fade show" role="alert">
                                    <strong> WARNING:</strong> <br>
                                    <ul class="m-0">
                                        <li>Each Address must be written on one line. </li>
                                        <li>You can only add maximium {{max_whitelist}} Address each time.</li>
                                    </ul>
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                    </button>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control py-3" @keyup="onChangeWl()" v-model="whitelists"  rows="10" :placeholder="$t('placeholder.07')"></textarea>
                                </div>
                                <div class="form-group text-12">
                                   <strong class="text-warning">Note:</strong>  <br>
                                    <p class="mb-0">Total addresses add to the whitelist: <span :class="total_adds.length <= max_whitelist ? 'text-success' : 'text-danger'"> {{total_adds.length}} / {{max_whitelist}} </span></p>
                                    <p class="mb-0" v-show="total_wl_adds.length > addressWL.length">Total duplicate addresses:
                                        <span class="text-danger pointer" @click="showDuplicateAddress()">
                                            {{total_wl_adds.length  -  addressWL.length }} / {{total_wl_adds.length}}
                                            <i class="icofont-external-link text-size-12"></i>
                                        </span>
                                    </p>
                                    <p class="mb-0" v-show="total_adds.length > total_wl_adds.length">Total wrong addresses:
                                        <span class="text-danger pointer" @click="showWrongAddress()">
                                            {{total_adds.length  -  total_wl_adds.length }}
                                            <i class="icofont-external-link text-size-12"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div class="col-6 col-md-6 mb-3 mb-md-0 mt-2">
                                <button class="btn btn-outline-pushswap rounder w-100"  @click="$emit('closeAddedOn')">
                                    Cancel
                                </button>
                            </div>
                            <div class="col-6 col-md-6 mb-3 mb-md-0 mt-2">
                                <button v-show="!check" class="btn btn-pushswap rounder w-100" disabled>
                                    Add to Whitelist
                                </button>
                                <button v-show="check" class="btn btn-pushswap rounder w-100" @click="handleAddWhitelist()">
                                    Add to Whitelist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <van-overlay :show="confirmModal" class="teacup_modal">
                <div class="modal-dialog modal-dialog-centered modal-sm">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row justify-content-center">
                                <div class="col-12">
                                    <h4 class="text-center mb-3">Are you sure add whitelists?</h4>
                                </div>
                                <div class="col-12 col-md-6 mt-3">
                                    <button @click="confirmModal = false" class="btn btn-outline-pushswap rounder w-100">
                                        Cancel
                                    </button>
                                </div>
                                <div class="col-12 col-md-6 mt-3">
                                    <button class="btn btn-pushswap rounder w-100" @click="addWhitelist()">
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </van-overlay>
        </div>
        <ModalAirdropError :title="errorData.title"
                           :isVisible="errorData.isVisible"
                           :data="errorData.data" @visibleChange="errorData.isVisible = $event">
        </ModalAirdropError>
    </div>
</template>

<script>
import {utils} from "web3";
import ModalAirdropError from "@/components/modal/modal_airdrop_error.vue";
import {Overlay} from "vant";
export default {
    name: "add",
    components: {
        ModalAirdropError,
        [Overlay.name]: Overlay,
    },
    data() {
        return {
            whitelists: [],
            listAddress: [],
            addressWL: [],
            total_wl_adds: [],
            total_adds: [],
            check: false,
            confirmModal: false,
            max_whitelist: 500,
            errorData: {
                title: '',
                data: [],
                isVisible: false
            },
        }
    },
    methods: {
        addWhitelist() {
            this.confirmModal = false;
            if (this.addressWL.length === 0) {
                this.$toaster.error('Whitelist Address not null!');
                return;
            }
            this.$emit('closeAddedOn');
            this.$emit('whitelistAdded', this.addressWL);
            this.whitelists = [];
            this.total_wl_adds = [];
            this.addressWL = [];
        },
        async onChangeWl() {
            this.check = true;
            this.total_wl_adds = [];
            this.addressWL = [];
            this.total_adds = [];
            if (!this.whitelists || this.whitelists.trim() === '') {
                this.check = false
            } else {
                if (this.whitelists.split(/\n/).length > this.max_whitelist) {
                    // this.$toaster.error('Whitelists must be <= '+ this.max_whitelist);
                    this.check = false
                }
                let value = this.whitelists.split(/\n/);
                let _this = this;
                await value.map(function(val, key) {
                    val = val.trim();
                    val = val.split(" ")[0];
                    if (val.length) {
                        _this.total_adds.push(val);
                        if (utils.isAddress(val.toLowerCase())) {
                            _this.total_wl_adds.push(val);
                            val = utils.toChecksumAddress(val);
                            if ( _this.addressWL.indexOf(val) === -1) {
                                _this.addressWL.push(val);
                            }
                        }
                    }
                });
                if (this.addressWL.length === 0) {
                    this.$toaster.error('Whitelist Address not null!');
                    this.check = false
                    return false;
                }
            }
        },
        handleAddWhitelist() {
            this.confirmModal = true;
            let modal = document.getElementsByClassName("modal-backdrop fade show");
            if (modal.length > 0) {
                modal[0].remove();
            }
        },
        showWrongAddress() {
            this.errorData.title = "Wrong List";
            this.errorData.isVisible = true;
            this.errorData.data = this.total_adds.filter(item => {
                return !this.total_wl_adds.includes(item)
            });
        },
        showDuplicateAddress() {
            this.errorData.title = "Duplicate List";
            this.errorData.isVisible = true;
            let dupplicate_address = [];
            let address = [];
            this.total_wl_adds.forEach(item => {
                if (address.includes(item)) {
                    dupplicate_address.push(item);
                }
                address.push(item);
            })
            this.errorData.data = dupplicate_address;
        },
    }
}
</script>

<style scoped>

</style>
