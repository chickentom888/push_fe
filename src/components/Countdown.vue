<template>
    <strong class="text-dark"> {{ time_display }}</strong>
</template>

<script>
export default {
    name: "Countdown",
    props: ['end'],
    data() {
        return {
            time_display: '00:00:00'
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
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                if (distance < 0) {
                    clearInterval(seedRoundInterval);
                } else {
                    self.time_display = (days > 0 ? days + "D: " : '') + hours + "H: " + minutes + "M: " + seconds + "S";
                }
            }, 1000);
        }
    }
}
</script>

<style scoped>

</style>
