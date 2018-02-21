console.log('starting function')
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'})
const uuid = require('uuid/v1');

exports.handle = function(e, ctx, cb) {
    var params = {
        /*Item: {
            "id": uuid(),
            "name": "metamorphosis",
            "author": "kafka",
            "description": "a short story by K"
        },*/
        Item: {
            "id": uuid(),
            "name": e.name,
            "author": e.author,
            "description": e.description
        },
        TableName: 'book'
        
    };
    docClient.put(params, function(err, data){
        if(err) {
            cb(err, null);
        } else {
            cb(null, data);
        }

    });
  
}
