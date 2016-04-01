import React from 'react';
import {Link} from 'react-router';
import LessonsStore from '../stores/LessonsStore.jsx'
import LessonsActions from '../actions/LessonsActions.jsx';

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.state = LessonsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    LessonsStore.listen(this.onChange);
    LessonsActions.getLessons();
  }

  componentWillUnmount() {
    LessonsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    console.log("render");
    console.log(this.state.lessons);
    let lessons = this.state.lessons.map((lesson) => {
      return (
        <div>
          <h4> <a href={"/activity/" + lesson.id}>{lesson.displayId} {lesson.topic}: {lesson.name}</a></h4>
        </div>
        /*
        <li key={character.characterId}>
          <Link to={'/characters/' + character.characterId}>
            <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
          </Link>
        </li>
        */
      )
    });

    return (
      <div>
        <div className='col-sm-5'>
          <h1> Lessons </h1>
          <div>
            {lessons}
          </div>
        </div>
      </div>
    );
  }
}

export default Lessons;