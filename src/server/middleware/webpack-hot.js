import webpackHotMiddleware from 'webpack-hot-middleware'

export default function (compiler) {
  return webpackHotMiddleware(compiler)
}
