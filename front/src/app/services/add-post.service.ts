import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post.model';

@Injectable()
export class AddPostService {

  constructor(private http: HttpClient) {

  }

  addPost(post: PostModel) {
    return this.http.post('http://localhost:9090/api/v1/posts/', {
      title: post.title,
      shortDescription: post.shortDescription.replace(/<[^>]*>/ig, ' ')
        .replace(/<\/[^>]*>/ig, ' ')
        .replace(/&nbsp;|&#160;/gi, ' ')
        .replace(/\s+/ig, ' ')
        .trim(),
      description: post.description,
      // imageUrl: post.imageUrl,
      imageUrl: 'assets/img/demopic/10.jpg',
      //  keywords: post.keywords,
      keywords: post.keywords,
      // author: post.author
      author : {
        imageUrl: 'https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x',
        name: 'Sal'
      }
    });
  }
  updatePost(post: PostModel) {
    // @ts-ignore
    return this.http.post('http://localhost:9090/api/v1/posts/', {
      title : post.title,
      shortDescription : post.shortDescription.replace(/<[^>]*>/ig, ' ')
        .replace(/<\/[^>]*>/ig, ' ')
        .replace(/&nbsp;|&#160;/gi, ' ')
        .replace(/\s+/ig, ' ')
        .trim(),
      description : post.description,
      // imageUrl: post.imageUrl,
      imageUrl : 'assets/img/demopic/10.jpg',
      //  keywords: post.keywords,
      keywords: post.keywords,
      // author: post.author
      author : {
        imageUrl: 'https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x',
        name: 'Sal'
      }
    });
  }

}
