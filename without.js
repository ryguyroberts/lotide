const without = function(sourceArray, itemsToRemove) {
  let prunedArray = [];
  for (const value of sourceArray) {
    if (value !== itemsToRemove) {
      prunedArray.push(value);
    }
  }
  return prunedArray;
};

module.exports = without;