import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';

@Injectable()
export class AddPostService {

  constructor(private http: HttpClient) {

  }

  addPost(post: Post) {
    return this.http.post('http://localhost:9090/api/v1/post/createPost', {
      title : post.title,
      description : post.description,
   //   imageUrl: post.imageUrl,
      keywords: post.keywords
    });
  }

  updatePost(post: Post) {
    return this.http.post('/api/v1/post/updatePost', {
      id: post._id,
      title : post.title,
      description : post.description,
 //     imageUrl: post.imageUrl,
      keywords: post.keywords
    });
  }

}
