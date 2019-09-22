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


@NgModule({
  declarations: [
    PostsfeedComponent,
    ListPostComponent,
    ListPostFeaturedComponent,
    AddPostComponent,
    UploadComponent,
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
    ])
  ],
  providers: [
    NzMessageService
  ]
})
export class PostsModule { }
