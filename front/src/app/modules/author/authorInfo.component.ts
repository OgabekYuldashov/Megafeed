import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FollowingService} from '../../services/following.service';

@Component({
  selector: 'app-author-info',
  templateUrl: './authorInfo.component.html'
})
export class AuthorInfoComponent implements OnInit, OnChanges {
  @Input() user;
  public followBtnName = 'unchanged';

  constructor(private followingService: FollowingService) {
  }

  followUnfollow() {
    if (this.followingService.isFollowing(this.user._id)) {
      this.updateFollowButtonName(false);
      this.followingService.unfollow(this.user._id);
    } else {
      this.updateFollowButtonName(true);
      this.followingService.follow(this.user._id);
    }
  }

  ngOnInit(): void {
    this.updateFollowButtonName(this.followingService.isFollowing(this.user._id));
  }


  updateFollowButtonName(isFollowing: boolean) {
    if (isFollowing) {
      this.followBtnName = 'Unfollow';
    } else {
      this.followBtnName = 'Follow';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateFollowButtonName(this.followingService.isFollowing(this.user._id));
  }
}
