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

    if (timestamp - this.lastSocketEmit > 50) {
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

  resizeCanvas() {
    WebcamActions.windowSizeUpdate({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }

  drawPastUsers(canvasContext) {
    var imgData = canvasContext.createImageData(this.state.width, this.state.height); // only do this once per page
    var windowWidth = this.state.width
    for (var i = 0; i < this.state.noVisitors; i++) {
      var y = this.state.pointData[i].x
      var x = this.state.pointData[i].y
      var index = (x * windowWidth + y) * 4

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
      var y = Math.round((currentUsersCoords[key].x + 15) / 30.0 * this.state.width);//Math.round(Math.random() * window.innerWidth)
      var x = Math.round((20 - currentUsersCoords[key].y) / 20.0 * this.state.height)
      for (var test = 0; test < 8; test++) {
        var pwr = Math.round(Math.pow(2, test + 1));
        positionList.push({
          x: x + this.getRandom(pwr) - pwr / 2,
          y: y + this.getRandom(pwr) - pwr / 2,
          key: key
        })
      }
      for (var test = 0; test < 5; test++) {
        var pwr = Math.round(Math.pow(2, test + 1));
        positionList.push({
          x: x + this.getRandom(pwr) - pwr / 2,
          y: y + this.getRandom(pwr) - pwr / 2,
          key: key
        })
      }
    }

    var imgData = canvasContext.getImageData(0,0, this.state.width, this.state.height);
    var windowWidth = this.state.width

    for (var i = 0; i < positionList.length; i++) {
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

    var currentUsersCanvas = document.getElementById('currentUsersCanvas');
    var context = currentUsersCanvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();
    // this.drawCurrentUsers([], context);

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

    var pastUsersCanvas = document.getElementById('pastUsersCanvas');
    var canvasContext = pastUsersCanvas.getContext('2d');
    pastUsersCanvas.width = this.state.width;
    pastUsersCanvas.height = this.state.height;
    this.drawPastUsers(canvasContext);

    var currentUsersCanvas = document.getElementById('currentUsersCanvas');
    canvasContext = currentUsersCanvas.getContext('2d');
    currentUsersCanvas.width = this.state.width;
    currentUsersCanvas.height = this.state.height;
    var imgData = canvasContext.createImageData(this.state.width, this.state.height); // only do this once per page
    this.drawCurrentUsers([], canvasContext);
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
      	<Header prefix={"testApp1"}/>

        <canvas id="inputCanvas" width="320" height="240" style={{display:'none'}}></canvas>
        <canvas id="outputCanvas" width="320" height="240" style={{position: 'fixed', top: 0, right: 0}}></canvas>
        <video id="inputVideo" autoPlay loop style={{display:'none'}}></video>

        <canvas id="pastUsersCanvas" style={{zIndex: -100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%'}}></canvas>
        <canvas id="currentUsersCanvas" style={{zIndex: -100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%'}}></canvas>

    		<RouteTransition id={this.props.location.pathname} height={context.state.height - 200}>
        	{this.props.children}
      	</RouteTransition>
      </div>
    );
  }
}

export default TestApp1;