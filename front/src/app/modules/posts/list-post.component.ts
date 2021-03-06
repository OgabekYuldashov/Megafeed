import { Component, OnInit, Input } from '@angular/core';
import { PostPreviewModel } from 'src/app/models/postPreview.model';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styles: []
})
export class ListPostComponent {

  @Input() post: PostPreviewModel;

  constructor(private bookmarksService: BookmarksService, private notification: NzNotificationService) {
    this.notification.config({
      nzPlacement: 'bottomRight'
    });
  }


  addNewBookmark(post: PostPreviewModel) {
    this.bookmarksService.saveBookmark(post._id, post.title, post.shortDescription);
    this.notification.blank('Bookmark saved', 'Bookmark saved sucsessfully!');
    return false;
  }
}
