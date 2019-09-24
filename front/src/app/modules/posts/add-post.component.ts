import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AddPostService } from '../../services/add-post.service';
import { PostModel } from '../../models/post.model';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { AuthorInfoModel, getAuthorInfoModel } from 'src/app/models/authorInfo.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent implements OnInit {

  public authorInfo: AuthorInfoModel;

  // @ts-ignore
  @ViewChild('avatarUrl') avatarUrl: string;
  public post: PostModel;

  constructor(private addPostService: AddPostService, private router: Router, private commonService: CommonService, private auth: AuthService) {
    const user = auth.getActiveUser();
    this.authorInfo = getAuthorInfoModel(auth.getActiveUser(), new Date(Date.now()));

    console.log(user);
    console.log(this.authorInfo);

    this.post = new PostModel();
    this.post.imageUrl = this.avatarUrl;
  }

  ngOnInit() {
    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
      console.log('post is ', this.post._id);
    });
  }

  addPost() {
    if (this.post.title && this.post.description) {
      if (this.post._id) {
        this.addPostService.updatePost(this.post).subscribe(res => {
          this.commonService.notifyPostAddition();
        });
      } else {
        this.addPostService.addPost(this.post).subscribe((res: any) => {
          const pid = res.data._id;
          this.commonService.notifyPostAddition();
          this.router.navigate(['/', 'posts', pid]);
        });
      }
    } else {
      alert('Title and Description required');
    }
  }

}
