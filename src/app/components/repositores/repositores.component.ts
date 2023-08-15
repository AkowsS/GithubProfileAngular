import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositores',
  templateUrl: './repositores.component.html',
  styleUrls: ['./repositores.component.css']
})
export class RepositoresComponent {
  @Input() title = "";
  @Input() value = 0;
}
