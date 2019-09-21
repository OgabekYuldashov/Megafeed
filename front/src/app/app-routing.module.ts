import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsfeedComponent } from './modules/posts/postsfeed.component';


const routes: Routes = [
  { path: '', component: PostsfeedComponent },
  { path: ':category', component: PostsfeedComponent },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
