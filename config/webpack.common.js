const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { IsDevelopment, PROJECT_PATH } = require('../public/constant.js');

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    filename: `js/[name]${IsDevelopment ? '' : '.[hash:8]'}.js`,
    path: path.resolve(PROJECT_PATH, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PROJECT_PATH, './public/static/index.html'),
      filename: 'index.html',
      cache: false,
      minify: IsDevelopment
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: IsDevelopment,
              importLoaders: 0,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: IsDevelopment,
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: IsDevelopment,
            },
          },
        ],
      },
    ],
  },
};
