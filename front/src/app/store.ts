import { createStore } from 'redux';
import * as postsReducer from './reducers/posts';
import * as bookmarksReducer from './reducers/bookmarks';

export const postsStore = createStore(postsReducer.reducer);
export const bookmarksStore = createStore(bookmarksReducer.reducer);