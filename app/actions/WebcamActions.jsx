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
    $.ajax({ url: '/api/usercount/'})
      .done((data) => {
        //console.log(data);
        this.actions.getNoVisitorsSuccess(data.count)
      })
      .fail((jqXhr) => {
        this.actions.getNoVisitorsFail(jqXhr)
      });

    /*
    setTimeout(() => {
      this.actions.getNoVisitorsSuccess(5000);
    }, 1000);
    */
  }
}

export default alt.createActions(WebcamActions);