var calc = require('../calculators');

module.exports = function (schLoc, teaLoc) {
  if (calc.someMatch(schLoc, teaLoc) === true) {
    return 1;
  } else {
    return (-1);
  }
};
