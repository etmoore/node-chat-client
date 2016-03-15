var net = require('net');

var chatServer = net.createServer();

chatServer.on('connection', function(client) { // client is the TCP socket
  client.write('Hi!\n');
  client.write('Bye!\n');

  client.end();
});

chatServer.listen(9000);
