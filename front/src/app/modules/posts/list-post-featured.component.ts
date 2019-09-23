import { Component, OnInit, Input } from '@angular/core';
import { PostPreviewModel } from 'src/app/models/postPreview.model';
import { BookmarksService } from 'src/app/services/bookmarks.service';

@Component({
  selector: 'app-list-post-featured',
  templateUrl: './list-post-featured.component.html',
  styles: []
})
export class ListPostFeaturedComponent {

  @Input() post: PostPreviewModel;
  
  constructor(private bookmarksService: BookmarksService) { }


  addNewBookmark(post: PostPreviewModel) {
    console.log(post);
    this.bookmarksService.saveBookmark(post._id, post.title, post.shortDescription);
    return false;
  }
}
