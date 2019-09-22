import { Component } from '@angular/core';
import { CategoryModel } from 'src/app/models/category.model';
import { postsStore } from 'src/app/store';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {
  title = 'front';

  public categories: CategoryModel[];

  constructor(){
    this.categories = postsStore.getState().categories;
  }
}
