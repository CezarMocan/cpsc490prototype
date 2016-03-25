import alt from '../alt';

class ActivityActions {
  constructor() {
    this.generateActions(
      'getActivitySuccess',
      'getActivityFail'
    );
  }

  getActivity(activityId) {
    $.ajax({ url: '/api/activity/' + activityId })
      .done((data) => {
        let lessons = data.filter((lesson) => {
          if (parseInt(lesson.restrictedaccess) == 1)
            return false;
          return true;
        }).map((lesson) => {
          return {
            "name": lesson.ActivityGroupName,
            "id": lesson.ActivityGroupID,
            "displayId": lesson.ActivityGroupCode,
            "topic": lesson.Topic,
            "order": parseInt(lesson.GroupOrder)
          }
        })

        console.log("pula")
        console.log(lessons);

        this.actions.getActivitySuccess(lessons)
      })
      .fail((jqXhr) => {
        this.actions.getActivityFail(jqXhr)
      });
  }
}

export default alt.createActions(ActivityActions);