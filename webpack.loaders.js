var path = require('path')

module.exports = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel'
  },
  {
    test: /\.(scss|sass)$/,
    loaders: ['style', 'css', 'sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')]
  },
  {
    test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
    loader: 'url-loader'
  }
]
