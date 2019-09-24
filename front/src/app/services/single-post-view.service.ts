import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
 )
export class SinglePostViewService {

  constructor(private http: HttpClient) {

  }

  getPostbyId(postId) {
    return this.http.get('http://localhost:9090/api/v1/posts/' + postId, {});
  }
}
