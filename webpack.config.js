const path = require('path');

const conf = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "main.js"
  },
  module: {
    rules: [{
      test: /\.html$/,
      exclude: /node_modules/,
      use: {loader: 'html-loader'}
    }, {
      test: /\.handlebars$/,
      loader: "handlebars-loader"
    },  {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devServer: {
    port: 5020,
    open: true,
  }
};

module.exports = conf;