import * as publicationsActions from '../actions/publications.actions';
import { Post } from '../models/post';

export interface PublicationsState {
    posts: Post[];
};

const initialState: PublicationsState = {
    posts: [],
};

export function reducer(state = initialState, action): PublicationsState {
    switch (action.type) {
        case publicationsActions.ADD: {
            return Add(state, action.payload);
        }
        case publicationsActions.EDIT: {
            return Edit(state, action.payload);
        }
        case publicationsActions.REMOVE: {
            return Remove(state, action.payload);
        }
        case publicationsActions.LOAD: {
            return Load(state, action.payload);
        }
        default: {
            return state;
        }
    }
}

function Add(state: PublicationsState, newPost: Post): PublicationsState {
    return Object.assign({}, state, { posts: [...state.posts, newPost] });
}

function Edit(state: PublicationsState, post: Post): PublicationsState {
    var postsFiltered = state.posts.filter(x => x._id != post._id);
    return Object.assign({}, state, { posts: [...postsFiltered, post] });
}

function Remove(state: PublicationsState, postId: string): PublicationsState {
    return Object.assign({}, state, { posts: state.posts.filter(x => x._id != postId) });
}

function Load(state: PublicationsState, posts: Post[]): PublicationsState {
    return Object.assign({}, state, { posts: posts });
}
