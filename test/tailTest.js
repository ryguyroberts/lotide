const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TESTING
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words).length, 3); //Should fail
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse") // first element of returned array should be second element of argument array
assertEqual(tail(["test"]).length, 0); // tail of array with one element only should be empty
assertEqual(tail([]).length, 0); // tail of an empty array should also be empty