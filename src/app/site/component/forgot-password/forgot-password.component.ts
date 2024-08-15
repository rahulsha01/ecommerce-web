import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotSteps:  number = 1;

  constructor(
    private router: Router
  ) {
    
  }


  sendOtp() {
    this.forgotSteps = 2;
  }

  verifyOtp() {
    this.forgotSteps = 3;
  }

  startShopping() {
    this.router.navigateByUrl('/home')
  }

}

