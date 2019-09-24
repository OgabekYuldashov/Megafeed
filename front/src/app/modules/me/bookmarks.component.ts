import { Component, OnInit } from '@angular/core';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { bookmarksStore } from 'src/app/store';
import { BookmarkModel } from 'src/app/models/bookmark.model';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styles: []
})
export class BookmarksComponent implements OnInit {
  public bookmarks: BookmarkModel[];
  private unsubscribe;

  constructor(private bookmarksService: BookmarksService, private notification: NzNotificationService) {
    console.log('bookmarks component');
    this.bookmarksService.getBookmarksList();
    this.notification.config({
      nzPlacement: 'bottomRight'
    });
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

  removeBookmark(id: string) {
    this.bookmarksService.removeBookmark(id);
    this.notification.blank('Bookmark removed', 'Bookmark removed sucsessfully!');
    return false;
  }
}
