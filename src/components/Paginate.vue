<template>
    <div class="row mt-5 index1 position-relative" >
        <div class="col-sm-12 col-md-7">
            <div class="d-flex justify-content-end">
                <a
                    href="javascript:void(0)"
                    @click=" p < totalPage ? nextPage() : ''"
                    class="btn-gray btn-blue pt-2 pb-2">
                    Next page
                    <svg
                        class="ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="15.133"
                        viewBox="0 0 26.645 15.133"
                    >
                        <path
                            id="Path_88594"
                            data-name="Path 88594"
                            d="M-1180.526,1698.888h-.575q-9.273,0-18.546,0a1.67,1.67,0,0,1-1.793-1.665,1.667,1.667,0,0,1,1.546-1.657c.166-.011.333-.006.5-.006h18.857c-.146-.163-.235-.27-.333-.368-.891-.893-1.789-1.779-2.673-2.678a1.583,1.583,0,0,1-.4-1.723,1.6,1.6,0,0,1,1.3-1.1,1.538,1.538,0,0,1,1.414.436c2,1.983,3.991,3.967,5.966,5.971a1.574,1.574,0,0,1,0,2.256q-2.962,3.006-5.969,5.968a1.615,1.615,0,0,1-2.319-.035,1.627,1.627,0,0,1-.009-2.32c.875-.908,1.779-1.788,2.67-2.681C-1180.794,1699.18-1180.7,1699.071-1180.526,1698.888Z"
                            transform="translate(1201.44 -1689.661)"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="col-sm-12 col-md-5">
            <div class="paginate">
                Page
                <input
                    type="text"
                    placeholder=""
                    class="form-control"
                    @blur="changePage()"
                    v-model="p"
                    style="width: 90px"
                />
                <span>of {{totalPage}}</span>
                <div class="page-item">
                    <button class="next" href="javascript:void(0)" @click=" p>1 ? prevPage() : ''">
                        1
                        <img alt="" src="@/assets/images/next.svg"/>
                    </button>
                    <button class="prev" @click=" p < totalPage ? nextPage() : ''">
                        2
                        <img alt="" src="@/assets/images/prev.svg"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Paginate",
    props: {
        totalPage: {
            type: Number,
            default: 1
        },
        page: {
            type: Number,
            default: 1
        },
        options: {
            firstPage: {
                type: Boolean,
                default: false
            },
            endPage: {
                type: Boolean,
                default: false
            }
        }
    },
    data() {
        return {
            p: this.page,
            firstPage: false,
            endPage: false,
        }
    },
    methods: {
        changePage(page) {
            if (page) {
                this.p = page;
            }
            this.$emit("pageChange", this.p);
        },
        prevPage() {
            if (this.p <= 1) return;
            let page = this.p - 1;
            this.changePage(page)
        },
        nextPage() {
            if (this.p >= this.totalPage) return;
            let page = this.p + 1;
            this.changePage(page);
        },
        changeFirstPage() {
            let page = 1;
            this.changePage(page);
        },
        changeEndPage() {
            let page = this.totalPage;
            this.changePage(page);
        }
    },
    watch: {
        page: function (page) {
            this.p = page;
        }
    }
}
</script>

<style scoped>
.index1{
    z-index: 1;
}
</style>
