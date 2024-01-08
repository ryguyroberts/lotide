// function to compare two input parameters and confirm if equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(tailArr) {
  let newArr = [];
  //loop threw each element an add to new array expect 0 position.
  for (let i = 0; i < tailArr.length; i++) {
    if (i !== 0) {
      newArr.push(tailArr[i]);
    }
  }
  return newArr;
};

// TESTING
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!