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

exports.getAllLessons = function(callbackFun) {
  var query = 'SELECT * FROM "ActivityGroup" a INNER JOIN "Topic" t ON a."TopicID" = t."TopicID"';
  resolveQuery(callbackFun, query);
}

var mergeSameId = function(list, idKey, keys) {
  var obj = {}
  keys.push(idKey);
  for (var i = 0; i < list.length; i++) {
    if (obj[list[i][idKey]] == undefined) {
      obj[list[i][idKey]] = {}
      for (var key of keys) {
        obj[list[i][idKey]][key] = list[i][key];
      }

      obj[list[i][idKey]].children = [];
    }

    var differentPropsObj = {}
    for (var originalObjectKey in list[i]) {
      if (keys.indexOf(originalObjectKey) == -1) {
        differentPropsObj[originalObjectKey] = list[i][originalObjectKey];
      }
    }

    obj[list[i][idKey]].children.push(differentPropsObj);
  }

  var arrayObj = []

  for (var key in obj) {
    arrayObj.push(obj[key]);
  }

  return arrayObj;
}

exports.getActivity = function(activityId, callbackFun) {
  if (activityId == 1) {
    var query = 'SELECT "Particle"."ParticleID", "Particle"."Particle", "Particle"."Notes", "Particle"."ParticleImage",\
    "ParticleFunction"."ParticleFunctionID", "ParticleFunction"."ParticleFunction", "ParticleFunction"."ParticleFunctionNotes",\
    "ParticleExample"."ParticleExampleSentence", "ParticleExample"."ParticleExampleTranslation" FROM "Particle" INNER JOIN \
    "ActivityToParticle" ON "Particle"."ParticleID" = "ActivityToParticle"."ParticleID" INNER JOIN "ParticleFunction" ON \
    "Particle"."ParticleID" = "ParticleFunction"."ParticleID" INNER JOIN "ParticleExample" ON \
    "ParticleExample"."ParticleFunctionID" = "ParticleFunction"."ParticleFunctionID" WHERE \
    ((("ActivityToParticle"."ActivityID") =' + activityId + ')) ORDER BY "ActivityToParticle"."ActivityItemOrder";'

    resolveQuery(function(results) {
      var newResults = mergeSameId(results, "ParticleID", ["Particle", "Notes", "ParticleImage"])
      callbackFun(newResults);
    }, query);
  } else {
    var query = 'SELECT * FROM "ActivityGroup" a INNER JOIN "Topic" t ON a."TopicID" = t."TopicID"';
    resolveQuery(callbackFun, query);
  }
}

exports.getActivityInfo = function(activityId, callbackFun) {
  var query = 'SELECT a."ActivityGroupID", a."ActivityGroupName", t."Topic", ay."ActivityName", ay."ActivityInstructions" \
  FROM "ActivityGroup" a INNER JOIN "Topic" t ON a."TopicID" = t."TopicID" \
  INNER JOIN "Activity" ay ON ay."ActivityGroupID" = a."ActivityGroupID" WHERE a."ActivityGroupID" = ' + activityId;
  resolveQuery(function(results) {
    var newResults = mergeSameId(results, "ActivityGroupID", ["ActivityGroupName", "Topic"]);
    callbackFun(newResults);
  }, query);
}

