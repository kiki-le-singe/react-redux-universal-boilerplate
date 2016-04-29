import { createStore, applyMiddleware, compose } from 'redux'

// Note: Should not use logger in production. It's just for example
import logger from '../middleware/logger'
import rootReducer from '../reducers'

const configureStoreProd = (initialState = {}) => {
  const finalCreateStore = compose(
    applyMiddleware(logger)
  )(createStore)

  return finalCreateStore(rootReducer, initialState)
}

export default configureStoreProd
