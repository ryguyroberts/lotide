const _ = require('../index');
const assert = require('chai').assert;

describe("#Without", () => {
  it("When supplied `hello`, `world`, `lighthouse` and remove lighthouse returns `hello`, `world" , () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepStrictEqual(_.without(words,"lighthouse"), (["hello", "world"]));
  });
  it("When supplied `hello`, `world`, `lighthouse` and remove world returns `hello`, `lighthouse" , () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepStrictEqual(_.without(words,"world"), (["hello", "lighthouse"]));
  });
});
