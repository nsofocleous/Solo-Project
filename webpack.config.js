// Webpack uses this to work with directories
const path = require('path');
// when dist folder contains something similar to index.html file, htmlwebpackplugin will be needed
// const HtmlWebPackPlugin = require('html-webpack-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: process.env.NODE_ENV, //'development',
  
  // Path to your entry point. From this file Webpack will begin its work
  // to look up 
  entry: './client/App.js',

  output: {
    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },



  devServer: {
    publicPath: '/', //'/build/bundle.js',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    hot: true,
  },

  module: {
    rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/transform-async-to-generator',
                "react-hot-loader/babel"
              ],
            }
          }
        },
        {
          test: /\.(c|sc|sa)ss$/,
          // include: ,
          use: [
            {
              // This loader resolves url() and @imports inside CSS
              loader: "css-loader",
            },
            {
              // Then we apply postCSS fixes like autoprefixer and minifying
              loader: "postcss-loader"
            },
            {
              // First we transform SASS to standard CSS
              loader: "sass-loader",
              options: {
                implementation: require("sass")
              }
            }
          ]
        }
    ]
    
  },

}