<template>
    <div>
        <FilterPresale
            :totalItems="totalItems"
            @filterByKeyword="filterByKeyword"
            @filterPresaleStatus="filterPresaleStatus"
        />
        <div class="box-Upcoming">
            <div class="container" data-aos="fade-up" data-aos-delay="200">
                <span class="decor5"> <img alt="" src="@/assets/images/decor1.png"></span>
                <span class="decor18"> <img alt="" src="@/assets/images/decor2.png" class="w-75"></span>
                <span class="decor6"> <img alt="" src="@/assets/images/decor2.png"></span>
                <div class="row">
                    <!-- ------com----- -->
                    <div class="col-md-4" data-aos="zoom-in" data-aos-delay="500" v-for="(presale, index) in presales" :key="index">
                        <project :type="'ilo'"
                                 :presale="presale"
                                 @showModal="$emit('showPresaleDetail', presale)"
                        />
                    </div>
                </div>
                <span class="decor7"> <img src="@/assets/images/decor1.png"></span>
            </div>
        </div>
    </div>
</template>

<script>
import project from "@/components/ilo/project";
import FilterPresale from "@/components/ilo/filterPresale";

export default {
    name: "ilo2",
    components: {
        project,
        FilterPresale,
    },
    props: {
        presales: Array,
        totalItems: Number
    },
    data() {
        return {
            currentStatus: 0,
            status: [0, 1, 2, 3]
        }
    },
    methods: {
        filterByKeyword(keyword) {
            this.$emit('filterByKeyword', keyword)
        },
        filterPresaleStatus(status) {
            this.$emit('filterPresaleStatus', status)
        },
    }
}
</script>

<style scoped>
</style>
