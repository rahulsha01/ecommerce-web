import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.scss'
})
export class SignupPageComponent {
  constructor(private router: Router) {

  }


  moveToLogin() {
    this.router.navigateByUrl('weblogin')
  }
}
