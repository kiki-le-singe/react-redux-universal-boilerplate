import projectConfig from '../../config'

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false
global.__SERVER__ = true
global.__DEV__ = projectConfig.__DEV__
global.__PROD__ = projectConfig.__PROD__
global.__DEBUG__ = projectConfig.__DEBUG__

if (__DEV__) {
  require('./server.dev')
} else {
  require('./server.prod')
}
