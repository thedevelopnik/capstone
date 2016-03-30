var calc = require('../calculators');

module.exports = function (schSize, teaSize) {
  if (calc.someMatch(schSize, teaSize) === true) {
    return 1;
  } else {
    return (0);
  }
};
