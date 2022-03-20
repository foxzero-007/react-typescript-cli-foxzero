const path = require("path");

const PROJECT_PATH = path.resolve(__dirname, "../");
const PROJECT_NAME = path.parse(PROJECT_PATH).name;
const IsDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  PROJECT_PATH, // 项目绝对路径
  PROJECT_NAME, // 项目名称
  IsDevelopment, // 判断环境
};
