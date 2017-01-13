import projectConfig, { paths } from '../../config'

/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false
global.__SERVER__ = true
global.__DEV__ = projectConfig.__DEV__
global.__PROD__ = projectConfig.__PROD__

if (__PROD__) {
  global.webpackIsomorphicTools = {
    assets() {
      return require('../../webpack-assets.json')
    }
  }

  require('./koa.prod')
} else {
  const WebpackIsomorphicTools = require('webpack-isomorphic-tools')

  const isomorphicToolsConfig = require('../../webpack/isomorphic.tools.config').default
  const projectBasePath = paths('base')

  // https://github.com/halt-hammerzeit/webpack-isomorphic-tools#mainjs
  global.webpackIsomorphicTools =
    new WebpackIsomorphicTools(isomorphicToolsConfig)
      .server(projectBasePath, () => {
        require('./koa.dev')
      })
}
