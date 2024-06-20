const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber() with type SUM', () => {
  it('should return 4 when adding 1 and 3', () => {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 5 when adding 1 and 3.7', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return 0 when adding 0.1 and 0.3', () => {
    expect(calculateNumber('SUM', 0.1, 0.3)).to.equal(0);
  });
  it('should return 0 when adding -0.7 and 0.7', () => {
    expect(calculateNumber('SUM', -0.7, 0.7)).to.equal(0);
  });
  it('should return -2 when adding -0.8 and -0.7', () => {
    expect(calculateNumber('SUM', -0.8, -0.7)).to.equal(-2);
  });
});
