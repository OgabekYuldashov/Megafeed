import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SinglePostViewService} from '../../services/single-post-view.service';
import {CommonService} from '../../services/common.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styles: [],
  providers: [ SinglePostViewService ]
})
export class SinglePostViewComponent implements OnInit {
  public postId;
  public post: any;
  constructor(private route: ActivatedRoute, private singlePostViewService: SinglePostViewService, private commonService: CommonService) {
    this.postId = this.route.snapshot.params._id;


  }

  ngOnInit() {
    this.getPostbyId();
  }

  getPostbyId() {
    this.singlePostViewService.getPostbyId().subscribe(result => {
      console.log('result is ', result);
      this.post = result['data'];
    });
  }

}
