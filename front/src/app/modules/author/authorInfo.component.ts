import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd';
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

  async followUnfollow() {
    if (this.followingService.isFollowing(this.user._id)) {
      await this.followingService.unfollow(this.user._id);
      this.updateFollowButtonName(true);
    } else {
      await this.followingService.follow(this.user._id);
      this.updateFollowButtonName(false);
    }
  }

  ngOnInit(): void {

    console.log('Author info: ');
    console.log(this.user);
    this.updateFollowButtonName(this.followingService.isFollowing(this.user._id));
    console.log(this.followingService.isFollowing(this.user._id));
  }


  updateFollowButtonName(isFollowing: boolean) {
    if (isFollowing) {
      this.followBtnName = 'Unfollow';
    } else {
      this.followBtnName = 'Follow';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.log('Author info ngOnChanges: ');
    console.log(JSON.stringify(this.user));
    this.updateFollowButtonName(this.followingService.isFollowing(this.user._id));
  }
}
