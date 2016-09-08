import webpack from 'webpack'
import _debug from 'debug'

import projectConfig, { paths } from '../config'

const debug = _debug('app:webpack:config:test')
const srcDir = paths('src')
const testDir = paths('test')
const globalStylesDir = paths('globalStyles')
const cssLoader = [
  'css?modules',
  'sourceMap',
  'importLoaders=1',
  'localIdentName=[name]__[local]___[hash:base64:5]'
].join('&')
const {
  __CLIENT__,
  __SERVER__,
  __DEV__,
  __PROD__,
  __DEBUG__
} = projectConfig

debug('Create configuration.')
const config = {
  devtool: 'inline-source-map',
  resolve: {
    root: [srcDir],
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      sinon: 'sinon/pkg/sinon'
    }
  },
  module: {
    noParse: [
      /\/sinon\.js/
    ],
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel',
        include: [srcDir, testDir],
        query: {
          cacheDirectory: true
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        include: [srcDir],
        exclude: [globalStylesDir],
        loaders: [
          'style',
          cssLoader,
          'postcss'
        ]
      },
      {
        test: /common\/styles\/global\/app\.css$/,
        include: [srcDir],
        loaders: [
          'style',
          'css?sourceMap',
          'postcss'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        loader: 'url?limit=10000'
      }
    ]
  },
  postcss: wPack => ([
    require('postcss-import')({ addDependencyTo: wPack }),
    require('postcss-url')(),
    require('postcss-cssnext')()
  ]),
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__,
      __SERVER__,
      __DEV__,
      __PROD__,
      __DEBUG__
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}

export default config
