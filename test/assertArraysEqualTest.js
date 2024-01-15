const _ = require('../index');

_.assertArraysEqual([1,2,3],[1,2,3]); // Should pass
_.assertArraysEqual([1,2,2],[1,2,3]); // Should fail