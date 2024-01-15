const _ = require('../index');


// TEST CODE
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
_.assertEqual(_.eqArrays([1, 2, 3], [1, 2, 2]), false);
