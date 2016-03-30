module.exports = {

  // does this teacher's choices match any of the school choices?
  someMatch: function (schArr, teaArr) {
    var someMatch = teaArr.some(function(el, ind, arr) {
      for (i = 0; i < schArr.length; i++) {
        return el === schArr[i];
      }
    });
    return someMatch;
  },

  // how many?
  countNumOfMatches: function (schArr, teaArr) {
    var countOfMatches = 0;
    teaArr.forEach(function(el, ind, arr) {
      for (i = 0; i < schArr.length; i++) {
        if (el === schArr[i]) {
          countOfMatches += 1;
        }
      }
    });
    return countOfMatches;
  },

  // divide number of matches by number of school grade bands
  findDecimal: function (divisor, dividend) {
    return (divisor/dividend);
  },

  // calculate match percent
  matchPercent: function(age, cal, loc, org, size, state, training, traits) {
    return ((1 * training) + (10 * loc) + (10 * org) + (10 * size) + (5 * cal) + (50 * state) + (100 * traits) + (10 * age))/196;
  }

};
