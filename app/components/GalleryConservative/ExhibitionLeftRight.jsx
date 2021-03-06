import React from 'react';
import RouteTransition from '../RouteTransition.jsx'
import WebcamStore from '../../stores/WebcamStore.jsx';
import WebcamActions from '../../actions/WebcamActions.jsx';
import Image360 from './Image360.jsx';

class ExhibitionLeftRight extends React.Component {
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
    WebcamStore.listen(this.onChange);
  }

  componentWillUnmount() {
    WebcamStore.unlisten(this.onChange);
  }


  navigateLeft() {
    WebcamActions.prevImage();
  }

  navigateRight() {
    WebcamActions.nextImage();
  }

  render() {
    // {parseInt(this.state.webcamParams.Z)} {parseInt(this.state.webcamParams.X)} {parseInt(this.state.webcamParams.Y)} {this.state.webcamParams.angle}
    var imageData = this.state.imageData;
    var index = this.state.imageIndex;
    return (
      <div className="text-page-container credits-container">
        <div className="text-page-left-column exhibition-left-column">
          <span className={(!this.state.showImageNavigation ? "no-display" : "") + " navigate navigate-left"} onClick={this.navigateLeft}>v</span>
          <div className="text-page-title exhibition-title">
            {imageData[index].title}
          </div>
          <div className="paragraph-content exhibition-contents">
            {imageData[index].text}
          </div>
        </div>
        <div className="text-page-right-column history-right-column">
            <RouteTransition id={"barbut"} height={this.state.height}>
              <Image360 prefix={imageData[index].prefix} noImages={imageData[index].noImages}/>
            </RouteTransition>
        </div>
        <span className={(!this.state.showImageNavigation ? "no-display" : "") + " navigate navigate-right"} onClick={this.navigateRight}>v</span>
      </div>
    );
  }
}

export default ExhibitionLeftRight;

// <span className="navigate navigate-left" onClick={this.navigateLeft}>v</span>
// <span className="navigate navigate-right" onClick={this.navigateRight}>v</span>

/*

            <img className="image-warrior-rotating" src="img/glass_01.png" style={{display: ((this.state.webcamParams.X < -7) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_02.png" style={{display: ((this.state.webcamParams.X >= -7 && this.state.webcamParams.X < -6) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_03.png" style={{display: ((this.state.webcamParams.X >= -6 && this.state.webcamParams.X < -5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_04.png" style={{display: ((this.state.webcamParams.X >= -5 && this.state.webcamParams.X < -4) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_05.png" style={{display: ((this.state.webcamParams.X >= -4 && this.state.webcamParams.X < -3.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_06.png" style={{display: ((this.state.webcamParams.X >= -3.5 && this.state.webcamParams.X < -2.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_07.png" style={{display: ((this.state.webcamParams.X >= -2.5 && this.state.webcamParams.X < 2.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_08.png" style={{display: ((this.state.webcamParams.X >= 2.5 && this.state.webcamParams.X < 3.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_09.png" style={{display: ((this.state.webcamParams.X >= 3.5 && this.state.webcamParams.X < 4.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_10.png" style={{display: ((this.state.webcamParams.X >= 4.5 && this.state.webcamParams.X < 5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_11.png" style={{display: ((this.state.webcamParams.X >= 5 && this.state.webcamParams.X < 5.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_12.png" style={{display: ((this.state.webcamParams.X >= 5.5) ? 'block' : 'none')}}/>


*/