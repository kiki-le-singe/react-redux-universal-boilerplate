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
$ npm run dev
```

Serves your app at `localip:3000`. HMR will be enabled in development. A proxy is used for when you  request http://localip:3000/, it will fetch http://localip:3001/ and return.

```shell
$ npm start
```

Runs `npm run dev` script.

```shell
$ npm run start:server
```

Starts the `dev` server to serve your app at `localip:3000`.

```shell
$ npm run start:client:server
```

Starts the `webpack dev server` to serve your `webpack bundle` at `localip:3001` and enable HMR in development.

```shell
$ npm run dev:debug
```

Same as `npm run dev` except that the debug mode is enabled. So [`redux-devtools`](https://github.com/gaearon/redux-devtools) will appear on the ui and you will can see [`webpack-isomorphic-tools's`](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) debugging messages in the console.

> Are there any other alternatives? Sure!
> You can also use a chrome extension [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension). And there is also a small logger middleware `(~/src/common/redux/middleware/logger)` to log all actions and states after they are dispatched.


### Production

```shell
$ npm run build
```

It does some optimizations and Compiles the application, for the production, to disk (`~/static/dist`).

```shell
$ npm run deploy
```

Cleans the `~/static/dist` folder previously created, then compiles your application to disk and starts the `prod` server.

```shell
$ npm run prod
```

Starts the `prod` server to serve your app at `localip:3000`.


### Test

```shell
$ npm run test
```

Runs unit tests with Karma. It will generate a coverage report to `~/coverage`.

```shell
$ npm run test:dev
```

Same as `npm run test` except it watches for changes to re-run tests.


### Linter

```shell
$ npm run lint
```

Lint all files in `~/src` and `~/__tests__`.


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
* [karma](http://karma-runner.github.io/)
* [Mocha](https://mochajs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Sinon.JS](http://sinonjs.org/)
* [Enzyme](https://github.com/airbnb/enzyme)
* [why-did-you-update](https://github.com/garbles/why-did-you-update)


## Styles

You can use `.css` file extensions using the latest CSS syntax with [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext).

> CSS are automatically autoprefixed. You don't need to add prefixes like `-webkit`.
> See [automatic vendor prefixes](http://cssnext.io/features/#automatic-vendor-prefixes) from `postcss-cssnext features`

See the `~/src/common/styles/global` directory to implement global styles (site's theme for example) and see an example of use case css module `~/src/common/components/views/About`. There is also a `~/src/common/styles/local` directory for common local styles (this could allow to use [css modules' composition](https://github.com/css-modules/css-modules#composition) between components).

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

## Unit Tests

Tests are in `~/__tests__`. [Mocha](https://mochajs.org/) will be used for structuring tests, [karma](http://karma-runner.github.io/) as the test runner, [Chai](http://chaijs.com/) for assertions, [Sinon.JS](http://sinonjs.org/) for spies... And [Enzyme](https://github.com/airbnb/enzyme) to simplify testing react components.

## Sources

 * [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)
 * [webapp (React, Redux, React-router, i18n, isomorphic, etc)](https://github.com/halt-hammerzeit/webapp)
 * [Universal React Boilerplate](https://github.com/cloverfield-tools/universal-react-boilerplate)
 * [React Universal example](https://github.com/reactjs/redux/tree/master/examples/universal)
 * [React Simple Universal](https://github.com/guidsen/react-simple-universal)
 * [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit)
 * [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
 * [react-boilerplate - Boilerplate for "SurviveJS - React"](https://github.com/survivejs/react-boilerplate)
 * [react-testing-starter-kit](https://github.com/SpencerCDixon/react-testing-starter-kit)
 * [karma-webpack](https://github.com/webpack/karma-webpack)

## Learn more

 * [Babel Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/README.md)
 * [css-modules](https://github.com/css-modules/css-modules)
  * [css-modules' webpack-demo](https://github.com/css-modules/webpack-demo)
 * [css-loader's local-scope](https://github.com/webpack/css-loader#local-scope)
 * Run multiple commands in parallel:
  * [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
  * [npm-run-all](https://github.com/mysticatea/npm-run-all)
 * [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
