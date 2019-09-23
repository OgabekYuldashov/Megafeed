import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post-view',
  templateUrl: './single-post-view.component.html',
  styles: []
})
export class SinglePostViewComponent implements OnInit {
  public postId;

  constructor(private route: ActivatedRoute) { 
    this.postId = this.route.snapshot.params._id;

    
  }

  ngOnInit() {
  }

}
