const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  return merge(common(env, argv), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: __dirname + "./dist",
      hot: true,
      host: "localhost",
      liveReload: true,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new WebpackBundleAnalyzer()
    ]
  })
};

