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
    this.X_RANGE = 14;
    this.imageIndex = 1;
    this.imageData = [
      {
        title: "glass no. 1",
        prefix: "img/glass1/glass_",
        noImages: 18
      },
      {
        title: "glass no. 2",
        prefix: "img/glass2/",
        noImages: 18
      }
    ]
  }

  onNextImage() {
    this.imageIndex++;
    this.imageIndex %= this.imageData.length;
  }

  onPreviousImage() {
    this.imageIndex--;
    this.imageIndex += this.imageData.length;
  }

  onWebcamUpdate(webcamParams) {
    //console.log(webcamParams)
    this.webcamParams = webcamParams;
  }

  onWindowSizeUpdate(windowSizeObj) {
    this.height = windowSizeObj.height
    this.width = windowSizeObj.width
    this.updatePastUsersCanvas();
  }

  onGetNoVisitorsSuccess(noVisitors) {
    this.noVisitors = noVisitors;
    this.updatePastUsersCanvas();
  }

  updatePastUsersCanvas() {
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