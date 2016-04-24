let store

if (__DEV__) {
  store = require('./configureStoreDev').default
} else {
  store = require('./configureStoreProd').default
}

export default store
