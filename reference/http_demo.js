const http = require('http');

// Create server object
http.createServer((req, res) => {
  // Write response
  res.write('Hello World!');
  res.end();
  // In order for this to run, you got listen it to a port
})
  .listen(5000, () => console.log('server running'))
  // Run it and access localhost:5000 on the browser to see "Hello World!" on the screen