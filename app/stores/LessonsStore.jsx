import alt from '../alt';
import LessonsActions from '../actions/LessonsActions.jsx';

class LessonsStore {
  constructor() {
    this.bindActions(LessonsActions);
    this.lessons = [];
  }

  onGetLessonsSuccess(data) {
    this.lessons = data.lessons;
  }

  onGetLessonsFail(jqXhr) {
    // Handle multiple response formats, fallback to HTTP status code number.
    toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
  }
}

export default alt.createStore(LessonsStore);