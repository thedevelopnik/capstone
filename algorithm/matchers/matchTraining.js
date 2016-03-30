var calc = require('../calculators');

module.exports = function (schTr, teaTr) {
  if (calc.someMatch(schTr, teaTr) === true) {
    return 1;
  } else {
    return (-1);
  }
};
