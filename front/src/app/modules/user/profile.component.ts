import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  template: `
  `
})
export class ProfileComponent {
  constructor(private auth: AuthService) {

  }
}
