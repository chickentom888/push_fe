<template>
    <div>
        <ilo
            :presales="presaleFilter"
            :totalPage="totalPage"
            :features="tokens"
            :totalItems="totalItems"
            :page="params.p"
            @filterByKeyword="filterByKeyword"
            @filterPresaleStatus="filterPresaleStatus"
            @pageChange="changePage">
        </ilo>
        <!-- -----Loading---- -->
        <loading
            :active.sync="showLoading"
            :can-cancel="true"
            :is-full-page="fullPage"
        ></loading>
    </div>
</template>

<script>
import Ilo from "@/components/ilo/ilo";
import axios from 'axios';
import {mapGetters} from "vuex";
import Loading from "vue-loading-overlay";
export default {
    components:{
        Ilo,
        Loading
    },
    data(){
        return{
            showLoading: false,
            fullPage: true,
            presales: [],
            searchQuery: '',
            presaleFilter: [],
            tokens: [],
            totalPage: 1,
            totalItems: 0,
            params: {
                p: 1,
                limit: 20
            }

        }
    },
    computed: {
        connectInfo() {
            return this.$store.state.connect;
        },
        ...mapGetters({
            exchange: 'exchange'
        })
    },
    methods:{
        async getListPresale() {
            const network = process.env.NODE_APP_ENV === 'production' ? 'main' : 'test';
            let platform = 'bsc';
            let userAccount = JSON.parse(localStorage.getItem('user'));
            if (!userAccount) return;
            let headers = {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userAccount['token'],
            }
            let exchange_key = this.exchange  ? this.exchange['exchange_key'] : 'undefined'
            let url = `/api/presale/get-list?sale_type=ilo&network=${network}&platform=${platform}&exchange_key=${exchange_key}`;
            if (Object.keys(this.params).length > 0) {
                for (let key in this.params) {
                    url += `&${key}=${this.params[key]}`;
                }
            }

            this.presales = [];
            this.presaleFilter = [];
            this.showLoading = true;
            await axios.get(url, {headers: headers}).then(res => {
                this.showLoading = false;
                if (res.data && res.data.data) {
                    this.totalPage = res.data.optional.total_page;
                    this.totalItems = res.data.optional.row_count;
                    this.presales = res.data.data || [];
                    this.presaleFilter = this.presales;
                } else {
                    this.totalPage = 0;
                    this.totalItems = 0;
                    this.presales = [];
                    this.presaleFilter = [];
                }

            }, () => {
                this.showLoading = false;
            });
        },
        filterByKeyword(keyword) {
            keyword = keyword.trim();
            if (keyword) {
                this.params.q = keyword;
            } else {
                delete this.params.q;
            }
            this.getListPresale();
        },
        filterPresaleStatus(status) {
            this.params.p = 1;
            this.totalPage = 1;
            let params = {};
            if (status || status === 0) {
                params.current_status = status;
            } else {
                delete this.params['current_status'];
            }
            this.params = Object.assign(this.params, params);
            this.getListPresale();
        },
        changePage(page) {
            this.params.p = page;
            this.getListPresale();
        }
    },
    created() {
        let current_status = this.$route.query.current_status;
        // if (!current_status) {
        //     this.params.current_status = 0;
        // }
        this.getListPresale();
    },
    watch: {
        'exchange': function () {
            this.getListPresale();
        },
    }
};
</script>

<style scoped>
.selectPancake{
    top: 12px;
}
.poiter {
    cursor: pointer;
}
.select_options{
    padding-left: 0px!important;
}
.content-musk{
	padding: 20px;
}
</style>