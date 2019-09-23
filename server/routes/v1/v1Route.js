// v1Route.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

// 2. MIDDLEWARE

// 3. ROUTES
router.use('/posts', require('./postsRoute.js'));

router.use('/users', require('./usersRoute.js'));



module.exports = router;
