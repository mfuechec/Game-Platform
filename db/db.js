const AWS = require('aws-sdk');

AWS.config.update({endpoint: "https://dynamodb.us-west-2.amazonaws.com", region: 'us-east-2'});

console.log(process.ENV)

const docClient = new AWS.DynamoDB.DocumentClient();

export default function findGames() {
    docClient.query({TableName: "Games"}, function(err, data) {
        if (err) {
            console.log("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            return data;
        }
    })
}