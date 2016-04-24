let Root

if (__DEV__) {
  Root = require('./RootDev').default
} else {
  Root = require('./RootProd').default
}

export default Root
