import { createStore } from 'redux'

import rootReducer from '../reducers'

const configureStoreProd = (preloadedState = {}) => createStore(rootReducer, preloadedState)

export default configureStoreProd
