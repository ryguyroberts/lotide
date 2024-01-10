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
  // remove spaces
  const noSpaceString = str.split(" ").join("");
  for (let letter of noSpaceString) {
    //Increment by 1 if it exists. Or just make it 1 the first time.
    returnObj[letter] = returnObj[letter] + 1 || 1;
  }
   return returnObj;
};


