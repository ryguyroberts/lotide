const findKey = function(objInput, callback) {
  // Create array of keys
  let keyArr = Object.keys(objInput);
  for (let key of keyArr) {
    if (callback(objInput[key])) {
      return key;
    }
  }
};

module.exports = findKey;