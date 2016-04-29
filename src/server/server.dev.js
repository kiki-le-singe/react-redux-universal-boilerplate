import Koa from 'koa'
import webpack from 'webpack'
import _debug from 'debug'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'
import serve from 'koa-static'

import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHotMiddleware from './middleware/webpack-hot'
import projectConfig from '../../config'
import webpackConfig from '../../webpack/dev.config'

import configureStore from 'common/redux/store'
import routes from 'common/routes'

const debug = _debug('app:server:dev')
const app = new Koa()
const compiler = webpack(webpackConfig)
const serverOptions = { publicPath: webpackConfig.output.publicPath }

app.use(serve('static'))

/* *******************
  WEBPACK CONFIGURATION
******************* */
// Use these middlewares to set up hot module reloading via webpack.
app.use(webpackDevMiddleware(compiler, serverOptions))
app.use(webpackHotMiddleware(compiler))


function renderFullPage(html, initialState) {
  const assets = webpackIsomorphicTools.assets()
  const { assets: _assets, styles, javascript } = assets

  // (will be present only in development mode)
  // This is for the dev mode so it's not mandatory
  // but recommended to speed up loading of styles
  // (resolves the initial style flash (flicker) on page load in development mode)
  let _styles = ''
  if (Object.keys(styles).length === 0) {
    for (const key in _assets) {
      if (key.includes('.scss')) {
        _styles += `<style>${_assets[key]._style}</style>`
      }
    }
  }

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black">

        <title>React Redux Universal Boilerplate</title>
        ${_styles}
      </head>

      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src=${javascript.vendors}></script>
        <script src=${javascript.app}></script>
      </body>
    </html>
    `
}

const handleRender = ctx => {
  // clear require() cache if in development mode
  // (makes asset hot reloading work)
  if (__DEV__) {
    webpackIsomorphicTools.refresh()
  }

  // Compile an initial state
  const initialState = {}
  // Create a new Redux store instance
  const store = configureStore(initialState)
  // Grab the initial state from our Redux store
  const finalState = store.getState()

  const _ctx = ctx
  const { path: location } = _ctx

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      _ctx.status = 500
      _ctx.body = error.message
    } else if (redirectLocation) {
      _ctx.status = 302
      _ctx.redirect(`${redirectLocation.pathname}${redirectLocation.search}`)
    } else if (renderProps) {
      // Render the component to a string
      const html = renderToString(
        <Provider store={store}>
          <div className="app">
            <RouterContext { ...renderProps } />
          </div>
        </Provider>
      )
      // Send the rendered page back to the client
      _ctx.type = 'html'
      _ctx.status = 200
      _ctx.body = renderFullPage(html, finalState)
    } else {
      _ctx.status = 404
      _ctx.body = 'Not found'
    }
  })
}

// This is fired every time the server side receives a request
app.use(handleRender)

/* ****************
 START THE SERVER
***************** */

app.listen(projectConfig.SERVER_PORT, () => {
  debug(`Koa server listening on port ${projectConfig.SERVER_PORT} in ${app.env} node`)
})
