// var mongoose = require('mongoose');
// var userDb = mongoose.model('users');
var utils = require('../utils/utils');

module.exports.getUser = function (req, res) {
    let password = utils.encrypt('alex');
    let de = utils.decrypt(password);
    let user = {"id":3, "name":"AlexQin", "password":password, "de": de};
    utils.sendJSONresponse(res, 200, user);
};

module.exports.getProject = function (req, res) {
    let project = {projectName: 'project name', nodes: [{nodeName: 'node name 1', parameters: [{key: 'key1', value: 'value1'}, {key: 'key2', value: 'value2'}]}]};
    utils.sendJSONresponse(res, 200, project);
};

// module.exports.getUsers = function (req, res) {
//     userDb.find({
//     }, { password: 0 }, function (err, data) {
//         if (err) {
//             res.json(err);
//         }
//         if (data.length > 0) {
//             res.json(data);
//         }
//         else {
//             res.json({ "message": "User doesn't exist!" })
//         }
//     })
// };