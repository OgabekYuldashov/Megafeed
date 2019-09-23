import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {conf} from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(conf.BASE_URL + '/api/v1/users/signin', {email, password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }
  signup(userObj: object): Observable<{ token: string }> {
    return this.http.post<{token: string}>(conf.BASE_URL + '/api/v1/users/signup', userObj)
      .pipe(
        map(result => {
          return result;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
