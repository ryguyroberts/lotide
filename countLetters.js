// function to compare two input parameters and confirm if equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let returnObj = {};
  for (let letter of str) {
    // if space skip
    if(letter !== " ") {
      // Adds 1 or sets to 1 if first encounter.
      returnObj[letter] = returnObj[letter] + 1 || 1;
    }
  }
   return returnObj;
};


const result1 = countLetters('LHL');
assertEqual(result1['L'], 2);
assertEqual(result1['H'], 1);