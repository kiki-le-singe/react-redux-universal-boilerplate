let store

if (__DEV__) {
  store = require('./configureStoreDev').default // eslint-disable-line
} else {
  store = require('./configureStoreProd').default // eslint-disable-line
}

export default store
