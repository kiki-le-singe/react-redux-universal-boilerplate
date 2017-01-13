const store = __DEV__ ?
  require('./configureStoreDev').default :
  require('./configureStoreProd').default

export default store
