export default class UnityInit {
  static initLoad(unityInstance) {
    this.unityInstance = unityInstance
  }

  static clickLayerTree(node) {
    const key = node.key || ''
    // console.log(key)
    this.unityInstance.SendMessage('[Script]', 'GetBlinkModel', key)
  }
}
