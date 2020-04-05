import {Component, Input, OnInit} from '@angular/core';
import {BookmarksService} from '../../services/bookmarks.service';
import {NzNotificationService} from 'ng-zorro-antd';
import {PostPreviewModel} from '../../models/postPreview.model';
import {FollowingService} from "../../services/following.service";

@Component({
  selector: 'app-author-post',
  templateUrl: './singlePost.component.html'
})
export class SinglePostComponent implements OnInit {
  @Input() post;
  @Input() user;

  constructor(private bookmarksService: BookmarksService, private notification: NzNotificationService) {
    notification.config({
      nzPlacement: 'bottomRight'
    });
  }

  ngOnInit(): void {
    console.log(this.post);
    // console.log('USER:');
    // console.log(this.user);
    // this.post.imgUrl = 'https://i.stack.imgur.com/Oq4FZ.png';
  }

  addNewBookmark(post: PostPreviewModel) {
    this.bookmarksService.saveBookmark(post._id, post.title, post.shortDescription);
    this.notification.blank('Bookmark saved', 'Bookmark saved sucsessfully!');
    return false;
  }

}
