// v1Route.js

// 1. DEPENDENCIES
const express = require('express');
const router = express.Router({caseSensitive: false, strict: false});
const gradesService = require('./../services/gradesService.js');


// 2. MIDDLEWARE


// 3. ROUTES

router.get('', function (req, res, next) {
    res
        .status(200)
        .json({message: 'hello'})
});

module.exports = router;
