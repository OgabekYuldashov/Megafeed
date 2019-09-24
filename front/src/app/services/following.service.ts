import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {conf} from '../config';

@Injectable({providedIn: 'root'})
export class FollowingService {
  constructor(private http: HttpClient) {
  }

  follow(uid: string) {
    this.http.post(conf.BASE_URL + '/api/v1/users/follow', {uid}).subscribe((response: any) => {
      if (response.error) {
        return false;
      } else {
        return true;
      }
    });
  }

  unfollow(uid: string) {
    this.http.post(conf.BASE_URL + '/api/v1/users/unfollow', {uid}).subscribe((response: any) => {
      if (response.error) {
        return false;
      } else {
        return true;
      }
    });
  }
}
