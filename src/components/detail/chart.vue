<template>
    <div class="col-12">
        <div class="row justify-content-center align-items-center">
<!--            <div class="col-12 mb-3">
                <div class="btn-success text-center alert w-100" v-if="presale['current_status'] === 2">
                    This project has raised successfully!
                </div>
                <div class="btn-danger text-center alert w-100" v-else-if="presale['current_status'] === 3">
                    <span class="">The project has failed!</span>
                </div>
                <div class="btn-secondary text-center alert w-100" v-else>
                    <span class="">The project is progressing!</span>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-5 mb-3" v-if="showReceiveBaseToken(presale)">
                Address to receive base token: &nbsp;
                <strong>{{presale['fund_address'] ? truncateAddress(presale['fund_address']) : truncateAddress(presale['presale_owner_address'])}}</strong>&nbsp;
                <a href="javascript:void(0)" class="text-dark"  @click="editModal = true">
                    <i class="fa-solid fa-pen-to-square"></i>
                </a>
            </div>

            <div class="col-12 col-md-6 col-lg-4 text-end mb-3" v-if="showForceFail(presale)">
                <a href="javascript:void(0)" class="btn btn-danger shadow rounder text-14"  @click="confirmModal = true">
                    Force Fail
                    <i class="fa-solid fa-circle-exclamation"></i>
                </a>
            </div>-->
            <div class="col-12 col-md-9 col-lg-9 mb-3">
                <doughnut-chart :data="dataChart" :options="chartOptions" :width="200" :height="200"/>
            </div>
        </div>
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="editModal"
        >
            <div class="modal-content p-4">
                <div class="modal-header">
                    <button
                        @click="editModal = false"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <img src="@/assets/images/ic-close.svg" alt="">
                    </button>
                </div>
                <div class="modal-body px-4">
                    <p>
                        <img src="@/assets/images/icons/alert_warning.png" alt="">
                    </p>
                    <h3 class=" text-success">Do you want to Force Fail the project?</h3>

                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn-gray btn-bluebig w-100 mt-5"  @click="editModal = false">Cancel</button>
                        </div>
                        <div class="col-6">
                            <button type="button" class="linear-blue btn-blue btn-bluebig w-100 mt-5" @click="forceFail()">Confirm <img src="@/assets/images/dot-l-white.svg" class="ml-2"></button>
                        </div>
                    </div>
                </div>
                <div class="modal-body px-4">

                    <h3 class=" text-center text-success mb-4">Edit Address</h3>

                    <div class="formwrapper">
                        <input type="text" @change="checkAddress()" class="form-control f-Nunito fs-18" placeholder="Address to receive base token..." v-model="fundAddress">
                        <small class="text-green d-block mt-2" v-if="errorEditMsg">{{errorEditMsg}}</small>
                    </div>

                    <div class="row mt-4">
                        <div class="col-6">

                            <button type="button" class="btn-gray btn-bluebig w-100 mt-5"  @click="editModal = false">Cancel</button>
                        </div>
                        <div class="col-6">
                            <button type="button" :disabled="errorEditMsg !== ''" class="linear-blue btn-blue btn-bluebig w-100 mt-5 " @click="editAddress()" >Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="confirmModal"
        >
            <div class="modal-content p-4">
                <div class="modal-header">
                    <button
                        @click="confirmModal = false"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <img src="@/assets/images/ic-close.svg" alt="">
                    </button>
                </div>
                <div class="modal-body px-4">
                    <p>
                        <img src="@/assets/images/icons/alert_warning.png" alt="">
                    </p>
                    <h3 class=" text-success">Do you want to Force Fail the project?</h3>

                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn-gray btn-bluebig w-100 mt-5"  @click="confirmModal = false">Cancel</button>
                        </div>
                        <div class="col-6">
                            <button type="button" class="linear-blue btn-blue btn-bluebig w-100 mt-5" @click="forceFail()">Confirm <img src="@/assets/images/dot-l-white.svg" class="ml-2"></button>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <h3 class="mb-4 text-center">Edit time</h3>

                    <form class="formcontrol active">
                        <div class="form-group">
                            <label>Start Date</label>
                            <div class="formwrapper">
                                <input type="datetime-local" v-model="start_time" name="" value=""
                                       class="form-control f-Nunito fs-18">
                            </div>
                        </div>
                        <div class="form-group">
                            <label>End Date</label>
                            <div class="formwrapper">
                                <input type="datetime-local" v-model="end_time" name="" value=""
                                       class="form-control f-Nunito fs-18">
                            </div>
                        </div>
                        <a href="#" class="linear-blue btn-blue btn-bluebig w-100 mt-5" d="">
                            Save
                            <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </a>
                    </form>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import DoughnutChart from "@/components/doughnutChart/doughnutChart";
    import Web3, {utils} from "web3";
    import {settingsContract} from "@/utils/const";
    import {truncateAddress} from '@/utils/helpers';
    import {mapGetters, mapState} from "vuex";
    import {ethers} from "ethers";
    import axios from "axios";

    export default {
        name: "chart",
        props: ['presale', 'type'],
        components: {
            DoughnutChart,
        },
        data() {
            return {
                start_time: '',
                end_time: '',
                confirmModal: false,
                editModal: false,
                errorEditMsg: '',
                fundAddress: '',
                allowForceFail: true,
//                doChartOptions: {
//                    legend: {
//                        position: 'right'
//                    },
//                    cutoutPercentage: 75,
//                    responsive: false,
//                    tooltips: {
//                        enabled: false
//                    }
//                },
                chartOptions: {
                    radius: 30,
                    tooltips: {
                        enabled: true
                    },
                    cutoutPercentage: 55,
                    responsive: true,
                    animation: {
                        animateScale: true
                    }
                },
            }
        },
        computed: {
            ...mapState(['web3Modal']),
            ...mapGetters({
                exchange: 'exchange'
            }),
            dataChart() {
                let data = [
                    this.presale['amount'],
                    this.presale['sale_token_liquidity_amount'],
                    this.presale['sale_token_fee_amount'],
                    this.presale['sale_token_free_amount']

                ];
                let backgroundColor = [
                    '#9751BE',
                    '#1381B2',
                    '#5CB8E1',
                    '#38EC8D',
                ];
                let labels = [
                    'Presale',
                    'Liquidity',
                    'Fee',
                    'Other',
                ];
                if (this.presale['project_type'] === 'sale' || this.presale['project_type'] === 'pool') {
                    data = [
                        this.presale['amount'],
                        this.presale['sale_token_fee_amount'],
                        0,
                        this.presale['sale_token_free_amount']
                    ]
                    labels = [
                        'Sale 2',
                        'Fee 2',
                        'Locked 2',
                        'Other 2',
                    ];
                    if (this.presale['project_type'] === 'pool') {
                        labels[0] = 'Pool';
                    }
                }
                return {
                    labels: labels,
                    datasets: [{
                        data: data,
                        hoverBorderColor: [
                            '#9751BE',
                            '#1381B2',
                            '#5CB8E1',
                            '#38EC8D',
                        ],
                        backgroundColor: backgroundColor,
                        hoverOffset: 4,
                        borderWidth: 0
                    }]
                }
            }
        },
        methods: {
            checkAddress() {
                let address = this.fundAddress.trim();
                if (utils.isAddress(address.toLowerCase())) {
                    this.errorEditMsg = '';
                    return true;
                } else {
                    this.errorEditMsg = 'Address invalid!';
                    return false;
                }
            },
            showForceFail(presale) {
                if (presale['current_status'] === 3) {
                    return false;
                } else if (presale['project_type'] === 'presale') {
                    return presale['liquidity_at'] === 0
                } else if (presale['project_type'] === 'sale') {
                    return presale['active_claim_at'] === 0
                } else {
                    return false;
                }
            },
            showReceiveBaseToken(presale) {
                if (presale['current_status'] === 3) {
                    return false;
                } else if (presale['project_type'] === 'presale') {
                    return presale['liquidity_at'] === 0
                } else if (presale['project_type'] === 'sale') {
                    return presale['active_claim_at'] === 0
                } else {
                    return false;
                }
            },
            truncateAddress(address) {
                return truncateAddress(address);
            },
            async editAddress() {
                let address = this.fundAddress.trim();
                if (!utils.isAddress(address.toLowerCase())) {
                    this.$toaster.error('Address invalid!')
                    return;
                }
                if (this.presale['current_status'] === 3) {
                    this.$toaster.error('The project has failed!')
                    return;
                }
                if (this.presale['project_type'] === 'presale' && this.presale['liquidity_at'] !== 0) {
                    this.$toaster.error('The project is not allowed to update!')
                    return;
                } else if (this.presale['project_type'] === 'sale' && this.presale['active_claim_at'] !== 0) {
                    this.$toaster.error('The project is not allowed to update!')
                    return;
                }

                const isProduction = process.env.NODE_ENV === 'production';
                let obj = {
                    'from': this.web3Modal['account'],
                };
                if (this.exchange['platform'] === 'polygon') {
                    // get max fees from gas station
                    let maxFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                    let maxPriorityFeePerGas = ethers.BigNumber.from(40000000000) // fallback to 40 gwei
                    try {
                        const { data } = await axios({
                            method: 'get',
                            url: isProduction
                                ? 'https://gasstation-mainnet.matic.network/v2'
                                : 'https://gasstation-mumbai.matic.today/v2',
                        })
                        maxFeePerGas = ethers.utils.parseUnits(
                            Math.ceil(data.fast.maxFee) + '',
                            'gwei'
                        )
                        maxPriorityFeePerGas = ethers.utils.parseUnits(
                            Math.ceil(data.fast.maxPriorityFee) + '',
                            'gwei'
                        )
                        obj['gasPrice'] = maxFeePerGas;
                    } catch {
                        // ignore
                    }
                }

                try {
                    let web3 = new Web3(window.ethereum);
                    let presaleContractAddress = this.presale['contract_address'];
                    let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
                    if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                        presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
                    }
                    let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
                    this.$store.commit("setPopupWallet", true);
                    let result = await presaleContract.methods.updateFundAddress(this.fundAddress).send(obj).on('transactionHash', function (hash) {
                        // alert("Please wait a minute to complete your transaction!");
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        this.editModal = false;
                        this.$toaster.success('Success!')
                    } else {
                        //Error
                    }
                } catch (ex) {
                    console.log(ex);
                    this.$store.commit("setPopupWallet", false);
                }
            },
            async forceFail() {
                if (this.presale['current_status'] !== 2 || this.presale['active_claim_at'] > 0 || this.presale['project_type'] !== 'sale') {
                    return;
                }
                try {
                    let web3 = new Web3(window.ethereum);
                    let presaleContractAddress = this.presale['contract_address'];
                    let presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
                    let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);
                    this.$store.commit("setPopupWallet", true);
                    let result = await presaleContract.methods.forceFail().send({
                        from: this.web3Modal['account']
                    }).on('transactionHash', function (hash) {
                        // alert("Please wait a minute to complete your transaction!");
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        this.confirmModal = false;
                        this.$toaster.success('Success!');
                        this.$emit('fetchData');
                    } else {
                        //Error
                    }
                    this.allowForceFail = false;
                } catch (ex) {
                    console.log(ex);
                    this.$store.commit("setPopupWallet", false);
                }

            }
        },
        created() {
            this.fundAddress = this.presale['fund_address'] ? this.presale['fund_address'] : this.presale['presale_owner_address']
        }
    }
</script>

<style scoped>
</style>
