<template>
  <div class="box-dex push-lock mb-5">
        <div class="container" data-aos="fade-up" data-aos-delay="200">
            <span class="decor5"> <img src="@/assets/images/decor1.png"></span>
            <span class="decor18"> <img src="@/assets/images/decor2.png" class="w-75"></span>

            <div class="box-swap position-relative">
                <span class="decor19"> <img src="@/assets/images/decor2.png"></span>
                <div class="top-swap m-0 pl-5 pr-5 d-flex align-items-center justify-content-between">
                    <div class="top-upcoming m-0">
                        <img src="@/assets/images/avar1.png" alt="" class="img">
                        <span class="name fs-24 m-0">Ai Musk </span>
                        <router-link to="/update-your-project" class="ml-2"><img src="@/assets/images/icon-edits.svg"> </router-link>
                    </div>
                    <div class="clearfix f-Nunito d-flex">
                        <span class="mr-3">0x2345...5Ra3 <a href="#"><img src="@/assets/images/icon-save-small.svg"
                                    class="ml-1"></a></span>
                        <span>BscScan <a href="#"><img src="@/assets/images/icon-growth-black.svg" class="ml-1"></a></span>
                    </div>
                </div>

                <div class="creat-ilo">

                    <div class="d-flex mt-5">
                        <div class="clearfix f-Nunito fs-18">
                            <span>Address to receive base token:</span>
                            <span class="fw-bold">0xeF997...5bb</span>
                            <button @click="modalEditAdress = true" href="#" class="ml-2" data-toggle="modal" data-target="#editaddress"><img
                                    src="@/assets/images/icon-edits.svg"> </button>
                        </div>
                        <button type="submit" class="btn-btn-small offset-2">
                            Force fail </button>
                    </div>

                    <div class="mb-5">
                        <div>
                            <PieChartVue class="mt-5 mb-3 margin-auto" />
                        </div>
                    </div>
                    <form class="formcontrol createsale">
                        <div class="form-row">
                            <div class="form-group col-md-5">
                                <label class="fs-18">Start Date</label>
                                <div class="formwrapper">
                                    <input type="datetime-local" v-model="start_time" name="" value=""
                                        class="form-control fw-bold f-Nunito fs-18">
                                </div>
                            </div>
                            <div class="form-group col-md-5">
                                <label class="fs-18">End Date</label>
                                <div class="formwrapper">
                                    <input type="datetime-local" v-model="end_time" name="" value=""
                                        class="form-control fw-bold f-Nunito fs-18">
                                </div>
                            </div>
                            <div class="form-group col-md-2">
                                <label class="fs-18">&nbsp;</label>
                                <button @click="modalEditTime = true" class="mt-4 d-block ml-3 pointer" data-toggle="modal" data-target="#edittime"><img
                                        src="@/assets/images/icon-edits.svg"> </button>
                            </div>
                        </div>

                    </form>

                    <ul class="listdata mb-4">
                        <li>
                            <div class="countdown">
                                <svg viewBox="-50 -50 100 100" stroke-width="7">
                                    <circle r="45"></circle>
                                    <circle r="45" stroke-dasharray="282.7433388230814"
                                        stroke-dashoffset="282.7433388230814px"></circle>
                                </svg>
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">75%</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Lock 11 Months</p>
                        </li>
                        <li>
                            <div class="countdown">
                                <svg viewBox="-50 -50 100 100" stroke-width="7">
                                    <circle r="45"></circle>
                                    <circle r="45" stroke-dasharray="282.7433388230814"
                                        stroke-dashoffset="282.7433388230814px"></circle>
                                </svg>
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">0</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Participants</p>
                        </li>
                        <li>
                            <div class="countdown">
                                <svg viewBox="-50 -50 100 100" stroke-width="7">
                                    <circle r="45"></circle>
                                    <circle r="45" stroke-dasharray="282.7433388230814"
                                        stroke-dashoffset="282.7433388230814px"></circle>
                                </svg>
                            </div>
                            <p class="fs-24 fw-bold text-center f-Nunito mb-0">95%</p>
                            <p class="f-Nunito fs-16 text-center cl9F9">Tokenomics</p>
                        </li>
                    </ul>
                    <p class="text-center mb-5"> <a href="#" class="linear-blue btn-blue btn-bluebig w-50">
                            Add Liquid <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </a>
                    </p>
                    <div class="push-box mb-5">
                        <ul class="list">
                            <li class="fs-16 mb-2">
                                <span class="cl9F9 fs-18">Total token sold</span>
                                <span class="cl000 fw-bold">500 BULL</span>
                            </li>
                            <li class="fs-16 mb-2">
                                <span class="cl9F9 fs-18">Total amount to be received</span>
                                <span class="cl000 fw-bold">1 BNB</span>
                            </li>
                        </ul>

                    </div>
                    <div class="clearfix mb-5">
                        <div class="d-flex justify-content-between mb-3">
                            <span class="fw-bold f-Nunito fs-24">Vesting Info</span>
                            <button @click="modalEditVesting = true" href="#" data-toggle="modal" data-target="#editvesting">
                                <img src="@/assets/images/icon-edits.svg">
                            </button>
                        </div>
                        <table class="table tableblue1 tableblue styletable">
                            <thead>
                                <tr>
                                    <th scope="col" style="width: 20%;">
                                        #</th>
                                    <th scope="col" style="width: 20%;" class="text-left">Percent</th>
                                    <th scope="col" style="width: 30%;" class="text-left">
                                        Time </th>
                                    <th scope="col" style="width: 30%;" class="text-left">
                                        Date (mm/dd/yyyy)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1 </td>
                                    <td class="text-left">50%</td>
                                    <td class="text-left">08:34:00 </td>
                                    <td class="text-left">05/06/2022</td>
                                </tr>
                                <tr class="bg-gray">
                                    <td>2 </td>
                                    <td class="text-left">50%</td>
                                    <td class="text-left">08:34:00 </td>
                                    <td class="text-left">05/06/2022</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="d-flex mb-5">
                        <a href="#" class=" linear-blue btn-blue mr-3 fill w-50 text-center radius6">
                            Claim sale Token <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </a>
                        <a href="#" class="btn-gray1 btn-blue btn-bluebig w-50 ml-2 mr-2">
                            200 BUL
                        </a>
                    </div>
                    <div class="clearfix mb-5">
                        <p class="fw-bold f-Nunito fs-24 mb-5">History of getting back tokens sold</p>
                        <p class="text-center">
                            <img src="@/assets/images/noHistory.svg">
                        </p>
                        <p class="text-center f-Nunito cl9F9 fs-18">No History</p>
                    </div>
                </div>

            </div>
            <span class="decor6"> <img src="@/assets/images/decor1.png"></span>
        </div>
        <!-- -----modal edit time----- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="modalEditTime"
        >
        <div class="modal-content p-4">
            <div class="modal-header">
            <button
                @click="close()"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <img src="@/assets/images/ic-close.svg" alt="">
            </button>
            </div>
            <div class="modal-body">
                    <h3 class="mb-4 text-center">Edit time</h3>

                    <form class="formcontrol active">
                        <div class="form-group">
                            <label>Start Date</label>
                            <div class="formwrapper">
                                <input type="datetime-local" v-model="end_time" name="" value=""
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
        <!-- ----modal edit address----- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="modalEditAdress"
        >
        <div class="modal-content p-4">
            <div class="modal-header">
            <button
                @click="close()"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <img src="@/assets/images/ic-close.svg" alt="">
            </button>
            </div>
            <div class="modal-body">
                    <h3 class="mb-4 text-center">Edit address to rece...</h3>

                    <div class="formcontrol active">
                        <label class="f-Nunito fs-14">Address to receive base token:</label>
                        <input type="text" placeholder="" class="form-control heigh54 fw-bold"
                            value="0xc1e31a6106b36E571ce0AA40E615352C6ba0EB9c">


                        <a href="#" class="linear-blue btn-blue btn-bluebig w-100 mt-5">
                            Save
                            <img src="@/assets/images/dot-l-white.svg" class="ml-2">
                        </a>
                    </div>
                </div>
        </div>
        </b-modal>
        <!-- ----modal edit vesting----- -->
        <b-modal
            centered
            hide-footer
            hide-header
            hide-header-close
            v-model="modalEditVesting"
        >
        <div class="modal-content p-4">
            <div class="modal-header">
            <button
                @click="close()"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <img src="@/assets/images/ic-close.svg" alt="">
            </button>
            </div>
            <div class="modal-body">
                    <h3 class="mb-4 text-center">Edit Vesting Info</h3>
                    <span class="fw-bold f-Nunito offset-3 fs-18 cl086 mb-2 d-block">15%</span>
                    <div class="listvesting f-Nunito">
                        <div class="item">
                            <span class="w-60 mr-2 f-Nunito text-left">St1</span>
                            <input type="text" class="form-control w-60 mr-2 no-bg" value="0%" placeholder="">
                            <div class="formwrapper">
                                <input type="datetime-local" v-model="start_time" name="" value=""
                                    class="form-control f-Nunito fs-18">
                            </div>
                            <button type="button" class="btn-none ml-2"><img src="@/assets/images/icon-trash.svg"> </button>
                        </div>
                        <div class="item">
                            <span class="w-60 mr-2 f-Nunito text-left">St2</span>
                            <input type="text" class="form-control w-60 mr-2" value="0%" placeholder="">
                            <div class="formwrapper">
                                <input type="datetime-local" v-model="start_time" name="" value=""
                                    class="form-control f-Nunito fs-18">
                            </div>
                            <button type="button" class="btn-none ml-2"><img src="@/assets/images/icon-trash.svg"> </button>
                        </div>
                        <div class="item">
                            <span class="w-60 mr-2 f-Nunito text-left">St3</span>
                            <input type="text" class="form-control w-60 mr-2" value="0%" placeholder="">
                            <div class="formwrapper">
                                <input type="datetime-local" v-model="start_time" name="" value=""
                                    class="form-control f-Nunito fs-18">
                            </div>
                            <button type="button" class="btn-none ml-2"><img src="@/assets/images/icon-trash.svg"> </button>
                        </div>
                    </div>
                </div>
        </div>
        </b-modal>
    </div>
</template>

<script>
import PieChartVue from "@/components/PieChart.vue";
export default {
    components: { PieChartVue },
    data(){
        return{
            modalEditTime: false,
            modalEditAdress: false,
            modalEditVesting: false,
            start_time:"",
            end_time:""
        }
    },
    methods:{
        close(){
            this.modalEditAdress = false
            this.modalEditTime = false
            this.modalEditVesting = false
        }
    }
}
</script>

<style>

</style>