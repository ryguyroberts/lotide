const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TESTING
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words).length, 3); //Should fail
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], "Lighthouse") // first element of returned array should be second element of argument array