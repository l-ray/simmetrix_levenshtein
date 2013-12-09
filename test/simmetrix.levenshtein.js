require('../lib/simmetrix.levenshtein')
var expect = require('expect.js');

describe('Simmetrix.Levenshtein', function(){
  describe('#similarity()', function(){
    it('should return a proper similarity between 0 and 1', function(){
      expect(Simmetrix.Levenshtein.similarity("Test String1", "Test String2").toFixed(4)).to.be.equal('0.9167');
    }),
    it('should return 0 with undefined or empty strings', function(){
      expect(Simmetrix.Levenshtein.similarity("", "Test String2").toFixed(4)).to.be.equal('0.0000');
      expect(Simmetrix.Levenshtein.similarity(undefined, "Test String2").toFixed(4)).to.be.equal('0.0000');
      expect(Simmetrix.Levenshtein.similarity("Test String1", undefined).toFixed(4)).to.be.equal('0.0000');
    })
  })
})