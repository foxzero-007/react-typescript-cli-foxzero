const path = require("path");
const { IsDevelopment, PROJECT_PATH } = require("../public/constant.js");

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, "./src/app.js"),
  },
  output: {
    filename: `js/[name]${IsDevelopment ? "" : ".[hash:8]"}.js`,
    path: path.resolve(PROJECT_PATH, "./dist"),
  },
};
