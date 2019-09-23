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

    getOnlineData() {
        this.http.get("http://localhost:9090/api/v1/bookmarks").subscribe((data: BookmarkModel[]) => {
            bookmarksStore.dispatch(loadBookmarks(data));
        });
    }

    saveBookmark() {
        const newBookmark: BookmarkModel = {
            _id: '7',
            addedDate: new Date(2019, 9, 22),
            post: {
                _id: '1',
                title: 'This is new bookmark',
                shortDescription: 'short description'
            }
        };

        this.http.post("http://localhost:9090/api/v1/bookmarks", newBookmark).subscribe((data: BookmarkModel) => {
            bookmarksStore.dispatch(addBookmark(data));
        });
    }
}
