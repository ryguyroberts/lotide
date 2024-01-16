const letterPositions = function(str) {
  const returnObj = {};
  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    // If empty create new object push index. If not empty, add index to object
    if (returnObj[value]) {
      returnObj[value].push(i);
    } else {
      returnObj[value] = [i];
    }
  }
  return returnObj;
};

module.exports = letterPositions;

