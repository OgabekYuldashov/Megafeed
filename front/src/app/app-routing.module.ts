import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './add-post/add-post/add-post.component';
import {ShowPostComponent} from './show-post/show-post.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  // { path: 'add-post', loadChildren: () => import('./add-post/add-post.module').then(m => m.AddPostModule) },
   { path: 'add-post', component: AddPostComponent },
   { path: 'show-post', component: ShowPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
