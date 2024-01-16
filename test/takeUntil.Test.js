const _ = require('../index');
const assert = require('chai').assert;


describe("#takeUntil", () => {
  it("With array `[1, 2, 5, 7, 2, -1, 2, 4, 5]` and call back `x => x < 0` return `[1, 2, 5, 7, 2]` ", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results = _.takeUntil(data1, x => x < 0);
    assert.deepStrictEqual(results, [1, 2, 5, 7, 2]);
  });
  it("With array 1[`I've`, `been`, `to`, `Hollywood`, `,`, `I've`, `been`, `to`, `Redwood`]1 and call back `x => x === ','` return [`I've`, 'been', `to`, `Hollywood``]` ", () => {
    const data1 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results = _.takeUntil(data1, x => x === ',');
    assert.deepStrictEqual(results, ["I've", 'been', 'to', 'Hollywood']);
  });
});