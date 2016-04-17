import React from 'react';
import WebcamStore from '../../stores/WebcamStore.jsx'

class ExhibitionDiscrete extends React.Component {
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
    return (
      <div className="text-page-container credits-container">
        <div className="text-page-left-column exhibition-left-column">
          <div className="text-page-title exhibition-title">
            warrior {parseInt(this.state.webcamParams.Z)} {parseInt(this.state.webcamParams.X)} {parseInt(this.state.webcamParams.Y)} {this.state.webcamParams.angle}
          </div>
          <div className="paragraph-content exhibition-contents">
            <img className="image-warrior" src="img/01.png" style={{transform: 'rotate(' + (-(this.state.webcamParams.angle / 3.14 * 360 + 180)) + 'deg)', height: (this.state.webcamParams.Z > 55 ? 500 : 350) + 'px', marginLeft: 400 + 'px' }}/>
          </div>
        </div>
        <div className="text-page-right-column history-right-column">
        </div>
      </div>
    );
  }
}

export default ExhibitionDiscrete;