module.exports = {
  publicPath: process.env.MODE_ENV === 'production' ? '/smartFactory/' : '/',
  lintOnSave: false,
  outputDir: 'dist',
  indexPath: 'index.html',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080 // 端口号
    // https: false, // https:{type:Boolean}
    // open: true, // 配置自动启动浏览器 http://XXX.XXX.X.XX:7071/rest/XXX/
    // hotOnly: true // 热更新
  // proxy: 'http://localhost:8000' // 配置跨域处理,只有一个代理
  // proxy: { //配置自动启动浏览器
  // "/XX/*": {
  //  target: "http://XXX.XXX.X.XX",
  //  changeOrigin: true,
  //  // ws: true,//websocket支持
  //  secure: false
  // },
  // "/x/*": {
  //  target: "http://XXX.XXX.X.XX",
  //  changeOrigin: true,
  //  // ws: true,//websocket支持
  //  secure: false
  // },
  // }
  }

}
