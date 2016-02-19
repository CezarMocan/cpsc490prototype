import React from 'react';
import Footer from './Footer.jsx';

class App extends React.Component {
	/* <Footer /> */
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;