import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {conf} from '../../config';
import {AuthorizedUserModel, newAuthorizedUserModel} from '../../models/authorizedUser.model';
import {PostModel} from '../../models/post.model';

@Component({
  selector: 'app-profile-page',
  template: `
      <app-author-info [user]="user"></app-author-info>

      <div class="graybg authorpage">
          <div class="container">
              <div class="listrecent listrelated" *ngFor="let post of posts">

                  <app-author-post [post]="post"  [user]="user" ></app-author-post>

              </div>
          </div>
      </div>
  `
})

export class ProfilePageComponent {
  public user: AuthorizedUserModel = newAuthorizedUserModel();
  public posts: PostModel[];

  constructor(private root: ActivatedRoute, private http: HttpClient) {
    // console.log('Fetching Posts...');
    this.fetchPosts();

  }

  fetchPosts() {
    const uid = this.root.snapshot.params.uid;
    this.http.get(conf.BASE_URL + '/api/v1/users/' + uid).subscribe((resp: any) => {
      if (resp.error) {
        console.log('Error Fetching Data');
      } else {
        this.user._id = resp.data.user._id;
        this.user.email = resp.data.user.email;
        this.user.name = resp.data.user.name;
        this.user.imgUrl = resp.data.user.imgUrl;
        this.user.bio = resp.data.user.bio;
        this.user.following = resp.data.user.following;

        const rawPosts = resp.data.posts;

        this.posts = rawPosts.map(post => {
          return {
            _id: post._id,
            title: post.title,
            category: post.category,
            shortDescription: post.shortDescription,
            description: post.description,
            imageUrl: post.imageUrl,
            keywords: post.keywords,
            postDate: post.postDate,
            author: null
          } as PostModel;

        });

        /*setTimeout(() => {
          // console.log(this.posts);
        }, 2000);*/
      }
    });
  }
}
