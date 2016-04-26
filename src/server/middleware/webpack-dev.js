import { argv } from 'yargs'
import koaWebpackDevMiddleware from 'koa-webpack-dev-middleware'
import convert from 'koa-convert'

const QUIET_MODE = !!argv.quiet

export default function (compiler, options) {
  const webpackDevMiddlewareOptions = {
    ...options,
    quiet: QUIET_MODE,
    noInfo: QUIET_MODE,
    stats: {
      colors: true,
      chunks: false,
      chunkModules: false
    },
    hot: true,
    lazy: false,
    historyApiFallback: true
  }

  return convert(koaWebpackDevMiddleware(compiler, webpackDevMiddlewareOptions))
}
