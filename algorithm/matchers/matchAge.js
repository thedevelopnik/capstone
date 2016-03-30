var calc = require('../calculators');

module.exports = function (schAge, teaAge) {
  if (calc.someMatch(schAge, teaAge) === true) {
    var count = calc.countNumOfMatches(schAge, teaAge);
    return calc.findDecimal(count, schAge.length);
  } else {
    return (-1);
  }
};
