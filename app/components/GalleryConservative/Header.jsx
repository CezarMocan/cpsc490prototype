import React from 'react';

class Header extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="header-container">
        <div className="col-sm-1"> </div>
        <div className="col-sm-4">
        	<span className="logo">a handful of <span className="bronze">bronze</span></span>
        </div>
      </div>
    );
  }
}

export default Header;