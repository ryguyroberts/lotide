const eqArrays = function(compArray1, compArray2) {
  //Default true
  let currentTest = true;

  // Auto fail if not same length
  if (compArray1.length !== compArray2.length) {
    currentTest = false; // Could return false instead
  } else {
    // Loop and compare each member of both arrays.
    for (let i = 0; i < compArray1.length; i++) {
      // if same var becomes true else falses
      if (compArray1[i] !== compArray2[i]) {
        return false;
      }
    }
  }
  return currentTest;
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key],object2[key]) !== true) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const yetAnotherShirtObject = { size: "medium", color: "blue" };

assertObjectsEqual(shirtObject,anotherShirtObject);
assertObjectsEqual(shirtObject,yetAnotherShirtObject);