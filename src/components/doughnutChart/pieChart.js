import {Pie} from "vue-chartjs";
export default {
  name: "PieChart",
  extends: Pie,
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
  }
}
