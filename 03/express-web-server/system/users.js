const mongo = require('./mongo');
const { Schema } = require('mongoose');
const schema = new Schema({
    name: 'string',
    email: 'string',
    age: 'number',
    phone: 'string'
});
const Users = mongo.model('Users', schema);

module.exports = Users;
