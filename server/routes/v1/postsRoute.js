// postsRoute.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});

const PostModel = require('../../models/post.model');


// 2. MIDDLEWARE


// 3. ROUTES

//POST '/'
router.post('/', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function (err) {
        if (err) throw err;
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            keywords: req.body.keywords
        });
        post.save((err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});

//PATCH '/'
router.patch('/', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function (err) {
        if (err) throw err;
        Post.update(
            {_id: req.body.id},
            {
                title: req.body.title, description:
                req.body.description, imageUrl: req.body.imageUrl, keywords: req.body.keywords
            },
            (err, doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: doc
                })
            })
    });
});

//GET '/:uid'
router.get('/:uid', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function (err) {
        if (err) throw err;
        Post.find({}, [], {sort: {_id: -1}}, (err, doc) => {
            if (err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});

//DELETE '/:pid'
router.delete('/:pid', (req, res) => {
    mongoose.connect(url, {useMongoClient: true}, function (err) {
        if (err) throw err;
        Post.findByIdAndRemove(req.body.id,
            (err, doc) => {
                if (err) throw err;
                return res.status(200).json({
                    status: 'success',
                    data: doc
                })
            })
    });
});

// router.get('/', function (req, res, next) {
//     // console.log("Category: " + req.query.category);
//     posts = [];
//     posts.push(PostModel.newPost(
//         1,
//         "Uber Is Going to Zero and Their VC Backers Know It",
//         "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//         "https://miro.medium.com/max/9493/0*P6Z0xJth0kwOCmQS",
//         new Date(2019, 9, 21),
//         "https://miro.medium.com/fit/c/96/96/1*s6u1XbfyAVPitXa6kg6q2Q.jpeg",
//         "Matt Ward"
//     ));
//     posts.push(PostModel.newPost(
//         2,
//         "Little red dress and a perfect summer",
//         "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//         "https://miro.medium.com/max/1259/1*Kw2DpnES_9BRkqtJhYxVRQ.jpeg",
//         new Date(2019, 9, 12),
//         "https://miro.medium.com/fit/c/96/96/1*s6u1XbfyAVPitXa6kg6q2Q.jpeg",
//         "Matt Ward"
//     ));
//     posts.push(PostModel.newPost(
//         1,
//         "WTF is The Blockchain?",
//         "The ultimate 3500-word guide in plain English to understand Blockchain.",
//         "https://miro.medium.com/max/2560/1*dcRQxEbvbfPa1ESsylcDng.png",
//         new Date(2019, 7, 15),
//         "https://miro.medium.com/fit/c/48/48/1*ym4RMZcO4-oRioChi11yaQ.jpeg",
//         "Mohit Mamoria"
//     ));
//
//     res.json(posts);
// });

module.exports = router;

