import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AddPostService } from '../../services/add-post.service';
import { PostModel } from '../../models/post.model';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: [],
  providers: [ AddPostService ]
})
export class AddPostComponent implements OnInit {

  // @ts-ignore
  @ViewChild('avatarUrl') avatarUrl: string;

  // @ts-ignore
  @ViewChild('closeBtn') closeBtn: ElementRef;
  public post: PostModel;

  constructor(private addPostService: AddPostService, private router: Router, private commonService: CommonService) {
    this.post = new PostModel();
    this.post.imageUrl = this.avatarUrl;
  }

  ngOnInit() {
    // this.commonService.postEdit_Observable.subscribe(res => {
    //   this.post = this.commonService.post_to_be_edited;
    //   console.log('post is ', this.post._id);
    // });
  }

  addPost() {
    // if (this.post.title && this.post.description) {
    //   if (this.post._id) {
    //     this.addPostService.updatePost(this.post).subscribe(res => {
    //       this.closeBtn.nativeElement.click();
    //       this.commonService.notifyPostAddition();
    //     });
    //   } else {
    //     this.addPostService.addPost(this.post).subscribe(res => {
    //       this.closeBtn.nativeElement.click();
    //       this.commonService.notifyPostAddition();
    //     });
    //   }
    // } else {
    //   alert('Title and Description required');
    // }
  }

}
