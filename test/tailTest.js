const tail = require('../tail');
const assertEqual = require('../assertEqual');

// TESTING
const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words).length, 2);
assertEqual(tail(words).length, 3); //Should fail