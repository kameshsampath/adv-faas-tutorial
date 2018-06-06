//demorecv.js

var container = require('rhea');

var host = process.argv[2];
var port = process.argv[3];
var amqp_address = process.argv[4];

// Receive and print messages from endpoint until killed

container.on('message', function (context) {
    console.log('demorecv message:', JSON.stringify(context.message.body));
});

container.connect({ port: port, host: host }).open_receiver({ source: { address: amqp_address } });
