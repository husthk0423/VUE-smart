<template>
  <div class="lineChart">
    <div
      id="lineChartContainer"
      class="chart-container"
    ></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
const data = [50, 60, 40, 50, 70, 50, 60, 70, 80, 70, 90, 80]
// 断点展示曲线，0时不显示
const newData = data

const xAxisData = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
export default {
  name: 'lineChart',
  data() {
    return {
      options: {
        backgroundColor: 'transparent',
        title: {
          text: '',
          textStyle: {
            align: 'center',
            color: '#fff'
          },
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(101,122,152,0.5)',
          borderColor: 'transparent',
          padding: 10,
          textStyle: {
            fontSize: 12,
            linHeight: 18,
            color: '#FFFFFF',
            fontFamily: 'Microsoft YaHei',
            fontWeight: 400
          },
          formatter: function (params, ticket, callback) {
            for (var i = 0; i < params.length; i++) {
              if (parseFloat(params[i].value) > 0) {
                return ` ${params[i].name}日
                <br/> 生产数量 ${params[i].value}`
              }
              // else {
              //   return params[i].name + ': ' + 0
              // }
            }
          }
        },
        grid: {
          left: '9%',
          right: '12%',
          top: '40',
          bottom: '40'
        },
        xAxis: {
          name: '(月)',
          nameTextStyle: {
            color: 'rgba(255,255,255,1.0)'
          },
          type: 'category',
          nameLocation: 'end',
          axisTick: {
            show: true,
            alignWithLabel: true
          },
          axisLabel: {
            show: true,
            interval: 0,
            formatter: null,
            rotate: 0,
            color: 'rgba(255,255,255,0.8)'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(165,199,228,0.4)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          bottom: '3%',
          boundaryGap: true,
          data: xAxisData
        },
        yAxis: {
          name: '(数量)',
          nameTextStyle: {
            color: 'rgba(255,255,255,1.0)'
          },
          type: 'value',
          boundaryGap: true,
          left: '10',
          axisLabel: {
            show: true,
            rotate: 0,
            interval: 0,
            color: 'rgba(255,255,255,0.8)',
            formatter: null
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(165,199,228,0.4)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          }
        },
        series: [{
          name: '',
          type: 'line',
          symbolSize: 3,
          lineStyle: {
            color: '#F3CF80',
            width: '1'
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

              offset: 0,
              color: 'rgb(243, 207, 128,0.7)'
            }, {
              offset: 0.34,
              color: 'rgb(243, 207, 128,0.4)'
            }, {
              offset: 1,
              color: 'rgba(38,197,254,0.00)'
            }])
          },
          barGap: '0',
          itemStyle: {
            normal: {
              color: '#F3CF80', // 0% 处的颜色
              barBorderRadius: [30, 30, 30, 30]
            }
          },
          barMaxWidth: 20,
          label: {
            show: false,
            color: '#fff',
            position: 'top',
            formatter: function (params) {
              if (params.value > 0) {
                return params.value
              } else {
                return ''
              }
            }
          },

          data: newData
        }]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEcharts()
    })
  },
  methods: {
    initEcharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('lineChartContainer'))

      // 绘制图表
      myChart.setOption(this.options)
    }
  }
}
</script>

<style lang="less" scoped>
.lineChart {
  width: 100%;
  height: 100%;
}

.chart-container {
  width: 100%;
  height: 100%;
}
</style>
