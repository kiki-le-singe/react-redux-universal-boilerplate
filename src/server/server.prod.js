import Koa from 'koa'
import _debug from 'debug'
import serve from 'koa-static'

import projectConfig from '../../config'
import { handleRender } from 'server/utils'

const debug = _debug('app:server:prod')
const app = new Koa()

app.use(serve('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  debug(`Koa server listening on port ${projectConfig.SERVER_PORT} in ${app.env} mode`)
})
