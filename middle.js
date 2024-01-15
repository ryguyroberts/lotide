const middle = function(sortMedArray) {
  const medArray = [];
  let midVal = 0;
  // check if more than 2 values, return empty if not
  if (sortMedArray.length < 3 ) {
    return medArray;
  } else {
    // if length divided by 2 has no remainder two middles
    if (sortMedArray.length % 2 === 0 ) {
     midVal = sortMedArray.length / 2;
     medArray.push(sortMedArray[midVal - 1]);
     medArray.push(sortMedArray[midVal]);
    } else {
    // if length divided by 2 has remainder 
    midVal = Math.floor((sortMedArray.length / 2));
    medArray.push(sortMedArray[midVal]);
    }
    return medArray;
  }
};

module.exports = middle;


