import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

export default function CounterView({ counter, increment, decrement }) {
  return (
    <div className="view view__counter">
      <Helmet title="Counter" />

      <h2>Counter: {counter}</h2>

      <div className="view__content">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

CounterView.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
}

CounterView.defaultProps = {
  counter: 0,
}
