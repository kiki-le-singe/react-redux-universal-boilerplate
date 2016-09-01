import _debug from 'debug'
import webpackTestConfig from './webpack/test.config'

const debug = _debug('app:karma')
debug('Create configuration.')

const karmaConfig = {
  frameworks: ['mocha'],
  reporters: ['spec', 'coverage'],
  files: ['__tests__/**/*.spec.js'],
  preprocessors: {
    '__tests__/**/*.spec.js': ['webpack', 'sourcemap']
  },
  browsers: [
    // 'Chrome',
    'PhantomJS'
  ],
  singleRun: true,
  coverageReporter: {
    dir: 'coverage/',
    type: 'html'
  },
  webpack: webpackTestConfig,
  webpackMiddleware: {
    noInfo: true
  }
}

// cannot use `export default` because of Karma.
module.exports = (config) => config.set(karmaConfig)
