
// you can create , listen , fire your own event

const EventEmitter = require('events');

const event = new EventEmitter();

event.on("say my name" , function () {
    console.log("your name is laptop")
})

event.on("say my name" , function(id , name) {
    console.log(`your name is ${name} , whose id is ${id}`)
    
})

event.emit("say my name", 200 , 'snaket' );