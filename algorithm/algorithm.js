var school = require('./school1');
var teacher = require('./teacher1');
var matchAge = require('./matchers/matchAge');

function match (school, teacher) {
  var ageMatchPer = matchAge(school.ages, teacher.ages).toFixed(2);
  console.log(ageMatchPer);
  return ageMatchPer;
}

match(school, teacher);
