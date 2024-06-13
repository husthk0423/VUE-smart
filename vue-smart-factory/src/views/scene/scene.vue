
<template>
  <div class="scene">
    <div
      id="unityContainer"
      class="unity-content"
    ></div>
  </div>
</template>

<script>
import UnityInit from '../../assets/js/UnityInit.js'
export default {
  name: 'scene',
  data() {
    return {

    }
  },
  computed: {
    initVisible() {
      return this.$store.getters.getInitVisible
    }
  },
  created() {
    // unity初始化成功事件
    window.unityInit = () => {
      this.changeInitVisible(true)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initUnity()
    })
  },
  methods: {
    initUnity() {
      const unityInstance = UnityLoader.instantiate('unityContainer', 'Build/GameWebgl.json', {
        onProgress: () => {

        }
      })
      UnityInit.initLoad(unityInstance)
    },
    changeInitVisible(visible) {
      this.$store.commit('changeInitVisible', visible)
    }

  }
}
</script>

<style lang="less" scoped>
.scene {
  width: 100%;
  height: 100%;
}
.unity-content {
  background: none;
  width: 100%;
  height: 100%;
}
</style>
