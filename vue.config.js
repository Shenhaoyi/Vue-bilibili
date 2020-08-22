module.exports = {
  lintOnSave: false,
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-bilibili-web/'
    : '/',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,

  devServer: {
    host: 'localhost',
    port: 8000, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
    hotOnly: true, // 热更新
    // proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
    proxy: { //配置自动启动浏览器
      "http://112.74.99.5:3000/web/api": {
        target: "http://112.74.99.5:3000",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false
      }
    }
  },


}