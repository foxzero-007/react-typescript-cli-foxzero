const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;
const IsDevelopment = process.env.NODE_ENV !== 'production';
const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 9000;

module.exports = {
  PROJECT_PATH, // 项目绝对路径
  PROJECT_NAME, // 项目名称
  IsDevelopment, // 判断环境
  SERVER_HOST, // 项目运行地址
  SERVER_PORT, // 项目运行端口号
};
