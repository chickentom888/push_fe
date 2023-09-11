<template>
    <div role="tabpanel" class="tab-pane fade active show" id="ilo_modal_chart">
        <div class="row row-no-gutter">
            <div class="col-4 ">
                <div class="dataitem hasborder">
                    <div class="thetext">
                        Fully diluted mcap
                    </div>
                    <div class="thenumber">
                        0$
                    </div>
                </div>
            </div>
            <div class="col-4 ">
                <div class="dataitem hasborder">
                    <div class="thetext">
                        Volume 24hr
                    </div>
                    <div class="thenumber">
                        0$
                    </div>
                </div>
            </div>
            <div class="col-4 ">
                <div class="dataitem">
                    <div class="thetext">
                        Price
                    </div>
                    <div class="thenumber text-gold">
                        0$
                    </div>
                </div>
            </div>

            <div class="col-4 my-3">
                <a class="btn btn-gradient small" href="#">
                    ILO
                </a>
            </div>
            <div class="col-8 my-3 text-right">
                Charts by TradingView
                <i class="icofont-question-circle"></i>
            </div>

            <div class="col-12">
                <img src="@/assets/images/ilo/demo_chart.png" alt="">
            </div>

            <div class="col-4">
                <div class="statsitem ">
                    30d: <strong class="up">0%</strong>
                </div>
            </div>
            <div class="col-4">
                <div class="statsitem ">
                    7d: <strong class="up">0%</strong>
                </div>
            </div>
            <div class="col-4">
                <div class="statsitem ">
                    1d: <strong class="up">0%</strong>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
    export default {
        name: 'Chart',
    }
</script>

<style scoped>
    div[class^="col-"] {
        padding: 0 15px 0 15px;
    }
    .row {
        margin: 0 -15px 0 -15px;
    }
</style>