var assert = require('assert');
describe('Array', function() {
  describe('#bubbleSort()', function(){
    it('should return a single number array when a single number array is given', function(){
      assert.equal([1], [1].bubbleSort);
    });
  });
});