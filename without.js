const words = ["hello", "world", "lighthouse"];


const eqArrays = function(compArray1, compArray2) {
  //Default true
  let currentTest = true;

  // Auto fail if not same length
  if (compArray1.length !== compArray2.length) {
    currentTest = false;
  } else {
    // Loop and compare each member of both arrays.
    for (let i = 0; i < compArray1.length; i++) {
      // if same var becomes true else false
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

const without = function(source, itemsToRemove) {
  let prunedArray = [];
  let beingRemoved = false;
  // iterate through source array
  for (let i = 0; i < source.length; i++) {
    // compare each source value with each removal value.
    for (let ii = 0; ii < itemsToRemove.length; ii++) {
      if (source[i] === itemsToRemove[ii]) {
        // Finding a single match removed becomes true and breaks the loop.
        beingRemoved = true;
        break;
      } else {
        beingRemoved = false;
      }
    }
    if (beingRemoved === false) {
      prunedArray.push(source[i]);
    }
  }
  return prunedArray;
};

assertArraysEqual(words, ["hello", "world", "lighthouse"]);
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(words,(without(["hello", "world", "lighthouse", "grumbles"], ["grumbles"])));
assertArraysEqual(words,(without(["hello", "world", "lighthouse", "grumbles", "mumbles"], ["grumbles"])));