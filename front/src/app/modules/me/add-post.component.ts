import { Component } from '@angular/core';
import { PostModel, newPostModel } from '../../models/post.model';
import { Router } from '@angular/router';
import { AuthorInfoModel, getAuthorInfoModel } from 'src/app/models/authorInfo.model';
import { AuthService } from 'src/app/services/auth.service';
import { PublicationsService } from 'src/app/services/publications.service';
import { CategoryModel } from 'src/app/models/category.model';
import { postsStore } from 'src/app/store';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddEditPostComponent {

  public authorInfo: AuthorInfoModel;
  public categories: CategoryModel[];
  public post: PostModel = newPostModel();

  constructor(private router: Router, private publicationsService: PublicationsService, private auth: AuthService) {
    this.authorInfo = getAuthorInfoModel(auth.getActiveUser(), new Date(Date.now()));
    this.post.postDate = new Date(Date.now());
    this.categories = postsStore.getState().categories.filter(x => x.alias != '');
  }

  addOrEditPost() {
    if (this.post._id) {
      this.publicationsService.editPublication(this.post).subscribe((data: PostModel) => {
        this.router.navigate(['/', 'posts', 'view', data._id]);
      });
    } else {
      this.publicationsService.addPublication(this.post).subscribe((data: PostModel) => {
        this.router.navigate(['/', 'posts', 'view', data._id]);
      });
    }
  }

}
