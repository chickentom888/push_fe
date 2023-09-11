<template>
    <section id="ilo2_feature">
        <div class="container mb-4">
            <div class="row">
                <div class="col-12 mb-3">
                    <h2 class="text-center">Featured</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 col-md-4 col-lg-3 mb-3" v-for="(item, idx) in features" :key="idx">
                    <div class="card" @click="gotoPage(item, type)">
                        <div class="card-body">
                            <img v-if="item['cover_url']" :src="item && item['cover_url'] ? item['cover_url'] : ''" alt="">
                            <img v-else src="@/assets/images/ilo/cover_ps.png" alt="">
                            <strong>{{item && item['name'] ? item['name'] : ''}}</strong>
                            <div class="card-body">
                                <div class="card-line2">
                                    ATH
                                </div>
                                <div class="card-line1">
                                    {{item['ath'] ? formatNumber(item['ath'], 6) : '0.00'}}$
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ilo2_feature",
    props: ['features', 'type'],
    methods: {
        gotoPage(item, type) {
            if (item) {
                if (type === 'ilo') {
                    this.$router.push('/ilo/'+item['contract_address']);
                } else if (type === 'ilov') {
                    this.$router.push('/ilov/'+item['contract_address']);
                } else if (type === 'idov') {
                    this.$router.push('/idov/'+item['contract_address']);
                } else {
                    this.$router.push('/pool/'+item['contract_address']);
                }
            }
        },
        formatNumber(number, minPrecision = 2) {
            if (number === 0 || !number) {
                return '0.00';
            } else if (number < 1) {
                return number;
            }
            let val = (number / 1).toFixed(minPrecision).replace(',', '.')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
    }
}
</script>

<style scoped>

</style>
