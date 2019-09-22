import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPostComponent } from './list-post.component';
import { PostsfeedComponent } from './postsfeed.component';
import { RouterModule } from '@angular/router';
import { ListPostFeaturedComponent } from './list-post-featured.component';

@NgModule({
  declarations: [
    PostsfeedComponent,
    ListPostComponent,
    ListPostFeaturedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PostsfeedComponent },
      { path: ':category', component: PostsfeedComponent },
    ])
  ]
})
export class PostsModule { }
