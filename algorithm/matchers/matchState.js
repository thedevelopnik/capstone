var calc = require('../calculators');

module.exports = function (schState, teaState) {
  if (calc.someMatch(schState, teaState) === true) {
    return 1;
  } else {
    return (-1);
  }
};
