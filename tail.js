// Loop through each element except index 0 and add to new array.
const tail = function(tailArray) {
  const returnArray = [];
  for (const key in tailArray) {
    if (key > 0) {
      returnArray.push(tailArray[key]);
    }
  }
  return returnArray;
};

module.exports = tail;