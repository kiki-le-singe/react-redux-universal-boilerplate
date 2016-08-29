import Koa from 'koa'
import _debug from 'debug'
import serve from 'koa-static'
import proxy from 'koa-proxy'
import convert from 'koa-convert'

import { handleRender } from 'server/utils'
import projectConfig from '../../config'

const debug = _debug('app:server:dev')
const app = new Koa()
const { SERVER_HOST, SERVER_PORT, WEBPACK_DEV_SERVER_PORT } = projectConfig

app.use(serve('static'))

app.use(convert(proxy({
  host: `http://${SERVER_HOST}:${WEBPACK_DEV_SERVER_PORT}`,
  match: /^\/build\//
})))

// This is fired every time the server side receives a request
app.use(handleRender)

/* ****************
 START THE SERVER
***************** */

app.listen(SERVER_PORT, () => {
  debug(`Koa server listening at http://${SERVER_HOST}:${SERVER_PORT} in ${app.env} mode`)
})
