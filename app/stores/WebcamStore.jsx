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
    this.X_RANGE = 5;

    this.webcamCanvas = false;

    this.imageIndex = 0;
    this.imageData = [
      {
        title: "glass no. 1",
        prefix: "img/glass1/glass_",
        noImages: 18,
        text: "The “Mould in Motion” glass piece is blown into a modular wooden mould. The modules have a different heights and different shaped cavities. Each module can be turned around a pivot while the glassblower blows soft glass into the mould. The result reflects the dynamic impact on the blowing process."
      },
      {
        title: "glass no. 2",
        prefix: "img/glass2/",
        noImages: 18,
        text: "The “DIY Mould” is a game where steel sicks of different heights are displayed in different positions on a base, allowing the creation of multiple shapes with a single mould and encouraging a creative input during the glassblowing process."
      }
    ]

    this.pageIndex = 0;
    this.pages = [
      {
        path: 'about',
        circleRadius: 80,
        circleY: 300,
        circleX: 300,
        circleYPageRatio: 0.5
      },
      {
        path: 'exhibition3',
        circleRadius: 80,
        circleY: 300,
        circleX: 300,
        circleYPageRatio: 0.5
      },
      {
        path: 'history',
        circleRadius: 80,
        circleY: 300,
        circleX: 300,
        circleYPageRatio: 0.5
      },
      {
        path: 'credits',
        circleRadius: 80,
        circleY: 300,
        circleX: 300,
        circleYPageRatio: 0.5
      }
    ]
  }

  onNextPage() {
    if (this.pages[this.pageIndex].path == 'exhibition3' && this.imageIndex < this.imageData.length - 1) {
      this.onNextImage();
      return;
    }

    this.pageIndex++;
    this.pageIndex %= this.pages.length;

    if (this.pages[this.pageIndex].path == 'exhibition3') {
      this.imageIndex = 0;
    }
  }

  onNextImage() {
    this.imageIndex++;
    this.imageIndex %= this.imageData.length;
  }

  onPreviousImage() {
    this.imageIndex--;
    this.imageIndex += this.imageData.length;
  }

  onToggleWebcamCanvas() {
    this.webcamCanvas = !this.webcamCanvas;
  }

  onWebcamUpdate(webcamParams) {
    //console.log(webcamParams)
    this.webcamParams = webcamParams;
  }

  onWindowSizeUpdate(windowSizeObj) {
    this.height = windowSizeObj.height
    this.width = windowSizeObj.width
    this.updatePastUsersCanvas();
    this.updateNavigationCircleY();
  }

  onGetNoVisitorsSuccess(noVisitors) {
    this.noVisitors = noVisitors;
    this.updatePastUsersCanvas();
  }

  updateNavigationCircleY() {
    for (var i = 0; i < this.pages.length; i++) {
      this.pages[i].circleY = Math.round(this.pages[i].circleYPageRatio * this.height);
      this.pages[i].circleX = Math.round(this.width - 0.3 * this.pages[i].circleRadius);
    }
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