const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name - same result as using __dirname
console.log(path.dirname(__filename));