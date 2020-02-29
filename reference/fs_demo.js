const fs = require('fs');
const path = require('path');

// Create a folder on the system using file system core module
  // The empty object as second argument is for options, but we don't have any
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created');
}); //assync but default

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  err => {
    if (err) throw err;
    console.log('File written to...');
  }
); //assync but default
