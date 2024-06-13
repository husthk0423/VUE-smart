<template>
  <div class="indexHeader">
    <div class="header-content">
      <div class="header-title">智慧工厂管理系统</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexHeader'
}
</script>

<style lang="less" scoped>
.indexHeader {
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
}
.header-content {
  width: 100;
  height: 100%;
  background: url("../../../assets/img/background/title.png") no-repeat;
}
.header-title {
  width: 100;
  height: 100%;
  text-align: center;
  font-size: 34px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0px 3px 7px #1d87f4, 0px 7px 7px #37abdb;
}
</style>
