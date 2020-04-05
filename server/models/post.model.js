function newPost(
    _id,
    title,
    description,
    shortDescription,
    imageUrl,
    postDate,
    authorId,
    authorImageUrl,
    authorName) {
    const post = {
        _id: _id,
        title: title,
        description: description,
        shortDescription: shortDescription,
        imageUrl: imageUrl,
        postDate: postDate,
        author: {
            authorId: authorId,
            imageUrl: authorImageUrl,
            name: authorName
        }
    }
    return post;
}

function newPostPreview(
    _id,
    title,
    shortDescription,
    imageUrl,
    postDate,
    authorId,
    authorImageUrl,
    authorName) {
    const post = {
        _id: _id,
        title: title,
        shortDescription: shortDescription,
        imageUrl: imageUrl,
        postDate: postDate,
        author: {
            _id: authorId,
            imageUrl: authorImageUrl,
            name: authorName
        }
    }
    return post;
}

module.exports = {
    newPost,
    newPostPreview
}