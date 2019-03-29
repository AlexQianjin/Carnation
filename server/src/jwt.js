var jwt = require('jsonwebtoken');
var path = require('path');
var fs = require('fs');

var keyPath = path.join(__dirname, 'key', 'moodleprivate.key');
var privateKey = fs.readFileSync(keyPath, 'utf-8').toString();
console.log(privateKey);
var payload = {
    "nameid": "auth0|57c869d5235950df0dded737",
    "user_id": "auth0|57c869d5235950df0dded737",
    "unique_name": "lianggao@wistronits.com",
    "name": "lianggao@wistronits.com",
    "email": "lianggao@wistronits.com",
    "nickname": "Larry",
    "family_name": "Liang",
    "connection": "Auth0-User-Store-For-Dev",
    "picture": "https://s.gravatar.com/avatar/21abaf483024fd0cba2597cfe2e22317?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fad.png",
    "provider": "auth0",
    "tenantid": "ac44f8f4-b282-4a75-954b-572747e68195",
    "tenantname": "TENANT ONE",
    "role": "Administrator",
    "usertenantscount": "17",
    "scp": "user_impersonation",
    "tid": "ac44f8f4-b282-4a75-954b-572747e68195",
    "exp": Math.floor(Date.now() / 1000) + (60 * 60),
    "claims": "[{\"Microsite\":\"training\",\"Claim\":[ \"TrainingCoordinator\",\"CourseDeveloper\"]}]",
    "portal": "Training"
}
var token = jwt.sign(payload, privateKey, { algorithm: 'RS256'});

console.log(token);

var publicKeyPath = path.join(__dirname, 'key', 'moodlepublic.key'); // fullchain.pub
var publicKey = fs.readFileSync(publicKeyPath, 'utf-8').toString();

var decoded = jwt.verify(token, publicKey);
console.log(decoded) // bar