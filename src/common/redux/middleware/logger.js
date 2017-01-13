/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => (action) => {
  // Notes:
  // next = store.dispatch;
  // next(action) = dispatch(action);

  if (__CLIENT__) {
    /* eslint-disable */
    console.group(action.type)
    console.info('dispatching', action)
    const result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }

  return
}

export default logger
