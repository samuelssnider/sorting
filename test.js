const bubbleSort = require('./bubbleSort')
const mergeSort = require('./mergeSort')

var assert = require('assert');
describe('Array', function() {
  describe('#bubbleSort()', function() {
    it('should return a sorted array with three numbers', function(){
      assert.deepEqual([1,2,3], bubbleSort([3,2,1]));
    });
  });
});

describe('Array', function() {
  describe('#bubbleSort()', function() {
    it('should return a sorted array with 5 numbers', function(){
      assert.deepEqual([1,2,3,4,5], bubbleSort([5,4,3,2,1]));
    });
  });
});

var assert = require('assert');
describe('Array', function() {
  describe('#mergeSort()', function() {
    it('should return a sorted array with three numbers', function(){
      assert.deepEqual([1,2,3], mergeSort([3,2,1]));
    });
  });
});

describe('Array', function() {
  describe('#mergeSort()', function() {
    it('should return a sorted array with 5 numbers', function(){
      assert.deepEqual([1,2,3,4,5], mergeSort([5,4,3,2,1]));
    });
  });
});