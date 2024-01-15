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
        return false;
      }
    }
  }
  return currentTest;
};

module.exports = eqArrays;