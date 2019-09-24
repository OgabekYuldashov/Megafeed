import {NgModule} from '@angular/core';
import {ProfilePageComponent} from './profilePage.component';
import {AuthorInfoComponent} from './authorInfo.component';
import {SinglePostComponent} from './singlePost.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProfilePageComponent, AuthorInfoComponent, SinglePostComponent],
  imports: [RouterModule.forChild([
    {path: 'a', component: ProfilePageComponent}
  ])],
  exports: [],
  // bootstrap: [ProfilePageComponent]
})
export class AuthorModule {

  constructor() {
    console.log('Author Module Constructor...');

  }
}
