const path = require("path");
const webpack = require("webpack") //第二种配置方式
const webpackplugin = require("html-webpack-plugin");
module.exports = {
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    devServer:{
        open:true,
        contentBase:"src",
        port:3000,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpackplugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        })
    ],
    module:{
        rules:[{test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.scss/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7632&name=[hash:8]-[name].[ext]'},
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test:/\.vue/,use:'vue-loader'}
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
}
