import { Component, Input } from '@angular/core';
import { iUser } from './Api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title = '';
  @Input() value = 0;
  [x: string]: any;
  user: iUser = {} as iUser;

  getUser(user: iUser) {
    this.user = user;
  }
}
