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



const takeUntil = function(array, callback) {
  const returnArray = [];
  for (let value of array) {
    // if not the value were looking for push to new Array
    if (!callback(value)) {
      returnArray.push(value);
    } else {
      // If it is the value just break we done.
      break;
    }
  }
  return returnArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,["I've", 'been', 'to', 'Hollywood']);