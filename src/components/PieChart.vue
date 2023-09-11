<div>
    <canvas ref="chart"></canvas>
</div>

<script>
import { Pie } from 'vue-chartjs'
export default {
extends: Pie,
mounted () {
    this.renderChart({
        labels: ['Presale', 'Liquidity', 'Fees', 'Locked', 'Unlocked'],
        datasets: [{
                    label: '# of Votes',
                    data: [50, 30, 3, 25, 20],
                    borderWidth: 1,
                    backgroundColor: [
                        '#9751BE',
                        '#1381B2',
                        '#5CB8E1',
                        '#15E28E',
                        '#354A64'
                    ],
                }]
    }, {responsive: true, maintainAspectRatio: false})
}
}
</script>
<style scoped>

</style>




