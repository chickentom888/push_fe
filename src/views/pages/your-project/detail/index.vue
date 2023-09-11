<template>
    <main class="ilopage py-5">
        <section id="ilo_detail1">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 mb-3">
                        <a href="/your-project" class="text-green">
                            <i class="fa-solid fa-arrow-left"></i>
                            Back
                        </a>
                    </div>
                    <div class="col-12 col-lg-10">
                        <div class="card card-teacup">
                            <header_detail :presaleDetail="presale" :type="'yourProject'"></header_detail>
                            <div class="card-body">
                                <div class="row justify-content-center align-items-center">
                                    <ChartDetail :presale="presale" @fetchData="fetchPresaleDetail()"></ChartDetail>
                                    <div class="col-12 my-3">
                                    </div>
                                    <div class="col-12 col-lg-4 text-center mb-3">
                                        <h5>Start Date</h5>
                                        <div class="card-body bg-secondary">
                                            <h3 class="m-0">
                                                {{ momentDate(presale.start_time * 1000) }}
                                            </h3>
                                        </div>

                                    </div>
                                    <div class="col-12 col-md-1">

                                    </div>

                                    <div class="col-12 col-lg-4 text-center  mb-3">
                                        <h5>End Date</h5>

                                        <div class="card-body bg-secondary">
                                            <h3 class="m-0">
                                                {{ momentDate(presale.end_time * 1000) }}
                                            </h3>
                                        </div>

                                    </div>

                                    <div class="col-12 col-md-1 text-end">
                                        <a href="javascript:void(0)" @click="editTimeModal = true" v-if="showEditTime">
                                            <h3><i class="fa-solid fa-pen-to-square text-secondary"></i></h3>
                                        </a>
                                    </div>
                                    <div class="col-12 my-3">

                                    </div>

                                    <div class="col-4 col-md-4 col-lg-2 mb-3 text-center" v-if="presale.project_type !== 'sale'">
                                        <doughnut-chart
                                            id="ilo_detail1_chart_lock"
                                            class="mx-auto"
                                            :data="chartOther([presale.liquidity_percent, 100 - presale.liquidity_percent]).data"
                                            :options="chartOther([presale.liquidity_percent, 100 - presale.liquidity_percent]).options"
                                            :width="85" :height="85"/>
                                        <img class="ilo_modal_tokenomics_chart_deco" src="@/assets/images/lock/ilo_modal_tokenomics_chart_deco_1.png" alt="">

                                        <h3 class="m-0" >{{ presale.liquidity_percent }}%  </h3>
                                        <p class="text-secondary"> Lock {{ lockedTime(presale['lock_period']) }}</p>
                                    </div>

                                    <div class="col-4 col-lg-2 mb-3 text-center" :class="presale.project_type === 'sale' ? 'col-md-6' : 'col-md-4'">
                                        <doughnut-chart
                                            id="ilo_detail1_chart_participants"
                                            class="mx-auto"
                                            :data="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).data"
                                            :options="chartOther([presale.num_buyers, presale.max_buyer - presale.num_buyers]).options"
                                            :width="85" :height="85"/>
                                        <img class="ilo_modal_tokenomics_chart_deco" src="@/assets/images/lock/ilo_modal_tokenomics_chart_deco_2.png" alt="">

                                        <h3 class="m-0">{{ presale.num_buyers }}  </h3>
                                        <p class="text-secondary"> Participants</p>
                                    </div>
                                    <div class="col-4  col-lg-2 mb-3 text-center" :class="presale.project_type === 'sale' ? 'col-md-6' : 'col-md-4'">
                                        <doughnut-chart
                                            id="ilo_detail1_chart_tokenomics"
                                            class="mx-auto"
                                            :data="chartOther([presalePercentNum, 100 - presalePercentNum]).data"
                                            :options="chartOther([presalePercentNum, 100 - presalePercentNum]).options"
                                            :width="85" :height="85"/>
                                        <img class="ilo_modal_tokenomics_chart_deco" src="@/assets/images/lock/ilo_modal_tokenomics_chart_deco_3.png" alt="">

                                        <h3 class="m-0">{{ presalePercent }}%  </h3>
                                        <p class="text-secondary"> Tokenomics</p>
                                    </div>
                                    <div class="col-12">
                                    </div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12 col-lg-4 text-center my-4 mx-auto" v-if="presale.project_type !== 'sale' && presale['current_status'] === 2 && presale['liquidity_at'] === 0">
                                                <button v-if="displayLiquidty" class="btn btn-pushswap rounder w-100" href="javascript:void(0)" @click="addLiquidity()">
                                                    Add Liquidity <i class="fa-solid fa-right-long"></i>
                                                </button>
                                            </div>
                                            <div class="col-12 col-lg-4 text-center my-4 mx-auto" v-if="isActiveVesting">
                                                <button @click="activeVesting()" class="btn btn-pushswap rounder w-100" href="javascript:void(0)">
                                                    Active Claim <i class="fa-solid fa-right-long"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                    </div>

                                    <div class="col-12 col-lg-9">
                                        <div class="card-body bg-secondary pmd-5">
                                            <table class="table table-borderless m-0">
                                                <tbody>
                                                <tr>

                                                    <td class="text-secondary">Total token sold</td>
                                                    <td class="text-end"><strong>{{numberWithCommas(presale['total_token_sold'])}} {{presale['sale_token_symbol']}}</strong>  </td>
                                                </tr>

                                                <tr>

                                                    <td class="text-secondary">Total amount to be received</td>
                                                    <td class="text-end"><strong> {{numberWithCommas(presale['total_base_collected'])}} {{presale['base_token_symbol']}}</strong>  </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div class="col-6 col-lg-4 mt-5" v-if="presale['active_vesting']">
                                        <h3 >Vesting Info</h3>
                                    </div >
                                    <div class="col-1" v-if="presale['active_vesting']">
                                    </div>
                                    <div class="col-5 col-lg-4 mt-5 text-end" v-if="presale['active_vesting'] ">
                                        <a href="javascript:void(0)"
                                           v-if="presale['active_claim_at'] === 0"
                                           @click="showModalVesting = true"
                                           class="text-center h4 text-dark">
                                            <i class="fa-solid fa-pen-to-square"></i>
                                        </a>
                                    </div>
                                    <div class="col-12 col-lg-9" v-if="presale['active_vesting']">
                                        <table class="table table-striped table-borderless">
                                            <thead class="table-success">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Percent</th>
                                                <th scope="col">Time </th>
                                                <th scope="col" class="text-end">Date (mm/dd/yyyy)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(item, idx) in period" :key="idx">
                                                <th scope="row">{{ idx + 1 }}</th>
                                                <td>{{ percent[idx] }}%</td>
                                                <td>{{ momentDate(period[idx] * 1000, 1) }}</td>
                                                <td class="text-end"> {{ momentDate(period[idx] * 1000, 2) }}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="col-12" v-if="presale.current_status === 3">
                                        <div class="row justify-content-center">
                                            <div class="col-12 col-lg-4 text-center my-4">
                                                <button v-show="withdrawSaleToken" @click="ownerWithdrawSaleToken()" class="btn btn-pushswap rounder w-100"> Claim sale Token <i class="fa-solid fa-right-long"></i></button>
                                                <button v-show="!withdrawSaleToken" disabled class="btn btn-secondary rounder w-100"> Claim sale Token <i class="fa-solid fa-right-long"></i></button>
                                            </div>
                                            <div class="col-12 col-lg-1">
                                            </div>
                                            <div class="col-12 col-lg-4 text-end pt-2 my-4">

                                                <h3>{{ formatPrice(presale['amount'] + (presale.project_type === 'sale' ? 0 : presale['sale_token_liquidity_amount']) + presale['sale_token_fee_amount'])}} {{presale.sale_token_symbol}}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 col-lg-9 mt-5" v-if="(presale.current_status === 2 && presale.liquidity_at == 0) || presale.current_status === 3">
                                        <p class="text-center">History of getting back tokens sold</p>
                                        <div v-show="presale && !presale['owner_withdraw_sale_token']" class="text-center text-secondary py-5">
                                            <img src="@/assets/images/icon/nodata.png" alt="">
                                            <p>No Data</p>
                                        </div>
                                        <div v-show="presale && presale['owner_withdraw_sale_token'] === 1" class="text-center text-secondary py-5">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th scope="col">No.</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Symbol</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td>
                                                        {{moment(presale['withdraw_sale_token_at']*1000)}}
                                                    </td>
                                                    <td>
                                                        {{(presale['amount'] + (presale.project_type === 'sale' ? 0 : presale['sale_token_liquidity_amount']) + presale['sale_token_fee_amount']).toFixed(1)}}
                                                    </td>
                                                    <td>
                                                        {{presale['sale_token_symbol']}}
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <van-overlay :show="editTimeModal" class="teacup_modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content text-dark">
                    <button type="button" class="close" @click="editTimeModal= false; resetTime()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body px-4">

                        <h3 class="text-center text-success mb-4">Edit Date</h3>

                        <label>Start Date</label>
                        <div class="formwrapper mb-4">

                            <input :readonly="!showEditStartTime" type="datetime-local" @blur="changeStartTime()" class="form-control" v-model="start_time" :placeholder="$t('placeholder.19')" >
                            <small class="text-green" v-if="error.startTime">{{error.startTimeMsg}}</small>
                        </div>
                        <label>End Date</label>
                        <div class="formwrapper mb-4">

                            <input type="datetime-local" @blur="changeEndTime()" class="form-control" v-model="end_time" :placeholder="$t('placeholder.20')" >
                            <small class="text-green" v-if="error.endTime">{{error.endTimeMsg}}</small>

                        </div>


                        <div class="row">
                            <div class="col-6">

                                <button type="button" class="btn btn-outline-pushswap rounder w-100 "  @click="editTimeModal = false;  resetTime()">Cancel</button>
                            </div>
                            <div class="col-6">
                                <button type="button" :disabled="error.endTime || error.startTime" class="btn btn-pushswap rounder w-100" @click="editTime()" >Save</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </van-overlay>
        <van-overlay :show="showModalVesting" class="teacup_modal">
            <vesting v-if="presale['active_vesting']" :vestings="saleVestings" @closeModal="showModalVesting = false" @vestingWasUpdated="updateVestingInfo($event)"></vesting>
        </van-overlay>
    </main>
</template>

<script>
    import DoughnutChart from "@/components/doughnutChart/doughnutChart";
    import moment from "moment";
    import axios from 'axios';
    import Web3 from "web3";
    import {settingsContract} from "@/utils/const";
    import {mapGetters} from "vuex";
    import CommonMixin from "@/mixins/CommonMixin"
    import AuthMixin from "@/mixins/AuthMixin"
    import header_detail from "@/components/detail/header_detail";
    import ChartDetail from "@/components/detail/chart";
    import {Overlay} from "vant";
    import Vesting from "@/components/pool/modal-project/vesting";
    import {ethers} from "ethers";
    // check owner presale continue
    export default {
        name: "detailYourPresale",
        components: {
            DoughnutChart,
            header_detail,
            ChartDetail,
            [Overlay.name]: Overlay,
            Vesting
        },
        mixins: [CommonMixin, AuthMixin],
        data() {
            return {
                countdownKey: 0,
                editTimeModal: false,
                userLog:null,
                displayLiquidty: false,
                isActiveVesting: false,
                withdrawSaleToken: false,
                percent: [],
                period: [],
                saleVestings: [],
                showModalVesting: false,
                presale: null,
                isShow: false,
                start_time: 0,
                end_time: 0,
                error: {
                    startTime: false,
                    endTime: false,
                    startTimeMsg: '',
                    endTimeMsg: '',
                }
            }
        },
        computed: {
            ...mapGetters({
                exchange: 'exchange',
                account: 'account',
                presales: 'presales',
            }),
            web3Modal() {
                return this.$store.state.web3Modal;
            },
            contractCompact() {
                let contractAddress = this.presale.sale_token_address;
                contractAddress = contractAddress.substr(0, 6) + '...' + contractAddress.substr(contractAddress.length - 4, 4);
                return contractAddress;
            },
            presalePercent() {
                if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                    return parseFloat(((this.presale.amount + this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
                }
                return parseFloat(((this.presale.amount +
                    this.presale.sale_token_liquidity_amount +
                    this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100).toFixed(1);
            },
            presalePercentNum() {
                if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                    return ((this.presale.amount + this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100;
                }
                return ((this.presale.amount +
                    this.presale.sale_token_liquidity_amount +
                    this.presale.sale_token_fee_amount) / this.presale.sale_token_total_supply) * 100;
            },
            showEditTime() {
                return this.presale['current_status'] !== 2 && this.presale['current_status'] !== 3
            },
            showEditStartTime() {
                let time = new Date().getTime();
                let start_time = this.presale['start_time']*1000;
                return start_time > time;
            }
        },
        methods: {
            changeStartTime() {
                let start_time = new Date(this.start_time).getTime();
                let end_time = new Date(this.end_time).getTime();
                let now  = new Date().getTime();
                if (start_time < now) {
                    this.error.startTime = true;
                    this.error.startTimeMsg = 'The current time cannot be earlier than the start time!';
                    return;
                }
                if (end_time < start_time) {
                    this.error.startTime = true;
                    this.error.startTimeMsg = 'The end time cannot be earlier than the start time!';
                    return;
                }
                let time = end_time -  start_time;
                let timeBetween = 7*2*24*60*60*60*1000; // 2 week milisecond
                if (time > timeBetween) {
                    this.error.startTime = true;
                    this.error.startTimeMsg = 'Maximum start and end time is 2 weeks!';
                    return;
                }
            },
            changeEndTime() {
                let start_time = new Date(this.start_time).getTime();
                let end_time = new Date(this.end_time).getTime();
                if (end_time < start_time) {
                    this.error.endTime = true;
                    this.error.endTimeMsg = 'The end time cannot be greater than the start time!';
                    return;
                }
                let time = end_time -  start_time;
                let timeBetween = 7*2*24*60*60*60*1000; // 2 week milisecond
                if (time > timeBetween) {
                    this.error.endTime = true;
                    this.error.endTimeMsg = 'Maximum start and end time is 2 weeks!';
                    return;
                }
            },
            resetTime() {
                this.error = {
                    startTime: false,
                    endTime: false,
                    startTimeMsg: '',
                    endTimeMsg: '',
                }
                this.start_time = moment(this.presale['start_time']*1000).format("YYYY-MM-DDTkk:mm");
                this.end_time = moment(this.presale['end_time']*1000).format("YYYY-MM-DDTkk:mm");
            },
            async updateVestingInfo(data) {
                try {
                    let vestingPeriod = [];
                    let vestingPercent = []; // *10
                    for (let i = 0; i < data.length; i++) {
                        if (data[i]['error_time'] || data[i]['error_percent']) {
                            return;
                        }
                        let time = moment(data[i]['time']).unix();
                        vestingPeriod.push(time);
                        vestingPercent.push(data[i]['percent'] * 10);
                    }

                    if (!vestingPeriod || !vestingPercent) {
                        return;
                    }
                    let web3 = new Web3(window.ethereum);
                    let contractAddress = this.presale['contract_address'];
                    let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
                    if (this.presale['project_type'] && this.presale['project_type'] === 'sale') {
                        presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
                    }
                    let saleContract = new web3.eth.Contract(settingsContract[presale_name_version], contractAddress);

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

                    this.$store.commit("setPopupWallet", true);
                    let result = await saleContract.methods.updateVestingInfo(vestingPeriod, vestingPercent).send(obj).on('transactionHash', function (hash) {
                        // alert("Please wait a minute to complete your transaction!");
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        // alert("Error");
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        this.showModalVesting = false;
                        this.$toaster.success('Success!');
                        this.fetchPresaleDetail();
                    } else {
                        //error
                    }
                } catch (ex) {
                    console.log(ex);
                    this.$store.commit("setPopupWallet", false);
                }
            },
            async editTime() {
                //validate startTime & endTime
                if (this.presale['current_status'] === 2 || this.presale['current_status'] === 3) {
                    this.$toaster.error('Can not edit time!')
                    return;
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
                    let start_time = parseInt((new Date(this.start_time)).getTime() / 1000);
                    let end_time = parseInt((new Date(this.end_time)).getTime() / 1000);
                    if (start_time === this.presale['start_time'] && end_time === this.presale['end_time']) {
                        this.$store.commit("setPopupWallet", false);
                        this.editTimeModal = false;
                        this.$toaster.success('Success!')
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

                    let result = await presaleContract.methods.updateTime(start_time, end_time).send(obj).on('transactionHash', function (hash) {
                        // alert("Please wait a minute to complete your transaction!");
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        this.$toaster.success('Success!')
                        this.editTimeModal = false;
                        this.fetchPresaleDetail();
                    } else {
                        //Error
                    }
                } catch (ex) {
                    console.log(ex);
                    this.$store.commit("setPopupWallet", false);
                }
            },
            numberWithCommas(x) {
                x = x.toString();
                let array = x.split('.');
                let y = 0;
                if (array[0]) {
                    y = array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
                if (array[1]) {
                    y = y+ '.'+array[1];
                }
                return y !== 0 ? y : x;
            },
            async fetchPresaleDetail() {
                this.$store.commit("setPopupProcessing", true)
                const res = await axios.get('/api/presale/detail', {
                    params: {
                        contract_address: this.$route.params.contract_address
                    }
                });
                this.$store.commit("setPopupProcessing", false)
                if (!res.data || !res.data.data) {
                    this.$router.push("/404");
                    return;
                }

                this.presale = res.data.data;
                this.start_time = moment(this.presale['start_time']*1000).format("YYYY-MM-DDTkk:mm");
                this.end_time = moment(this.presale['end_time']*1000).format("YYYY-MM-DDTkk:mm");

                if (this.account && this.account != this.presale.presale_owner_address) {
                    this.$router.push("/404");
                }
                if (this.presale['project_type'] === 'sale') {
                    this.checkActiveVesting();
                } else {
                    this.checkAddLiquid();
                }
                if (this.presale['current_status'] === 3 && this.presale['owner_withdraw_sale_token'] !== 1) {
                    this.withdrawSaleToken = true;
                }
                this.saleVestings = [];
                if (this.presale['active_vesting']) {
                    this.percent = this.presale['list_vesting_percent'];
                    this.period = this.presale['list_vesting_period'];
                    for (let i = 0; i < this.presale['list_vesting_percent'].length; i++) {
                        let obj = {
                            'percent': this.presale['list_vesting_percent'][i],
                            'time': moment(this.presale['list_vesting_period'][i]*1000).format('YYYY-MM-DDThh:mm'),
                            'error_time': false,
                            'error_percent': false,
                            'msg_percent': '',
                            'msg_time': '',
                        }
                        this.saleVestings.push(obj);
                    }
                }
            },
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace(',', '.')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            chartOther(data) {
                return {
                    data: {
                        labels: false,
                        datasets: [{
                            data: data,
                            backgroundColor: [
                                '#1F813E',
                                '#d4d4d4',
                            ],
                            hoverOffset: 4,
                            borderWidth: 0
                        }]
                    },
                    options: {
                        cutoutPercentage: 80,
                        responsive: false,
                        tooltips: {
                            enabled: false
                        }
                    }
                }
            },
            lockedTime(time) {
                time = parseInt(time);
                let lockPeriod = '1 month';
                if (time === 60 * 60 * 24 * 30) {
                    lockPeriod = '1 month';
                } else if (time === 60 * 60 * 24 * 30 * 2) {
                    lockPeriod = '2 months';
                } else if (time === 60 * 60 * 24 * 30 * 3) {
                    lockPeriod = '3 months';
                } else if (time === 60 * 60 * 24 * 30 * 6) {
                    lockPeriod = '6 months'
                } else if (time === 60 * 60 * 24 * 30 * 12) {
                    lockPeriod = '1 year'
                } else if (time === 60 * 60 * 24 * 30 * 12 * 2) {
                    lockPeriod = '2 years'
                } else if (time === 60 * 60 * 24 * 30 * 12 * 3) {
                    lockPeriod = '3 years'
                } else if (time === 60 * 60 * 24 * 30 * 12 * 4) {
                    lockPeriod = '4 years'
                } else if (time === 60 * 60 * 24 * 30 * 12 * 5) {
                    lockPeriod = '5 years'
                }
                return lockPeriod;
            },
            momentDate(date, time = '') {
                if (time === 1) {
                    return moment(date).format('HH:mm');
                } else if (time === 2) {
                    return moment(date).format('MM/DD/Y');
                } else {
                    return moment(date).format('MM/DD/Y HH:mm:ss');
                }
            },
            moment(date) {
                return moment(date).format('MM/DD/YYYY');
            },
            checkAddLiquid() {
                if (this.presale['current_status'] !== 2 || this.presale['project_type'] === 'sale') {
                    return false;
                }
                let now = parseInt(new Date().getTime() / 1000);
                if (this.presale['liquidity_at'] === 0 && ((this.presale.success_at < this.presale.end_time && this.presale.success_at !== 0) || (this.presale.success_at <= this.presale.end_time && this.presale.success_at !== 0 && now > this.presale.end_time ))) {
                    this.displayLiquidty = true;
                } else {
                    this.displayLiquidty = false;
                }
            },
            checkActiveVesting() {
                if (this.presale['current_status'] !== 2 || this.presale['project_type'] === 'presale') {
                    return false;
                }
                let now = parseInt(new Date().getTime() / 1000);
                if (this.presale['active_claim_at'] === 0 && ((this.presale.success_at < this.presale.end_time && this.presale.success_at !== 0) || (this.presale.success_at <= this.presale.end_time && this.presale.success_at !== 0 && now > this.presale.end_time ))) {
                    this.isActiveVesting = true;
                } else {
                    this.isActiveVesting = false;
                }
            },
            async addLiquidity() {
                if (!this.displayLiquidty) {
                    return;
                }
                let web3 = new Web3(window.ethereum);
                let presaleContractAddress = this.presale['contract_address'];
                let presale_name_version = 'ABI_PRESALE_' + this.presale['contract_version'];
                let presaleContract = new web3.eth.Contract(settingsContract[presale_name_version], presaleContractAddress);

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

                this.$store.commit("setPopupWallet", true);
                try {
                    let result = await presaleContract.methods.addLiquidity().send(obj).on('transactionHash', function (hash) {
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        // alert("Success");
                        this.displayLiquidty = false;
                        this.$toaster.success('Success!')
                    } else {
                        this.$store.commit("setPopupError", {
                            isShow: true,
                            messsage: 'Add liquidity fail!'
                        })
                    }
                    this.$store.commit("setPopupWallet", false);
                } catch (e) {
                    console.log(e)
                    this.$store.commit("setPopupWallet", false);
                }

            },
            async ownerWithdrawSaleToken() {
                if (this.presale['current_status'] !== 3 || this.presale['total_token_withdrawn'] > 0) {
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
                    let result = await presaleContract.methods.ownerWithdrawSaleToken().send(obj).on('transactionHash', function (hash) {
                        // alert("Please wait a minute to complete your transaction!");
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        this.$toaster.success('Success!')
                        const res = await axios.get('/api/presale/detail', {
                            params: {
                                contract_address: this.$route.params.contract_address
                            }
                        });
                        this.presale.withdraw_sale_token_at = res.data.data.withdraw_sale_token_at;
                        this.presale.amount = res.data.data.amount;
                        this.presale.sale_token_liquidity_amount = res.data.data.sale_token_liquidity_amount;
                        this.presale.sale_token_fee_amount = res.data.data.sale_token_fee_amount;
                        this.presale.sale_token_symbol = res.data.data.sale_token_symbol;
                        this.presale.owner_withdraw_sale_token = res.data.data.owner_withdraw_sale_token;
                    } else {
                        //Error
                    }
                    this.withdrawSaleToken = false;
                } catch (ex) {
                    console.log(ex);
                    this.$store.commit("setPopupWallet", false);
                }

            },
            async activeVesting() {
                //todo active vesting
                if (!this.isActiveVesting) {
                    return;
                }
                let web3 = new Web3(window.ethereum);
                let saleContractAddress = this.presale['contract_address'];
                let presale_name_version = 'ABI_SALE_' + this.presale['contract_version'];
                let saleContract = new web3.eth.Contract(settingsContract[presale_name_version], saleContractAddress);

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

                this.$store.commit("setPopupWallet", true);
                try {
                    let result = await saleContract.methods.activeClaim().send(obj).on('transactionHash', function (hash) {
                    }).on('confirmation', function (confirmationNumber, receipt) {
                    }).on('receipt', function (receipt) {
                    }).on('error', function (error, receipt) {
                        console.log("error", error, receipt);
                    });
                    this.$store.commit("setPopupWallet", false);
                    if (result.status) {
                        // alert("Success");
                        this.isActiveVesting = false;
                        this.$toaster.success('Success!')
                    } else {
                        this.$store.commit("setPopupError", {
                            isShow: true,
                            messsage: 'Active claim fail!'
                        })
                    }
                    this.$store.commit("setPopupWallet", false);
                } catch (e) {
                    console.log(e)
                    this.$store.commit("setPopupWallet", false);
                }

            },
        },
        created() {
            this.fetchPresaleDetail();
        },
        watch: {
            'presales': function (presales) {
                if (presales.length === 0) return;
                presales.some(presale => {
                    if (this.presale && presale._id.$oid === this.presale._id.$oid) {
                        this.presale = presale;
                        this.countdownKey = this.countdownKey + 1;
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>
