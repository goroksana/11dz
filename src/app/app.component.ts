import { Component } from '@angular/core';
import { PersonInfoComponent } from './person-info/person-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonInfoComponent],
  template: `
    <div style="text-align:center">
      <h1>Резюме</h1>
      <app-person-info></app-person-info>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
