import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninComponent} from './signin.component';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule, NzFormModule} from 'ng-zorro-antd';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignupComponent} from './signup.component';


@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
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
    ])
  ]
})
export class UserModule {
}
