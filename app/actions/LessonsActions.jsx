import alt from '../alt';

class LessonsActions {
  constructor() {
    this.generateActions(
      'getLessonsSuccess',
      'getLessonsFail'
    );
  }

  getLessons() {

    setTimeout( () => {
      this.actions.getLessonsSuccess({
        "lessons": ["Lesson 1", "Lesson 2", "Lesson 3"]
      })
    }, 5000);
    /*
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        this.actions.getTopCharactersSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr)
      });
    */
  }
}

export default alt.createActions(LessonsActions);