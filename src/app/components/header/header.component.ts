import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService, iUser } from 'src/app/Api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private apiService: ApiService) {}

  user: iUser = {} as iUser;
  notFound = false;

  @Output() newItemEvent = new EventEmitter<iUser>();

  sendUser(user: iUser) {
    this.newItemEvent.emit(user);
  }

  setError(error: boolean) {
    this.notFound = error;
  }

  onSubmit(event: any) {
    event.preventDefault();
    const username = event.srcElement[0]?.value;
    this.apiService.getUser(username, this.setError.bind(this)).subscribe((data: any) => {
      this.user = data;
      this.sendUser(this.user);
    });
  }
}
