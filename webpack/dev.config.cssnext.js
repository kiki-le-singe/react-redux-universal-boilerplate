import webpack from 'webpack'
import _debug from 'debug'
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'

import isomorphicToolsConfig from './isomorphic.tools.config'
import projectConfig, { paths } from '../config'

const webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(isomorphicToolsConfig)
const debug = _debug('app:webpack:config:dev')
const srcDir = paths('src')
const globalStylesDir = paths('globalStyles')
const cssLoaderOptions = {
  sourceMap: true,
  importLoaders: 1,
  localIdentName: '[name]__[local]___[hash:base64:5]',
}
const {
  SERVER_HOST,
  VENDOR_DEPENDENCIES,
  WEBPACK_DEV_SERVER_PORT,
  __CLIENT__,
  __SERVER__,
  __DEV__,
  __PROD__
} = projectConfig

debug('Create configuration.')
const config = {
  cache: true,
  context: paths('base'),
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      `webpack-hot-middleware/client?reload=true&path=http://${SERVER_HOST}:${WEBPACK_DEV_SERVER_PORT}/__webpack_hmr`,
      paths('entryApp')
    ],
    vendor: VENDOR_DEPENDENCIES
  },
  output: {
    path: paths('build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: `http://${SERVER_HOST}:${WEBPACK_DEV_SERVER_PORT}/build/`
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
        include: [srcDir],
        options: {
          rules: {
            'no-unused-vars': 'warn'
          }
        }
      },
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: [srcDir],
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: [
            ['latest', { es2015: { modules: false } }],
            'react',
            'stage-0'
          ],
          plugins: ['transform-runtime', 'react-hot-loader/babel', 'transform-react-jsx-source'],
        }
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        include: [srcDir],
        exclude: [globalStylesDir],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { ...cssLoaderOptions, modules: true }
          },
          'postcss-loader'
        ]
      },
      {
        test: /common\/styles\/global\/app\.css$/,
        include: [srcDir],
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: cssLoaderOptions
          },
          'postcss-loader',
        ]
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      {
        test: webpackIsomorphicToolsPlugin.regular_expression('images'),
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      __CLIENT__,
      __SERVER__,
      __DEV__,
      __PROD__
    }),
    webpackIsomorphicToolsPlugin.development()
  ]
}

export default config
