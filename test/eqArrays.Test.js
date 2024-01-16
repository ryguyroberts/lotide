const _ = require('../index');
const assert = require('chai').assert;

describe("eqArrays", () => {
  it("If Array 1 is `[1, 2, 3]` and Array 2 is `[1, 2, 3]` return true" , () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("If Array 1 is `[1, 2, 3]` and Array 2 is `[1, 2]` return false" , () => {
    assert.strictEqual(_.eqArrays([1, 2, 3], [1, 2]), false);
  });
});