import React from 'react';
import RouteTransition from './RouteTransition.jsx'
import Footer from './Footer.jsx';
import Header from './GalleryConservative/Header.jsx'

class TestApp1 extends React.Component {
	/* <Footer /> */
  render() {
  	console.log('router')
    return (
      <div className="gallery-conservative">
      	<Header />

		<RouteTransition id={this.props.location.pathname} height={1200}>
        	{this.props.children}
      	</RouteTransition>
      </div>
    );
  }
}

export default TestApp1;