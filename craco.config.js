/*
 * @Author: 陈璐璐
 * @Date: 2022-11-08 12:59:51
 * @LastEditors: 大路
 * @LastEditTime: 2022-11-10 09:08:02
 * @Description: file content
 */

const path = require('path')
const resolve = pathname => path.resolve(__dirname, pathname)

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      // less
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {}, 
            // { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      // "@": path.resolve(__dirname,'src'),
      "@": resolve('src'),
      "components": resolve('src/components'),
      "utils": resolve('src/utils'),
      // '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  // devServer: {
  //     // 主要的作用是解决SPA页面在路由跳转之后，进行页面刷新时，返回404错误
  //     historyApiFallback: true,
  //     // hot: true,
  //     // host: '0.0.0.0',
  //     port: 3083,
  //     disableHostCheck: true, //  新增该配置项
  //     inline: true, //实时监听
  //     stats: {
  //         colors: true
  //     },
  //     // 跨域代理
  //     proxy: {
  //         //匹配代理的url
  //         "/api": {
  //             // 目标服务器地址
  //             // target: "http://10.168.8.143:8083", //大杨本地
  //             // target: "http://10.100.15.100:8083", //陶勇本地
  //             // target: "http://localhost:8083",
  //             target: "http://192.168.255.156:8083", //测试
  //             // target: "http://10.234.109.4:8083", //王帅本地
  //             //路径重写
  //             pathRewrite: {
  //                 "^/api": "/api",
  //             },
  //             changeOrigin: true,
  //         },
  //     },
  // },
}