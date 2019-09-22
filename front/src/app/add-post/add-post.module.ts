import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule } from '@angular/router';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule} from '@angular/forms';
import {NzIconModule, NzUploadModule} from 'ng-zorro-antd';
import {UploadComponent} from '../upload/upload.component';


@NgModule({
  declarations: [AddPostComponent, UploadComponent],
  exports: [
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AddPostComponent}
    ]),
    EditorModule,
    FormsModule,
    NzUploadModule,
    NzIconModule
  ]
})
export class AddPostModule { }
