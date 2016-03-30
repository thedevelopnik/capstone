var calc = require('./calculators');

module.exports = function (schTr, teaTr) {
  if (calc.someMatch(schLoc, teaLoc) === true) {
    return 1;
  } else {
    return (-1);
  }
};
