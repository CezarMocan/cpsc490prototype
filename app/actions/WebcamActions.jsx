import alt from '../alt';

class WebcamActions {
  constructor() {
    this.generateActions(
      'webcamUpdate',
      'windowSizeUpdate',
      'getNoVisitorsSuccess',
      'getNoVisitorsFail'
    );
  }

  getNoVisitors() {
    setTimeout(() => {
      this.actions.getNoVisitorsSuccess(500);
    }, 1000);
  }
}

export default alt.createActions(WebcamActions);