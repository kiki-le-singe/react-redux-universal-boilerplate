import { connect } from 'react-redux'

import { actions } from 'common/redux/actions/CounterActions'
import CounterView from './CounterView'

const mapStateToProps = state => ({
  counter: state.counter
})

const connectedCounterView = connect(mapStateToProps, actions)(CounterView)

export { connectedCounterView as default, CounterView }
