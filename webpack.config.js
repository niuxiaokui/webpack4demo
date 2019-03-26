module.exports = function (env, argv) {
  return argv.mode === 'production' ?
    require('./build/webpack.production') :
    require('./build/webpack.development')
}