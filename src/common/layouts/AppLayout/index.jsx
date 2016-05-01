import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
  children: PropTypes.object
}

function AppLayout(props) {
  // *** STYLES *** //
  require('common/styles/app.scss')

  return (
    <div className="views">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      { props.children }
    </div>
  )
}

AppLayout.propTypes = propTypes

export default AppLayout
