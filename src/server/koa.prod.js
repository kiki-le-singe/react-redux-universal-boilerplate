import Koa from 'koa'
import helmet from 'koa-helmet'
import compress from 'koa-compress'
import staticCache from 'koa-static-cache'
import htmlMinifier from 'koa-html-minifier'
import _debug from 'debug'
import serve from 'koa-static'
import convert from 'koa-convert'

import handleRender from 'server/utils/render'
import projectConfig, { paths } from '../../config'

const debug = _debug('app:server:prod')
const app = new Koa()
const { SERVER_HOST, SERVER_PORT } = projectConfig

app.use(helmet())

app.use(compress({
  threshold: 2048,
  flush: require('zlib').Z_SYNC_FLUSH
}))

app.use(convert(htmlMinifier({
  caseSensitive: true,
  // removeComments: true,
  removeCommentsFromCDATA: true,
  removeCDATASectionsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  removeAttributeQuotes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  decodeEntities: true,
})))

app.use(convert(staticCache(paths('staticDir'), {
  maxAge: 365 * 24 * 60 * 60 // Add these files to caches for a year
})))

app.use(serve('static'))

// This is fired every time the server side receives a request
app.use(handleRender)

// Start the server
app.listen(SERVER_PORT, () => {
  debug(`Koa server listening at http://${SERVER_HOST}:${SERVER_PORT} in production mode`)
})
