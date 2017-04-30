import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import Home from 'common/views/HomeView'
import HelloView from 'common/views/HelloView'
import AboutView from 'common/views/AboutView'
import CounterView from 'common/views/CounterView' // eslint-disable-line
import NotFoundRouteView from 'common/views/NotFoundRouteView'

import config from '../../config'

const propTypes = {
  children: PropTypes.object
}
const defaultProps = {
  children: {}
}

function AppLayout() {
  return (
    <div className="views">
      <Helmet {...config.app} />

      <h1>{config.app.title}</h1>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={HelloView} />
        <Route path="/about" component={AboutView} />
        <Route path="/counter" component={CounterView} />
        <Route component={NotFoundRouteView} />
      </Switch>
    </div>
  )
}

AppLayout.propTypes = propTypes
AppLayout.defaultProps = defaultProps

export default AppLayout
