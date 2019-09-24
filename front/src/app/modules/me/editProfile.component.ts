import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {conf} from '../../config';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './editProfile.component.html',
  styles: [`
      .enlarged-txt {
          font-size: 1.25rem;
          font-weight: 300;
      }
  `]
})
export class EditProfileComponent implements OnInit {
  public name = '';
  public bio = '';
  public imgUrl = '';

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {

  }

  ngOnInit(): void {
    const user = this.auth.getActiveUser();

    // prepopulating the inputs with the existing data
    if (user.name) {
      this.name = user.name;
    }
    if (user.bio) {
      this.bio = user.bio;
    }
    if (user.imgUrl) {
      this.imgUrl = user.imgUrl;
    }
  }

  saveChanges() {
    this.http.patch(conf.BASE_URL + '/api/v1/users/profile', {
      name: this.name,
      bio: this.bio,
      imgUrl: this.imgUrl
    }).subscribe((response: any) => {
      localStorage.setItem('access_token', response.data.token);
      this.router.navigate(['/']);
    });
  }

}
