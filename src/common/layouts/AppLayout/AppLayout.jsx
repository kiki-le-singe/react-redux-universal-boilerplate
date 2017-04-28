import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import Home from 'common/views/HomeView'
import HelloView from 'common/views/HelloView'
import AboutView from 'common/views/AboutView'
import CounterView from 'common/views/CounterView' // eslint-disable-line

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

      <Route exact path="/" component={Home} />
      <Route path="/hello" component={HelloView} />
      <Route path="/about" component={AboutView} />
      <Route path="/counter" component={CounterView} />
    </div>
  )
}

AppLayout.propTypes = propTypes
AppLayout.defaultProps = defaultProps

export default AppLayout
