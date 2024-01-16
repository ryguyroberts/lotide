const _ = require('../index');
const assert = require('chai').assert;

describe("findKey", () => {
  it("for call back equaling 2 stars find noma, for call back equaling 3 stars find Akaleri", () => {
    const data1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    assert.strictEqual(_.findKey(data1, x => x.stars === 2), "noma")
    assert.strictEqual(_.findKey(data1, x => x.stars === 3), "Akaleri")
  });
});