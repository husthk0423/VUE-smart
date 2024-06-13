<template>
  <div :class="chartClass">
    <!-- <line-chart></line-chart>
    <list-chart1></list-chart1>
    <list-chart2></list-chart2> -->
    <div
      v-for="(item,index) in chartOptions"
      :key="index"
      :class="chartCardClass"
      :style="{'margin-bottom':(item.component == 'listChart') ? 0 : intervalChart}"
    >
      <div class="left-top-border"></div>
      <div class="right-top-border"></div>
      <div class="right-bottom-border"></div>
      <div class="left-bottom-border"></div>

      <div class="chart-title">
        <img
          src="../../../assets/img/background/arrowLeft.png"
          alt=""
          class="arrow-left"
          :style="item.arrowLeftStyle"
        >
        <img
          src="../../../assets/img/background/arrowRight.png"
          alt=""
          class="arrow-right"
          :style="item.arrowRightStyle"
        >
        <p>{{ item.title}}</p>
      </div>
      <component
        class="chart-content"
        :is="item.component"
      ></component>
    </div>
  </div>
</template>

<script>
import lineChart from './lineChart/lineChart.vue'
import pieChart from './pieChart/pieChart.vue'
import listChart from './listChart/listChart.vue'
export default {
  name: 'chart',
  components: {
    lineChart,
    pieChart,
    listChart
  },
  data() {
    return {
      contentHeight: 200,
      chartClass: 'chart',
      chartCardClass: 'chart-card',
      intervalChart: '25px',
      chartOptions: [
        {
          title: '生产总量',
          component: 'lineChart',
          arrowLeftStyle: '',
          arrowRightStyle: ''
        },
        {
          title: '焊接点异常监测',
          component: 'pieChart',
          arrowLeftStyle: 'left: 20%; ',
          arrowRightStyle: 'right: 20%;'
        },
        {
          title: '管道监测数据',
          component: 'listChart',
          arrowLeftStyle: 'left: 20%; ',
          arrowRightStyle: 'right: 20%;'
        }
      ]
    }
  },
  computed: {
    screenSize() {
      return this.$store.getters.getScreenSize
    }
  },
  watch: {
    screenSize(newVal, oldVal) {
      this.refreshChartCard(newVal)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.refreshChartCard()
    })
  },
  methods: {
    refreshChartCard(newVal) {
      if (newVal === 'big') {
        this.chartClass = 'chart chart-big'
        this.chartCardClass = 'chart-card chart-card-big'
        this.intervalChart = '35px'
      } else if (newVal === 'normal') {
        this.chartClass = 'chart'
        this.chartCardClass = 'chart-card'
        this.intervalChart = '25px'
      }
    }
  }

}
</script>

<style lang="less" scoped>
.chart {
  position: absolute;
  top: 107px;
  right: 47px;
}
.chart-big {
  top: 130px;
}
.chart-card {
  position: relative;
  width: 475px;
  height: 250px;
  margin-bottom: 25px;
  background: rgba(72, 158, 202, 0.6);
  border: 1px solid #5eb9e7;
}
.chart-card-big {
  height: 275px;
  margin-bottom: 35px;
}

.left-top-border {
  width: 13px;
  height: 12px;
  border-top: 3px solid #69e0ff;
  border-left: 3px solid #69e0ff;
  position: absolute;
  top: 0;
  left: 0;
}
.right-top-border {
  width: 13px;
  height: 12px;
  border-top: 3px solid #69e0ff;
  border-right: 3px solid #69e0ff;
  position: absolute;
  top: 0;
  right: 0;
}
.right-bottom-border {
  width: 13px;
  height: 12px;
  border-right: 3px solid #69e0ff;
  border-bottom: 3px solid #69e0ff;
  position: absolute;
  right: 0;
  bottom: 0;
}
.left-bottom-border {
  width: 13px;
  height: 12px;
  border-left: 3px solid #69e0ff;
  border-bottom: 3px solid #69e0ff;
  position: absolute;
  left: 0;
  bottom: 0;
}

.chart-title {
  position: relative;
  height: 34px;
  line-height: 34px;
  text-align: center;
  background: rgba(153, 220, 255, 0.3);
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(15, 117, 255, 0.66);
}
.arrow-left {
  position: absolute;
  top: 30%;
  left: 26%;
}
// .arrow-left::before {
//   content: "";
//   position: absolute;
//   left: -5px;
//   right: -5px;
//   top: -5px;
//   bottom: -5px;
//   /* background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4); */
//   background: linear-gradient(
//     90deg,
//     rgba(255, 255, 255, 0.3),
//     rgba(255, 255, 255, 0.4),
//     rgba(255, 255, 255, 0.5),
//     rgba(255, 255, 255, 0.6)
//   );
//   background-size: 400%;
//   border-radius: 50px;
//   filter: blur(20px);
//   z-index: 2;
//   animation: sun 15s infinite;
// }
// /* 设置流光 */
// @keyframes sun {
//   100% {
//     background-position: -300% 0;
//   }
// }
.arrow-right {
  position: absolute;
  top: 30%;
  right: 26%;
}
.chart-content {
  height: calc(100% - 34px);
  width: 100%;
}
</style>
