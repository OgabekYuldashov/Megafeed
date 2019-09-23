import { Component, OnInit, Input } from '@angular/core';
import { PostPreviewModel } from 'src/app/models/postPreview.model';
import { BookmarksService } from 'src/app/services/bookmarks.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-list-post-featured',
  templateUrl: './list-post-featured.component.html',
  styles: []
})
export class ListPostFeaturedComponent implements OnInit {
  ngOnInit(): void {
    // this._notifications.success("title", "content");
  }

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
