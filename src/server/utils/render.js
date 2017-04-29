import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import AppLayout from 'common/layouts/AppLayout'
import configureStore from 'common/redux/store'
import Html from 'server/components/Html'

const renderFullPage = (component, store) => {
  const assets = webpackIsomorphicTools.assets()
  // Render the component to a string
  const html = renderToString(<Html assets={assets} component={component} store={store} />)

  return `<!doctype html>\n${html}`
}

const handleRender = (ctx) => {
  // clear require() cache if in development mode
  // (makes asset hot reloading work)
  if (__DEV__) {
    webpackIsomorphicTools.refresh()
  }

  // Compile an initial state
  const preloadedState = { counter: 2 }
  // Create a new Redux store instance
  const store = configureStore(preloadedState)

  const _ctx = ctx
  const { url } = _ctx
  const context = {}

  const component = (
    <Provider store={store}>
      <StaticRouter
        location={url}
        context={context}
      >
        <AppLayout />
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
    // res.writeHead(301, {
    //   Location: context.url
    // })
    // res.status(301).setHeader('Location', routerContext.url);
    // res.end()
    _ctx.status = 301
  } else {
    // Send the rendered page back to the client
    _ctx.type = 'html'
    _ctx.status = 200
    _ctx.body = renderFullPage(component, store)
  }
}

export default handleRender
