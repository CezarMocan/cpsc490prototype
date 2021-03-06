import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import TestApp1 from './components/TestApp1.jsx';
import TestApp2 from './components/TestApp2_Navigation.jsx';
import Home from './components/Home';
import Lessons from './components/Lessons.jsx';
import Credits from './components/GalleryConservative/Credits.jsx';
import About from './components/GalleryConservative/About.jsx';
import History from './components/GalleryConservative/History.jsx';
import Exhibition from './components/GalleryConservative/Exhibition.jsx';
import ExhibitionDiscrete from './components/GalleryConservative/ExhibitionDiscrete.jsx';
import ExhibitionLeftRight from './components/GalleryConservative/ExhibitionLeftRight.jsx';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/lessons' component={Lessons} />
    <Route path='/testApp1' component={TestApp1}>
  		<Route path='credits' component={Credits} />
  		<Route path='about' component={About} />
  		<Route path='history' component={History} />
  		<Route path='exhibition' component={Exhibition} />
  		<Route path='exhibition2' component={ExhibitionDiscrete} />
      <Route path='exhibition3' component={ExhibitionLeftRight} />
    </Route>

    <Route path='/testApp2' component={TestApp2}>
      <Route path='credits' component={Credits} />
      <Route path='about' component={About} />
      <Route path='history' component={History} />
      <Route path='exhibition' component={Exhibition} />
      <Route path='exhibition2' component={ExhibitionDiscrete} />
      <Route path='exhibition3' component={ExhibitionLeftRight} />
    </Route>
  </Route>
);