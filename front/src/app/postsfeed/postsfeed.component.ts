import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postsfeed',
  templateUrl: './postsfeed.component.html',
  styleUrls: []
})
export class PostsfeedComponent implements OnInit {

  public category: string;

  constructor(private route: ActivatedRoute) { 
    this.category = route.snapshot.params.category;
    console.log(this.category);
  }

  ngOnInit() {
  }

}
