import React, { Component, PropTypes } from 'react'
import { renderToString } from 'react-dom/server'

export default class Html extends Component {
  static propTypes = {
    assets: PropTypes.object,
    component: PropTypes.node,
    store: PropTypes.object
  }

  get scripts() {
    const { javascript } = this.props.assets

    return Object.keys(javascript).map((script, i) =>
      <script src={javascript[script]} key={i} />
    )
  }

  get styles() {
    const { assets } = this.props
    const { styles, assets: _assets } = assets
    const stylesArray = Object.keys(styles)

    // styles (will be present only in production with webpack extract text plugin)
    if (stylesArray.length !== 0) {
      return stylesArray.map((style, i) =>
        <link href={assets.styles[style]} key={i} rel="stylesheet" type="text/css" />
      )
    }

    // (will be present only in development mode)
    // It's not mandatory but recommended to speed up loading of styles
    // (resolves the initial style flash (flicker) on page load in development mode)
    const scssPaths = Object.keys(_assets).filter(asset => asset.includes('.scss'))
    return scssPaths.map((style, i) =>
      <style dangerouslySetInnerHTML={{ __html: _assets[style]._style }} key={i} />
    )
  }

  render() {
    const { component, store } = this.props

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <title>React Redux Universal Boilerplate</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          {this.styles}
        </head>

        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: renderToString(component) }} />
          <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${JSON.stringify(store.getState())};` }} />
          {this.scripts}
        </body>
      </html>
    )
  }
}
