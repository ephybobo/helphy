const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');
 
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules: [
            /* style and css loader */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
          
            /* images loader */
            {
                test: /ignore\.(png|jpg|svg|gif)$/, 
                exclude: /node_modules/,
                use: {
                    loader: "file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }, 
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
            
        ]
    },
  
    /* plugin */
    plugins: [
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/edit.html",
            filename: "edit.html"
        }),
        /* HTML Webpack Plugin */
        new HtmlWebpackPlugin({
            template: "./src/order.html",
            filename: "order.html"
        }),
        /* Copy Webpack Plugin */
        new CopyWebpackPlugin([
            {from:'src/img',to:'img'} 
        ]), 
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            jquery: "jquery"
        })
     
    ]
}