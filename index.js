const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Log the url of the request to the console
  // console.log(req.url)

  if (req.url === '/') {
  // Add content-type to response header
    res.writeHead(200,
      { 'Content-Type': 'text/html' })
    res.end('<h1>Home</h1>')
  }
})

// When we deploy it, tt's not going to run in the same port everytime
  // The host will decide the port - assign it to an environmental variable
  // If the environmental variable is not found, it's going to run in the 5000 port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));