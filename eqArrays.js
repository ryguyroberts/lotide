// function to compare two input parameters and confirm if equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(compArray1, compArray2) {
// loop through both arrays and compare idividual array steps.
  let currentTest = false;
  for (i = 0; i < compArray1.length; i++) {
    if (compArray1[i] === compArray2[i]){
      currentTest = true;
    }
  }
  return currentTest;
};




// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS