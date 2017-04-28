import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import AppLayout from 'common/layouts/AppLayout'
import configureStore from '../common/redux/store'
// import routes from '../common/routes'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
// const history = syncHistoryWithStore(browserHistory, store)
const rootEl = document.getElementById('root')

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
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
