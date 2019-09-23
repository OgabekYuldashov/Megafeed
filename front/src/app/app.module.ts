import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {LayoutComponent} from './modules/home/layout.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {CommonService} from './services/common.service';
import {en_US, NZ_I18N, NzIconModule} from 'ng-zorro-antd';
import {JwtModule} from '@auth0/angular-jwt';
import {conf} from './config';

registerLocaleData(en);

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: [conf.DOMAIN_URL],
        blacklistedRoutes: [
          conf.DOMAIN_URL + '/api/v1/users/signup',
          conf.DOMAIN_URL + '/api/v1/users/signin',
          conf.DOMAIN_URL + '/api/v1/users/validate_email']
      }
    }),
    NzIconModule
  ],
  providers: [{provide: NZ_I18N, useValue: en_US},
    CommonService],
  bootstrap: [LayoutComponent]
})
export class AppModule {
}
