import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PostPreviewModel } from '../models/postPreview.model';
import { PostsState } from '../reducers/posts';
import { postsStore } from '../store';
import { loadPostsPreviews } from './../actions/postPreview';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    constructor(private http: HttpClient) { }

    getPostsFeed(category: string) {
        let params = new HttpParams().set("category", category);
        this.http.get("http://localhost:9090/api/v1/posts", { params: params }).subscribe((data: PostPreviewModel[]) => {
            postsStore.dispatch(loadPostsPreviews(data));
        });
    }

    getPostbyId(postId: string): Observable<PostModel> {
        return this.http.get<PostModel>('http://localhost:9090/api/v1/posts/' + postId, {});
    }

}
