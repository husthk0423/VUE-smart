<template>
  <div class="floatPages">

    <index-header></index-header>
    <layer-tree></layer-tree>
    <chart></chart>
  </div>
</template>

<script>
import layerTree from './layerTree/layerTree.vue'
import chart from './chart/chart.vue'
import indexHeader from './indexHeader/indexHeader.vue'
export default {
  components: { indexHeader, layerTree, chart }

}
</script>

<style lang="less" scoped>
.floatPages {
}
</style>
