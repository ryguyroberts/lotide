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
  const noSpaceString = str.split(" ").join("").toLowerCase();
  for (let letter of noSpaceString) {
    returnObj[letter] = returnObj[letter] + 1 || 1;
  }
   return returnObj;
};

console.log(assertEqual(countLetters("lighthouse in the house"),{l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}));

