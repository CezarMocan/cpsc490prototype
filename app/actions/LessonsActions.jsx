import alt from '../alt';

class LessonsActions {
  constructor() {
    this.generateActions(
      'getLessonsSuccess',
      'getLessonsFail'
    );

    this.compareLessons = (a, b) => {
      // console.log(parseInt(a.grouporder) + " " + parseInt(b.grouporder))
      if (parseInt(a.grouporder) < parseInt(b.grouporder))
        return -1;
      else if (parseInt(a.grouporder) > parseInt(b.grouporder))
        return 1;
      else
        return 0;
    }
  }

  getLessons() {
    $.ajax({ url: '/api/lessons' })
      .done((data) => {
        let lessons = data.filter((lesson) => {
          if (parseInt(lesson.restrictedaccess) == 1)
            return false;
          return true;
        }).map((lesson) => {
          return {
            "name": lesson.activitygroupname,
            "id": lesson.activitygroupid,
            "displayId": lesson.activitygroupcode,
            "topicId": lesson.topicid,
            "order": parseInt(lesson.grouporder)
          }
        })

        lessons.sort((a, b) => a.order - b.order)
        console.log("pula")
        console.log(lessons);

        this.actions.getLessonsSuccess(lessons)
      })
      .fail((jqXhr) => {
        this.actions.getLessonsFail(jqXhr)
      });
  }
}

export default alt.createActions(LessonsActions);