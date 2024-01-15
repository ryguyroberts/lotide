//splice starting at index 1;
const tail = function(tailArray) {
  const returnArray = tailArray.slice(1)
  return returnArray;
}

module.exports = tail;