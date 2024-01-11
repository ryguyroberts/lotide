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
  eqArrays(ray1, ray2) ? console.log(`✅Assertion Passed: ${ray1} === ${ray2}`) : console.log(`🤢Assertion Failed: ${ray1} !== ${ray2}`);
};


const letterPositions = function(str) {
  const returnObj = {};
  for (let i = 0; i < str.length; i++) {
    let value = str[i];
    // If empty create new array push index. If not empy, add index to array
    if (returnObj[value]) {
      returnObj[value].push(i);
    } else {
      returnObj[value] = [i];
    }
  }
  return returnObj;
};

console.log(letterPositions("Lighthouse Labs"));

//test code

assertArraysEqual(letterPositions("Hello").e, [1]);
assertArraysEqual(letterPositions("Lighthouse Labs").L, [0,11]);
