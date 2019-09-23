import { BookmarkModel } from '../models/bookmark.model';

export const ADD = '[bookmarks] Add';
export const LOAD = '[bookmarks] Load';

export function addBookmark(newBookmark: BookmarkModel) {
    return {
        type: ADD,
        payload: newBookmark
    }
}
export function loadBookmarks(bookmarks: BookmarkModel[]) {
    return {
        type: LOAD,
        payload: bookmarks
    }
}