var path = require('path'),
  webpack = require('webpack'),
  loaders = require('./webpack.loaders.js')

module.exports = {
  entry: [
    './index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    "jquery": "jQuery",
    "react": "React",
    "react-dom": "ReactDOM",
    "bootstrap": "Bootstrap"
  },
  module: {
    loaders: loaders
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}
