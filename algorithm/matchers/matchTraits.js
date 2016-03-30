var calc = require('../calculators');

module.exports = function (schTraits, teaTraits) {
  if (calc.someMatch(schTraits, teaTraits) === true) {
    var count = calc.countNumOfMatches(schTraits, teaTraits);
    return calc.findDecimal(count, schTraits.length);
  } else {
    return (0);
  }
};
