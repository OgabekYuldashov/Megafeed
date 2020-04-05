import { BookmarkModel } from '../models/bookmark.model';

export const ADD =      '[bookmarks] Add';
export const REMOVE =   '[bookmarks] Remove';
export const LOAD =     '[bookmarks] Load';

export function addBookmark(newBookmark: BookmarkModel) {
    return {
        type: ADD,
        payload: newBookmark
    }
}

export function removeBookmark(bookmarkId: string) {
    return {
        type: REMOVE,
        payload: bookmarkId
    }
}

export function loadBookmarks(bookmarks: BookmarkModel[]) {
    return {
        type: LOAD,
        payload: bookmarks
    }
}