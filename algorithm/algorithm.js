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
var calc = require('./calculators');

function match (school, teacher) {
  // establish all match percentages for individual elements
  // if a non-negotiable element is -1, stop the loop and return a non-match
  var ageMatch = matchAge(school.ages, teacher.ages);
  if (ageMatch === (-1)) {
    return 0;
  }

  var stateMatch = matchState(school.state, teacher.states);
  var trainingMatch = matchTraining(school.training, teacher.training);
  var calMatch = matchCal(school.cal, teacher.cals);
  var locMatch = matchLoc(school.locType, teacher.locTypes);
  var orgMatch = matchOrg(school.orgType, teacher.orgTypes);
  var sizeMatch = matchSize(school.size, teacher.sizes);
  var traitMatch = matchTraits(school.traits, teacher.traits);

  console.log(ageMatch, calMatch, locMatch, orgMatch, sizeMatch, stateMatch, trainingMatch, traitMatch);

  var matchPercent = calc.matchPercent(ageMatch, calMatch, locMatch, orgMatch, sizeMatch, stateMatch, trainingMatch, traitMatch).toFixed(2);

  console.log(matchPercent);
  return matchPercent;
}


match(school, teacher);
