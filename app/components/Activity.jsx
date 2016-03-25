import React from 'react';
import {Link} from 'react-router';
import ActivityStore from '../stores/ActivityStore.jsx'
import ActivityActions from '../actions/ActivityActions.jsx';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = ActivityStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ActivityStore.listen(this.onChange);
    ActivityActions.getActivity(this.props.params.activityId);
  }

  componentWillUnmount() {
    LessonsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div> x </div>
    )
  }
}

export default Activity;