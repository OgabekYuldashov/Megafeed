import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule, NzFormModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './signup.component';
import {ProfileComponent} from './profile.component';
import {EditProfileComponent} from '../me/editProfile.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
    ]),
    FormsModule
  ]
})
export class AuthModule {
}
