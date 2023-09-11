<template>
    <div>
        <ilo1></ilo1>
        <ilo2
            :presales="presales"
            :totalItems="totalItems"
            @showPresaleDetail="showModal"
            @filterByKeyword="filterByKeyword"
            @filterPresaleStatus="filterPresaleStatus">
        </ilo2>
        <div class="container">
            <Paginate
                v-show="presales.length > 0 && totalPage > 1"
                @pageChange="changePage($event)"
                :totalPage="totalPage"
                :page="page">
            </Paginate>
        </div>
        <IloModal
            v-if="isShow"
            :countShow="countShow"
            :isShow="isShow"
            :presale="presaleShow"
            @closeModal="isShow=false"
        />
    </div>
</template>

<script>
    import ilo1 from "@/components/ilo/ilo1";
    import ilo2 from "@/components/ilo/ilo2";
    import IloModal from "@/components/ilo/ilo_modal";
    import Paginate from "@/components/Paginate";

    export default {
        name: "ilo",
        components: {
            ilo1,
            ilo2,
            IloModal,
            Paginate
        },
        props: {
            presales: Array,
            features: Array,
            totalPage: Number,
            totalItems: Number,
            page: Number
        },
        data() {
            return {
                countShow: 0,
                active:{
                    token:"",
                    info:"active",
                    tab1:"tab-pane fade active show",
                    tab2:"tab-pane fade"
                },
                presaleShow: {},
                isShow: false,
                presaleLocked: [],
                tokens: [],
                presaleData: {},
            }
        },
        methods: {
            async showModal(presale) {
                console.log(this.countShow);
                this.presaleShow = presale;
                this.isShow = true;
                this.countShow++;
            },
            filterByKeyword(keyword) {
                this.$emit('filterByKeyword', keyword);
            },
            filterPresaleStatus(status) {
                this.$emit('filterPresaleStatus', status);
            },
            changePage(page) {
                this.$emit('pageChange', page);
            },
        },
    }
</script>

<style scoped>

</style>
