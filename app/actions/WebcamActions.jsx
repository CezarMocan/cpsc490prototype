import alt from '../alt';

class WebcamActions {
  constructor() {
    this.generateActions(
      'webcamUpdate',
      'windowSizeUpdate',
      'getNoVisitorsSuccess',
      'getNoVisitorsFail',
      'nextImage',
      'prevImage',
      'nextPage',
      'toggleWebcamCanvas',
      'hideImageNavigation'
    );
  }

  getNoVisitors() {
    setTimeout(() => {
      this.actions.getNoVisitorsSuccess(5000);
    }, 1000);
  }
}

export default alt.createActions(WebcamActions);