import { PostPreviewModel } from '../models/postPreview.model';
import * as PostPrevewAction from '../actions/postPreview';
import { CategoryModel } from '../models/category.model';

export interface PostsState {
    posts: PostPreviewModel[];
    categories: CategoryModel[]
};

const initialState: PostsState = {
    posts: [],
    categories: [
        {alias: '', title: 'Stories', description: 'All the best stories from MUM'},
        {alias: 'tech', title: 'TECH', description: 'Technology and fun facts'},
      {alias: 'art', title: 'ART', description: 'The most interesting in arts'},
      {alias: 'cars', title: 'CARS', description: 'Thetrtyrthts'},
    ]
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
    return Object.assign({}, state, { categories: state.categories,  posts: posts });
}
