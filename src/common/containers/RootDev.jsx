import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

import DevTools from './DevTools'
import routes from 'common/routes'

const propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

function RootDev(props) {
  const { history, store } = props
  const showDevTools = () => (__DEBUG__ ? (<DevTools />) : null)

  return (
    <Provider store={store}>
      <div className="app">
        <Router history={history} routes={routes} />
        { showDevTools() }
      </div>
    </Provider>
  )
}

RootDev.propTypes = propTypes

export default RootDev
