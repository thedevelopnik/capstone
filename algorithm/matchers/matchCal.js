var calc = require('../calculators');

module.exports = function (schCal, teaCal) {
  if (calc.someMatch(schCal, teaCal) === true) {
    return 1;
  } else {
    return (0);
  }
};
