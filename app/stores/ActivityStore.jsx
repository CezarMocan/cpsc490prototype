import alt from '../alt';
import ActivityActions from '../actions/ActivityActions.jsx';

class ActivityStore {
  constructor() {
    this.bindActions(ActivityActions);
    this.lessons = [];
  }

  onGetActivitySuccess(data) {
    this.lessons = data;
  }

  onGetActivityFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(ActivityStore);