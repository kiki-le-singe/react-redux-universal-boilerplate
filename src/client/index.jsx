import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from 'common/redux/store'
import Root from 'common/containers/Root'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
const root = (<Root history={history} store={store} />)

ReactDOM.render(root, document.getElementById('root'))
