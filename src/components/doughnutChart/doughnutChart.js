import { Doughnut } from "vue-chartjs";
export default {
  name: "DoughnutChart",
  extends: Doughnut,
  props: ['data', 'options'],
  mounted() {
    this.renderChart(this.data, this.options)
  },
  methods: {

  },
  watch: {
    data: function() {
      if(this._chart && typeof this._chart.destroy === 'function'){
        this._chart.destroy();
      }
      this.renderChart(this.data, this.options)
    }
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            var value = context.parsed || 0
            label += value.toLocaleString()
            return label
          }
        }
      }
    }
  }
}
