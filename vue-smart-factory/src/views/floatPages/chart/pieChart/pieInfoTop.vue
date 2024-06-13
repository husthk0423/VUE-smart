<!--
 * @Author: your name
 * @Date: 2021-10-27 17:18:55
 * @LastEditTime: 2021-10-28 08:56:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-smart-factory\src\views\floatPages\chart\pieChart\pieInfoTopvue
-->
<template>
  <div class="pieInfoTop">
    <div class="info">
      <div class="info-position"> 焊接点位置</div>
      <div class="info-name"> 三车间排水</div>
    </div>
    <div class="divider"></div>
    <div class="info">
      <div class="info-position">照片</div>
      <a
        class="info-img"
        @click="viewTopImg"
      > 排查.jpg</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pieInfoTop',
  data() {
    return {

    }
  },
  methods: {
    viewTopImg() {
      this.$emit('viewTopImg')
    }
  }
}
</script>

<style lang="less" scoped>
.pieInfoTop {
  height: 100%;
  width: 100%;
  // text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.info {
  height: 100%;
  padding: 10px 20px;
  float: left;
  align-items: center;
}

.info div {
  height: 24px;
  line-height: 24px;
}

.divider {
  width: 1px;
  height: 29px;
  border: 1px solid #98e2f5;
}

.info-img {
  // width: 74px;
  // height: 20px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  text-decoration: underline;
  color: #2294ff;
}

.info-position {
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #b4fcff;
}

.info-name {
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #ffffff;
  text-shadow: 0px 2px 4px rgba(39, 149, 240, 0.35);
}
</style>
