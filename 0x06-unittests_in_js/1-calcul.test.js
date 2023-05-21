const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber("SUM",2.0, 3.0), 5);
    });
  
    it('rounding down b', () => {
      assert.strictEqual(calculateNumber("SUM",-1.0, -3.3), -4);
    });
  
    it('rounding down a and b', () => {
      assert.strictEqual(calculateNumber("SUM",1.2, 2.4), 3);
    });
  
    it('rounding down a', () => {
      assert.strictEqual(calculateNumber("SUM",-4.4, 2.0), -2);
    });
  
    it('rounding up b', () => {
      assert.strictEqual(calculateNumber("SUM",1.0, 2.5), 4);
    });
  
    it('rounding up a and b', () => {
      assert.strictEqual(calculateNumber("SUM",-2.7, -2.5), -6);
    });
  
    it('rounding up a', () => {
      assert.strictEqual(calculateNumber("SUM",3.7, 2.0), 6);
    });
  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber("SUM",2.49999, 3.49999), 5);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber("SUM", 0.0, 0.0), 0);
    });
  });
  
  describe('type == "SUBTRACT"', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",2.0, 3.0), -1);
    });
  
    it('rounding down b', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",-1.0, -3.3), 2);
    });
  
    it('rounding down a and b', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",1.2, 2.4), -1);
    });
  
    it('rounding down a', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",-4.4, 2.0), -6);
    });
  
    it('rounding up b', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",1.0, 2.5), -2);
    });
  
    it('rounding up a and b', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",-2.7, -2.5), -1);
    });
  
    it('rounding up a', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",3.7, 2.0), 2);
    });
  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber("SUBTRACT",2.49999, 3.49999), -1);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 0.0, 0.0), 0);
    });

  });

  describe('type == "DIVIDE"', () => {
    it('positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.0, 2.0), 4.0);
    });

    it('numbers with different signs', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, 2.0), -3.5);
    });

    it('numbers with different signs (alternate)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.0, -2.0), -3.5);
    });

    it('negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -7.0, -2.0), 3.5);
    });

    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -2.0, -2.0), 1);
    });

    it('equal rounded up numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.6, 3.0), 1);
    });

    it('equal rounded down numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.4, 2.0), 1);
    });

    it('0 and positive number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 5.0), 0);
    });

    it('0 and negative number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, -5.0), -0);
    });

    it('positive number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0), 'Error');
    });

    it('positive number and number rounded down to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, 0.2), 'Error');
    });

    it('positive number and number rounded up to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.0, -0.2), 'Error');
    });

    it('negative number and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0), 'Error');
    });

    it('negative number and number rounded down to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, 0.2), 'Error');
    });

    it('negative number and number rounded up to zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -5.0, -0.2), 'Error');
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
    });
  });

});
