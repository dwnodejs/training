const mongoose = require('mongoose');

const Mongo = {
    HOST: '127.0.0.1',
    PORT: '27017',
    NAME: 'Users',
    AUTH: 'Users',
    USER: 'training',
    PASS: 'node'
}

const uri = `mongodb://${Mongo.HOST}:${Mongo.PORT}/${Mongo.NAME}`;
const db = mongoose.createConnection(uri, {
    auth: { authSource: Mongo.AUTH },
    user: Mongo.USER,
    pass: Mongo.PASS
});

module.exports = db;


