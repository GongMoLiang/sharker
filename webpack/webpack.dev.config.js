/*
 * 开发环境 webpack的配置
*/

const path = require('path')
const webpack = require('webpack')
const HtmlWepackPluin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    mode: 'development',

    //devtool: 'source-map',

    // 入口
    entry: {
        main: path.resolve(__dirname, '../web/main.js')
    },

    // 出口
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, '../dist/web')
    },

    module: {
        rules: [
            //css 文件规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // less 文件规则
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // jsx  文件规则
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
        ]
    },

    // import 导入组件时 省例.jsx不会报错
    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [
        new HtmlWepackPluin({
            template: path.resolve(__dirname, '../web/public/index.html')
        }),

        // 配置这个能全局引用lodash文档,不用每个文件都引入lodash
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),

        new CleanWebpackPlugin(),
    ],
    // 开发服务配置
    devServer: {

        // 服务根路径
        contentBase: path.resolve(__dirname, '../dist/web'),

        // 热更新
        hot: true,

        // 端口 默认端口8080
        port: '8080',

        // 默认打开浏览器
        // open: true,

        // 浏览器显示错误
        //overlay: true,

        //historyApiFallback: true
    }
}
