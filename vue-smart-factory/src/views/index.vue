
<template>
  <div class="index">
    <Spin
      size="large"
      fix
      v-show="!initVisible"
    >
      <div class="spin-loading">
        <div class="three1"></div>
        <div class="three2"></div>
        <div class="three3"></div>
      </div>
      <div class="spin-title">正在加载中...</div>
    </Spin>
    <scene></scene>
    <float-pages v-if="initVisible"></float-pages>
  </div>
</template>

<script>
import floatPages from './floatPages/floatPages.vue'
import scene from './scene/scene.vue'

export default {
  components: {
    scene,
    floatPages
  },
  name: 'index',
  data() {
    return {
    }
  },
  computed: {
    initVisible() {
      return this.$store.getters.getInitVisible
    },
    screenSize() {
      return this.$store.getters.getScreenSize
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.refreshScreenSize()
    })
  },
  methods: {
    // 监听更改屏幕尺寸
    refreshScreenSize() {
      window.onresize = () => {
        const windowHeight = window.innerHeight ||// 浏览器窗口的内部高度（包括滚动条）
          document.documentElement.clientWidth || document.body.clientHeight
        if (windowHeight > 1030) {
          this.changeScreenSize('big')
        } else if (windowHeight < 970) {
          this.changeScreenSize('normal')
        }
      }
    },
    changeScreenSize(sizeStr) {
      return this.$store.commit('changeScreenSize', sizeStr)
    }
  }
}
</script>

<style lang="less" scoped>
.index {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.spin-title {
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: bold;
  // color: #ffffff;
  text-shadow: 0px 4px 4px rgb(15 117 255 / 66%);
}
.spin-loading {
  width: 150px;
  margin: 50px auto;
  text-align: center;
}
.index /deep/ .ivu-spin-fix {
  // background: rgba(0, 0, 0, 1);
  background: url("../assets/img/other/system.png") no-repeat;
}
.spin-loading > div {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  display: inline-block;
  // background-color: rgba(72, 158, 202, 0.6);
  background: #2d8cf0;
  -webkit-animation: three 1.4s infinite ease-in-out;
  animation: three 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.spin-loading .three1 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.spin-loading .three2 {
  -webkit-animation-delay: -0.15s;
  animation-delay: -0.15s;
}
@-webkit-keyframes three {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes three {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
</style>
