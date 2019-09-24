import { Component, OnInit } from '@angular/core';
import { ShowPostService} from '../../services/show-post.service';
import {CommonService} from '../../services/common.service';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css'],
  providers: [ ShowPostService ]
})
export class ShowPostComponent implements OnInit {

  // @ts-ignore
  // @ViewChild('closeBtn') closeBtn: ElementRef;

  public posts;
  // tslint:disable-next-line:variable-name
  public post_to_delete;

  constructor(private showPostService: ShowPostService, private commonService: CommonService) {

  }

  ngOnInit() {
    this.getAllPost();

    this.commonService.postAdded_Observable.subscribe(res => {
      this.getAllPost();
    });
  }

  setDelete(post: Post) {
    this.post_to_delete = post;
  }

  unsetDelete() {
    this.post_to_delete = null;
  }

  getAllPost() {
    this.showPostService.getAllPost().subscribe(result => {
      console.log('result is ', result);
      this.posts = result;
    });
  }

  editPost(post: Post) {
    this.commonService.setPostToEdit(post);
  }

  deletePost() {
    this.showPostService.deletePost(this.post_to_delete._id).subscribe(res => {
      this.getAllPost();
      // this.closeBtn.nativeElement.click();
    });
  }

}

