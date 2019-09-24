const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const postModel = new Schema({
    title: { type: String, required: false },
    category: { type: String, required: false },
    shortDescription: { type: String, required: false },
    description: { type: String, required: false },
    imageUrl: { type: String, required: false },
    keywords: { type: String, required: false },
    author: {
        imageUrl: { type: String, required: false},
        name: { type: String, required: false}
    },
}, { collection : 'post' });

const Post = mongoose.model('Post', postModel);
module.exports = Post;
