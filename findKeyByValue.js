const findKeyByValue = function(inputObc, inputValue) {
  // sort through the object, if the value of object matches value input return key
  let keysArr = Object.keys(inputObc);
  for (let key of keysArr) {
    if (inputObc[key] === inputValue) {
      return key;
    }
  }
};

module.exports = findKeyByValue;