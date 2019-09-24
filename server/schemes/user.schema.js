const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// create a schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, default: 'Please, update your name' },
    bio: { type: String, default: 'Please, update your info' },
    following: {type: Array, default: []}
}, { collection : 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;
