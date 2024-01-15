const _ = require('../index');
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(_.head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(_.head(['5']), '5'); 
  });
  it("returns 'hello' for ['Hello', 'Lighthouse', 'Labs']]", () => {
    assert.strictEqual(_.head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
  it("returns 'undefined' for empty array", () => {
    assert.isUndefined(_.head([])); 
  });
});