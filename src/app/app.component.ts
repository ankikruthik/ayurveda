import { Component } from '@angular/core';
import { SessionHelper } from './core/session.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ayurveda';
  constructor(private sessionHelper: SessionHelper) {
    this.sessionHelper.removeItem('clearTimeout');
    this.sessionHelper.removeItem('Name');
    
    this.sessionHelper.removeItem('Age');
  }
}
