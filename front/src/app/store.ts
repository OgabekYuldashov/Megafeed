import { createStore } from 'redux';
import { reducer } from './reducers/posts';

export const postsStore = createStore(reducer);
