import { PostModel } from '../models/post.model';

export const ADD =      '[publications] Add';
export const EDIT =     '[publications] Edit';
export const REMOVE =   '[publications] Remove';
export const LOAD =     '[publications] Load';

export function addPublication(newPost: PostModel) {
    return {
        type: ADD,
        payload: newPost
    }
}

export function editPublication(post: PostModel) {
    return {
        type: EDIT,
        payload: post
    }
}

export function removePublication(postId: string) {
    return {
        type: REMOVE,
        payload: postId
    }
}

export function loadPublications(posts: PostModel[]) {
    return {
        type: LOAD,
        payload: posts
    };
}
