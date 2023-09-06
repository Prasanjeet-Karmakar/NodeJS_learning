// Event driven programming
// Used heavily in Node.js

const EventEmitter = require('events') //EventEmitter is a class

const customEmitter = new EventEmitter() //Object is created.

customEmitter.on('response', () => {
    console.log(`data recieved`);
})

customEmitter.emit('response')
