var school = require('./school1');
var teacher = require('./teacher1');
var matchState = require('./matchers/matchState');
var matchAge = require('./matchers/matchAge');
var matchTraining = require('./matchers/matchTraining');
var matchCal = require('./matchers/matchCal');
var matchLoc = require('./matchers/matchLoc');
var matchOrg = require('./matchers/matchOrg');
var matchSize = require('./matchers/matchSize');
var matchTraits = require('./matchers/matchTraits');

function match (school, teacher) {
  // establish all match percentages for individual elements
  // if a non-negotiable element is -1, stop the loop and return a non-match
  var stateMatch = matchState(school.state, teacher.states);
  if (stateMatch === (-1)) {
    return 0;
  }

  var ageMatchPer = matchAge(school.ages, teacher.ages).toFixed(2);
  if (ageMatchPer === (-1)) {
    return 0;
  }

  var trainingMatch = matchTraining(school.training, teacher.training);
  if (trainingMatch === (-1)) {
    return 0;
  }

  var calMatch = matchCal(school.cal, teacher.cals);
  var locMatch = matchLoc(school.locType, teacher.locTypes);
  var orgMatch = matchOrg(school.orgType, teacher.orgTypes);
  var sizeMatch = matchSize(school.size, teacher.sizes);
  var traitMatch = matchTraits(school.traits, teacher.traits);

  
}

match(school, teacher);
