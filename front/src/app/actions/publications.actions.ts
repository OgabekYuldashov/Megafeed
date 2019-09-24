import { Post } from '../models/post';

export const ADD =      '[publications] Add';
export const EDIT =     '[publications] Edit';
export const REMOVE =   '[publications] Remove';
export const LOAD =     '[publications] Load';

export function addPublication(newPost: Post) {
    return {
        type: ADD,
        payload: newPost
    };
}

export function editPublication(post: Post) {
    return {
        type: EDIT,
        payload: post
    };
}

export function removePublication(postId: string) {
    return {
        type: REMOVE,
        payload: postId
    };
}

export function loadPublications(posts: Post[]) {
    return {
        type: LOAD,
        payload: posts
    };
}
