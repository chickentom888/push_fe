<template>
    <div class="experience d-flex align-items-center mb-5">

        <div class="container mt-5" data-aos="fade-up" data-aos-delay="200">
            <div class="row">
                <div class="col-md-2  col-sm-2 align-items-center d-flex">
                    <span id="chekced" class="fs-18 fw-bold f-Nunito clfff">{{ totalItems }} {{type === 'idov' ? 'sales' : 'presales'}}</span>
                </div>
                <div class="col-md-3 col-sm-4" v-if="type !== 'idov'">
                    <div class="select-boxstyle">
                        <div class="select-box__current" tabindex="2">
                            <div class="select-box__value">
                                <input class="select-box__input" type="radio" id="1" value="1" name="pancake_swap_v2"
                                       checked="checked" />
                                <p class="select-box__input-text"><img src="@/assets/images/pancakes.svg" class="mr-2"> Pancakeswap V2</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3  col-sm-4">
                    <div class="select-boxstyle">
                        <div class="select-box__current" tabindex="2">
                            <div class="select-box__value">
                                <input class="select-box__input" type="radio" id="3" value="3" name="Ben"
                                       checked="checked" />
                                <p class="select-box__input-text"><img src="@/assets/images/icon-all.svg" class="mr-2"> All</p>
                            </div>
                            <div class="select-box__value">
                                <input class="select-box__input" type="radio" id="4" value="4" name="Ben" />
                                <p class="select-box__input-text"><img src="@/assets/images/icon-upcoming.svg" class="mr-2">
                                    Upcoming</p>
                            </div>
                            <div class="select-box__value">
                                <input class="select-box__input" type="radio" id="5" value="5" name="Ben" />
                                <p class="select-box__input-text"><img src="@/assets/images/icon-live.svg" class="mr-2"> Live</p>
                            </div>
                            <div class="select-box__value">
                                <input class="select-box__input" type="radio" id="6" value="6" name="Ben" />
                                <p class="select-box__input-text"><img src="@/assets/images/icon-successsmall.svg" class="mr-2">
                                    Success</p>
                            </div>
                            <div class="select-box__value">
                                <input class="select-box__input" type="radio" id="7" value="7" name="Ben" />
                                <p class="select-box__input-text"><img src="@/assets/images/icon-failed.svg" class="mr-2"> Failed
                                </p>
                            </div><img class="select-box__icon" src="@/assets/images/dot-b.svg" alt="Arrow Icon"
                                       aria-hidden="true" />
                        </div>
                        <ul class="select-box__list">
                            <li @click="setFilterValue('')">
                                <label class="select-box__option" for="3" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-all.svg" class="mr-2">All</label>
                            </li>
                            <li @click="setFilterValue(0)">
                                <label class="select-box__option" for="4" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-upcoming.svg" class="mr-2">Upcoming</label>
                            </li>
                            <li @click="setFilterValue(1)">
                                <label class="select-box__option" for="5" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-live.svg" class="mr-2">Live</label>
                            </li>
                            <li @click="setFilterValue(2)">
                                <label class="select-box__option" for="6" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-successsmall.svg" class="mr-2">Success</label>
                            </li>
                            <li @click="setFilterValue(3)">
                                <label class="select-box__option" for="7" aria-hidden="aria-hidden">
                                    <img src="@/assets/images/icon-failed.svg" class="mr-2">Failed</label>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="col-md-4">
                    <input
                        type="text"
                        class="form-control f-Nunito heigh54"
                        :placeholder="$t('placeholder.06')"
                        v-model="keyword"
                        @keyup="filterKeyBy($event)"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "FilterPresale",
        props: {
            type: {
                type: String,
                default: 'ilo'
            },
            totalItems: Number
        },
        data() {
            return {
                isShowFilter: {
                    network: true,
                    status: true,
                    keyword: true,
                },
                keyword: '',
                dropdowns: [
                    {
                        id: '',
                        title: 'All',
                        icon: '<img src="@/assets/images/icon-all.svg" class="mr-2">'
                    },
                    {
                        id: 0,
                        title: 'Upcoming',
                        icon: '<img src="@/assets/images/icon-upcoming.svg" class="mr-2">'
                    },
                    {
                        id: 1,
                        title: 'Live',
                        icon: '<img src="@/assets/images/icon-live.svg" class="mr-2">'
                    },
                    {
                        id: 2,
                        title: 'Success',
                        icon: '<img src="@/assets/images/icon-successsmall.svg" class="mr-2">'
                    },
                    {
                        id: 3,
                        title: 'Failed',
                        icon: '<img src="@/assets/images/icon-failed.svg" class="mr-2">'
                    }
                ],
                currentValue: {
                    id: '',
                    title: 'All',
                    icon: '<img src="@/assets/images/icon-all.svg" class="mr-2">'
                }
            }
        },
        computed: {
            ...mapGetters({
                exchange: 'exchange'
            }),
            connectInfo() {
                return this.$store.state.connect;
            },
        },
        methods: {
            filterKeyBy(event) {
                if (event.keyCode == 13 || !event.target.value) {
                    this.$emit('filterByKeyword', event.target.value);
                }
            },
            searchFilter() {
                this.$emit('filterByKeyword', this.keyword);
            },
            setFilterValue(filter) {
                this.currentValue = filter;
                this.$emit('filterPresaleStatus', filter);
            },
            changeExchange(item) {
                this.$store.dispatch('connect');
                this.$store.commit('setExchange', item);
            }
        },
        mounted() {
            let current_status = this.$route.query.current_status;
            if (current_status === 'all') {
                this.currentValue = this.dropdowns[0];
            }
        },
        watch: {
            'exchange': function () {
                this.keyword = '';
                this.$emit('filterPresaleStatus', this.currentValue.id);
            }
        }
    }
</script>

<style scoped>

</style>
