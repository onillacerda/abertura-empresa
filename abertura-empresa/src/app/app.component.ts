import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet]
})
export class AppComponent {
  constructor() {
    console.log('AppComponent instantiated');
  }
}