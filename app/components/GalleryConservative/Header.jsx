import React from 'react';

class Header extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="header-container">
        <div className="col-sm-3 col-xs-1 no-padding">
        	<div className="logo-container">
        		<span className="logo">a handful of <span className="bronze">bronze</span></span>
        	</div>
        	<div className="logo-museum">
	        	<span className="at-the">at the </span>
	        	<span className="host-museum">WADSWORTH ATHENEUM <span className="grey">MUSEUM OF ART</span></span>
	        </div>
        </div>
        <div className="col-sm-6"> </div>
        <div className="col-sm-3 nav-container">
	        <span className="top-nav link selected">ABOUT</span>
	        <span className="top-nav link">EXHIBITION</span>
	        <span className="top-nav link">HISTORY</span>
	        <span className="top-nav link">CREDITS</span>
	    </div>
      </div>
    );
  }
}

export default Header;