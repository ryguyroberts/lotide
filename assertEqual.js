// function to compare two input parameters and confirm if equal or not.
const AssertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertation Passed: " + actual + " === " + expected);
  } else if (actual !== expected) {
    console.log("🤢Assertation Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
AssertEqual("Lighthouse Labs", "Bootcamp");
AssertEqual(1,1);
AssertEqual(2,3);