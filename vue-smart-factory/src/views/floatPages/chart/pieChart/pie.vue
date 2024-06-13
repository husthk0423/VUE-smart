<template>
  <div class="pie">
    <div
      :id="pieObj.idPie"
      class="chart-container"
    ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
// 放在data中应该会造成一定程度的卡顿
// let pieChart = null
export default {
  name: 'pie',
  props: {

    pieObj: {
      type: Object,
      default: function () {
        return {
          idPie: 'idPieTop',
          data: 60
        }
      }
    }
  },
  data() {
    return {
      currentObj: {
        title: '轻微',
        color: '#44EAFE'
      },
      pieChart: null,
      pieOptions: {
        title: [{
          text: '轻微',
          x: 'center',
          top: '35%',
          textStyle: {
            color: '#FFFFFF',
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'PingFang SC',
            textShadow: '0px 2px 4px rgba(93, 114, 131, 0.35)'
          }
        }],
        backgroundColor: 'transparent',
        polar: {
          radius: ['70%', '100%'],
          center: ['50%', '50%']
        },
        angleAxis: {
          max: 100,
          show: false
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            // barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(194,221,243,0.4)'
            },
            data: [0],
            coordinateSystem: 'polar',
            z: 0
          },
          {
            name: '',
            type: 'pie',
            startAngle: 90,
            radius: ['82.5%', '87.5%'],
            hoverAnimation: false,
            center: ['50%', '50%'],

            data: [
              {
                name: '',
                value: 60,
                label: {
                  show: false
                },
                itemStyle: {
                  color: '#44EAFE'
                }
              }, {
                name: '',
                value: 40,
                label: {
                  show: false
                },
                itemStyle: {
                  color: 'transparent'
                }
              }
            ]
          }

        ]

      }
    }
  },
  computed: {
    otherData() {
      return 100 - this.pieObj.data
    }
  },
  watch: {
    pieObj: {
      handler(val, oldVal) {
        this.currentObj = this.getCurrentObj()
        this.refreshPieCharts()
      },
      immediate: true, // 初次就会监听
      deep: true // true 深度监听
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initPieCharts()
    })
  },
  beforeDestroy() {
    if (this.pieChart) {
      this.pieChart.dispose()
    }
  },
  methods: {
    initPieCharts() {
      // 基于准备好的dom，初始化echarts实例
      this.pieChart = echarts.init(document.getElementById(this.pieObj.idPie))
      // 更新图表参数
      this.refreshPieCharts()
    },
    refreshPieCharts() {
      // 绘制图表
      this.pieOptions.title[0].text = this.currentObj.title
      this.pieOptions.series[1].data[0].value = this.pieObj.data
      this.pieOptions.series[1].data[0].itemStyle.color = this.currentObj.color
      this.pieOptions.series[1].data[1].value = this.otherData

      if (this.pieChart) {
        this.pieChart.setOption(this.pieOptions)
      }
    },
    getCurrentObj() {
      const obj = {}
      if (this.pieObj.data <= 30) {
        obj.title = '轻微'
        obj.color = '#44EAFE'
      } else if (this.pieObj.data > 30 && this.pieObj.data <= 60) {
        obj.title = '中等'
        obj.color = '#F3CF80'
      } else {
        obj.title = '严重'
        obj.color = 'rgb(255, 0, 0, 0.7)'
      }
      return obj
    }
  }
}
</script>

<style lang="less" scoped>
.pie {
  width: 100%;
  height: 100%;
}
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
