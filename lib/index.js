'use strict';

var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end("Hello World!  -- Derek Severson");
};

var server = http.createServer(handleRequest);

server.listen(8080);
