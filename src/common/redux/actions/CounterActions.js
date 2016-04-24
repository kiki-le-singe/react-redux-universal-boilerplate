import types from '../constants/CounterConstants'

/*
 * action creators
 */

const increment = () => (
  { type: types.INCREMENT_COUNTER }
)

const decrement = () => (
  { type: types.DECREMENT_COUNTER }
)

export default { increment, decrement }
