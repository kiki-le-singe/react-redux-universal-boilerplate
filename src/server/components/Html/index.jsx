import React, { Component, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'
import Helmet from 'react-helmet'
import serialize from 'serialize-javascript'

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object.isRequired,
    component: PropTypes.node.isRequired,
    store: PropTypes.object.isRequired
  }

  get scripts() {
    const { javascript } = this.props.assets

    return Object.keys(javascript).reverse().map((script, i) => {
      const key = `script_${i}`
      return (<script src={javascript[script]} key={key} />)
    })
  }

  get styles() {
    const { assets } = this.props
    const { styles, assets: _assets } = assets
    const stylesArray = Object.keys(styles)

    // styles (will be present only in production with webpack extract text plugin)
    if (stylesArray.length !== 0) {
      return stylesArray.map((style, i) => {
        const key = `style_${i}`
        return (<link href={assets.styles[style]} key={key} rel="stylesheet" type="text/css" />)
      })
    }

    // (will be present only in development mode)
    // It's not mandatory but recommended to speed up loading of styles
    // (resolves the initial style flash (flicker) on page load in development mode)
    const stylesPaths = Object.keys(_assets).filter(asset => asset.includes('.css') || asset.includes('.scss'))
    return stylesPaths.map((style, i) => {
      const key = `style_${i}`
      return (<style dangerouslySetInnerHTML={{ __html: _assets[style]._style }} key={key} />)
    })
  }

  render() {
    const { component, store } = this.props
    const head = Helmet.rewind()
    const htmlAttributes = head.htmlAttributes.toComponent()

    return (
      <html lang={htmlAttributes.lang}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />

          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          {this.styles}
        </head>

        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: renderToString(component) }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__PRELOADED_STATE__=${serialize(store.getState())};` }} />
          {this.scripts}
        </body>
      </html>
    )
  }
}
