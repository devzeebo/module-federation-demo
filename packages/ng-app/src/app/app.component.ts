import { Component } from '@angular/core';
import { App } from '@devzeebo/spa-app/App';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ShellApp = App;

  title = 'ng-app';
}
