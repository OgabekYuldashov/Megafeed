import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  template: `
      <nz-card id="app-profile-menu">

          <p class="text-gray-dark">{{user.email}}</p>
          <hr>
          <p class="nav-item">
              <a class="nav-link" #addPost [routerLink]="['posts', 'add-post']">Add post</a>
          </p>
          <p class="nav-item">
              <a class="nav-link" [routerLink]="['posts', 'add-post']">My posts</a>
          </p>
          <p>
              <a class="nav-link" [routerLink]="['me', 'bookmarks']">My bookmarks</a>
          </p>
          <hr>
          <p><a (click)="onLogout()" class="nav-link" href="#">Logout</a></p>
      </nz-card>
  `,
  styles: [
      `
          p {
              margin: 0;
          }

          #app-profile-menu {
              position: absolute;
              will-change: transform;
              top: 40px;
              right: -50px;
              /*transform: translate3d(1058px, 59px, 0px);*/
          }

          a {
              background-color: transparent;
              cursor: pointer;
              transition: color .3s;
          }
    `
  ]
})
export class ProfileComponent implements OnInit {
  public user: any;

  constructor(public auth: AuthService, private router: Router) {
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.user = this.auth.getActiveUser();
  }
}
