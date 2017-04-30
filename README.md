# React Redux Universal Boilerplate

## Introduction

> I started this project to learn tools like [React](https://facebook.github.io/react/), [Redux](https://github.com/reactjs/redux), [Webpack](https://webpack.js.org/), [babeljs.io](https://babeljs.io/), [ES6/ES2015](https://babeljs.io/docs/learn-es2015/)... I did it mainly for fun. But it will be maintained and then I used it as Boilerplate for my React|Redux projects. So don't worry it works :p. It's not perfect but it works :).

> Enjoy it! :)

An Universal ReactJS/Redux Boilerplate.

## Requirements

 * [nodejs](http://nodejs.org/)

> Node `>=7.6.0`

## Optional

 * [yarn](https://yarnpkg.com/)

## Installation

```shell
$ git clone https://github.com/kiki-le-singe/react-redux-universal-boilerplate.git <name>
$ cd <name>
$ npm install or yarn
$ on postinstall you should choose between SASS or CSSNEXT
```

## Run

* npm start (dev mod)
* npm run deploy (prod mod - Runs npm run build:client and npm run build:server scripts)
* cd readyToDeploy, npm install or yarn then npm start (prod mod)

## Some NPM Script Commands

### Development

```shell
$ npm run setup
```

Allows to choose between sass or cssnext and clean up unnecessary files. This question you will be asked: `You will use SASS as CSS extension language 😉 . Do you wish to use CSSNEXT 😀 ? This choice is irreversible. Obviously you can install the project again or just use your version control system to discard changes in working directory.`

> This script runs on postinstall script (see package.json).


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

Starts the `dev` server with nodemon to serve your app at `localip:3000`.

```shell
$ npm run start:client:server
```

Starts the `webpack dev server` to serve your `webpack bundle` at `localip:3001` and enable HMR in development.


### Production

```shell
$ npm run build:client
```

It does some optimizations and compiles the client app, for the production, to disk (`~/readyToDeploy/static/dist`).

```shell
$ npm run build:server
```

It does some optimizations and compiles the server app, for the production, to disk (`~/readyToDeploy/server.js`).

```shell
$ npm run deploy
```

Runs `npm run build:client` and `npm run build:server` scripts.

```shell
$ cd readyToDeploy
$ npm install or yarn
$ npm start
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


## Deployment

Runs `npm run deploy` and everything is in the `~/readyToDeploy` folder.

You can read the [README](readyToDeploy/README.md).


## DEBUG

You should just install an extension [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension).
Personally I use [Redux DevTools for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

> Are there any other alternatives? Sure!
> You can also use [Redux DevTools](https://github.com/gaearon/redux-devtools). And there is also a small logger middleware [`redux-logger`](https://github.com/evgenyrodionov/redux-logger) to log all actions and states after they are dispatched.


## Features
* [react](https://github.com/facebook/react)
* [redux](https://github.com/reactjs/redux)
* [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
* [react-router 4](https://github.com/reactjs/react-router)
* [react-router-redux](https://github.com/reactjs/react-router-redux)
* [react-helmet](https://github.com/nfl/react-helmet)
* [React Hot Loader 3](https://github.com/gaearon/react-hot-loader)
* [webpack 2](https://github.com/webpack/webpack)
* [webpack-dev-middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools)
* [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
* [purifycss-webpack-plugin](https://github.com/purifycss/purifycss-webpack-plugin)
* [babel](https://github.com/babel/babel)
* [koa 2](https://github.com/koajs/koa)
  * [koa-compress](https://github.com/koajs/compress)
  * [koa-convert](https://github.com/koajs/convert)
  * [koa-helmet](https://github.com/venables/koa-helmet)
  * [koa-html-minifier](https://github.com/koajs/html-minifier)
  * [koa-static](https://github.com/koajs/static)
  * [koa-static-cache](https://github.com/koajs/static-cache)
* [eslint](http://eslint.org)
* [Universal (Isomorphic)](http://isomorphic.net)
* [normalize.css](https://github.com/necolas/normalize.css)
* [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)
* [sass](https://github.com/sass/sass)
* [css-modules](https://github.com/css-modules/css-modules)
* [karma](http://karma-runner.github.io/)
* [Mocha](https://mochajs.org/)
* [Chai](http://chaijs.com/)
* [Sinon.JS](http://sinonjs.org/)
* [Enzyme](https://github.com/airbnb/enzyme)
* [why-did-you-update](https://github.com/garbles/why-did-you-update)
* [babel-preset-latest](https://babeljs.io/docs/plugins/preset-latest/)
* Backend bundle with webpack
* Code Splitting ( ** for now doesn't work with React Router 4. You can use an old version of this starter [`2.0.5`](https://github.com/kiki-le-singe/react-redux-universal-boilerplate/releases/tag/2.0.5) **)


## Styles

`CSSNEXT` You can use `.css` file extensions using the latest CSS syntax with [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext).

`SASS` You can use `scss.|css` file extensions using the sass syntax with [`sass`](https://github.com/sass/sass).

> CSS are automatically autoprefixed. You don't need to add prefixes like `-webkit`.
> See:
> * [automatic vendor prefixes](http://cssnext.io/features/#automatic-vendor-prefixes) from `postcss-cssnext features`
> * [Autoprefixer](https://github.com/postcss/autoprefixer) (used for sass mode)

See the `~/src/common/styles/global` directory to implement global styles (site's theme for example) and see an example of use case css module `~/src/common/views/AboutView`. There is also a `~/src/common/styles/local` directory for common local styles (this could allow to use [css modules' composition](https://github.com/css-modules/css-modules#composition) between components).

Are there any other solutions ? Fortunately yes!

> I could try one of these following options if what I implemented doesn't work very well...

* It's possible to use `css-modules` for [`Theming`](https://github.com/css-modules/css-modules/blob/master/docs/theming.md)
* Obviously you can use the traditional method (it works very well) to do your own css or sass:

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
})
```

> Webpack is made for client side code development only. So we also have to define them on the server side

```js
/**
 * Define isomorphic constants.
 */

// src/server/index.js

global.__CLIENT__ = false
global.__SERVER__ = true
global.__DEV__ = projectConfig.__DEV__
global.__PROD__ = projectConfig.__PROD__
```

## Unit Tests

Tests are in `~/__tests__`. [Mocha](https://mochajs.org/) will be used for structuring tests, [karma](http://karma-runner.github.io/) as the test runner, [Chai](http://chaijs.com/) for assertions, [Sinon.JS](http://sinonjs.org/) for spies... And [Enzyme](https://github.com/airbnb/enzyme) to simplify testing react components.


## Tips

* For the backend, if you want to ignore some modules, you can use the [IgnorePlugin](https://webpack.github.io/docs/list-of-plugins.html#ignoreplugin)

```js
new webpack.IgnorePlugin(/\.(css|less|scss|jpg|png|...)$/)
```

* How to reduce the size of vendor's bundle? Maybe should we use some librairies as extarnals? See [library-and-externals](http://webpack.github.io/docs/library-and-externals.html) and [React - using-a-cdn](https://facebook.github.io/react/docs/installation.html#using-a-cdn)

> Message received from Webpack via terminal:
> WARNING in asset size limit: The following asset(s) exceed the recommended size limit (250 kB)


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
 * [react-cool-starter](https://github.com/wellyshen/react-cool-starter)
 * [isomorphic-flux-boilerplate](https://github.com/iam4x/isomorphic-flux-boilerplate)
 * [meatier](https://github.com/mattkrick/meatier)

## Learn more

 * [Babel Handbook](https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/README.md)
   * [Babel CLI](https://babeljs.io/docs/usage/cli/)
 * [css-modules](https://github.com/css-modules/css-modules)
  * [css-modules' webpack-demo](https://github.com/css-modules/webpack-demo)
 * [css-loader's local-scope](https://github.com/webpack/css-loader#local-scope)
 * Run multiple commands in parallel:
  * [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
  * [npm-run-all](https://github.com/mysticatea/npm-run-all)
 * [html5-boilerplate](https://github.com/h5bp/html5-boilerplate)
 * [yarn](https://yarnpkg.com/)
  * [Getting Started](https://yarnpkg.com/en/docs/getting-started)
  * [Documentation](https://yarnpkg.com/en/docs/)
  * [Migrating from npm](https://yarnpkg.com/en/docs/migrating-from-npm)
 * [koajs tutorial](http://www.tutorialspoint.com/koajs/)
 * [webpack official](https://webpack.js.org/)
   * [webpack concepts](https://webpack.js.org/concepts/)
   * [Hot Module Replacement - React](https://webpack.js.org/guides/hmr-react/)
   * [Code Splitting](https://webpack.js.org/guides/code-splitting/)
   * [Caching](https://webpack.js.org/guides/caching/)
 * [webpack tutorial from survivejs](http://survivejs.com/webpack/)
 * [Getting Started with Webpack 2](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783#.lk4atk5rv)
   * [Webpack 2 + PostCSS + cssnext](https://blog.madewithenvy.com/webpack-2-postcss-cssnext-fdcd2fd7d0bd#.ch21zdahc)
 * [webpack-2-tree-shaking-configuration](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.t6o16nkyl)
 * [Backend-Apps-with-Webpack](http://jlongster.com/Backend-Apps-with-Webpack--Part-I)
 * [complete-intro-to-react](https://btholt.github.io/complete-intro-to-react/all.html)
 * [Progressive Web Apps with React.js from Addy Osmani](https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2#.3m4iz78q4)
