var pg = require('pg');

var DEFAULT_ERROR_MSG = "ERROR";
var DEFAULT_SUCCESS_MSG = "SUCCESS";
// This table will be used in order to retrieve TOP & NEW
var DB_TABLE_EMOJI_SUBMISSION = "emoji_submission"
// This table will be used in order to retrieve TRENDING
var DB_TABLE_EMOJI_TRENDING = "emoji_trending"
var DB_TABLE_EMOJI_USER = "emoji_user"

exports.DEFAULT_ERROR_MSG = DEFAULT_ERROR_MSG;
exports.DEFAULT_SUCCESS_MSG = DEFAULT_SUCCESS_MSG;


exports.getTable = function(callbackFun, table) {
  console.log(process.env.DATABASE_URL)
  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    client.query('SELECT * FROM ' + table, function(err, result) {
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
