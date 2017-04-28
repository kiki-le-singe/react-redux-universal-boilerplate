import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}
const defaultProps = {
  name: ''
}

function Hello(props) {
  return <div className="hello">Hello {props.name}</div>
}

Hello.propTypes = propTypes
Hello.defaultProps = defaultProps

export default Hello
