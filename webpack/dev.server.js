import Koa from 'koa'
import webpack from 'webpack'
import _debug from 'debug'

import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHotMiddleware from './middleware/webpack-hot'
import projectConfig from '../config'
import webpackConfig from './dev.config'

const debug = _debug('app:webpack:dev:server')
const app = new Koa()
const compiler = webpack(webpackConfig)
const serverOptions = { publicPath: webpackConfig.output.publicPath }

// Use these middlewares to set up hot module reloading via webpack.
app.use(webpackDevMiddleware(compiler, serverOptions))
app.use(webpackHotMiddleware(compiler))

app.listen(3001, () => {
  debug(`Webpack dev server listening on port ${projectConfig.WEBPACK_DEV_SERVER_PORT}`)
})
