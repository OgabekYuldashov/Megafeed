import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'me', loadChildren: () => import('./modules/me/me.module').then(m => m.MeModule) },
  { path: 'author', loadChildren: () => import('./modules/author/author.module').then(m => m.AuthorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
