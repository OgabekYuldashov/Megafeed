import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { RouterModule } from '@angular/router';
import {ProtectedPageGuard} from '../../guards/protectedPage.guard';



@NgModule({
  declarations: [BookmarksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'bookmarks', component: BookmarksComponent, canActivate: [ProtectedPageGuard] },
    ])
  ]
})
export class MeModule { }
