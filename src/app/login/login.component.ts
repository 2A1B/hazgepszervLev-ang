import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AF} from '../../providers/af';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public error: any;
  constructor(public afService: AF, private router: Router) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
  loginWithEmail(email, password) {
    this.afService.loginWithEmail(email, password).then((res) => {
      this.router.navigate(['/home']);
    });
  }
}
