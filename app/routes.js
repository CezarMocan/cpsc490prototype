import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import TestApp1 from './components/TestApp1.jsx';
import Home from './components/Home';
import Lessons from './components/Lessons.jsx';
import Credits from './components/GalleryConservative/Credits.jsx';
import About from './components/GalleryConservative/About.jsx';
import History from './components/GalleryConservative/History.jsx';
import Exhibition from './components/GalleryConservative/Exhibition.jsx';
import ExhibitionDiscrete from './components/GalleryConservative/ExhibitionDiscrete.jsx';

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
    </Route>
  </Route>
);