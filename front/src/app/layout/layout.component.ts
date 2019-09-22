import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './layout.component.html',
  styleUrls: []
})
export class LayoutComponent {
  title = 'front';

  // @ts-ignore
  @ViewChild('addPost') addBtn: ElementRef;
}
