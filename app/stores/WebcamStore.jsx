import alt from '../alt';
import WebcamActions from '../actions/WebcamActions.jsx';

class WebcamStore {
  constructor() {
    this.bindActions(WebcamActions);
    this.webcamParams = {
      X: 0,
      Y: 0,
      Z: 0,
      angle: 0
    };
    this.height = 600
  }

  onWebcamUpdate(webcamParams) {
    //console.log(webcamParams)
    this.webcamParams = webcamParams;
  }
}

export default alt.createStore(WebcamStore);