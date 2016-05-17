let Root

if (__DEV__) {
  Root = require('./RootDev').default // eslint-disable-line
} else {
  Root = require('./RootProd').default // eslint-disable-line
}

export default Root
