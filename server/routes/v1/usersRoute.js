// postsRoute.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});
const bcrypt = require('bcrypt');
const util = require('util');
const mongoose = require('mongoose');
const hash = util.promisify(bcrypt.hash);

const User = require('./../../schemes/user.schema');
const Post = require('./../../schemes/post.model');

const {SECRET_KEY, saltRounds} = require('./../../config');

// 2. MIDDLEWARE
const jwt = require('jsonwebtoken');

// 3. ROUTES
/************************ START PUBLIC ENDPOINTS *************************/
router.post('/signup', (req, res, next) => {
        req.reqKeys = ['email', 'password'];
        next();
    },
    validateFields,
    async function (req, res) {
        try {
            let jsonBody = req.body;

            if (await userExists(jsonBody.email)) {
                return res
                    .status(200)
                    .json({error: true, message: 'User Exists', data: {}});
            }
            jsonBody.password = await hash(jsonBody.password + SECRET_KEY, saltRounds);

            // create a new auth
            let newUser = User({
                email: jsonBody.email,
                password: jsonBody.password
            });
            // save the auth
            let user = await newUser.save();

            const token = generateToken(user);

            res
                .status(201)
                .json({error: false, message: 'Record Created', data: {token: token}});

        } catch (e) {
            console.log(e);
            res
                .status(501)
                .json({error: true, message: 'Internal Error', data: {}});
        }
    });

router.post('/signin', (req, res, next) => {
        req.reqKeys = ['email', 'password'];
        next();
    },
    validateFields,
    async (req, res) => {
        try {
            const jsonBody = req.body;

            const user = await User.findOne({'email': jsonBody.email});

            if (user === null) {
                return res.status(401).json({error: true, message: 'Invalid Credentials', data: {}});
            }
            let isMatching = await bcrypt.compare(jsonBody.password + SECRET_KEY, user.password);
            if (!isMatching) {
                return res.status(401).json({error: true, message: 'Invalid Credentials', data: {}});
            }

            const token = generateToken(user);

            res.status(200).json({error: false, message: 'Authenticated', data: {token: token}});

        } catch (e) {
            console.log(e);
            res
                .status(501)
                .json({error: true, message: 'Internal Error', data: {}});
        }
    });

router.post('/validate_email', async (req, res) => {
    try {
        const jsonBody = req.body;

        if (!('email' in jsonBody)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid JSON Body', data: {}})
        }

        res.status(200).json({error: false, message: '', data: {exists: await userExists(jsonBody.email)}});

    } catch (e) {
        console.log('EXCEPTION validate_email...');
        console.log(e);
        res
            .status(501)
            .json({error: true, message: 'Internal Error', data: {}});
    }
});

router.get('/:uid', async (req, res) => {
    try {
        // check if a valid ObjectId has been passed
        if (!req.params.uid.match(/^[0-9a-fA-F]{24}$/)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid uid', data: {}});
        }
        let user = await User.findOne({_id: req.params.uid}, {'password': 0});
        if (!user) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid uid', data: {}});
        }

        const posts = await Post.find({'author._id': req.params.uid});

        res.status(200).json({error: false, message: '', data: {user: user, posts: posts}});

    } catch (e) {
        console.log('EXCEPTION validate_email...');
        console.log(e);
        res
            .status(501)
            .json({error: true, message: 'Internal Error', data: {}});
    }
});
/************************ END PUBLIC ENDPOINTS *************************/


/************************ START PROTECTED ENDPOINTS *************************/
router.post('/follow', async (req, res) => {
    try {
        const jsonBody = req.body;
        console.log('RECEIVED: ');
        console.log(jsonBody);
        if (!('uid' in jsonBody)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid JSON Body', data: jsonBody})
        }
        // check if a valid ObjectId has been passed
        if (!jsonBody.uid.match(/^[0-9a-fA-F]{24}$/)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid uid', data: jsonBody});
        }

        const userToFollow = await User.find({_id: jsonBody.uid});

        if (!userToFollow) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid Arguments', data: {}})
        }

        const updatedUser = await User.findOneAndUpdate({_id: req.user._id}, {'$addToSet': {'following': jsonBody.uid}}, {new: true});
        console.log('FOLLOW: ')
        console.log(updatedUser);

        const token = generateToken(updatedUser);
        res.status(200).json({error: false, message: 'Following', data: {token}});

    } catch (e) {
        console.log('EXCEPTION follow...');
        console.log(e);
        res
            .status(501)
            .json({error: true, message: 'Internal Error', data: {}});
    }
});

router.post('/unfollow', async (req, res) => {
    try {
        const jsonBody = req.body;

        if (!('uid' in jsonBody)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid JSON Body', data: {}})
        }

        // check if a valid ObjectId has been passed
        if (!jsonBody.uid.match(/^[0-9a-fA-F]{24}$/)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid uid', data: jsonBody});
        }

        const userToUnfollow = await User.find({_id: jsonBody.uid});

        if (!userToUnfollow) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid Arguments', data: {}})
        }

        const updatedUser = await User.findOneAndUpdate({_id: req.user._id}, {$pullAll: {following: [jsonBody.uid]}}, {new: true});
        console.log('UNFOLLOW: ');
        console.log(updatedUser);

        const token = generateToken(updatedUser);
        res.status(200).json({error: false, message: 'Following', data: {token}});

    } catch (e) {
        console.log('EXCEPTION follow...');
        console.log(e);
        res
            .status(501)
            .json({error: true, message: 'Internal Error', data: {}});
    }
});

router.patch('/profile', (req, res, next) => {
        req.reqKeys = ['name', 'bio', 'imgUrl'];
        next();
    },
    validateFields,
    async (req, res) => {
        try {
            const jsonBody = req.body;

            const updatedUser = await User.findOneAndUpdate({_id: req.user._id}, {
                name: jsonBody.name,
                bio: jsonBody.bio,
                imgUrl: jsonBody.imgUrl
            }, {new: true});

            const token = generateToken(updatedUser);
            res.status(200).json({error: false, message: 'User info updated', data: {token: token}});

        } catch (e) {
            console.log('EXCEPTION follow...');
            console.log(e);
            res
                .status(501)
                .json({error: true, message: 'Internal Error', data: {}});
        }
    });

/************************ END PROTECTED ENDPOINTS *************************/






function validateFields(req, res, next) {
    let jsonBody = req.body;
    let reqKeys = req.reqKeys;

    for (let i = 0; i < reqKeys.length; i++) {
        if (!(reqKeys[i] in jsonBody)) {
            return res
                .status(400)
                .json({error: true, message: 'Invalid JSON Body', data: {}})
        }
    }

    next()
}

async function userExists(email) {
    try {
        let output = await User.find({email: email});
        // console.log(output);
        return output.length !== 0;
    } catch (e) {
        throw e;
    }
}

function generateToken(user) {
    return jwt.sign({
        '_id': user._id,
        'email': user.email,
        'name': user.name,
        'bio': user.bio,
        'following': user.following,
        'imgUrl': user.imgUrl
    }, SECRET_KEY, {expiresIn: '24h'});
}

module.exports = router;
