const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('`getBiggest`', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return bigger number', () => {
      const biggerNumber = funcs.getBiggest;
      assert.equal(biggerNumber(1, 2), 2);
    });
  });

  describe('`greeting`', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return greeting in correct language, or hello for default', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it('should return greeting in correct language, or hello for default', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('Spanish'), 'Hola!');
    });
  });

  describe('`isTenOrFive`', () => {
    it('should return true', () => {
      const isTen = funcs.isTenOrFive;
      assert.equal(isTen(10), true);
    });
    it('should return false', () => {
      const notTenOrFive = funcs.isTenOrFive;
      assert.equal(notTenOrFive(2), false);
    });
  });

  describe('`isInRange`', () => {
    it('should  return true', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(40), true);
    });
    it('should equal false', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(10), false);
    });
  });

  describe('isInteger', () => {
    it('should return true', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(1), true);
    });
    it('should return false', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(1.2), false);
    });
  });
  
});

