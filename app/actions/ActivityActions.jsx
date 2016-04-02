import alt from '../alt';

class ActivityActions {
  constructor() {
    this.generateActions(
      'getActivitySuccess',
      'getActivityFail',
      'getActivityInfoSuccess',
      'getActivityInfoFail'
    );
  }

  getActivity(activityId) {
    $.ajax({ url: '/api/activity/' + activityId })
      .done((data) => {
        //console.log(data);
        this.actions.getActivitySuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getActivityFail(jqXhr)
      });
  }

  getActivityInfo(activityId) {
    $.ajax({ url: '/api/activityInfo/' + activityId })
      .done((data) => {
        console.log(data);
        this.actions.getActivityInfoSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getActivityInfoFail(jqXhr)
      });
  }
}

export default alt.createActions(ActivityActions);