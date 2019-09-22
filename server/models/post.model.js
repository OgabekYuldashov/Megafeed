function newPost(
    _id,
    title,
    description,
    shortDescription,
    imageUrl,
    postDate,
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
    authorImageUrl,
    authorName) {
    const post = {
        _id: _id,
        title: title,
        shortDescription: shortDescription,
        imageUrl: imageUrl,
        postDate: postDate,
        author: {
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