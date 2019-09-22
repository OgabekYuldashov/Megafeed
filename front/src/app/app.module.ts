import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CommonService } from './service/common.service';
import { EditorModule} from '@tinymce/tinymce-angular';
import {AddPostModule} from './add-post/add-post.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EditorModule,
    AddPostModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    CommonService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
