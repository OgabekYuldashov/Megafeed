import { Component, OnInit, Input } from '@angular/core';
import { PostPreviewModel } from 'src/app/models/postPreview.model';

@Component({
  selector: 'app-list-post-featured',
  templateUrl: './list-post-featured.component.html',
  styles: []
})
export class ListPostFeaturedComponent {

  @Input() post: PostPreviewModel;
  
  constructor() { }

}
