const express = require('express');
const router = express.Router({ caseSensitive: false, strict: false });
const url = require('../../config').dburl;
const Post = require('../../schemes/post.model');
const mongoose = require('mongoose');


// Get all post
router.get('/', async (req, res) =>  {
    posts = await Post.find({}, '-description', { sort: { _id: -1 } });
    return res.status(200).json(posts);
})

// Get post by id
router.get('/:_id', async (req, res) =>  {

    //  console.log(req.params._id);
    try {
        const posts = await Post.findById(req.params._id);
        // console.log(posts);
        res.status(200).json(posts);
    }
    catch (error) {
        // console.error(error);
        if (error.name === 'CastError') {
            res.status(404).send('PostModel by Id, not found');
        } else
            res.status(500).send('Error getting post by Id');
    }
});

module.exports = router;