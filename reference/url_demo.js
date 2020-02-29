const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (root domain name) - hostname doesn't include the port
console.log(myUrl.hostname);