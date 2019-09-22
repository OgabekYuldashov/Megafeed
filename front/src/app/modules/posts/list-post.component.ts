import { Component, OnInit, Input } from '@angular/core';
import { PostPreviewModel } from 'src/app/models/postPreview.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styles: []
})
export class ListPostComponent {

  @Input() post: PostPreviewModel;

  constructor() { 

  }
}
