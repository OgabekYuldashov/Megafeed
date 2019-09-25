import {NgModule} from '@angular/core';
import {ProfilePageComponent} from './profilePage.component';
import {AuthorInfoComponent} from './authorInfo.component';
import {SinglePostComponent} from './singlePost.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ProfilePageComponent, AuthorInfoComponent, SinglePostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
    {path: ':uid', component: ProfilePageComponent}
  ])],
  exports: [],
  // bootstrap: [ProfilePageComponent]
})
export class AuthorModule {

  constructor() {

  }
}
