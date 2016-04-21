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
    this.width = 600
    this.pointData = []
    this.noVisitors = 0
  }

  onWebcamUpdate(webcamParams) {
    //console.log(webcamParams)
    this.webcamParams = webcamParams;
  }

  onWindowSizeUpdate(windowSizeObj) {
    this.height = windowSizeObj.height
    this.width = windowSizeObj.width
    this.updateImgData();
  }

  onGetNoVisitorsSuccess(noVisitors) {
    this.noVisitors = noVisitors;
    this.updateImgData();
  }

  updateImgData() {
    this.pointData = []
    for (var i = 0; i < this.noVisitors; i++) {
      var y = Math.round(Math.random() * this.height)
      var x = Math.round(Math.random() * this.width)
      this.pointData.push({
        x: x,
        y: y
      })
    }
  }
}

export default alt.createStore(WebcamStore);