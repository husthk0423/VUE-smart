<template>
  <div
    class="listChart"
    ref="listChartContent"
  >
    <Table
      class="list-table"
      align="center"
      :height="tableHeight"
      ref="currentRowTable"
      :border="false"
      :columns="tableHeader"
      :data="tableList"
    ></Table>
  </div>
</template>

<script>
export default {
  name: 'listChart',
  props: {
  },
  data() {
    return {
      tableHeight: 200,
      tableHeader: [
        {
          title: '序号',
          key: 'id',
          width: 50
        },
        {
          title: '管道',
          key: 'attribute',
          width: 115,
          tooltip: true
        },
        {
          title: '压力(mpa)',
          key: 'pressure'
        },
        {
          title: '温度(℃)',
          key: 'temperature'
        },
        {
          title: '流量(L/S)',
          key: 'rateFlow'
        }
      ],
      tableList: [
        {
          id: 1,
          attribute: '一车间给水管道',
          pressure: 1.51,
          temperature: 600,
          rateFlow: 1.21
        },
        {
          id: 2,
          attribute: '二车间给水管道',
          pressure: 2.32,
          temperature: 700,
          rateFlow: 2.56
        },
        {
          id: 3,
          attribute: '三车间给水管道',
          pressure: 5.31,
          temperature: 500,
          rateFlow: 2.31
        },
        {
          id: 4,
          attribute: '四车间给水管道',
          pressure: 4.69,
          temperature: 800,
          rateFlow: 2.78
        },
        {
          id: 5,
          attribute: '五车间给水管道',
          pressure: 3.81,
          temperature: 26,
          rateFlow: 1.52
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
      this.refreshTableHeight()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.refreshTableHeight()
      this.setListInterval()
    })
  },
  methods: {
    refreshTableHeight() {
      this.tableHeight = this.$refs.listChartContent.offsetHeight - 10
    },
    setListInterval() {
      const listInterVal = setInterval(() => {
        // this.pieTopObj.data = this.randomNum(10, 50)
        // this.pieBottomObj.data = this.randomNum(40, 70)
        this.tableList.forEach(element => {
          element.pressure = (this.randomNum(1, 10)).toFixed(3)
          element.temperature = Math.floor(this.randomNum(500, 1000))
          element.rateFlow = (Math.random() * (3 - 1) + 1).toFixed(3)
        })
      }, 2000)
    },
    randomNum(min, max) {
      const num = Math.random() * (max - min) + min
      return num
    }
  }
}
</script>

<style lang="less" scoped>
.listChart {
  width: 100%;
  height: 100%;
  padding: 5px 15px;
}
.list-table {
}
.list-table ::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

/deep/ .ivu-table {
  color: #fff;
  background: transparent;
}
/deep/ .ivu-table-cell {
  padding-left: 6px;
  padding-right: 10px;
}
/deep/ .ivu-table-wrapper {
  border: none;
}
/deep/ .ivu-table:before {
  background: none;
}
/deep/ .ivu-table::after {
  background: none;
}
/deep/ .ivu-table td,
.ivu-table th {
  border-bottom: 1px solid rgba(174, 198, 218, 0.4);
}
/deep/ .ivu-table th {
  border-bottom: 1px solid rgba(174, 198, 218, 0.4);
  background: transparent;
  font-family: PingFang SC;
  font-weight: bold;
  text-align: center;
}
/deep/ .ivu-table td {
  background: transparent;
  border-bottom: 1px solid rgba(174, 198, 218, 0.4);
}
/deep/ .ivu-tooltip-inner td {
  background-color: rgba(101, 122, 152, 0.8);
  // border: none;
}
// /deep/ .ivu-table-row-highlight td {
//   background-color: #b8d9fd;
// }
// /deep/ .ivu-table-row-hover td {
//   background-color: none;
// }
</style>
