const path = require('path');


module.exports = {
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'js/dashboard_main.js'),
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  performance: {
    maxAssetSize: 1000000
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      }
    ]
  }
}