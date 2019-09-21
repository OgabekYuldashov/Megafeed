// v1Route.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({ caseSensitive: false, strict: false });

const PostModel = require('./../models/post.model');


// 2. MIDDLEWARE


// 3. ROUTES

router.get('', function (req, res, next) {
    res
        .status(200)
        .json({ message: 'hello' })
});

router.get('/posts', function (req, res, next) {
    // console.log("Category: " + req.query.category);
    posts = [];
    posts.push(PostModel.newPost(
        1,
        "Uber Is Going to Zero and Their VC Backers Know It",
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        "https://miro.medium.com/max/9493/0*P6Z0xJth0kwOCmQS",
        new Date(2019, 9, 21),
        "https://miro.medium.com/fit/c/96/96/1*s6u1XbfyAVPitXa6kg6q2Q.jpeg",
        "Matt Ward"
    ));

    res.json(posts);
})

module.exports = router;

