<template>
  <div class="pieChart">
    <!-- 上面部分 -->
    <div class="one-list">

      <div class="pie">
        <pie :pieObj="pieTopObj"></pie>
      </div>
      <div class="one-info">
        <div class="info-content">
          <pie-info-top @viewTopImg="viewTopImg"></pie-info-top>
        </div>
      </div>
    </div>
    <!-- 下面部分 -->
    <div
      class="one-list"
      style="text-align:right;"
    >
      <div class="one-info bottom-info">

        <div
          class="info-content"
          style="border-radius: 50px 4px 4px 50px;"
        >
          <pie-info-bottom @viewBottomImg="viewBottomImg"></pie-info-bottom>
        </div>
      </div>
      <div class="pie">
        <pie :pieObj="pieBottomObj"></pie>
      </div>
    </div>
    <!-- 弹窗 -->
    <pie-img ref="pieImg"></pie-img>
  </div>
</template>

<script>
import pie from './pie.vue'
import pieInfoTop from './pieInfoTop.vue'
import pieInfoBottom from './pieInfoBottom.vue'
import pieImg from './pieImg.vue'
export default {
  name: 'pieChart',
  components: {
    pie,
    pieInfoTop,
    pieInfoBottom,
    pieImg
  },
  data() {
    return {
      pieTopObj: {
        idPie: 'idPieTop',
        data: 30
      },
      pieBottomObj: {
        idPie: 'idPieBottom',
        data: 50
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setPieInterval()
    })
  },
  methods: {
    setPieInterval() {
      const pieInterVal = setInterval(() => {
        this.pieTopObj.data = this.randomNum(10, 50)
        this.pieBottomObj.data = this.randomNum(40, 70)
      }, 2000)
    },
    randomNum(min, max) {
      const num = Math.floor(Math.random() * (max - min)) + min
      return num
    },
    viewTopImg() {
      this.$refs.pieImg.visible = true
    },
    viewBottomImg() {
      this.$refs.pieImg.visible = true
    }
  }
}
</script>

<style lang="less" scoped>
.pieChart {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
}
.one-list {
  width: 100%;
  height: 50%;
  position: relative;
  top: 0;
  left: 0;
}
.pie {
  width: 97px;
  height: 100%;
  display: inline-block;
}
.one-info {
  // position: relative;
  width: calc(100% - 97px);
  padding-left: 10px;
  height: 100%;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-info {
  float: left;
  padding-left: 0;
  padding-right: 10px;
}
.info-content {
  background: rgba(194, 221, 243, 0.4);
  width: 100%;
  height: 70%;
  border-radius: 4px 50px 50px 4px;
}
</style>
