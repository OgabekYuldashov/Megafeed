import { Component, OnInit } from '@angular/core';
import {newPostModel, PostModel} from '../../models/post.model';
import {AuthorInfoModel, getAuthorInfoModel} from '../../models/authorInfo.model';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  public authorInfo: AuthorInfoModel;

  public posts: PostModel[];

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    this.authorInfo = getAuthorInfoModel(auth.getActiveUser(), new Date(Date.now()));
  }

  ngOnInit() {
    this.getOwnPosts();
  }

  getOwnPosts() {
     this.http.get('http://localhost:9090/api/v1/posts/' + this.authorInfo._id)
      .subscribe((data: PostModel[]) => {
        console.log(data);
        this.posts = data;
    });
  }

  openPost(id) {
    this.router.navigate(['/', 'posts', id]);
  }
}
