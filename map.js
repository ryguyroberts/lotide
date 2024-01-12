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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);


console.log(assertArraysEqual(results1,['g','c','t','m','t']));
console.log(assertArraysEqual(results2,['r','o','o','a','o']));
