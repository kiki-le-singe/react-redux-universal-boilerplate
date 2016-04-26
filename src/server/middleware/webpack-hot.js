import koaWebpackHotMiddleware from 'koa-webpack-hot-middleware'
import convert from 'koa-convert'

export default function (compiler) {
  return convert(koaWebpackHotMiddleware(compiler))
}
