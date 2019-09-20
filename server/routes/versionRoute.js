// versionRoute.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});


// 2. MIDDLEWARE


// 3. ROUTES
router.use('/v1', require('./v1Route.js'));


module.exports = router;
//ldijwaldj
