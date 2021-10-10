const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = (env, argv) => {
  return merge(common(env, argv), {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    plugins: [new CompressionPlugin({
      algorithm: "gzip",
    })]
  })
};

