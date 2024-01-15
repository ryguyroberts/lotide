//splice starting at index
const tail = function(tailArray) {
  let returnArray = [];
  if (tailArray.length === 0) {
    return returnArray;
  }
  return returnArray = tailArray.slice(1);
};

module.exports = tail;