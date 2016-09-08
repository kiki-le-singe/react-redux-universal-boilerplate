import { argv } from 'yargs'
import _debug from 'debug'
import webpackTestConfig from './webpack/test.config'

const debug = _debug('app:karma')
debug('Create configuration.')

const karmaConfig = {
  frameworks: ['mocha'],
  reporters: ['spec', 'coverage'],
  files: ['__tests__/index.test.js'],
  preprocessors: {
    '__tests__/index.test.js': ['webpack', 'sourcemap']
  },
  browsers: [
    // 'Chrome',
    'PhantomJS'
  ],
  singleRun: !argv.watch,
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
