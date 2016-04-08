import React from 'react';
import RouteTransition from './RouteTransition.jsx'
import Footer from './Footer.jsx';
import Header from './GalleryConservative/Header.jsx'

class TestApp1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {height: 600}
  }

  componentDidMount() {
    //window.addEventListener('resize', this.handleResize);
    console.log(window.innerHeight)
    this.setState({height: window.innerHeight - 200})
  }

  render() {
  	var context = this;
  	// TODO: Set up default style in RouteTransition such that even initial load works.
    return (
      <div className="gallery-conservative">
      	<Header />

		<RouteTransition id={this.props.location.pathname} height={context.state.height}>
        	{this.props.children}
      	</RouteTransition>
      </div>
    );
  }
}

export default TestApp1;