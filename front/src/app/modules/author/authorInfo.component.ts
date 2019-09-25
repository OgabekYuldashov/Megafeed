import {Component, Input, OnInit} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
import {FollowingService} from '../../services/following.service';

@Component({
  selector: 'app-author-info',
  templateUrl: './authorInfo.component.html'
})
export class AuthorInfoComponent implements OnInit {
  @Input() user;
  public followBtnName = 'unchanged';

  constructor(private followingService: FollowingService) {

  }

  followUnfollow() {
    if (this.followingService.isFollowing(this.user._id)) {
      this.followingService.unfollow(this.user._id);
      this.updateFollowButtonName(true);
    } else {
      this.followingService.follow(this.user._id);
      this.updateFollowButtonName(false);
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
}
