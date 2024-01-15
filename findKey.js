// function to compare two input parameters and confirm if equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};



const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function(objInput, callback) {
  // Create array of keys
  let keyArr = Object.keys(objInput);
  for (let key of keyArr) { 
    if(callback(objInput[key])) {
      return key;
    } 
  }
};

// tests
assertEqual(findKey(data1, x => x.stars === 2),"noma");
assertEqual(findKey(data1, x => x.stars === 3),"Akaleri");



