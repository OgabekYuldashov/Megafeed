import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class PostsfeedComponent implements OnInit, OnDestroy {
  public posts: PostPreviewModel[];
  unsubscribe;
  public categoryTitle: string;
  public categoryDescription: string;

  constructor(private route: ActivatedRoute, private postsService: PostsService) {
    route.params.subscribe(val => {
      let categoryAlias = this.route.snapshot.params.category;
      if (!categoryAlias) categoryAlias = '';
      const category = postsStore.getState().categories.find(x => x.alias == categoryAlias);
      this.categoryTitle = category.title;
      this.categoryDescription = category.description;

      this.postsService.getOnlineData(categoryAlias);
    });
  }

  ngOnInit() {
    this.posts = postsStore.getState().posts;
    this.unsubscribe = postsStore.subscribe(() => {
      this.posts = postsStore.getState().posts;
    });
  }

  ngOnDestroy(){
    this.unsubscribe();
  }
}
