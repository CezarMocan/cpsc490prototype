import React from 'react';
import Footer from './Footer.jsx';
import Header from './GalleryConservative/Header.jsx'

class TestApp1 extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="gallery-conservative">
      	<Header />
        {this.props.children}
      </div>
    );
  }
}

export default TestApp1;