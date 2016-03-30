var calc = require('../calculators');

module.exports = function (schOrg, teaOrg) {
  if (calc.someMatch(schOrg, teaOrg) === true) {
    return 1;
  } else {
    return (0);
  }
};
