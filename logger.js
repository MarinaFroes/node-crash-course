const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter{
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg})
  }
}

// Export it to another file
// module.exports = Logger;

// In the new file, require logger before instantiate it
// const Logger = require('./logger');

// Logger is a class, so we need to instantiate it
const logger = new Logger();
// Adding event listener
logger.on('message', (data) => console.log('Called listener:', data));
// Calling the log method of the logger instance
logger.log('Hello World');