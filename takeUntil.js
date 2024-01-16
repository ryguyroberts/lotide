const takeUntil = function(array, callback) {
  const returnArray = [];
  for (let value of array) {
    // if not the value were looking for push to new Array
    if (!callback(value)) {
      returnArray.push(value);
    } else {
      // If it is the value just break we done.
      break;
    }
  }
  return returnArray;
};

module.exports = takeUntil;