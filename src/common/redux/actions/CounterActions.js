export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const constants = {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
}

export const increment = () => ({
  type: INCREMENT_COUNTER
})

export const decrement = () => ({
  type: DECREMENT_COUNTER
})

export const actions = {
  increment,
  decrement,
}
