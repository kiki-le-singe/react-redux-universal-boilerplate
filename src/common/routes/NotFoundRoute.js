export default () => ({
  path: '*',
  onEnter(nextState, replace, callback) {
    replace('/')
    callback()
  }
})
