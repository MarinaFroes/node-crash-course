const path = require('path');

// Base file name
console.log(path.basename(__filename));

// Directory name - same result as using __dirname
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
// To create ../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'))