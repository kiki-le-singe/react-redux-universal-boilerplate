import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'
import _debug from 'debug'

import projectConfig from '../config'

const debug = _debug('app:webpack:isomorphic:tools:config')

debug('Create configuration.')

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools#configuration
// https://github.com/halt-hammerzeit/webpack-isomorphic-tools#style-loader-css-stylesheets-with-css-modules-feature
export default {
  debug: projectConfig.__DEBUG__,
  assets: {
    images: {
      extensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'svg']
    },
    styles: {
      extensions: ['scss'],
      filter (module, regex, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log)
        }
        // in production mode there's no webpack "style-loader",
        // so the module.name will be equal to the asset path
        return regex.test(module.name)
      },
      path (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log);
        }
        // in production mode there's no Webpack "style-loader",
        // so `module.name`s will be equal to correct asset paths
        return module.name
      },
      parser (module, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log);
        }
        // In production mode there's Webpack Extract Text Plugin
        // which extracts all CSS text away, so there's
        // only CSS style class name map left.
        return module.source
      }
    }
  }
}
