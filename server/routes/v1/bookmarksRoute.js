// 1. DEPENDENCIES
const router = require('express').Router({ caseSensitive: false, strict: false });
const BookmarkModel = require('../../models/bookmark.model');

router.get('/', function (req, res, next) {
    // console.log("Bookmark. Get all bookmarks for user: " + req.query.category);

    posts = [];
    posts.push(BookmarkModel.newBookmark(
        '1',
        new Date(2019, 9, 21),
        '1',
        "Uber Is Going to Zero and Their VC Backers Know It",
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    ));
    posts.push(BookmarkModel.newBookmark(
        '2',
        new Date(2019, 9, 21),
        '2',
        "Little red dress and a perfect summer",
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    ));
    posts.push(BookmarkModel.newBookmark(
        '3',
        new Date(2019, 9, 21),
        '3',
        "WTF is The Blockchain?",
        "The ultimate 3500-word guide in plain English to understand Blockchain.",
    ));

    res.json(posts);
});

module.exports = router;

