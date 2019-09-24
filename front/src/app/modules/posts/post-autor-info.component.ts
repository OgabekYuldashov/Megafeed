import { Component, OnInit, Input } from '@angular/core';
import { AuthorInfoModel } from 'src/app/models/authorInfo.model';

@Component({
  selector: 'app-post-autor-info',
  templateUrl: './post-autor-info.component.html',
  styles: []
})
export class PostAutorInfoComponent implements OnInit {

  @Input() authorInfo: AuthorInfoModel;
  constructor() {
  }

  ngOnInit() {
  }

}
