/**
 * webpack config (dev)
 */

const webpackMerge = require("webpack-merge");
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

module.exports = webpackMerge([
    require("./common"),
    {
        externals: [nodeExternals()],
        devtool: "source-map",
        plugins: [
            new webpack.DefinePlugin({ $$webpack_dev: JSON.stringify(true) }),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ]
    },
]);
