import { createStore, applyMiddleware, compose } from 'redux'

import logger from '../middleware/logger'
import rootReducer from '../reducers'

const configureStoreDev = (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(logger),
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
