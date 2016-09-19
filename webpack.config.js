var path = require('path'),
  loaders = require('./webpack.loaders.js')

module.exports = {
  entry: './index.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: loaders
  }
}
