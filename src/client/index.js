import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'
import AppLayout from 'common/layouts/AppLayout'
import configureStore from '../common/redux/store'

const preloadedState = window.__PRELOADED_STATE__
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
const store = configureStore(history, preloadedState)
const rootEl = document.getElementById('root')

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
          <AppLayout />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    rootEl,
  )
}

// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('common/layouts/AppLayout', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(rootEl)
      renderApp()
    })
  })
}

if (!__PROD__) {
  const { whyDidYouUpdate } = require('why-did-you-update')

  whyDidYouUpdate(React)
}

renderApp()
