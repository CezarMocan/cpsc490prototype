import React from 'react';
import WebcamStore from '../../stores/WebcamStore.jsx'

class Exhibition extends React.Component {
	/* <Footer /> */
  constructor(props) {
    super(props);
    this.state = WebcamStore.getState();
    this.onChange = this.onChange.bind(this);
    console.log(this.state)
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    WebcamStore.listen(this.onChange);
  }

  componentWillUnmount() {
    WebcamStore.unlisten(this.onChange);
  }

  render() {
    var context = this;

    return (
      <div className="text-page-container credits-container">
        <div className="text-page-left-column exhibition-left-column">
          <div className="text-page-title exhibition-title">
            warrior <br/>
            {this.state.webcamParams.Z} {this.state.webcamParams.X} {this.state.webcamParams.Y}
          </div>
          <div className="paragraph-content exhibition-contents">

            <img src="img/01.png" style={{height: (10 * this.state.webcamParams.Z) + 'px',
              marginLeft: (400 - 30 * this.state.webcamParams.X) + 'px' }}/>
          </div>
        </div>
        <div className="text-page-right-column history-right-column">
        </div>
      </div>
    );
  }
}

export default Exhibition;