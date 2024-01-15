const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("first element of returned array should be second element of argument array", () => {
    assert.strictEqual(tail([1, 2, 3])[0], 2);
  });
  it("tail of array with one element returns empty array", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("tail of an emptry array should return an empy array", () => {
    assert.deepEqual(tail([]), []);
  });
});
