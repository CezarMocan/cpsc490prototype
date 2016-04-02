import React from 'react';
import {Link} from 'react-router';
import classNames from 'classnames/bind';

class Activity1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParticle: -1,
      hoveredParticleFunction: {functionId: -1, index: -1}
    };
  }

  onParticleChange(particleId) {
    this.setState({
      selectedParticle: particleId
    })
  }

  onMouseOver(particleFunctionId, index) {
    console.log("Mouse over ")
    this.setState({
      hoveredParticleFunction: {functionId: particleFunctionId, index: index}
    })
  }

  onMouseOut(particleFunctionId, index) {
    this.setState({
      hoveredParticleFunction: {functionId: -1, index: -1}
    })
  }

  render() {
    var context = this;
    //TODO: Make this a ReactComponent and use it everywhere.
    var loadingDiv = <div> Loading... </div>

    if (context.props.data.length == 0) {
      return (loadingDiv);
    }

    var particlesList = this.props.data.map(function(particle, i) {
      var classes = classNames("particle", "col-sm-2", {"selected": (context.state.selectedParticle == particle.ParticleID)})
      var onClickFun = context.onParticleChange.bind(context, particle.ParticleID);
      return (
        <div className={classes} onClick={onClickFun} key={particle.ParticleID}>
          <h3>{particle.Particle}</h3>
        </div>
      )
    })


    var particleTable;
    var particleObject = context.props.data.find(function(obj) {
      return (obj.ParticleID == context.state.selectedParticle)
    })

    if (particleObject != undefined) {
      particleTable =
        <table className="particle-table table">
          <thead>
            <tr>
              <th className="col-sm-4">Meaning</th>
              <th className="col-sm-8">Examples</th>
            </tr>
          </thead>
          <tbody>
            {particleObject.children.map(function(example, i) {
              var displayText = example.ParticleExampleSentence;
              if (context.state.hoveredParticleFunction.functionId == example.ParticleFunctionID &&
                context.state.hoveredParticleFunction.index == i) {
                  displayText = example.ParticleExampleTranslation
              }

              var mouseOverFun = context.onMouseOver.bind(context, example.ParticleFunctionID, i);
              var mouseOutFun = context.onMouseOut.bind(context, example.ParticleFunctionID, i);

              return (
                <tr>
                  <td className="col-sm-4">{example.ParticleFunction}</td>
                  <td className="col-sm-8" onMouseOver={mouseOverFun} onMouseOut={mouseOutFun}>{displayText}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
    } else {
      particleTable = "";
    }

    return (
      <div className="subactivity1-container">
        <div className="subactivity1-info">
          <h2> {this.props.subactivityInfo.ActivityName} </h2>
          <h5> {this.props.subactivityInfo.ActivityInstructions} </h5>
        </div>
        <div className="subactivity1-contents">
          <div className="particles-list">
            {particlesList}
          </div>
          <div className="particle-table-contents">
            {particleTable}
          </div>
        </div>
      </div>
    )
  }
}

export default Activity1;