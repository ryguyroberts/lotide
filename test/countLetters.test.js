const _ = require('../index');
const assert = require('chai').assert;

describe("CountLetters", () => {
  it("returns 2 for letter L and 1 for Letter H in `LHL`", () => {
    const result1 = _.countLetters('LHL');;
    assert.strictEqual(result1['L'], 2);
    assert.strictEqual(result1['H'], 1);
  });
  it("returns 3 for a and 1 for B in `Lighthouse Bananas`", () => {
    const result1 = _.countLetters('Lighthouse Bananas');;
    assert.strictEqual(result1['B'], 1);
    assert.strictEqual(result1['a'], 3);
  });
});
