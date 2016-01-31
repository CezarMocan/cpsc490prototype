var express = require('express');
var app = express();
var path = require('path');
var bodyParser  = require('body-parser');
var pg = require('pg');

app.set('port', (process.env.PORT || 5050));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
  response.send('Hello World!');
});
