'use strict';

let http=require('http');

function requestcallback(request, response1){
    //console.log("Helloooo");

    response1.write("Hello Tasmia");
    response1.end();
}

let server=http.createServer(requestcallback);

server.listen(8000);

console.log("Listening....");