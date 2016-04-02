import alt from '../alt';
import ActivityActions from '../actions/ActivityActions.jsx';

class ActivityStore {
  constructor() {
    this.bindActions(ActivityActions);
    this.data = [];
  }

  onGetActivitySuccess(data) {
    this.data = data;
  }

  onGetActivityFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }

  onGetActivityInfoSuccess(data) {
    this.activityInfo = data[0];
  }

  onGetActivityInfoFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(ActivityStore);