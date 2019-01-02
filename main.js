var http = require("http");

http.createServer(function (request, response){    
    response.writeHead(200, 'Content-Type: text/plain');
    response.end('Hello, World!');
}).listen(8081);

// event handling module
var events = require('events');

// create an event emitter that reads for events and binds them to functions
var eventEmitter = new events.eventEmitter();

// activate 'eventHandler' in case of 'eventName' event
eventEmitter.on('eventName', eventHandler);

// programmically 
eventEmitter.emit('eventName');

var someEventHandler = function event(){
    //do something that should happen in accordance to some Event

    //fire a different event
    eventEmitter.emit('differentEvent');
}

// filesystem module
var fs = require('fs');

fs.readFile('inputfile.txt', function(err, data){
    // the error object will contain the error message data

    // the data object will hold the file string
})