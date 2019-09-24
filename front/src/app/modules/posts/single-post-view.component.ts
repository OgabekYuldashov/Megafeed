import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SinglePostViewService} from '../../services/single-post-view.service';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styles: [],
  providers: [ SinglePostViewService ]
})
export class SinglePostViewComponent implements OnInit {
  public postId;
  public posts;
  constructor(private route: ActivatedRoute, private singlePostViewService: SinglePostViewService) {
    this.postId = this.route.snapshot.params._id;
  }

  ngOnInit() {
    this.getPostbyId(this.postId);

    // this.commonService.postAdded_Observable.subscribe(res => {
    //   this.getPostbyId(this.postId);
    // });
  }

  getPostbyId(postId) {
    this.singlePostViewService.getPostbyId(postId).subscribe(result => {
      console.log('result is ', result);
      this.posts = result;
    });
  }

}
