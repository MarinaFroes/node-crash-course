const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Log the url of the request to the console
  // console.log(req.url)

  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, '/public', 'index.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       // Add content-type to response header
  //       res.writeHead(200,
  //         { 'Content-Type': 'text/html' })
  //       // Output the content of the file index.html
  //       res.end(content)
  //     }
  //   )
  // }

  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, '/public', 'about.html'),
  //     (err, content) => {
  //       if (err) throw err;
  //       // Add content-type to response header
  //       res.writeHead(200,
  //         { 'Content-Type': 'text/html' })
  //       // Output the content of the file index.html
  //       res.end(content)
  //     }
  //   )
  // }

  // // REST API - we don't serve HTML, we serve JSON
  //   // Fetch data from a database and serve that
  //  // Usually, use Express (framework) for doing this
  // if (req.url === '/api/users') {
  //   // Hard coded data
  //   const users = [
  //     { name: 'Bob Smith', age: 38 },
  //     { name: 'John Doe', age: 30 }
  //   ]

  //   res.writeHead(200, {
  //     'Content-Type': 'application/json'
  //   })
  //   res.end(JSON.stringify(users))
  // }

  // Build File Path
  let filePath = path.join(
    __dirname,
    '/public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);
  console.log(extname)
  // Initial content type
  let contentType = 'text/html';

  // Check extension and set the content type 
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    console.log(err.code)
    console.log(content)
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, '/public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        })
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // Successful response
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  })

})

// When we deploy it, tt's not going to run in the same port everytime
  // The host will decide the port - assign it to an environmental variable
  // If the environmental variable is not found, it's going to run in the 5000 port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));