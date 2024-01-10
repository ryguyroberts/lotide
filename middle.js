const eqArrays = function(compArray1, compArray2) {
  //Default true
  let currentTest = true;

  // Auto fail if not same length
  if (compArray1.length !== compArray2.length) {
    currentTest = false;
  } else {
    // Loop and compare each member of both arrays.
    for (let i = 0; i < compArray1.length; i++) {
      // if same var becomes true else falses
      if (compArray1[i] !== compArray2[i]) {
        currentTest = false;
        break;
      }
    }
  }
  return currentTest;
};

const assertArraysEqual = function(ray1, ray2) {
  // If eqArray true. Passed, or if false Failed.
  eqArrays(ray1, ray2) ? console.log(`✅Assertion Passed: ${ray1} === ${ray2}`): console.log(`🤢Assertion Failed: ${ray1} !== ${ray2}`);
};

const middle = function(sortMedArray) {
  const medArray = [];
  let midVal = 0;
  // check if more than 2 values, return empty if not
  if (sortMedArray.length < 2 ) {
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

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,]), [2]);
assertArraysEqual(middle([1]), []);



