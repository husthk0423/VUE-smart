<template>

  <div class="layerTree">
    <div
      :class="layerControlClass"
      @click="controlLayerTree"
    >
      <span class="icon-button icon-layerControl-style"></span>
    </div>
    <div
      :class="layerContentClass"
      v-show="visibleLayerTree"
    >
      <Tree
        :data="layerTreeData"
        ref="layerTree"
        @on-select-change="selectChange"
      ></Tree>
    </div>

  </div>
</template>

<script>
import UnityInit from '../../../assets/js/UnityInit.js'
export default {
  name: 'layerTree',
  data() {
    return {
      visibleLayerTree: true,
      layerControlClass: 'layer-control',
      layerContentClass: 'layer-content',
      layerTreeData: [
        {
          title: '工厂',
          expand: true,
          disableCheckbox: true,
          children: [
            {
              title: '一车间',
              expand: true,
              disableCheckbox: true,
              children: [
                {
                  title: '一管道',
                  key: 'pipe01'
                },
                {
                  title: '一罐体',
                  key: 'tank01'
                }
              ]
            },
            {
              title: '二车间',
              expand: true,
              disableCheckbox: true,
              children: [
                {
                  title: '二管道',
                  key: 'pipe02'
                },
                {
                  title: '二罐体',
                  key: 'tank21'
                }
              ]
            },
            {
              title: '三车间',
              expand: true,
              disableCheckbox: true,
              children: [
                {
                  title: '三管道',
                  key: 'pipe03'
                },
                {
                  title: '三罐体',
                  key: 'tank03'
                }
              ]
            },
            {
              title: '四车间',
              expand: true,
              disableCheckbox: true,
              children: [
                {
                  title: '四管道',
                  key: 'pipe04'
                },
                {
                  title: '四罐体',
                  key: 'tank24'
                }
              ]
            },
            {
              title: '五车间',
              expand: true,
              disableCheckbox: true,
              children: [
                {
                  title: '五管道',
                  key: 'pipe05'
                },
                {
                  title: '五罐体',
                  key: 'tank05'
                }
              ]
            }
          ]
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
      this.refreshLayerTree(newVal)
    }
  },
  methods: {
    controlLayerTree() {
      this.visibleLayerTree = !this.visibleLayerTree
    },
    refreshLayerTree(newVal) {
      if (newVal === 'big') {
        this.layerControlClass = 'layer-control layer-control-big'
        this.layerContentClass = 'layer-content layer-content-big'
      } else if (newVal === 'normal') {
        this.layerControlClass = 'layer-control'
        this.layerContentClass = 'layer-content'
      }
    },
    selectChange(nodes, node) {
      // console.log(node)
      UnityInit.clickLayerTree(node)
      // // console.log(this.$refs.layerTree.getCheckedAndIndeterminateNodes())
      // this.$refs.layerTree.getCheckedAndIndeterminateNodes().forEach(element => {
      //   if (element.nodeKey !== node.nodeKey) {
      //     element.checked = false
      //     if (element.indeterminate !== undefined) {
      //       element.indeterminate = false
      //     }
      //   }
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.layerTree {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.layer-control {
  position: absolute;
  top: 100px;
  left: 30px;
  width: 38px;
  height: 34px;
  background: rgba(69, 172, 224, 0.7);
  border: 1px solid #4bbbf4;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.layer-control-big {
  top: 130px;
}
.layer-content {
  width: 280px;
  height: 730px;
  position: absolute;
  top: 154px;
  left: 30px;
  // background: yellow;
  // background: url("../../../assets/img/background/layerTree.png") no-repeat;
  background: rgba(99, 170, 206, 0.7);
  border: 1px solid #71b0d0;
  border-radius: 2px;
  box-shadow: -1px -1px 3px 3px rgba(73, 177, 229, 0.6);
  padding: 15px;
}
.layer-content-big {
  top: 184px;
}
/deep/ .ivu-tree-title {
  color: #fff;
  font-family: Microsoft YaHei;
  font-weight: 400;
  font-size: 14px;
  // line-height: 32px;
  text-shadow: 0px 1px 2px rgba(29, 135, 244, 0.5);
}
.icon-button {
  display: inline-block;
  width: 25px;
  height: 21px;
  // padding: 4px;
  cursor: pointer;
  background: #fff;
}
// .icon-button:hover {
//   background: #3788ff;
// }
.icon-layerControl-style {
  mask: url("../../../assets/img/icon/layerControl.svg") no-repeat center;
}
</style>
