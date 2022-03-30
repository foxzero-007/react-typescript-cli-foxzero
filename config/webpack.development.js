const { merge } = require('webpack-merge');
const { SERVER_HOST, SERVER_PORT } = require('../public/constant.js');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST, // 主机号
    port: SERVER_PORT, // 端口
    client: {
      progress: true,
      logging: 'info',
    },
    compress: true, // 开启gzip压缩
    open: true, // 打开浏览器
    hot: true, // 热更新
  },
});
