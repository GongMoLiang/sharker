/*
 * 生产环境打包配置
 */

const path = require('path')
const HtmlWepackPluin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    mode: 'production',

    entry: {
        main: path.resolve(__dirname, '../web/main.js')
    },

    output: {
        filename: '[name]-[chunkhash].js',
        path: path.resolve(__dirname, '../dist/web')
    },


    module: {
        rules: [
            // css 文件规则
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" }
                ]
            },
            // less文件规则
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            // jsx  文件规则
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader', 'lazyload-loader'],
                exclude: /node_modules/
            },
        ]
    },

    // import 导入组件时 省例.jsx不会报错
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // 减小打包体积，使用CDN链接, 可以将对应的包不打包进主入口文件
    externals: {
        "lodash": 'lodash',
        "React": 'react',
        "ReactDom": 'react-dom'
    },

    plugins: [
        new HtmlWepackPluin({
            template: path.resolve(__dirname, '../web/public/index.html')
        }),

        // 打包之前清空dist文件夹
        new CleanWebpackPlugin(),

        // 打包时能将js与css文件进行分离
        new MiniCssExtractPlugin({
            filename: '[name]-[chunkhash].css'
        }),
    ],

}
