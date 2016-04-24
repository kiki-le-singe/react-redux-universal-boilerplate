import { createStore, applyMiddleware, compose } from 'redux'

import DevTools from 'common/containers/DevTools'

import logger from '../middleware/logger'
import rootReducer from '../reducers'

let finalCreateStore

const configureStoreDev = (initialState = {}) => {
  if (__DEBUG__) {
    finalCreateStore = compose(
      applyMiddleware(logger),
      DevTools.instrument()
    )(createStore)
  } else {
    finalCreateStore = compose(
      applyMiddleware(logger)
    )(createStore)
  }

  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStoreDev
