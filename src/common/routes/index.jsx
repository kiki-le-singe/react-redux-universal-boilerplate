import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import AppLayout from 'common/layouts/AppLayout'
import Home from 'common/views/Home'
import About from 'common/views/About'
import Hello from 'common/views/Hello'

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="hello" component={Hello} />
    <Route path="about" component={About} />
    <Redirect from="*" to="hello" />
  </Route>
)
