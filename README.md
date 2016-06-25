# React Redux Universal Boilerplate

An Universal ReactJS/Redux Boilerplate.

## Installation

```shell
$ git clone git@github.com:kiki-le-singe/react-redux-universal-boilerplate-boilerplate.git
$ cd react-redux-universal-boilerplate-boilerplate
$ npm install
```

## Scripts

### Development

```shell
$ npm start
```

Serves your app at `localhost:3000`. HMR will be enabled in development. A proxy is used for when you  request http://localhost:3000/, it will fetch http://localhost:3001/ and return.

```shell
$ npm run start:server
```

Starts the `dev` server to serve your app at `localhost:3000`.

```shell
$ npm run start:client:server
```

Starts the `webpack dev server` to serve your `webpack bundle` at `localhost:3001` and enable HMR in development.


### Production

```shell
$ npm run compile
```

It does some optimizations and Compiles the application, for the production, to disk (`~/static/dist`).

```shell
$ npm run deploy
```

Cleans the `~/static/dist` folder previously created, then compiles your application to disk and starts the `prod` server.

```shell
$ npm run prod
```

Starts the `prod` server to serve your app at `localhost:3000`.


## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [react-router](https://github.com/reactjs/react-router)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [webpack](https://github.com/webpack/webpack)
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)
* [babel](https://github.com/babel/babel)
* [koa](https://github.com/koajs/koa)
* [eslint](http://eslint.org)
* [Universal (Isomorphic)](http://isomorphic.net)
* [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)
* [css-modules](https://github.com/css-modules/css-modules)


## Styles

You can use `.css` file extensions using the latest CSS syntax with [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext).
See the `~/src/common/styles/global` directory to implement global styles (site's theme for example) and see an example of use case css module `~/src/common/components/views/About`. There is also a `~/src/common/styles/local` directory for common local styles (css modules).

Are there any other solutions ? Fortunately yes!

> I could try one of these following options if what I implemented doesn't work very well...

* It's possible to use `css-modules` for [`Theming`](https://github.com/css-modules/css-modules/blob/master/docs/theming.md)
* Obviously you can use the traditional method (it works very well) to do your own css:

```css
.foo-namespace {
  .baz {
    ...
  }
  .bar {
    ...
  }
}
```

```html
<div className="foo-namespace">
  <div className="baz">baz</div>
  <div className="bar">bar</div>
</div>
```


## Globals

These are global variables available to you anywhere in your source code. They can be found  in `~/config/index.js`.

```js
new webpack.DefinePlugin({
  __CLIENT__: projectConfig.__CLIENT__,
  __SERVER__: projectConfig.__SERVER__,
  __DEV__: projectConfig.__DEV__,
  __PROD__: projectConfig.__PROD__,
  __DEBUG__: projectConfig.__DEBUG__
})
```

> Webpack is made for client side code development only. So we also have to define them on the server side

```js
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false
global.__SERVER__ = true
global.__DEV__ = projectConfig.__DEV__
global.__PROD__ = projectConfig.__PROD__
global.__DEBUG__ = projectConfig.__DEBUG__
```

## Sources

 * [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
 * [webapp (React, Redux, React-router, i18n, isomorphic, etc)](https://github.com/halt-hammerzeit/webapp)
 * [Universal React Boilerplate](https://github.com/cloverfield-tools/universal-react-boilerplate)
 * [React Universal example](https://github.com/reactjs/redux/tree/master/examples/universal)
 * [React Simple Universal](https://github.com/guidsen/react-simple-universal)
 * [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit)
 * [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)

## Learn more

 * [css-modules](https://github.com/css-modules/css-modules)
 * [css-loader's local-scope](https://github.com/webpack/css-loader#local-scope)
 * [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
 * [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
