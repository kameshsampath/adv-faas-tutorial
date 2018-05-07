var container = require('rhea');
const uuidv4 = require('uuid/v4');

function sendMessage(args) {

    console.log("ReplyTo: " + args.replyTo)
    console.log("Request: " + args.result)

    var result = args.result

    return new Promise(function (resolve, reject) {
        var msg = { message_id: uuidv4(), body: { 'result': result } };
        container.on('sendable', function (context) {
            if (context.sender.sendable()) {
                context.sender.send(msg)

            }
            //TODO error handling reject
        });

        container.on('accepted', function (context) {
            console.log('Messages acknowledged');
            resolve({
                "response": msg
            })
            context.connection.close();
            //TODO error handling reject
        });
        container.connect({ port: args.brokerPort, host: args.brokerHost }).open_sender(args.replyTo);
    });
}

exports.main = sendMessage;