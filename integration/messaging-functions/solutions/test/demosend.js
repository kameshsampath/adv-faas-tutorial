// demosend.js
var container = require('rhea');

var host = process.argv[2];
var port = process.argv[3];
var amqp_address = process.argv[4];
var msg = process.argv[5];

container.on('sendable', function (context) {
    context.sender.send({ body: msg })
});

container.on('connection_open', function (context) {
    context.connection.open_sender(amqp_address);
});

container.on('accepted', function (context) {
    console.log('Message accepted by peer');
    context.connection.close();
});

container.connect({ port: port, host: host });