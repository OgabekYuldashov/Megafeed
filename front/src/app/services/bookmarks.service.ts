import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookmarkModel } from '../models/bookmark.model';
import { bookmarksStore } from '../store';
import { loadBookmarks, addBookmark } from '../actions/bookmarks.actions';

@Injectable({
    providedIn: 'root'
})
export class BookmarksService {
    constructor(private http: HttpClient) { }

    getBookmarksList() {
        let params = new HttpParams().set("userId", '1');
        this.http.get("http://localhost:9090/api/v1/bookmarks", { params: params }).subscribe((data: BookmarkModel[]) => {
            bookmarksStore.dispatch(loadBookmarks(data));
        });
    }

    saveBookmark(postId, postTitle, postShortDescription) {
        const newBookmark: BookmarkModel = {
            _id: null,
            userId: '1',
            addedDate: new Date(2019, 9, 22),
            post: {
                _id: postId,
                title: postTitle,
                shortDescription: postShortDescription
            }
        };

        this.http.post("http://localhost:9090/api/v1/bookmarks", newBookmark).subscribe((data: BookmarkModel) => {
            bookmarksStore.dispatch(addBookmark(data));
        });
    }

    deleteBookmark() {
        let params = new HttpParams().set("userId", '1');
        this.http.get("http://localhost:9090/api/v1/bookmarks", { params: params }).subscribe((data: BookmarkModel[]) => {
            bookmarksStore.dispatch(loadBookmarks(data));
        });
    }
}
