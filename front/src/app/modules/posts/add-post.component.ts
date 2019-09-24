import {Component, OnInit, ViewChild} from '@angular/core';
import { AddPostService } from '../../services/add-post.service';
import { PostModel } from '../../models/post.model';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray, AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component2.html',
  styleUrls: ['./add-post.component.css'],
  providers: [ AddPostService ]
})
export class AddPostComponent implements OnInit {


  // tslint:disable-next-line:max-line-length
  // private controls: {[key: string]: AbstractControl}
  constructor(private formBuilder: FormBuilder,
              private addPostService: AddPostService,
              private router: Router,
              private commonService: CommonService) {
    this.post = new PostModel();
    this.post.imageUrl = this.avatarUrl;
  }
  newPostForm: FormGroup;
  // @ts-ignore
  @ViewChild('avatarUrl') avatarUrl: string;
  public post: PostModel;

  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  ngOnInit() {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      shortDescription: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      keywords: this.formBuilder.array([]),
    });

    this.newPostForm.valueChanges.subscribe(
      (data: any) => console.log(data)
    );

    this.commonService.postEdit_Observable.subscribe(res => {
      this.post = this.commonService.post_to_be_edited;
      console.log('post is ', this.post._id);
    });
  }

  onAddKeywords() {
    (this.newPostForm.controls.keywords as FormArray).push(new FormControl('', Validators.required));
  }


  onSubmit() {
    this.addPostService.addPost(this.newPostForm.value).subscribe((res: any) => {
      const pid = res.data._id;
      this.commonService.notifyPostAddition();
      this.router.navigate(['/', 'posts', pid]);
    });
  }

  addPost() {
    if (this.post.title && this.post.description) {
      if (this.post._id) {
        this.addPostService.updatePost(this.post).subscribe(res => {
          this.commonService.notifyPostAddition();
        });
      } else {
        this.addPostService.addPost(this.post).subscribe((res: any) => {
          const pid = res.data._id;
          this.commonService.notifyPostAddition();
          this.router.navigate(['/', 'posts', pid]);
        });
      }
    } else {
      alert('Title and Description required');
    }
  }
}
