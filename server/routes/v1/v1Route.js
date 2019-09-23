// v1Route.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({ caseSensitive: false, strict: false });
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
const {SECRET_KEY} = require('./../../config');


// 2. MIDDLEWARE
router.use(bodyParser.json());
router.use(expressJwt({ secret: SECRET_KEY }).unless({
    path: [
        '/api/v1/posts',
        '/api/v1/users/signup',
        '/api/v1/users/signin',
        '/api/v1/bookmarks',
        '/api/v1/users/validate_email']}));


// 3. ROUTES
router.use('/posts', require('./postsRoute'));
router.use('/bookmarks', require('./bookmarksRoute'));
router.use('/users', require('./usersRoute'));

module.exports = router;
