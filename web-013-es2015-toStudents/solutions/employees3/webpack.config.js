var webpack = require("webpack");

module.exports = {
    entry: "./main",
    output: {
        path: "out",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    devtool: 'source-map'
}

