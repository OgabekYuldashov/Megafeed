// 1. DEPENDENCIES
const router = require('express').Router({ caseSensitive: false, strict: false });
const Post = require('../../schemes/post.model');
const mongoose = require('mongoose');

//POST '/'  add post
router.post('/', async (req, res) => {
    let post = new Post({
        title: req.body.title,
        category: req.body.category,
        shortDescription: req.body.shortDescription,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        keywords: req.body.keywords,
        postDate: req.body.postDate,
        author: {
            _id: req.user._id,
            imageUrl: req.user.imgUrl,
            name: req.user.name,
            bio: req.user.bio
        }
    });

    try {
        post = await post.save();
    } catch (err) {
        throw err;
    }


    res.json(post);
});

//PATCH '/'  update
router.patch('/', async (req, res) => {
    let post = new Post({
        _id: req.body._id,
        title: req.body.title,
        category: req.body.category,
        shortDescription: req.body.shortDescription,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        keywords: req.body.keywords,
        postDate: req.body.postDate,
        author: {
            _id: req.user._id,
            imageUrl: req.user.imgUrl,
            name: req.user.name,
            bio: req.user.bio
        }
    });

    try {
        post = await post.update();
    } catch (err) {
        throw err;
    }

    res.json(post);
});

// remove
router.delete('/:_id', async (req, res) => {
    await Post.remove({ "author._id": req.user._id, _id: req.params._id });
    res.status(200).end();
});


// list of my publications
router.get('/', async function (req, res, next) {
    var publications = await Post.find({ "author._id": req.user._id }, [], { sort: { addedDate: 1 } });
    res.status(200).json(publications);
});

module.exports = router;

