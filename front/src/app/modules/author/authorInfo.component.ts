import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-author-info',
  templateUrl: './authorInfo.component.html'
})
export class AuthorInfoComponent {
  @Input() user;

  constructor(){

  }

}
