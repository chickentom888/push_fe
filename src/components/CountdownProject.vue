<template>
    <div class="digit-wrapper mb-5">
        <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> {{ d }} </span>
            <span class="fs-14 cl9F9"> Days </span>
        </div>
        <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> {{h}} </span>
            <span class="fs-14 cl9F9"> Hours </span>
        </div>
        <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> {{m}} </span>
            <span class="fs-14 cl9F9"> Minutes </span>
        </div>
        <div class="digit f-Nunito">
            <span class="fs-24 fw-bold d-block"> {{s}} </span>
            <span class="fs-14 cl9F9"> Seconds </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CountdownProject",
    props: ['end'],
    data() {
        return {
            d: '00',
            h: '00',
            m: '00',
            s: '00',
        }
    },
    computed: {
    },
    mounted: function () {
        this.countDownTime();
    },
    methods: {
        countDownTime() {
            var self = this;
            let seedRoundCountDown = this.end * 1000;
            let seedRoundInterval = setInterval(function () {
                var date = new Date();
                var now_utc = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),
                    date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
                let now = new Date(now_utc).getTime();
                let distance = seedRoundCountDown - now;
                if (seedRoundCountDown <= 0) {
                    clearInterval(seedRoundInterval);
                    return;
                }
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                self.d = days < 10 ? '0' + days : days;
                self.h = hours < 10 ? '0' + hours : hours;
                self.m = minutes < 10 ? '0' + minutes : minutes;
                self.s = seconds < 10 ? '0' + seconds : seconds;
                if (distance <= 0) {
                    clearInterval(seedRoundInterval);
                    self.d = '00';
                    self.h = '00';
                    self.m = '00';
                    self.s = '00';
                }
            }, 1000);
        }
    }
}
</script>

<style scoped>

</style>
