import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostPreviewModel } from 'src/app/models/postPreview.model';
import { postsStore } from './../../store';
import { loadPostsPreviews } from './../../actions/postPreview';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-postsfeed',
  templateUrl: './postsfeed.component.html',
  styleUrls: []
})
export class PostsfeedComponent implements OnInit {
  public posts: PostPreviewModel[];
  unsubscribe;
  public category: string;

  constructor(private route: ActivatedRoute, private postsService: PostsService) { 
    this.category = route.snapshot.params.category;
    postsService.getOnlineData(this.category);
  }

  ngOnInit() {
    this.posts = postsStore.getState().data;
    this.unsubscribe = postsStore.subscribe(() => {
      this.posts = postsStore.getState().data;
    })
  }

  ngOnDestroy(){
    this.unsubscribe();
  }
}
