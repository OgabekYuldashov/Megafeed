import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../../models/post.model';

@Injectable()
export class AddPostService {

  constructor(private http: HttpClient) {

  }

  addPost(post: PostModel) {
    return this.http.post('http://localhost:9090/api/v1/post/createPost', {
      title : post.title,
      description : post.description,
   //   imageUrl: post.imageUrl,
      keywords: post.keywords
    });
  }

  updatePost(post: PostModel) {
    return this.http.post('/api/v1/post/updatePost', {
      id: post._id,
      title : post.title,
      description : post.description,
 //     imageUrl: post.imageUrl,
      keywords: post.keywords
    });
  }

}
