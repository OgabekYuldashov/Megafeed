import * as PostPrevewAction from '../actions/postPreview';
import { CategoryModel } from '../models/category.model';
import { PostPreviewModel } from '../models/postPreview.model';

export interface PostsState {
    posts: PostPreviewModel[];
    categories: CategoryModel[];
}

const initialState: PostsState = {
    posts: [],
    categories: [
        {alias: '', title: 'Stories', description: 'All the best stories from MUM'},
        {alias: 'tech', title: 'TECH', description: 'Technology and fun facts'},
      {alias: 'design', title: 'DESIGN', description: 'The most interesting in design'},
      {alias: 'marketing', title: 'MARKETING', description: 'All around marketing'},
      {alias: 'cars', title: 'CARS', description: 'Cars, bikes and dirt'},
      {alias: 'argiro', title: 'ARGIRO', description: 'Do you like tofu?'},
      {alias: 'president2019', title: 'PRESIDENT2019', description: 'MUM politic arena'},
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
