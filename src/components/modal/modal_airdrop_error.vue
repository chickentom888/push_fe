
<template>
    <b-modal
        centered
        hide-footer
        hide-header
        hide-header-close
        v-model="isShow"
    >
        <div class="modal-header">
            <button
                @click="isShow = false"
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.786"
                    height="26.782"
                    viewBox="0 0 26.786 26.782"
                >
                    <g
                        id="Group_24168"
                        data-name="Group 24168"
                        transform="translate(-4960.994 -447.015)"
                        opacity="0.23"
                    >
                        <path
                            id="Path_1006"
                            data-name="Path 1006"
                            d="M4960.994,460.4a13.393,13.393,0,1,1,13.382,13.393A13.391,13.391,0,0,1,4960.994,460.4Zm13.405,11.306a11.3,11.3,0,1,0-11.32-11.294A11.272,11.272,0,0,0,4974.4,471.711Z"
                        ></path>
                        <path
                            id="Path_1007"
                            data-name="Path 1007"
                            d="M5068.889,554.836c-.192-.208-.3-.332-.415-.448-.818-.819-1.641-1.634-2.456-2.456a1.068,1.068,0,0,1-.123-1.559,1.056,1.056,0,0,1,1.59.1c.926.927,1.841,1.864,2.789,2.826.15-.137.264-.234.369-.339.831-.826,1.657-1.657,2.49-2.481a1.05,1.05,0,1,1,1.454,1.482c-.816.821-1.638,1.636-2.456,2.455-.106.107-.207.22-.345.367l2.454,2.428c.149.147.3.292.442.445a1.037,1.037,0,1,1-1.464,1.466c-.847-.829-1.68-1.673-2.52-2.509-.117-.116-.239-.228-.451-.43-.174.214-.316.421-.489.6q-1.147,1.161-2.31,2.306A1.041,1.041,0,1,1,5066,557.6q1.219-1.236,2.458-2.453A3.507,3.507,0,0,1,5068.889,554.836Z"
                            transform="translate(-95.859 -94.416)"
                        ></path>
                    </g>
                </svg>
            </button>
            <div class="modal-body text-center">
                <h3 class="mb-4">{{title}}</h3>
                <div class="scrollbar" id="style-3">
                    <table class="table tableblue1 tableblue styletable table-responsive">
                        <thead>
                        <tr>
                            <th scope="col" style="width: 5%">{{$t('common.0021')}}</th>
                            <th scope="col" style="width: 10%" class="text-left">
                                {{$t('common.0017')}}
                            </th>
                            <th scope="col" style="width: 10%" class="text-left">
                                {{$t('modal.01')}}
                            </th>
                        </tr>
                        </thead>
                        <tbody class="force-overflow">
                        <tr v-for="(item, index) in data.key" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td class="text-left">{{item  ? item : ''}} &nbsp;
                                <a class="text-secondary"
                                   href="javascript:void(0)"
                                   v-clipboard:copy="item"
                                   v-clipboard:success="onCopy"
                                   v-clipboard:error="onError">
                                    <i class="fa-regular fa-copy"></i>
                                </a></td>
                            <td class="text-left">{{item && data.data[item] ? data.data[item] : ''}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
import { $t } from '@/lang/i18n.js';
    export default {
        name: "AirdropError",
        props: {
            isVisible: {
                default: false
            },
            title: {
                default: 'Duplicate List'
            },
            data: {
                'data': {},
                'key': []
            }
        },
        data() {
            return {
                isShow: this.isVisible,
                address: []
            }
        },
        methods: {
            onCopy() {
                this.$toaster.success($t('common.11'));
            },
            onError() {
                this.$toaster.error($t('common.13'));
            },
            outSide() {
                this.isShow = false
                this.$emit('visibleChange', this.isShow);
            }
        },
        watch: {
            'isVisible': function (isShow) {
                this.isShow = isShow
            },
            'data': function (data) {
                this.address = data
            }
        }
    }
</script>

<style scoped>

</style>
