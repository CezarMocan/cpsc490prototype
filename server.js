require('babel-register')

var express = require('express');
var app = express();
var path = require('path');
var bodyParser  = require('body-parser');
var pg = require('pg');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var dbService = require('./db_service.js');
var ConnectedUsers = require('./connectedUsers.js')
var connectedUsers = new ConnectedUsers();


app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;


setInterval(function() {
  io.emit('positionUpdate', connectedUsers.getUsers())
}, 50);

io.on('connection', function(socket) {
  onlineUsers++;

  socket.on('facetracking', function(facePositionObject) {
    connectedUsers.updateUser(socket.id, facePositionObject);
  })

  socket.on('disconnect', function(){
    onlineUsers--;
    connectedUsers.removeUser(socket.id);
  });
});

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.get('/', function(request, response) {
  response.send('Hello World!');
});
