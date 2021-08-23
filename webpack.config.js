const path = require('path');
const paths = require("./config/paths");
const dotenv = require('dotenv');
const webpack = require('webpack')

console.log(paths)

module.exports = {
  mode: 'development',
  entry: [paths.src + '/js/main.js'],
  output: {
    path: paths.build,
    filename: "js/main-bundled.js",
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, "./src/helpers"),
          partialDirs: path.resolve(__dirname, "./src/partials"),
          utilMethodDirs: path.resolve(__dirname, "./src/js/jshelper")
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    })
  ]
};