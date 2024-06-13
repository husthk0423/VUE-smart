<template>
  <div class="pieImg">
    <Modal
      v-model="visible"
      :title="title"
      :footer-hide="true"
    >
      <div class="dialog-content">
        <div class="content-top">
          <div class="content-card">
            <div class="img-card">
              <p> 当前图片</p>
              <img src="../../../../assets/img/other/guandao.jpg" />
            </div>
          </div>

          <div
            class="content-card"
            style="padding: 0 0 0 5px;"
          >
            <div class="img-card">
              <p> 标准图片</p>
              <img src="../../../../assets/img/other/guandao.jpg" />
            </div>
          </div>

        </div>
        <div class="content-bottom">
          <div class="img-card">
            <p> 样本对比</p>
            <img src="../../../../assets/img/other/duibi.jpg" />
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'pieImg',
  props: {
  },
  data() {
    return {
      visible: false,
      title: '焊接点照片对比'
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.pieImg {
}
.dialog-content {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
}
.content-top {
  width: 100%;
  border-bottom: 1px dashed #98e2f5;
}
.content-card {
  width: 50%;
  display: inline-block;
  padding: 0 5px 0 0;
  margin-bottom: 5px;
}
.img-card {
  width: 100%;
  border-radius: 12px;
  padding: 5px;
  background: rgba(153, 220, 255, 0.3);
  text-align: center;
}
.img-card p {
  font-weight: 500;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
}
.img-card img {
  width: 100%;
  height: 200px;
  border-radius: 12px;
}
.content-bottom {
  width: 100%;
  margin-top: 5px;
}
.content-bottom .img-card {
  width: 100%;
}

/deep/ .ivu-modal-content {
  background: rgba(72, 158, 202, 0.6);
  border-radius: 4px;
  color: #fff;
}
/deep/ .ivu-modal-header {
  background: rgba(153, 220, 255, 0.3);
  border-bottom: none;
}
/deep/ .ivu-modal-header-inner {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgb(15 117 255 / 66%);
}
/deep/ .ivu-modal-close .ivu-icon-ios-close {
  color: #fff;
}
</style>
