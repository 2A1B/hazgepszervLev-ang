import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AF} from '../providers/af';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(public afService: AF, private router: Router) {
    this.afService.af.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');

          this.isLoggedIn = false;
          this.router.navigate(['login']);
        } else {
          console.log('Successfully Logged in.');
          this.isLoggedIn = true;
          this.router.navigate(['home']);
        }
      }
    );
  }

  logout() {
    this.afService.logout();
  }
}
