import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import config from '../../config'

const propTypes = {
  children: PropTypes.object
}
const defaultProps = {
  children: {}
}

function AppLayout(props) {
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

      {props.children}
    </div>
  )
}

AppLayout.propTypes = propTypes
AppLayout.defaultProps = defaultProps

export default AppLayout
