const package = require("../package.json");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.ts'),
    output: {
        filename: 'canvasParse.js',
        path: path.resolve(__dirname, '../dist'),
        libraryExport: "default",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        stats: 'errors-only',
        compress: true,
        port: 8089,
        host: '0.0.0.0',
        useLocalIp: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            title: package.title
        }),
    ]
}