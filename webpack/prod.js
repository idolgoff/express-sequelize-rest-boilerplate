/**
 * webpack config (production)
 */
const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = webpackMerge([
  require("./common"),
  {
    plugins: [
      new webpack.DefinePlugin({
        $$webpack_dev: JSON.stringify(false),
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        },
      }),
      new MinifyPlugin({}),
      new webpack.optimize.ModuleConcatenationPlugin(),
    ]
  }
]);
