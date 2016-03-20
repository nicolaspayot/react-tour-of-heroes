import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { App } from './app/app';
import { Dashboard } from './app/dashboard/dashboard';
import { Heroes } from './app/hero/list/heroes';
import { HeroDetail } from './app/hero/detail/hero-detail';

import './index.scss';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/dashboard"/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/heroes" component={Heroes}/>
      <Route path="/heroes/:id" component={HeroDetail}/>
    </Route>
  </Router>
), document.getElementById('root'))
