const countLetters = function(str) {
  let returnObj = {};
  for (let letter of str) {
    // if space skip
    if (letter === " ") {
      continue;
    }
    // Adds 1 or sets to 1 if first encounter.
    if (!returnObj[letter]) {
      returnObj[letter] = 0;
    }
    returnObj[letter] += 1;
  }
  return returnObj;
};

module.exports = countLetters;
