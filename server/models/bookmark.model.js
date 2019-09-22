function newBookmark(
    _id,
    addedDate,
    postId,
    postTitle,
    postShortDescription
    
    ) {
    const post = {
        _id: _id,
        addedDate: addedDate,
        post: {
            _id: postId,
            title: postTitle,
            shortDescription: postShortDescription,
        }
    }
    return post;
}

module.exports = {
    newBookmark,
}