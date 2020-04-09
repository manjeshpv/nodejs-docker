var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(301,{ Location: process.env.REDIRECT_URL || 'https://github.com/manjeshpv/nodejs-docker/' });
  res.end();
}).listen(process.env.PORT || 80); //the server object listens on port 8080
