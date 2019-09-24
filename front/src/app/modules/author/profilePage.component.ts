import {Component} from '@angular/core';

@Component({
  selector: 'app-profile-page',
  template: `
      <app-author-info></app-author-info>

      <div class="graybg authorpage">
          <div class="container">
              <div class="listrecent listrelated">

                  <app-author-post></app-author-post>

              </div>
          </div>
      </div>
  `
})
export class ProfilePageComponent {

  constructor() {
    console.log('Profile Page Constructor...');
  }
}
