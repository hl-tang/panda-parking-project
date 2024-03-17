<template>
  <div ref="chart" style="width: 600px; height: 300px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    unit: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.renderChart();
  },
  methods: {
    renderChart() {
      const option = {
        xAxis: {
          type: 'category',
          data: this.data.map(item => item.parking_lot_name),
          axisLabel:{
            rotate: 315,
            interval: 0,
            fontSize: 10
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}' + this.unit, // 単位を追加
            interval: 0
          }
        },
        series: [{
          data: this.data.map(item => item.value),
          type: 'bar'
        }]
      };
      this.chart.setOption(option);
    }
  },
  watch: {
    data() {
      this.renderChart();
    }
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>
