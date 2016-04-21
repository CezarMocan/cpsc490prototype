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
    this.currentUsersInterval = {};
    this.lastSocketEmit = 0;
    this.colorMap = {}
    console.log(this.state)
  }

  onChange(newState) {
    this.setState(newState);
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

    var timestamp = Date.now();

    if (timestamp - this.lastSocketEmit > 400) {
      this.socket.emit('facetracking', {x: event.x, y: event.y});
      this.lastSocketEmit = timestamp;
    }

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
    WebcamActions.windowSizeUpdate({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  drawPastUsers(canvasContext) {
    var imgData = canvasContext.createImageData(window.innerWidth, window.innerHeight); // only do this once per page
    for (var i = 0; i < this.state.noVisitors; i++) {
      var y = this.state.pointData[i].x
      var x = this.state.pointData[i].y
      var index = (x * window.innerWidth + y) * 4

      imgData.data[index+0]=0;
      imgData.data[index+1]=0;
      imgData.data[index+2]=0;
      // Un-comment below if you want a random RGB color. Otherwise, all points are black.
      // imgData.data[index + Math.round(Math.random() * 3)] = 255;
      imgData.data[index+3]=255;
    }

    canvasContext.putImageData(imgData,0,0);
  }

  getRandom(maxVal) {
    return Math.round(Math.random() * maxVal);
  }

  drawCurrentUsers(currentUsersCoords, canvasContext) {
    var positionList = []
    for (var key in currentUsersCoords) {
      //console.log(currentUsersCoords[key].y);
      if (!(key in this.colorMap)) {
        this.colorMap[key] = {
          r: this.getRandom(255),
          g: this.getRandom(255),
          b: this.getRandom(255)
        }
      }
      var y = Math.round((currentUsersCoords[key].x + 15) / 30.0 * window.innerWidth);//Math.round(Math.random() * window.innerWidth)
      var x = Math.round((20 - currentUsersCoords[key].y) / 20.0 * window.innerHeight)
      positionList.push({
        x: x,
        y: y,
        key: key
      })
    }

    var imgData = canvasContext.getImageData(0,0, window.innerWidth, window.innerHeight);

    for (var i = 0; i < positionList.length; i++) {
      var windowWidth = window.innerWidth
      var index = (positionList[i].x * windowWidth + positionList[i].y) * 4
      var squareSize = 2;

      for (var iBlink = 0; iBlink < squareSize; iBlink++) {
        for (var jBlink = 0; jBlink < squareSize; jBlink++) {
          imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 0] = this.colorMap[positionList[i].key].r;
          imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 1] = this.colorMap[positionList[i].key].g;
          imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 2] = this.colorMap[positionList[i].key].b;
          imgData.data[index + jBlink * 4 + iBlink * windowWidth * 4 + 3]= 255;
        }
      }
    }

    canvasContext.putImageData(imgData,0,0);
  }

  componentDidMount() {
    WebcamStore.listen(this.onChange);
    WebcamActions.windowSizeUpdate({
      height: window.innerHeight,
      width: window.innerWidth
    })
    WebcamActions.getNoVisitors()

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
    var context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', this.resizeCanvas.bind(this, canvas, context), false);
    this.resizeCanvas(canvas, context);
    this.drawCurrentUsers([], context);


    var that = this;
    this.socket = io();
    this.socket.on('positionUpdate', function(users) {
      that.drawCurrentUsers(users, context);
    });

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.height == this.state.height && prevState.width == this.state.width && prevState.noVisitors == this.state.noVisitors) {
      return
    }

    var canvas = document.getElementById('dotsCanvas');
    var canvasContext = canvas.getContext('2d');

    canvas.width = this.state.width;
    canvas.height = this.state.height;

    this.drawPastUsers(canvasContext);
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

    		<RouteTransition id={this.props.location.pathname} height={context.state.height - 200}>
        	{this.props.children}
      	</RouteTransition>
      </div>
    );
  }
}

export default TestApp1;