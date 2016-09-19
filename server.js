var webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  contentBase: config.output.path
}).listen(20001, '0.0.0.0', function(err, result){
  if(err){
    return console.log(err)
  }
  console.log('Listening at http://0.0.0.0:20001')
})
