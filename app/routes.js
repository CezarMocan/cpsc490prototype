import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import TestApp1 from './components/TestApp1';
import Home from './components/Home';
import Lessons from './components/Lessons.jsx';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/lessons' component={Lessons} />
    <Route path='/testApp1' components={TestApp1} />
  </Route>
);