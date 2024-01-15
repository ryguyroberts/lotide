const _ = require('../index');
const assert = require('chai').assert;

//test Array
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

describe("CountOnly", () => {
  it("When counting Jason, Karima and Fang expect Jason 1 Karima undefined Fang 2", () => {
    const result = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    assert.strictEqual(result['Jason'], 1);
    assert.isUndefined(result['Karima']);
    assert.strictEqual(result['Fang'], 2);
  });
});