import React from 'react';
import {Link} from 'react-router';
import ActivityStore from '../stores/ActivityStore.jsx'
import ActivityActions from '../actions/ActivityActions.jsx';
import Activity1 from './activities/Activity1.jsx';

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = ActivityStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ActivityStore.listen(this.onChange);
    ActivityActions.getActivity(this.props.params.activityId);
    ActivityActions.getActivityInfo(this.props.params.activityId);
  }

  componentWillUnmount() {
    ActivityStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    var context = this;
    var activities = [];
    console.log(this.state.activityInfo)
    if (this.state.activityInfo == undefined) {
      return (<div> </div>);
    }

    activities[1] = function(data, subactivityInfo) {
      return (<Activity1 data={data} subactivityInfo={subactivityInfo}/>)
    }

    var subActivities = this.state.activityInfo.children;

    return (
      <div className="activity-container">
        <div className="activity-title">
          <h1> {context.state.activityInfo.Topic}—{context.state.activityInfo.ActivityGroupName} </h1>
        </div>

        {
          subActivities.map(function(subActivityInfo, i) {
            return activities[parseInt(context.props.routeParams.activityId)](context.state.data, subActivityInfo)
          })
        }
      </div>
    )
  }
}

export default Activity;