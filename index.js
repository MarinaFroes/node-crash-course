const Logger = require('./logger');

// Logger is a class, so we need to instantiate it
const logger = new Logger();
// Adding event listener
logger.on('message', (data) => console.log('Called listener:', data));
// Calling the log method of the logger instance
logger.log('Hello World');