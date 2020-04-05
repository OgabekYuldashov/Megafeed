import { BookmarkModel } from '../models/bookmark.model';
import * as bookmarksActions from '../actions/bookmarks.actions';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

export interface BookmarksState {
    bookmarks: BookmarkModel[];
};

const initialState: BookmarksState = {
    bookmarks: [],
};

export function reducer(state = initialState, action): BookmarksState {
    switch (action.type) {
        case bookmarksActions.ADD: {
            return Add(state, action.payload);
        }
        case bookmarksActions.REMOVE: {
            return Remove(state, action.payload);
        }
        case bookmarksActions.LOAD: {
            return Load(state, action.payload);
        }
        default: {
            return state;
        }
    }
}

function Add(state: BookmarksState, newBookmark: BookmarkModel): BookmarksState {
    return Object.assign({}, state, { bookmarks: [...state.bookmarks, newBookmark] });
}

function Remove(state: BookmarksState, bookmarkId: string): BookmarksState {
    return Object.assign({}, state, { bookmarks: state.bookmarks.filter(x => x._id != bookmarkId) });
}

function Load(state: BookmarksState, bookmarks: BookmarkModel[]): BookmarksState {
    return Object.assign({}, state, { bookmarks: bookmarks });
}
