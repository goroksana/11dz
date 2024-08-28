import { Component } from '@angular/core';
import { PERSON_DATA } from '../mock-person-data';

@Component({
  selector: 'app-person-info',
  standalone: true,
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent {
  person = PERSON_DATA;
}
