var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should include Luke', function() {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('returns a random item from all', function() {
      var item = starWars.random();
      expect(starWars.all).to.include(item);
    });

    it('returns an array of random items if given a count', function() {
      var items = starWars.random(3);
      expect(items).to.have.length(3);
      items.forEach(function(item) {
        expect(starWars.all).to.include(item);
      });
    });
  });
});


