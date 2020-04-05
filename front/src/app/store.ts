import { createStore } from 'redux';
import * as postsReducer from './reducers/posts';
import * as bookmarksReducer from './reducers/bookmarks';
import * as publicationsReducer from './reducers/publications';

export const postsStore = createStore(postsReducer.reducer);
export const bookmarksStore = createStore(bookmarksReducer.reducer);
export const publicationsStore = createStore(publicationsReducer.reducer);
