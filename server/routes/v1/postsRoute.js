// postsRoute.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({ caseSensitive: false, strict: false });
const url = require('../../config').dburl;
const Post = require('../../schemes/post.model');
const mongoose = require('mongoose');


// 2. MIDDLEWARE


// 3. ROUTES

//POST '/'  add post
router.post('/', (req, res) => {
    mongoose.connect(url, { useMongoClient: true, useUnifiedTopology: true }, function (err) {
        if (err) throw err;
        const post = new Post({
            title: req.body.title,
            shortDescription: req.body.shortDescription,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            keywords: req.body.keywords,
            author: {imageUrl: req.body.author.imageUrl,
                name: req.body.author.name}
        });
        post.save((err, doc) => {
            if (err) throw err;
            console.log(doc);
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
});

//PATCH '/'  update
router.patch('/', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function (err) {
        if (err) throw err;
        Post.update(
            { _id: req.body.id },
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


//DELETE '/:pid'
// router.delete('/:pid', (req, res) => {
//     mongoose.connect(url, { useMongoClient: true }, function (err) {
//         if (err) throw err;
//         Post.findByIdAndRemove(req.body.id,
//             (err, doc) => {
//                 if (err) throw err;
//                 return res.status(200).json({
//                     status: 'success',
//                     data: doc
//                 })
//             })
//     });
// });

//Get all post
router.get('/', async (req, res) =>  {
    posts = await Post.find({}, '-description', { sort: { _id: -1 } });
    return res.status(200).json(posts);
})

//Get post by id
router.get('/:_id', async (req, res) =>  {

   //  let id =  req.params;
   //  console.log(id);
   // // posts = await Post.find({}, { sort: { _id: -1 } });
   //  posts = await Post.find({'_id' : id});
   //  return res.status(200).json(posts);
     console.log(req.params._id);
    try {
        const posts = await Post.findById(req.params._id);
        console.log(posts);
        res.status(200).json(posts);
    }
    catch (error) {
        console.error(error);
        if (error.name === 'CastError') {
            res.status(404).send('Post by Id, not found');
        } else
            res.status(500).send('Error getting post by Id');
    }
});




//GET '/:uid'
router.get('/:_id', (req, res) => {

    console.log(req.params._id);
    res.end();

    // mongoose.connect(url, { useMongoClient: true }, function (err) {
    //     if (err) throw err;
    //     Post.find({}, [], { sort: { _id: -1 } }, (err, doc) => {
    //         if (err) throw err;
    //         return res.status(200).json({
    //             status: 'success',
    //             data: doc
    //         })
    //     })
    // });
});

// router.get('/', function (req, res, next) {
//     // console.log("Category: " + req.query.category);
//     posts = [];
//     posts.push(PostModel.newPostPreview(
//         '1',
//         "Uber Is Going to Zero and Their VC Backers Know It",
//         "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//         "https://miro.medium.com/max/9493/0*P6Z0xJth0kwOCmQS",
//         new Date(2019, 9, 21),
//         "https://miro.medium.com/fit/c/96/96/1*s6u1XbfyAVPitXa6kg6q2Q.jpeg",
//         "Matt Ward"
//     ));
//     posts.push(PostModel.newPostPreview(
//         '2',
//         "Little red dress and a perfect summer",
//         "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
//         "https://miro.medium.com/max/1259/1*Kw2DpnES_9BRkqtJhYxVRQ.jpeg",
//         new Date(2019, 9, 12),
//         "https://miro.medium.com/fit/c/96/96/1*s6u1XbfyAVPitXa6kg6q2Q.jpeg",
//         "Matt Ward"
//     ));
//     posts.push(PostModel.newPostPreview(
//         '3',
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

