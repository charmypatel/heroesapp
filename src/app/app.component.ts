import { Component } from '@angular/core';

// a decorator function that specifies the Angular metadata for the component
// css element selector, components html & style files
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
