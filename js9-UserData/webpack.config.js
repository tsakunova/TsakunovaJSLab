const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'User Data task',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/", to: "assets/" }
      ],
    }),
  ],
    
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
    ],
  }
}