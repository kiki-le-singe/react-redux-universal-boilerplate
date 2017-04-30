import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import logger from 'redux-logger'
import rootReducer from '../reducers'

const configureStoreDev = (history = {}, preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(logger, routerMiddleware(history)),
      (__CLIENT__ && window.devToolsExtension) ? window.devToolsExtension() : f => f
    ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStoreDev
