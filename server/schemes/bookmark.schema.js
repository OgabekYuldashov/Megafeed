const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const bookmarkSchema = new Schema({
    userId: { type: String, required: true },
    addedDate: { type: Date, required: true },
    post: {
        type: {
            _id: { type: String, required: true },
            title: { type: String, required: true },
            shortDescription: { type: String, required: true }
        }, required: true
    },

}, { collection: 'bookmarks' });

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);
module.exports = Bookmark;
