const fs = require('fs');
const path = require('path');

// Create a folder on the system using file system core module
  // The empty object as second argument is for options, but we don't have any
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created');
// }); 

// Create and write to file - overwrites everything on the file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   err => {
//     if (err) throw err;
//     console.log('File written to...');
  
//     // File append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
//       ' I love Node.js',
//       err => {
//         if (err) throw err;
//         console.log('File written to...');
//       }
//     )
//   }
// ); 

// Read file
// fs.readFile(path.join(__dirname, '/Test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// })

// Rename file
fs.rename(
  path.join(__dirname, '/Test', 'hello.txt'),
  path.join(__dirname, '/Test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed...');
  }
)