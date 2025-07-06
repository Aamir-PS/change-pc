const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('WaterFull', () => {
  console.log("Please turn off the motor!");
  setTimeout(() => {    
    console.log("Please turn off the motor! is a gentle reminder");
  }, 3000);
  // Prints: a b {}
});

console.log("The script is running")
myEmitter.emit('waterFull');
console.log("The script is still running")
myEmitter.emit("WaterFull")
// myEmitter.emit('event', 'a', 'b');