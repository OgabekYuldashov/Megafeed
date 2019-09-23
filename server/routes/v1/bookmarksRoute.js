//     req.user._id: '5d8924b1e77b1e4a88418641',
//     req.user.email: 'russ@gmail.com',

// 1. DEPENDENCIES
const router = require('express').Router({ caseSensitive: false, strict: false });
const BookmarkModel = require('../../models/bookmark.model');
const Bookmark = require('./../../schemes/bookmark.schema');
const mongoose = require('mongoose');

router.get('/', async function (req, res, next) {
    var bookmarks = await Bookmark.find({ userId: req.user._id }, [], { sort: { addedDate: 1 } });
    res.status(200).json(bookmarks);
});

// insert new bookmark
router.post('/', async function (req, res, next) {
    const newBookmark = new Bookmark({
        addedDate: req.body.addedDate,
        userId: req.user._id,
        post: {
            _id: req.body.post._id,
            title: req.body.post.title,
            shortDescription: req.body.post.shortDescription
        }
    });

    try {
        const doc = await newBookmark.save();
        return res.status(200).json(doc);
    } catch (err) {
        throw err
    }
})

// delete bookmark
router.delete('/:_id', async function (req, res, next) {
    await Bookmark.remove({ userId: req.user._id, _id: req.params._id });
    res.status(200).end();
})



module.exports = router;

