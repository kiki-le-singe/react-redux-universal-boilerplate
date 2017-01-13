import webpack from 'webpack'
import _debug from 'debug'

import projectConfig, { paths } from '../config'

const debug = _debug('app:webpack:config:test')
const srcDir = paths('src')
const testDir = paths('test')
const cssLoaderOptions = {
  modules: true,
  sourceMap: true,
  localIdentName: '[name]__[local]___[hash:base64:5]',
}
const scssLoaderOptions = {
  outputStyle: 'expanded',
  sourceMap: true,
}
const {
  __CLIENT__,
  __SERVER__,
  __DEV__,
  __PROD__,
} = projectConfig

debug('Create configuration.')
const config = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
    alias: {
      sinon: 'sinon/pkg/sinon'
    }
  },
  module: {
    noParse: [
      /\/sinon\.js/
    ],
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: [srcDir, testDir],
        options: { cacheDirectory: true }
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        include: [srcDir],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { ...cssLoaderOptions, importLoaders: 1 }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        include: [srcDir],
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { ...cssLoaderOptions, importLoaders: 2 }
          },
          'postcss-loader',
          { loader: 'sass-loader', options: scssLoaderOptions },
        ]
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/,
        loader: 'url-loader',
        options: { limit: 10240 }
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __CLIENT__,
      __SERVER__,
      __DEV__,
      __PROD__
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
}

export default config
