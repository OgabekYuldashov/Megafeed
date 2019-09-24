import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { PostModel } from '../models/post.model';

@Injectable()
export class CommonService {

  // // tslint:disable-next-line:variable-name
  // public postAdded_Observable = new Subject();
  // // tslint:disable-next-line:variable-name
  // public postEdit_Observable = new Subject();
  // // tslint:disable-next-line:variable-name
  // public post_to_be_edited;

  // constructor() {
  //   this.post_to_be_edited = new PostModel();
  // }

  // notifyPostEdit() {
  //   this.postEdit_Observable.next();
  // }

  // setPostToEdit(post: PostModel) {
  //   this.post_to_be_edited = post;
  //   this.notifyPostEdit();
  // }

  // notifyPostAddition() {
  //   this.postAdded_Observable.next();
  // }

}
