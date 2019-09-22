const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postSchema = new Schema({
    title: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    keywords: { type: String, required: true },
    // author: { type: {
    //     imageUrl: { type: String, required: true},
    //     name: { type: String, required: true}
    // }, required: true },

}, { collection : 'post' });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
