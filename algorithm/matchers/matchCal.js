var calc = require('../calculators');

module.exports = function (schCal, teaCal) {
  var count = calc.countNumOfMatches(schCal, teaCal);
  return calc.findDecimal(count, teaCal.length);
};
