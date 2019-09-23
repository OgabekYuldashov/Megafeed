// postsRoute.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});
const bcrypt = require('bcrypt');
const util = require('util');
const hash = util.promisify(bcrypt.hash);

const User = require('./../../schemes/user.schema');

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

            // create a new user
            let newUser = User({
                email: jsonBody.email,
                password: jsonBody.password
            });
            // save the user
            let result = await newUser.save();

            const token = jwt.sign({'_id': result._id, 'email': result.email}, SECRET_KEY, {expiresIn: '24h'});
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

            const token = jwt.sign(jsonBody, SECRET_KEY, {expiresIn: '24h'});
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
/************************ END PUBLIC ENDPOINTS *************************/






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
    let output = await User.find({email: email});
    console.log(output);
    return output.length !== 0;
}

module.exports = router;
