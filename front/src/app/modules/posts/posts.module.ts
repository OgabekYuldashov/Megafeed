import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post.component';
import { PostsfeedComponent } from './postsfeed.component';
import { RouterModule } from '@angular/router';
import { ListPostFeaturedComponent } from './list-post-featured.component';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule, NzMessageService, NzMessageModule } from 'ng-zorro-antd';
import { SinglePostViewComponent } from './single-post-view.component';
import {ShowPostComponent} from './show-post.component';
import { PostAutorInfoComponent } from './post-autor-info.component';

@NgModule({
  declarations: [
    PostsfeedComponent,
    ListPostComponent,
    ListPostFeaturedComponent,
    ShowPostComponent,
    UploadComponent,
    SinglePostViewComponent,
    PostAutorInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzUploadModule,
    NzIconModule,
    NzMessageModule,
    RouterModule.forChild([
      { path: 'posts', component: PostsfeedComponent },
      { path: 'posts/:category', component: PostsfeedComponent },
      { path: 'posts/view/:_id', component: SinglePostViewComponent },
    ])
  ],
  providers: [
    NzMessageService
  ],
  exports: [
    PostAutorInfoComponent
  ]
})
export class PostsModule { }
