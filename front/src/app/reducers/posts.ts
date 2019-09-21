import { PostPreviewModel } from '../models/postPreview.model';
import * as PostPrevewAction from '../actions/postPreview';

export interface PostsState {
    data: PostPreviewModel[];
};

const initialState: PostsState = {
    data: []
};

export function reducer(state = initialState, action): PostsState {
    switch (action.type) {
        case PostPrevewAction.LOAD: {
            return addPostPreview(state, action.payload);
        }
        default: {
            return state;
        }
    }
}

function addPostPreview(state: PostsState, posts: PostPreviewModel[]): PostsState {
    return Object.assign({}, state, { data: posts });
}
