import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookmarksComponent} from './bookmarks.component';
import {RouterModule} from '@angular/router';
import {ProtectedPageGuard} from '../../guards/protectedPage.guard';
import {EditProfileComponent} from './editProfile.component';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
  declarations: [BookmarksComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'bookmarks', component: BookmarksComponent, canActivate: [ProtectedPageGuard]},
      {path: 'profile', component: EditProfileComponent, canActivate: [ProtectedPageGuard]},
    ]),
    FormsModule,
    NgZorroAntdModule
  ]
})
export class MeModule {
}
