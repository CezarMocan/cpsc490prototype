var express = require('express');
var app = express();
var path = require('path');
var bodyParser  = require('body-parser');
var pg = require('pg');

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});


app.get('/', function(request, response) {
  response.send('Hello World!');
});