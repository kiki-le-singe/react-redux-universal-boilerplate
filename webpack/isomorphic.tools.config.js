import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin'
import _debug from 'debug'

import projectConfig from '../config'

const debug = _debug('app:webpack:isomorphic:tools:config')

debug('Create configuration.')

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools#configuration
export default {
  debug: projectConfig.__DEBUG__,
  assets: {
    images: {
      extensions: ['png', 'jpg', 'jpeg', 'gif', 'ico', 'svg']
    },
    styles: {
      extensions: ['css', 'scss'],
      filter (module, regular_expression, options, log) {
        if (options.development) {
          return WebpackIsomorphicToolsPlugin.style_loader_filter(module, regular_expression, options, log)
        }
        // in production mode there's no webpack "style-loader",
        // so the module.name will be equal to the asset path
        // return regex.test(module.name);
      },
      path: WebpackIsomorphicToolsPlugin.style_loader_path_extractor,
      parser: WebpackIsomorphicToolsPlugin.css_loader_parser
    }
  }
}
