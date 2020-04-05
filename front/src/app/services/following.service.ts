import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {conf} from '../config';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class FollowingService {
  constructor(private http: HttpClient, private auth: AuthService) {
  }

  follow(uid: string) {
    this.http.post(conf.BASE_URL + '/api/v1/users/follow', {uid}).subscribe((response: any) => {
      if (response.error) {
        return false;
      } else {
        localStorage.setItem('access_token', response.data.token);
        return true;
      }
    });
  }

  unfollow(uid: string) {
    this.http.post(conf.BASE_URL + '/api/v1/users/unfollow', {uid}).subscribe((response: any) => {
      if (response.error) {
        return false;
      } else {
        localStorage.setItem('access_token', response.data.token);
        return true;
      }
    });
  }

  isFollowing(uid: string) {
    const activeUser = this.auth.getActiveUser();
    return activeUser.following.includes(uid);
  }
}
