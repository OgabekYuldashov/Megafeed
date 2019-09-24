import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { publicationsStore } from '../store';
import { addPublication, editPublication, removePublication, loadPublications } from '../actions/publications.actions';
import { PostModel } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PublicationsService {
    constructor(private http: HttpClient) { }

    getPublicationsList() {
        this.http.get("http://localhost:9090/api/v1/publications").subscribe((data: PostModel[]) => {
            publicationsStore.dispatch(loadPublications(data));
        });
    }

    addPublication(post: PostModel): Observable<PostModel> {
        publicationsStore.dispatch(addPublication(post));
        return this.http.post<PostModel>("http://localhost:9090/api/v1/publications", post);
    }

    editPublication(post: PostModel): Observable<PostModel> {
        publicationsStore.dispatch(editPublication(post));
        return this.http.patch<PostModel>("http://localhost:9090/api/v1/publications", post);
    }

    removePublication(postId: string): Observable<Object> {
                publicationsStore.dispatch(removePublication(postId));
        return this.http.delete<Object>("http://localhost:9090/api/v1/publications/" + postId);
    }

}
