import path from 'path'
import webpack from 'webpack'
import nodeExternals from 'webpack-node-externals'
import _debug from 'debug'

import projectConfig, { paths } from '../config'

const debug = _debug('app:webpack:config:server')
const srcDir = paths('src')
const projectConfigDir = paths('projectConfig')
const {
  __DEV__,
  __PROD__
} = projectConfig

debug('Create configuration.')
const config = {
  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  entry: paths('entryServer'),
  output: {
    path: paths('distServer'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  node: { // https://webpack.github.io/docs/configuration.html#node
    console: true,
    global: true,
    process: true,
    Buffer: true,
    __filename: true,
    __dirname: true,
    setImmediate: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [srcDir, projectConfigDir],
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: [srcDir, projectConfigDir],
        options: {
          cacheDirectory: true,
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.(css|scss)$/,
        loader: 'css-loader/locals'
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    // source-map-support: Useful to add source map support to node.js
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__
    }),
  ],
}

export default config
