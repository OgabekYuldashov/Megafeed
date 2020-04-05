import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostModel, newPostModel} from '../../models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { AuthorInfoModel, newAuthorInfoModel } from 'src/app/models/authorInfo.model';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styles: [`

`],
})
export class SinglePostViewComponent implements OnInit {
  public postId;
  public post: PostModel = newPostModel();
  public authorInfo: AuthorInfoModel = newAuthorInfoModel();

  constructor(private route: ActivatedRoute, private postsService: PostsService) {
    this.postId = this.route.snapshot.params._id;
  }

  ngOnInit() {
    this.getPostbyId(this.postId);

    // this.commonService.postAdded_Observable.subscribe(res => {
    //   this.getPostbyId(this.postId);
    // });
  }

  getPostbyId(postId) {
    this.postsService.getPostbyId(postId).subscribe(result => {
      this.post = result;
      this.authorInfo = {
        _id: this.post.author._id,
        name: this.post.author.name,
        imageUrl: this.post.author.imageUrl,
        bio: this.post.author.bio,
        pudlishDate: this.post.postDate
      }
    });
  }

}
