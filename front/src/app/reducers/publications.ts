import * as publicationsActions from '../actions/publications.actions';
import { PostModel } from '../models/post.model';

export interface PublicationsState {
    posts: PostModel[];
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

function Add(state: PublicationsState, newPost: PostModel): PublicationsState {
    return Object.assign({}, state, { posts: [...state.posts, newPost] });
}

function Edit(state: PublicationsState, post: PostModel): PublicationsState {
    var postsFiltered = state.posts.filter(x => x._id != post._id);
    return Object.assign({}, state, { posts: [...postsFiltered, post] });
}

function Remove(state: PublicationsState, postId: string): PublicationsState {
    return Object.assign({}, state, { posts: state.posts.filter(x => x._id != postId) });
}

function Load(state: PublicationsState, posts: PostModel[]): PublicationsState {
    return Object.assign({}, state, { posts: posts });
}
