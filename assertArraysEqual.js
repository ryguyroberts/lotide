const eqArrays = require('./eqArrays');

const assertArraysEqual = function(ray1, ray2) {
  // If eqArray true. Passed, or if false Failed.
  eqArrays(ray1, ray2) ? console.log(`✅✅✅Assertion Passed: ${ray1} === ${ray2}`) : console.log(`🛑🛑🛑Assertion Failed: ${ray1} !== ${ray2}`);
};


module.exports = assertArraysEqual;