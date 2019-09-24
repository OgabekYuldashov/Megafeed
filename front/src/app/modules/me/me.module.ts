import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { RouterModule } from '@angular/router';
import { ProtectedPageGuard } from '../../guards/protectedPage.guard';
import { EditProfileComponent } from './editProfile.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AddEditPostComponent } from './add-post.component';
import { PostsComponent } from './posts.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {PostsModule} from '../posts/posts.module';

@NgModule({
  declarations: [
    BookmarksComponent,
    EditProfileComponent,
    AddEditPostComponent,
    PostsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'bookmarks', component: BookmarksComponent},
      { path: 'posts', component: PostsComponent  },
      // { path: 'posts', component: PostsComponent, canActivate: [ProtectedPageGuard] },
      // { path: 'post', component: AddEditPostComponent, canActivate: [ProtectedPageGuard] },
      {path: 'profile', component: EditProfileComponent, canActivate: [ProtectedPageGuard]},
    ]),
    FormsModule,
    NgZorroAntdModule,
    EditorModule,
    PostsModule,
  ],
  exports: [
  ]
})
export class MeModule {
  constructor() {
    console.log('Me module');
  }
}
