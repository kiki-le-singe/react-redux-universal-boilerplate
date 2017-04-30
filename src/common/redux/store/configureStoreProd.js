import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers'

const configureStoreProd = (history = {}, preloadedState = {}) => createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(routerMiddleware(history)),
  )
)

export default configureStoreProd
