const webpack = require("webpack");
const path = require("path");
const Visualizer = require('webpack-visualizer-plugin');

/*global __dirname*/
/*eslint no-undef: "error"*/
const PATHS = {
    source: path.join(__dirname, '..', 'src'),
    build: path.join(__dirname, '..', 'build')
};

module.exports = {
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    entry: PATHS.source + '/index.ts' ,
    output: {
        path: PATHS.build,
        filename: "[name].js",
    },
    module: {
        loaders: [
            // load ts/tsx with ts-loader
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                    compilerOptions: {
                        // use target=es5 for old browsers
                        target: "es5",
                        // use module=es6 for tree-shaking and stuff
                        module: "ES6"
                    }
                }
            }
        ]
    },
    devServer: {
        stats: 'errors-only'
    },
    plugins: [
        new Visualizer(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: "source-map",
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};