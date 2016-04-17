import React from 'react';

class ExhibitionLeftRight extends React.Component {
	/* <Footer /> */
  constructor(props) {
    super(props);
    this.state = {z: 50, x: 0, y: 0}
  }

  killAllEvents(context) {
    //TODO: This is now working.
    $(document).unbind('headtrackingEvent');
    $(document).unbind('facetrackingEvent');
    $(document).unbind('headtrackrStatus');
    console.log(this.htracker);
    delete this.htracker;
  }

  navigateAway() {
    window.location = '/testApp1/credits'
  }

  headTrackingFun(ev) {
    var event = ev.originalEvent;
    this.setState({
      x: event.x,
      y: event.y,
      z: event.z
    })
  }

  headStatusFun(ev) {
    var event = ev.originalEvent;
    //console.log(event);
    if (event.status == 'redetecting') {
      this.killAllEvents(this);
      this.navigateAway()
    }
  }

  faceTrackingFun(ev) {
    var event = ev.originalEvent;
    var x = this.state.x;
    var y = this.state.y;
    var z = this.state.z;

    this.setState({
      x: x,
      y: y,
      z: z,
      angle: event.angle
    });
  }

  componentDidMount() {
    //window.addEventListener('resize', this.handleResize);
    var videoInput = document.getElementById('inputVideo');
    var canvasInput = document.getElementById('inputCanvas');
    var canvasOutput = document.getElementById('outputCanvas');


    this.htracker = new headtrackr.Tracker({ui: false, detectionInterval: 20, debug: canvasOutput, calcAngles: true});
    this.htracker.init(videoInput, canvasInput);
    this.htracker.start();

    var context = this;

    var redetectingStrike = 0;

    var headTrackingFun = function (event) {
      var angle = this.state.angle
      this.setState({
        x: event.x,
        y: event.y,
        z: event.z,
        angle: angle
      })
    }

    $(document).bind('headtrackrStatus', this.headStatusFun.bind(this));
    $(document).bind('headtrackingEvent', this.headTrackingFun.bind(this));
    $(document).bind('facetrackingEvent', this.faceTrackingFun.bind(this));
  }

  componentWillUnmount() {
    this.killAllEvents();
  }

  render() {
    var context = this;


    return (
      <div className="text-page-container credits-container">
        <div className="text-page-left-column exhibition-left-column">
          <div className="text-page-title exhibition-title">
            warrior {parseInt(this.state.z)} {parseInt(this.state.x)} {parseInt(this.state.y)} {this.state.angle}
          </div>
          <div className="paragraph-content exhibition-contents">

            <canvas id="inputCanvas" width="320" height="240" style={{display:'none'}}></canvas>
            <canvas id="outputCanvas" width="320" height="240" style={{display:'inherit', position: 'fixed', right: 0, top: '50px'}}></canvas>
            <video id="inputVideo" autoPlay loop style={{display:'none'}}></video>

            <img className="image-warrior-rotating" src="img/glass_01.png" style={{display: ((this.state.x < -7) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_02.png" style={{display: ((this.state.x >= -7 && this.state.x < -6) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_03.png" style={{display: ((this.state.x >= -6 && this.state.x < -5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_04.png" style={{display: ((this.state.x >= -5 && this.state.x < -4) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_05.png" style={{display: ((this.state.x >= -4 && this.state.x < -3.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_06.png" style={{display: ((this.state.x >= -3.5 && this.state.x < -2.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_07.png" style={{display: ((this.state.x >= -2.5 && this.state.x < 2.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_08.png" style={{display: ((this.state.x >= 2.5 && this.state.x < 3.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_09.png" style={{display: ((this.state.x >= 3.5 && this.state.x < 4.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_10.png" style={{display: ((this.state.x >= 4.5 && this.state.x < 5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_11.png" style={{display: ((this.state.x >= 5 && this.state.x < 5.5) ? 'block' : 'none')}}/>
            <img className="image-warrior-rotating" src="img/glass_12.png" style={{display: ((this.state.x >= 5.5) ? 'block' : 'none')}}/>
          </div>
        </div>
        <div className="text-page-right-column history-right-column">
        </div>
      </div>
    );
  }
}

export default ExhibitionLeftRight;