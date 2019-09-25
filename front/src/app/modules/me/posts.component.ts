import { Component, OnInit } from '@angular/core';
import { newPostModel, PostModel } from '../../models/post.model';
import { AuthorInfoModel, getAuthorInfoModel } from '../../models/authorInfo.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PublicationsService } from 'src/app/services/publications.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { publicationsStore } from 'src/app/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  public authorInfo: AuthorInfoModel;
  public posts: PostModel[];
  private unsubscribe;

  constructor(private auth: AuthService, private router: Router, private publicationsService: PublicationsService, private notification: NzNotificationService) {
    this.authorInfo = getAuthorInfoModel(auth.getActiveUser(), new Date(Date.now()));

    this.publicationsService.getPublicationsList();
    this.notification.config({
      nzPlacement: 'bottomRight'
    });
  }

  ngOnInit() {
    this.posts = publicationsStore.getState().posts;
    this.unsubscribe = publicationsStore.subscribe(() => {
      this.posts = publicationsStore.getState().posts;
    })
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  removePublication(id: string) {
    this.publicationsService.removePublication(id).subscribe(() => { });
    this.notification.blank('Publication removed', 'Publication removed sucsessfully!');
    return false;
  }
}
