const _ = require('../index');
const assert = require('chai').assert;

describe("letterPosition", () => {
  it("For `hello` e is at index 1", () => {
    assert.deepEqual(_.letterPositions("Hello").e, [1]);
  });
  it("For `Lighthouse Labs` L is at index 0 and 11", () => {
    assert.deepEqual(_.letterPositions("Lighthouse Labs").L, [0,11]);
  });

});