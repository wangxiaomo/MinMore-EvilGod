var path = require('path')

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel'
  },
  {
    test: /\.(scss|sass)$/,
    loaders: ['style', 'css', 'sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')]
  }
]
