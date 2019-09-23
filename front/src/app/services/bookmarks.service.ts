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
        this.http.get("http://localhost:9090/api/v1/bookmarks").subscribe((data: BookmarkModel[]) => {
            bookmarksStore.dispatch(loadBookmarks(data));
        });
    }

    saveBookmark(postId, postTitle, postShortDescription) {
        const newBookmark: BookmarkModel = {
            _id: null,
            userId: null,
            addedDate: new Date(Date.now()),
            post: {
                _id: postId,
                title: postTitle,
                shortDescription: postShortDescription
            }
        };

        console.log(newBookmark);
                
        this.http.post("http://localhost:9090/api/v1/bookmarks", newBookmark).subscribe((data: BookmarkModel) => {
            bookmarksStore.dispatch(addBookmark(data));
        });
    }

    removeBookmark(bookmarkId: string) {
        let params = new HttpParams().set("_id", bookmarkId);
        this.http.delete("http://localhost:9090/api/v1/bookmarks", { params: params }).subscribe(() => {
            this.getBookmarksList();
        });
    }
}
