import {Component} from '@angular/core';
import {CategoryModel} from 'src/app/models/category.model';
import {postsStore} from 'src/app/store';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent {
  title = 'front';
  profileMenuVisibility = false;

  public categories: CategoryModel[];

  constructor(public auth: AuthService) {
    this.categories = postsStore.getState().categories;
  }

  onToggleProfileMenu() {
    this.profileMenuVisibility = !this.profileMenuVisibility;
  }
}
