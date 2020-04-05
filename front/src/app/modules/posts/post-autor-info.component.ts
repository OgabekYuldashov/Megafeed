import {Component, OnInit, Input, SimpleChanges, OnChanges} from '@angular/core';
import { AuthorInfoModel } from 'src/app/models/authorInfo.model';
import {FollowingService} from "../../services/following.service";

@Component({
  selector: 'app-post-autor-info',
  templateUrl: './post-autor-info.component.html',
  styles: []
})
export class PostAutorInfoComponent implements OnInit, OnChanges {
  public followBtnName = 'unchanged';

  @Input() authorInfo: AuthorInfoModel;
  constructor(private followingService: FollowingService) {
  }

  ngOnInit(): void {
    this.updateFollowButtonName(this.followingService.isFollowing(this.authorInfo._id));
  }


  updateFollowButtonName(isFollowing: boolean) {
    if (isFollowing) {
      this.followBtnName = 'Unfollow';
    } else {
      this.followBtnName = 'Follow';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateFollowButtonName(this.followingService.isFollowing(this.authorInfo._id));
  }
  followUnfollow() {
    if (this.followingService.isFollowing(this.authorInfo._id)) {
      this.updateFollowButtonName(false);
      this.followingService.unfollow(this.authorInfo._id);
    } else {
      this.updateFollowButtonName(true);
      this.followingService.follow(this.authorInfo._id);
    }
  }
}
