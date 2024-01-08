// function to compare two input parameters and confirm if equal or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertation Passed: " + actual + " === " + expected);
  } else {
    console.log("🤢Assertation Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual(2,3);