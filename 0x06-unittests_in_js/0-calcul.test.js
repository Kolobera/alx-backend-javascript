const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 3.0), 5);
    });
  
    it('rounding down b', () => {
      assert.strictEqual(calculateNumber(1.0, 3.3), 4);
    });
  
    it('rounding down a and b', () => {
      assert.strictEqual(calculateNumber(1.2, 2.4), 3);
    });
  
    it('rounding down a', () => {
      assert.strictEqual(calculateNumber(4.4, 2.0), 6);
    });
  
    it('rounding up b', () => {
      assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    });
  
    it('rounding up a and b', () => {
      assert.strictEqual(calculateNumber(3.7, 2.5), 7);
    });
  
    it('rounding up a', () => {
      assert.strictEqual(calculateNumber(3.7, 2.0), 6);
    });
  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });
  });
