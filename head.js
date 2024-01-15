// Take first value in array if not empty and return. 
const head = function(headArray) {
  //Check if array empty
  if (headArray.length === 0) {
    return undefined;
  }
  const firstArr = headArray[0];
  return firstArr;
};

module.exports = head;
