import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

class Header extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div className="header-container">
        <div className="col-sm-6 col-xs-2 no-padding">
        	<div className="logo-container">
        		<span className="logo">a handful of <span className="bronze">bronze</span></span>
        	</div>
        	<div className="logo-museum">
	        	<span className="at-the">at the </span>
	        	<span className="host-museum">WADSWORTH ATHENEUM <span className="grey">MUSEUM OF ART</span></span>
	        </div>
        </div>
        <div className="col-sm-6 col-xs-2 no-padding nav-container">
	        <span className="top-nav"><Link to={"/" + this.props.prefix + "/about"}>ABOUT</Link></span>
          <span className="top-nav"><Link to={"/" + this.props.prefix + "/exhibition3"}>EXHIBITION</Link></span>
	        <span className="top-nav"><Link to={"/" + this.props.prefix + "/history"}>HISTORY</Link></span>
	        <span className="top-nav"><Link to={"/" + this.props.prefix + "/credits"}>CREDITS</Link></span>
	    </div>
      </div>
    );
  }
}

export default Header;