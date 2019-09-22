import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BookmarkModel } from '../models/bookmark.model';
import { bookmarksStore } from '../store';
import { loadBookmarks } from '../actions/bookmarks.actions';

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

}
