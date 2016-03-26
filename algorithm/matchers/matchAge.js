// does this teacher teach any of the age bands at the school?
function someMatch (schAge, teaAge) {
  var someMatch = teaAge.some(function(el, ind, arr) {
    for (i = 0; i < schAge.length; i++) {
      return el === schAge[i];
    }
  });
  return someMatch;
}

// how many?
function countNumOfMatches (schAge, teaAge) {
  var countOfMatches = 0;
  teaAge.forEach(function(el, ind, arr) {
    for (i = 0; i < schAge.length; i++) {
      if (el === schAge[i]) {
        countOfMatches += 1;
      }
    }
  });
  return countOfMatches;
}

// divide number of matches by number of school grade bands
function findDecimal(divisor, dividend) {
  return (divisor/dividend);
}

module.exports = function (schAge, teaAge) {
  if (someMatch(schAge, teaAge) === true) {
    var count = countNumOfMatches(schAge, teaAge);
    return findDecimal(count, schAge.length);
  } else {
    return (-1);
  }
};
