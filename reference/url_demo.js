const url = require('url');

const myUrl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (root domain name) - hostname doesn't include the port
console.log(myUrl.hostname);

// Pathname 
console.log(myUrl.pathname);

// Serialized query - everything after the question mark (?)
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through search parameters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

