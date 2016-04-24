import { argv } from 'yargs'
import webpackDevMiddleware from 'webpack-dev-middleware'

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

  return webpackDevMiddleware(compiler, webpackDevMiddlewareOptions)
}
