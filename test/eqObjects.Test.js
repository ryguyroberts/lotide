const _ = require('../index');
const assert = require('chai').assert;

describe("eqObjects", () => {
  it("If two objects with `color: red` and `size: medium' return true", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject= { size: "medium", color: "red" };
    assert.strictEqual(_.eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("If two objects. one with `color: red` and `size: medium'. other with same size but `color: blue` return false", () => {
    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject= { size: "medium", color: "blue" };
    assert.strictEqual(_.eqObjects(shirtObject, anotherShirtObject), false);
  });
  it("If two objects both with `colors: [`red`, `blue`], size: `medium` return true", () => {
    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assert.strictEqual(_.eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
  });
});