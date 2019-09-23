import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post.component';
import { PostsfeedComponent } from './postsfeed.component';
import { RouterModule } from '@angular/router';
import { ListPostFeaturedComponent } from './list-post-featured.component';
import { AddPostComponent } from './add-post.component';
import { FormsModule } from '@angular/forms';
import { UploadComponent } from './upload.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzIconModule, NzMessageService, NzMessageModule } from 'ng-zorro-antd';
import {ShowPostComponent} from './show-post.component';


@NgModule({
  declarations: [
    PostsfeedComponent,
    ListPostComponent,
    ListPostFeaturedComponent,
    AddPostComponent,
    UploadComponent,
    ShowPostComponent
  ],
  imports: [
    EditorModule,
    CommonModule,
    FormsModule,
    NzUploadModule,
    NzIconModule,
    NzMessageModule,
    RouterModule.forChild([
      { path: '', component: PostsfeedComponent },
      { path: ':category', component: PostsfeedComponent },
      { path: 'posts/add-post', component: AddPostComponent },
      { path: 'posts/show-post', component: ShowPostComponent },
    ])
  ],
  providers: [
    NzMessageService
  ]
})
export class PostsModule { }
