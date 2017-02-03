var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames)

module.exports = {
  all: starWarsNames,
  random: random
};

function random(n) {
  if (n === undefined) {
    return getRandomItem();
  } else {
    var result = [];
    for (var i = 0; i < n; i++) {
      result.push(getRandomItem());
    }
    return result;
  }
}

