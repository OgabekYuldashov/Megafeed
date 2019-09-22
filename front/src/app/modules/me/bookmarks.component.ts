import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { bookmarksStore } from 'src/app/store';
import { BookmarkModel } from 'src/app/models/bookmark.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styles: []
})
export class BookmarksComponent implements OnInit {
  public bookmarks: BookmarkModel[];
  private unsubscribe;

  constructor(private bookmarksService: BookmarksService) {
    this.bookmarksService.getOnlineData();
  }

  ngOnInit() {
    this.bookmarks = bookmarksStore.getState().bookmarks;
    this.unsubscribe = bookmarksStore.subscribe(() => {
      this.bookmarks = bookmarksStore.getState().bookmarks;
    })
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  addNewBookmark() {
    this.bookmarksService.saveBookmark();
  }
}
