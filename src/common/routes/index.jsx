import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import AppLayout from 'common/layouts/AppLayout'
import Home from 'common/components/views/Home'
import About from 'common/components/views/About'
import Hello from 'common/components/views/Hello'

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="hello" component={Hello} />
    <Route path="about" component={About} />
    <Redirect from="*" to="hello" />
  </Route>
)
