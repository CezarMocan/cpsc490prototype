import React from 'react';
//import d3 from 'd3';
import RouteTransition from './RouteTransition.jsx'
import Footer from './Footer.jsx';
import Header from './GalleryConservative/Header.jsx'
import WebcamStore from '../stores/WebcamStore.jsx'
import WebcamActions from '../actions/WebcamActions.jsx';

class TestApp2 extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    this.PATHNAME_PREFIX = 'testApp2'

    this.SERVER_UPDATE_INTERVAL = 125;
    // this.state = {height: 600}
    this.state = WebcamStore.getState();
    this.currentUsersInterval = {};
    this.lastSocketEmit = 0;

    this.lastTwoPositions = {}
    this.lastFakePosition = {}

    this.colorMap = {}
    this.selfColor = {
      r: this.getRandom(144),
      g: this.getRandom(89),
      b: this.getRandom(35)
    }

    this.NAVIGATE_ZONE_BUFFER = 50;
    this.NAVIGATE_ZONE_REQUIRED = 40;
    this.lastWebcamCoords = []
    this.navigateZoneCount = 0
  }

  onChange(newState) {
    this.setState(newState);
  }

  killAllEvents(context) {
    $(document).unbind('headtrackingEvent');
    $(document).unbind('headtrackrStatus');
    //console.log(this.htracker);
    delete this.htracker;
  }

  navigateAway() {
    //window.location = '/testApp2/credits'
  }

  headTrackingFun(ev) {
    var angle = this.state.webcamParams.angle
    var event = ev.originalEvent;

    var timestamp = Date.now();
    if (timestamp - this.lastSocketEmit > this.SERVER_UPDATE_INTERVAL) {
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
    this.drawSelf(event.x, event.y);
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

  cameraXToScreenX(cameraX) {
    var halfWidth = Math.round(this.state.width / 2);
    var xCoord = Math.round(cameraX / 3 * halfWidth + halfWidth);
    return xCoord;
    //return Math.round((cameraX + 15) / 30.0 * this.state.width);
  }

  cameraYToScreenY(cameraY) {
    return Math.round((20 - cameraY) / 20.0 * this.state.height)
  }

  drawCircle(x, y, colorObj, radius) {
    var svg = this.svg;
    svg.insert("circle", "rect")
        .attr("cy", y)
        .attr("cx", x)
        .attr("r", 1e-5)
        .style("stroke", d3.rgb(colorObj.r, colorObj.g, colorObj.b))
        .style("stroke-opacity", 1)
      .transition()
        .duration(500)
        .ease(Math.sqrt)
        .attr("r", radius)
        .style("stroke-opacity", 1e-6)
        .remove();
  }

  drawSelf(X, Y) {
    var svg = this.svg;
    var x = this.cameraXToScreenX(X);
    var y = this.cameraYToScreenY(Y);

    this.drawCircle(x, y, this.selfColor, 20);
  }

  isSelf(key) {
    if (key.indexOf(this.socket.id) != -1)
      return true;
    return false;
  }

  checkAssignColor(key) {
    if (!(key in this.colorMap)) {
      this.colorMap[key] = {
        r: this.getRandom(255),
        g: this.getRandom(255),
        b: this.getRandom(255)
      }
    }
  }


  // It's too intensive for the server to send updates from client at 20fps. So we send less often, and predict movemment of other users.
  checkCreateFakePosition(key, x, y) {
    if (!(key in this.lastTwoPositions)) {
      this.lastTwoPositions[key] = []
      this.lastTwoPositions[key].push({
        x: x,
        y: y,
        timestamp: Date.now()
      })
      return {
        x: x,
        y: y
      };
    }

    var len = this.lastTwoPositions[key].length
    var last = this.lastTwoPositions[key][len - 1]
    var serverPos = {
      x: x,
      y: y
    }
    // Got new position from server --> it's real man, return it.
    if (last.x != x || last.y != y) {
      this.lastTwoPositions[key].push({
        x: x,
        y: y,
        timestamp: Date.now()
      })
      if (this.lastTwoPositions[key].length > 2)
        this.lastTwoPositions[key].shift()

      if (key in this.lastFakePosition) {
        var xDelta = x - this.lastFakePosition[key].x
        var yDelta = y - this.lastFakePosition[key].y
        if (Math.abs(xDelta) + Math.abs(yDelta) > 20) {
          var xSign = Math.sign(xDelta)
          var ySign = Math.sign(yDelta)
          var xCurr = this.lastFakePosition[key].x;
          var yCurr = this.lastFakePosition[key].y

          while (Math.sign(x - xCurr) == xSign) {
            xCurr = xCurr + 10 * xSign;
            yCurr = yCurr + this.getRandom(10) - 5;
            this.drawCircle(xCurr, yCurr, this.colorMap[key], 6 + 3 * Math.random())
          }

        }
      }

      return serverPos;
    } else {
      if (len == 1)
        return serverPos

      var timeDelta = this.lastTwoPositions[key][1].timestamp - this.lastTwoPositions[key][0].timestamp
      var xDelta = this.lastTwoPositions[key][1].x - this.lastTwoPositions[key][0].x
      var yDelta = this.lastTwoPositions[key][1].y - this.lastTwoPositions[key][0].y
      var timeRatio = (Date.now() - this.lastTwoPositions[key][1].timestamp) / timeDelta;


      this.lastFakePosition[key] = {
        x: this.lastTwoPositions[key][1].x + (xDelta * timeRatio) + this.getRandom(10) - 5,
        y: this.lastTwoPositions[key][1].y + (yDelta * timeRatio) + this.getRandom(10) - 5
      }

      return this.lastFakePosition[key]
    }
  }

  drawCurrentUsers(svg, currentUsersCoords) {
    var positionList = []
    for (var key in currentUsersCoords) {
      if (this.isSelf(key)) {
        continue;
      }
      this.checkAssignColor(key);
      var x = this.cameraXToScreenX(currentUsersCoords[key].x);
      var y = this.cameraYToScreenY(currentUsersCoords[key].y);

      var positionObj = this.checkCreateFakePosition(key, x, y)
      //console.log(positionObj)

      positionList.push({
        x: positionObj.x,
        y: positionObj.y,
        key: key
      })
    }

    var windowWidth = this.state.width
    for (var i = 0; i < positionList.length; i++) {
      this.drawCircle(positionList[i].x, positionList[i].y, this.colorMap[positionList[i].key], 10)
    }
  }

  drawNavigationZone(svg) {
    var obj = this.state.pages[this.state.pageIndex];

    svg.insert("circle", "rect")
        .attr("id", "navCircle")
        .attr("cy", obj.circleY)
        .attr("cx", obj.circleX)
        .attr("r", obj.circleRadius)
        .style("stroke", d3.rgb(124, 89, 35))
        .style("fill", d3.rgb(255, 255, 255))
        .style("stroke-opacity", 1)
        .style("fill-opacity", .8)
  }

  isInNavigateZone(x, y) {
    var obj = this.state.pages[this.state.pageIndex];
    if (Math.sqrt((x - obj.circleX) * (x - obj.circleX) + (y - obj.circleY) * (y - obj.circleY)) <= obj.circleRadius)
      return true;
    return false;
  }

  checkNavigateNext() {
    var lastX = this.cameraXToScreenX(this.state.webcamParams.X)
    var lastY = this.cameraYToScreenY(this.state.webcamParams.Y)

    this.lastWebcamCoords.push({
      x: lastX,
      y: lastY
    })
    if (this.isInNavigateZone(lastX, lastY))
      this.navigateZoneCount++;

    if (this.lastWebcamCoords.length > this.NAVIGATE_ZONE_BUFFER) {
      if (this.isInNavigateZone(this.lastWebcamCoords[0].x, this.lastWebcamCoords[0].y))
        this.navigateZoneCount--;
      this.lastWebcamCoords.shift();
    }

    if (this.navigateZoneCount > this.NAVIGATE_ZONE_REQUIRED) {
      this.navigateZoneCount = 0;
      this.lastWebcamCoords = []
      setTimeout(function() {
        WebcamActions.nextPage();
      }, 1)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.checkNavigateNext();

    if (nextState.height != this.state.height || nextState.width != this.state.width || nextState.noVisitors != this.state.noVisitors)
      return true;
    if (nextProps.location.pathname != this.props.location.pathname)
      return true;
    if (nextState.pageIndex != this.state.pageIndex)
      return true;
    if (nextState.webcamCanvas != this.state.webcamCanvas)
      return true;

    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pageIndex != this.state.pageIndex) {
      this.props.history.push(this.PATHNAME_PREFIX + '/' + this.state.pages[this.state.pageIndex].path);
      return;
    }

    var pastUsersCanvas = document.getElementById('pastUsersCanvas');
    var canvasContext = pastUsersCanvas.getContext('2d');
    pastUsersCanvas.width = this.state.width;
    pastUsersCanvas.height = this.state.height;

    this.svg.selectAll("*").remove();
    this.svg.attr("height", this.state.height);
    //this.svg.setAttribute("width", this.state.width);

    this.drawNavigationZone(this.svg);
    this.drawPastUsers(canvasContext);
    this.drawCurrentUsers(this.svg, []);
  }

  componentWillUnmount() {
    WebcamStore.unlisten(this.onChange);
    this.killAllEvents();
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

    this.htracker = new headtrackr.Tracker({ui: false, detectionInterval: 40, debug: canvasOutput, calcAngles: true});
    this.htracker.init(videoInput, canvasInput);
    this.htracker.start();

    $(document).bind('headtrackrStatus', this.headStatusFun.bind(this));
    $(document).bind('headtrackingEvent', this.headTrackingFun.bind(this));
    //$(document).bind('facetrackingEvent', this.faceTrackingFun.bind(this));


    this.svg = d3.select(".gallery-conservative-v2").append("svg")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight);

    this.svg.append("rect")
        .attr("width", window.innerWidth)
        .attr("height", window.innerHeight);


    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', this.resizeCanvas.bind(this), false);
    this.resizeCanvas();

    var that = this;
    this.socket = io();
    this.socket.on('positionUpdate', function(users) {
      //console.log(Date.now());
      that.drawCurrentUsers(that.svg, users);
    });
  }

  toggleWebcamCanvas() {
    WebcamActions.toggleWebcamCanvas()
  }

  render() {
  	var context = this;
  	// TODO: Set up default style in RouteTransition such that even initial load works.
    return (
      <div className="gallery-conservative gallery-conservative-v2">
      	<Header prefix={this.PATHNAME_PREFIX}/>

        <canvas id="inputCanvas" width="320" height="240" style={{display:'none'}}></canvas>
        <canvas id="outputCanvas" width="320" height="240" className={!this.state.webcamCanvas ? "no-display" : ""} style={{position: 'fixed', bottom: 0, right: 0, transform: 'scaleX(-1)', filter: 'FlipH'}}></canvas>
        <video id="inputVideo" autoPlay loop style={{display:'none'}}></video>
        <canvas id="pastUsersCanvas" style={{zIndex: -100, position: 'fixed', top: 0, left: 0, height: '100%', width: '100%'}}></canvas>

        <div className="toggle-webcam" onClick={this.toggleWebcamCanvas}>
          <span className="glyphicon glyphicon-eye-open" ariaHidden="false"></span>
        </div>

    		<RouteTransition id={this.props.location.pathname} height={context.state.height - 200}>
        	{this.props.children}
      	</RouteTransition>
      </div>
    );
  }
}

export default TestApp2;