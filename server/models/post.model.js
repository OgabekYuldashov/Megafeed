// interface PostModel {
//     title: string;
//     description: string;
//     imageUrl: string;
//     postDate: Date;
//     user: {
//         imageUrl: string;
//         name: string;

//     }
// }

function newPost(
    id,
    title,
    description,
    imageUrl,
    postDate,
    userImageUrl,
    userName) {
    const post = {
        id: id,
        title: title,
        description: description,
        imageUrl: imageUrl,
        postDate: postDate,
        user: {
            imageUrl: userImageUrl,
            name: userName
        }
    }
    return post;
}

module.exports = {
    newPost
}