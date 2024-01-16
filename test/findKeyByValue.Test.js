const _ = require('../index');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("findKeyByValue", () => {
  it("Will find Sci-fi for `The expanse`", () => {
  assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });
  it("Will find Drama for `The wire`", () => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("Will find undefined for `That `70's show`", () => {
    assert.isUndefined(_.findKeyByValue(bestTVShowsByGenre, "That `70's Show"));
  }); 
});