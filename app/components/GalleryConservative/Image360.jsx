import React from 'react';
import WebcamStore from '../../stores/WebcamStore.jsx'

class Image360 extends React.Component {
	/* <Footer /> */

  constructor(props) {
    super(props);
    this.state = WebcamStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  onChange(state) {
    this.setState(state);
  }

  componentDidMount() {
    //console.log('image mount');
    WebcamStore.listen(this.onChange);
  }

  componentWillUnmount() {
    WebcamStore.unlisten(this.onChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.prefix != nextProps.prefix)
      console.log(nextProps);
  }

  getLeftThreshold(i) {
    return (this.state.X_RANGE / (1.0 * this.props.noImages) * i - this.state.X_RANGE / 2.0)
  }

  getRightThreshold(i) {
    return (this.state.X_RANGE / (1.0 * this.props.noImages) * (i + 1) - this.state.X_RANGE / 2.0)
  }

  sgn(x) {
    if (x > 0) {
      return 1;
    }
    return -1;
  }

  shouldDisplay(i) {
    var normalizedXPos = this.state.webcamParams.X; // this.sgn(x) * this.state.X_RANGE + x % this.state.X_RANGE;
    // THIS IS SO SHITTY.
    while (normalizedXPos < -this.state.X_RANGE / 2) {
      normalizedXPos += this.state.X_RANGE;
    }
    while (normalizedXPos > this.state.X_RANGE / 2) {
      normalizedXPos -= this.state.X_RANGE;
    }
    return (normalizedXPos >= this.getLeftThreshold(i) && normalizedXPos < this.getRightThreshold(i))
  }

  render() {
    // {parseInt(this.state.webcamParams.Z)} {parseInt(this.state.webcamParams.X)} {parseInt(this.state.webcamParams.Y)} {this.state.webcamParams.angle}
    return (
      <div className="image360">
        {
          [...Array(this.props.noImages)].map((x, i) =>
            <img className="image-warrior-rotating" src={this.props.prefix + (i + 1).toString() + ".png"}
              style={{display: (this.shouldDisplay(i) ? 'block' : 'none')}}/>
          )
        }
      </div>
    );
  }
}

Image360.propTypes = {
  prefix: React.PropTypes.string.isRequired,
  noImages: React.PropTypes.number.isRequired
}

export default Image360;