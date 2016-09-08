import React, { PropTypes } from 'react'

const propTypes = {
  name: React.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}
const defaultProps = {
  name: ''
}

function Hello(props) {
  return <div>Hello {props.name}</div>
}

Hello.propTypes = propTypes
Hello.defaultProps = defaultProps

export default Hello
