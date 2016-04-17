import React from 'react';
import RouteTransition from './RouteTransition.jsx'
import Footer from './Footer.jsx';
import Header from './GalleryConservative/Header.jsx'
import WebcamStore from '../stores/WebcamStore.jsx'
import WebcamActions from '../actions/WebcamActions.jsx';

class TestApp1 extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    // this.state = {height: 600}
    this.state = WebcamStore.getState();
    console.log(this.state)
  }

  onChange(state) {
    this.setState(state);
  }

  killAllEvents(context) {
    $(document).unbind('headtrackingEvent');
    $(document).unbind('headtrackrStatus');
    console.log(this.htracker);
    delete this.htracker;
  }

  navigateAway() {
    window.location = '/testApp1/credits'
  }

  headTrackingFun(ev) {
    var angle = this.state.webcamParams.angle
    var event = ev.originalEvent;
    var obj = {
      X: event.x,
      Y: event.y,
      Z: event.z,
      angle: angle
    }
    //console.log(obj)
    WebcamActions.webcamUpdate(obj);
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
    var x = this.state.webcamParams.X;
    var y = this.state.webcamParams.Y;
    var z = this.state.webcamParams.Z;

    var obj = {
      X: x,
      Y: y,
      Z: z,
      angle: event.angle
    }

    WebcamActions.webcamUpdate(obj);
  }

  resizeCanvas(canvas, canvasContext) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.drawStuff(canvasContext);
  }

  drawStuff(canvasContext) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    // context.fillStyle = "#FF0000";
    // context.fillRect(0,0,window.innerWidth / 2,window.innerHeight / 2);
    var imgData = canvasContext.createImageData(window.innerWidth, window.innerHeight); // only do this once per page
    for (var i = 0; i <= 1000000; i++) {
      var y = Math.round(Math.random() * window.innerWidth)
      var x = Math.round(Math.random() * window.innerHeight)
      var index = (x * window.innerWidth + y) * 4

      imgData.data[index+0]=0;
      imgData.data[index+1]=0;
      imgData.data[index+2]=0;
      // Un-comment below if you want a random RGB color. Otherwise, all points are black.
      //imgData.data[index + Math.round(Math.random() * 3)] = 255;
      imgData.data[index+3]=255;
    }

    canvasContext.putImageData(imgData,0,0);
  }

  componentDidMount() {
    WebcamStore.listen(this.onChange);

    this.setState({height: window.innerHeight - 200})

    var videoInput = document.getElementById('inputVideo');
    var canvasInput = document.getElementById('inputCanvas');
    var canvasOutput = document.getElementById('outputCanvas');

    this.htracker = new headtrackr.Tracker({ui: false, detectionInterval: 20, debug: canvasOutput, calcAngles: true});
    this.htracker.init(videoInput, canvasInput);
    this.htracker.start();

    $(document).bind('headtrackrStatus', this.headStatusFun.bind(this));
    $(document).bind('headtrackingEvent', this.headTrackingFun.bind(this));
    $(document).bind('facetrackingEvent', this.faceTrackingFun.bind(this));

    var canvas = document.getElementById('dotsCanvas');
    console.log(canvas);
    var context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', this.resizeCanvas.bind(this, canvas, context), false);
    this.resizeCanvas(canvas, context);

    var xList = [], yList = [];
    for (var i = 0; i < 20; i++) {
      var y = Math.round(Math.random() * window.innerWidth)
      var x = Math.round(Math.random() * window.innerHeight)
      xList.push(x);
      yList.push(y);
    }

    var oddIteration = 0;
    var interval = setInterval(function() {
      var imgData = context.getImageData(0,0, window.innerWidth, window.innerHeight);

      for (var i = 0; i < xList.length; i++) {
        var windowWidth = window.innerWidth
        var index = (xList[i] * windowWidth + yList[i]) * 4
        var squareSize = 4;

        for (var iBlink = 0; iBlink < squareSize; iBlink++) {
          for (var jBlink = 0; jBlink < squareSize; jBlink++) {
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 0]=255;
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 1]=0;
            imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 2]=0;
            imgData.data[index+ jBlink * 4 + iBlink * windowWidth * 4 + 3]=oddIteration * 255;
          }
        }
      }

      context.putImageData(imgData,0,0);
      oddIteration = 1 - oddIteration;
    }, 800);
  }

  componentWillUnmount() {
    WebcamStore.unlisten(this.onChange);
    this.killAllEvents();
  }

  render() {
  	var context = this;
  	// TODO: Set up default style in RouteTransition such that even initial load works.
    return (
      <div className="gallery-conservative">
      	<Header />

        <canvas id="inputCanvas" width="320" height="240" style={{display:'none'}}></canvas>
        <canvas id="outputCanvas" width="320" height="240" style={{display:'none'}}></canvas>
        <video id="inputVideo" autoPlay loop style={{display:'none'}}></video>

        <canvas id="dotsCanvas" style={{zIndex: 100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%'}}></canvas>

    		<RouteTransition id={this.props.location.pathname} height={context.state.height}>
        	{this.props.children}
      	</RouteTransition>
      </div>
    );
  }
}

export default TestApp1;