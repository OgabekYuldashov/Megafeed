import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ShowPostService {

  constructor(private http: HttpClient) {

  }

  getAllPost() {
    console.log('getting');
    return this.http.get('http://localhost:9090/api/v1/posts', {});
   // return this.http.post('/posts/getAllPost', {});
  }

  deletePost(id) {
    return this.http.post('http://localhost:9090/api/v1/posts', {id : id});
  }
}
