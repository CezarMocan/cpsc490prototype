var pg = require('pg');

var DEFAULT_ERROR_MSG = "ERROR";
var DEFAULT_SUCCESS_MSG = "SUCCESS";

exports.DEFAULT_ERROR_MSG = DEFAULT_ERROR_MSG;
exports.DEFAULT_SUCCESS_MSG = DEFAULT_SUCCESS_MSG;


var resolveQuery = function(callbackFun, query) {
  console.log(process.env.DATABASE_URL)
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    console.log(err);
    client.query(query, function(err, result) {
      done();
      if (err) {
        console.error(err);
        callbackFun("Error " + err);
      }
      else
       callbackFun(result.rows);
    });
  });
}