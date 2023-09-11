<template>
    <div class="panel-content">
        <ul class="listbonus f-Nunito border-0 ml-2 mr-2 mt-3">
            <li class="mb-2">
                <span class="cl9F9 fs-14">Total Supply</span>
                <span class="cl9F9 fs-14">{{sale_token_total_supply ? numberWithCommas(sale_token_total_supply) : ''}}</span>
            </li>
            <li class="mb-2">
                <span class="text-right">Tokens locked</span>
                <span class="text-right">
                    <span class="fs-18 fw-bold">
                        {{locked_total_supply ? numberWithCommas(locked_total_supply) : ''}}
                    </span>
                </span>
            </li>
        </ul>

        <div class="countdown">
            <DoughnutChart :data="getChartData(locked_total_supply, sale_token_total_supply)" :options="options" :width="85" :height="85" :top="25"/>
        </div>
        <p class="fs-24 fw-bold text-center f-Nunito mb-0" v-if="sale_token_total_supply">{{(locked_total_supply * 100 / sale_token_total_supply).toFixed(2)}}%</p>
        <p class="fs-24 fw-bold text-center f-Nunito mb-0" v-else>0%</p>
        <p class="f-Nunito fs-16 text-center">Locked of total supply</p>

        <div class="locked-liqui p-0">
            <div class="d-flex justify-content-between pl-4 pr-4 pt-3">
                <span class="f-Nunito d-block mb-3">Amount</span>
                <span class="f-Nunito d-block mb-3">Unlock Date </span>
            </div>
            <div class="scrollbar" id="style-3">
                <div v-for="(data, index) in presaleLockedData" :key="index"
                     v-if="data.withdraw_status == 0"
                     class="locked-list">
                    <div class="boxcoint">
                        <div class="clearfix text-left">
                            <div class="top-upcoming m-0">
                                <img src="@/assets/images/icon-Locked.svg" alt="" class="img">
                                <div class="clearfix">
                                    <span class="fs-14 f-Nunito d-block">0$ Locked</span>
                                    <span class="fs-18 f-Nunito">{{numberWithCommas(data.amount)}} {{data.contract_name}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix text-right">
                            <div :id="'accordion'+data['lock_id']">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-1">
                                            <button class="btn f-Nunito p-0 collapsed"
                                                @click="dropToken(data['lock_id'])"
                                                data-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="collapse_1">
                                            {{ convertTimesCountdownUnlock(data['unlock_time'])['unlock'] }} <img src="@/assets/images/dot.svg">
                                            </button>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="progress mini">
                                <div class="progress-bar bg-down"
                                    :class="convertTimesProgressbar(data['unlock_time'], data['created_at']) < 50 ? 'bg-down' : 'bg-up'"
                                    role="progressbar"
                                    :style="'width:' + convertTimesProgressbar(data['unlock_time'], data['created_at']) + '%' "
                                    :aria-valuenow="convertTimesProgressbar(data['unlock_time'], data['created_at'])"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <!--{{indexArr[data['lock_id']]}}-->
                    <div
                        :class="indexArr[data['lock_id']] ? 'collapse content-locked show' : 'collapse content-locked'"
                    >
                        <div
                            class="d-flex justify-content-between align-items-center pl-40">
                            <span class="fs-14 f-Nunito">Lock id: {{data['lock_id']}}</span>
                            <span class="fs-14 f-Nunito">Owner: {{data['address_lock'] | contractCompact}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    import DoughnutChart from "@/components/doughnutChart/doughnutChart";
    import moment from "moment";
    import axios from "axios";
    export default {
        name: 'Tokenomics',
        components: {
            DoughnutChart
        },
        props: {
            presale: Object,
            presaleLocked: Array
        },
        data() {
            return {
                indexArr: {},
                presaleLockedData: this.presaleLocked,
                sale_token_total_supply: this.presale.sale_token_total_supply,
                locked_total_supply: 0,
                lockedNotWithdraw: 0,
                options: {
                    tooltips: {
                        enabled: false
                    },
                    cutoutPercentage: 80,
                    responsive: false,
                },
                dataChart: {
                    labels: false,
                    datasets: [{
                        data: [0, 100],
                        backgroundColor: [
                            '#F1E3AB',
                            '#253953',
                        ],
                        hoverOffset: 4,
                        borderWidth: 0
                    }]
                }
            }
        },
        methods: {
            dropToken(lockId) {
                this.$set(this.indexArr, lockId, !this.indexArr[lockId]);
            },
            convertTimesProgressbar(unlockTime, lockTime) {
                let now = new Date().getTime();
                now = parseInt(now / 1000);
                let timeDiff = unlockTime - lockTime;
                if (unlockTime <= now) {
                    return 0;
                }
                let fromLockToNow = now - lockTime;
                return Math.round(100 - (fromLockToNow / timeDiff * 100), 2);
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
            toggleShow(item) {
                item.isShow = !item.isShow;
                this.presaleLockedData = [...this.presaleLockedData];
            },
            getChartData(locked_total_supply, sale_token_total_supply) {
                let data = [0, 100];
                if (sale_token_total_supply) {
                    data[0] = Math.round((locked_total_supply * 100 / sale_token_total_supply));
                }
                return {
                    labels: false,
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#1F813E',
                            '#F1E3AB',
                        ],
                        hoverOffset: 4,
                        borderWidth: 0
                    }]
                }
            },
            getUnlockedDate(item) {
                let now = moment(new Date());
                let days = moment(item.unlock_time * 1000).diff(now, 'days');
                let months = moment(item.unlock_time * 1000).diff(now, 'months');
                if (months < 0 && days < 0) {
                    return '0 months';
                }
                if (months >= 0) {
                    return (months + 1).toString() + ' months'
                }
                return (days < 0 ? 0 : days.toString()  + 1) + ' days';
            },
            getProcess(item) {
                let now = new Date().getTime();
                let lockedTime = 100 - ((now - (item.unlock_time * 1000)) / now);
                if (lockedTime > 0) {
                    return lockedTime;
                }
                return 100;
            },
            convertTimesCountdownUnlock(unlock_time) {
                let now = new Date().getTime();
                now = parseInt(now / 1000);
                let timeDiff = unlock_time - now;
                let numberMinutes = parseInt(timeDiff / 60);
                let numberHours = parseInt(numberMinutes / 60);
                let numberDays = parseInt(numberHours / 24);
                let numberMonths = parseInt(numberDays / 30);
                let numberYears = parseInt(numberMonths / 12);
    
                if (numberDays >= 1 && numberDays < 30) {
                    return {
                        "code": 1,
                        "unlock": numberDays + (numberDays > 1 ? " Days" : " Day")
                    }
                }
    
                if (numberMonths >= 1 && numberMonths < 12) {
                    if (numberDays >= 15 && numberMonths < 11) {
                        numberMonths += 1;
                    }
                    return {
                        "code": 1,
                        "unlock": numberMonths + (numberMonths > 1 ? " Months" : " Month")
                    }
                }
    
                if (numberYears >= 1) {
                    return {
                        "code": 1,
                        "unlock": numberYears + (numberYears > 1 ? " Years" : " Year")
                    }
                }
    
                if (numberHours >= 1 && numberHours < 24) {
                    return {
                        "code": 1,
                        "unlock": numberHours + (numberHours > 1 ? " Hours" : " Hour")
                    }
                }
    
                if (numberMinutes >= 1 && numberMinutes < 60) {
                    return {
                        "code": 2,
                        "unlock": numberMinutes + (numberMinutes > 1 ? " Minutes" : " Minute")
                    }
                } else {
                    if (timeDiff > 0) {
                        return {
                            "code": 1,
                            "unlock": "<1 Minute"
                        }
                    } else {
                        return {
                            "code": 1,
                            "unlock": "0 Minute"
                        }
                    }
    
                }
            },
        },
        watch: {
            presaleLocked: function (data) {
                this.presaleLockedData = data;
                this.locked_total_supply = 0;
                data.forEach(item => {
                    item.isShow = false;
                    this.locked_total_supply += item.amount;
                    if(item.withdraw_status == 0) {
                        this.lockedNotWithdraw += item.amount;
                    }
                });
                this.getChartData(this.locked_total_supply);
            }
        }
    }
</script>

<style scoped>
ol, ul {
    padding-left: 0rem;
}
</style>
