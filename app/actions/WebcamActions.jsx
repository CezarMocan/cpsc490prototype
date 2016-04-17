import alt from '../alt';

class WebcamActions {
  constructor() {
    this.generateActions(
      'webcamUpdate'
    );
  }
}

export default alt.createActions(WebcamActions);