import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

declare var tinymce: any;

@Component({ selector: 'app-edit', template: `` })

export class EditComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: string;

  @Output() onEditorKeyup = new EventEmitter();
 // private  http;

  editor;
  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    const self = this;

    tinymce.init({

      selector: '#' + this.elementId,

      plugins: ['link', 'paste', 'table', 'image'],

      skin_url: '../assets/skins/lightgray',

      setup: editor => {

        this.editor = editor; editor.on('keyup', () => {

          const content = editor.getContent();

          this.onEditorKeyup.emit(content); });

      },

      // image upload
      images_upload_handler: function(blobInfo, success, failure) {
        var formData;
        formData = new formData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        self.uploadFile('api/upload', formData).subscribe(data => {
          console.log(data);
          success(data['serverPath']);
        });

      }

    });

  }

  uploadFile(url: string, formData: any) {
    var self = this;
    var headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    return this.http.post(url, formData, { headers});
  }

  ngOnDestroy() {

    tinymce.remove(this.editor);

  }

}
