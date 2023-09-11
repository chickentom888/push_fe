<template>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center text-dark">
            <button type="button" class="close" @click="hideModal()" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body px-4">
                <p>
                    <img src="@/assets/images/ic-share.svg" alt="">
                </p>
                <h3 class="mb-0">Withdraw Tokens</h3>
                <p >
                    <small>
                        Your coins are able unlocked to be fully withdrawn your wallet.
                    </small>
                </p>
                <label  class="d-block text-start">Withdraw</label>
                <div class="formwrapper mb-4">
                    <input type="text" readonly :value="lock ? lock['real_token_amount'] : ''" class="form-control" placeholder="Enter Wallet Address">
                    <button class="btn thesubdata p-0 text-secondary">{{lock ? lock['contract_symbol'] : ''}}</button>
                </div>
                <div class="formwrapper mb-4">
                    <label class="d-block text-start">Deposit to</label>
                    <input type="text" readonly :value="lock ? lock['address_withdraw'] : ''" class="form-control" placeholder="Enter Wallet Address">
                </div>
                <button type="button" class="btn btn-antex rounder w-100 mb-3"  @click="showConfirmModal()">Continue <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "withdraw",
    props: ['lock']
    ,
    data() {
        return {
        }
    },
    methods: {
        hideModal() {
            this.$emit('closeWithdraw');
        },
        showConfirmModal() {
            this.$emit('showConfirmWithdrawModal');
        },
    },
}
</script>

<style scoped>

</style>