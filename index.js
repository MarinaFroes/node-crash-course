const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Log the url of the request to the console
  // console.log(req.url)

  if (req.url === '/') {
    fs.readFile(path.join(__dirname, '/public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        // Add content-type to response header
        res.writeHead(200,
          { 'Content-Type': 'text/html' })
        // Output the content of the file index.html
        res.end(content)
      }
    )
  }

  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, '/public', 'about.html'),
      (err, content) => {
        if (err) throw err;
        // Add content-type to response header
        res.writeHead(200,
          { 'Content-Type': 'text/html' })
        // Output the content of the file index.html
        res.end(content)
      }
    )
  }
})

// When we deploy it, tt's not going to run in the same port everytime
  // The host will decide the port - assign it to an environmental variable
  // If the environmental variable is not found, it's going to run in the 5000 port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));