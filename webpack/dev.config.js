import webpack from 'webpack'
import path from 'path'
import _debug from 'debug'
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'

import isomorphicToolsConfig from './isomorphic.tools.config'
import projectConfig, { paths } from '../config'

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(isomorphicToolsConfig)
const debug = _debug('app:webpack:config:dev')
const srcDir = paths('src')
const nodeModulesDir = paths('nodeModules')
const deps = [
  'redux/dist/redux.min.js',
  'font-awesome/css/font-awesome.min.css'
]

debug('Create configuration.')
const config = {
  context: paths('base'),
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    paths('entryApp')
  ],
  output: {
    path: paths('dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    alias: {},

    // Resolve the `./src` directory so we can avoid writing
    // ../../styles/base.css but styles/base.css
    root: [srcDir],

    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [],
    // preLoaders: [
    //   {
    //     test: /\.js[x]?$/,
    //     loader: 'eslint',
    //     include: [srcDir]
    //   }
    // ],
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        exclude: [nodeModulesDir],
        include: [srcDir],
        query: {
          presets: ['react-hmre']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('styles'),
        include: [srcDir],
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url?limit=10000'
      }
    ]
  },
  postcss: wPack => ([
    require('postcss-import')({ addDependencyTo: wPack }),
    require('postcss-url')(),
    require('autoprefixer')({ browsers: ['last 2 versions'] })
  ]),
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __CLIENT__: projectConfig.__CLIENT__,
      __SERVER__: projectConfig.__SERVER__,
      __DEV__: projectConfig.__DEV__,
      __PROD__: projectConfig.__PROD__,
      __DEBUG__: projectConfig.__DEBUG__
    }),
    new webpack.optimize.DedupePlugin(),
    webpackIsomorphicToolsPlugin.development()
  ]
}

// Optimizing rebundling
deps.forEach(dep => {
  const depPath = path.resolve(nodeModulesDir, dep)

  config.resolve.alias[dep.split(path.sep)[0]] = depPath
  config.module.noParse.push(depPath)
})

export default config
