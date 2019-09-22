import { BookmarkModel } from '../models/bookmark.model';

export const ADD = '[bookmarks] Add';
export const LOAD = '[bookmarks] Load';

export function addBookmarks(newBookmark: BookmarkModel) {
    return {
        type: LOAD,
        payload: newBookmark
    }
}
export function loadBookmarks(bookmarks: BookmarkModel[]) {
    return {
        type: LOAD,
        payload: bookmarks
    }
}