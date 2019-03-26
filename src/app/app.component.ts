import { Component } from '@angular/core';
import { Collegue } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'top-collegues-front';
  colle : Collegue = {pseudo: 'yoann', score: 800, photoUrl: 'https://media.licdn.com/dms/image/C4D03AQGbtRrqkhoGCA/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=M9y5GcnnnFNfSst9CUZsB8ZLmuFaiYtamA-psGaeDWI'};
}
