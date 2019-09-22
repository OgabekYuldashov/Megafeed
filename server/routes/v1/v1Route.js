// v1Route.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});

// 3. ROUTES
router.use('/posts', require('./postsRoute'));
router.use('/bookmarks', require('./bookmarksRoute'));
router.use('/users', require('./usersRoute'));

module.exports = router;