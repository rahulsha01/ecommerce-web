import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { FrameWorkService } from '../../shared/frame-work.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  constructor(private router : Router, 
    private httpService: FrameWorkService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  login(loginForm: any): void {
  const { email, pwd } = loginForm.value;
  this.httpService.authenticate(email, pwd).subscribe({
    next: (res) => {
      if (res.status === 'success') {
        const destination = res.data.role.toLowerCase() === 'admin' ? 'admin/dashboard' : 'admin/login';
        if (destination) {
          this.router.navigateByUrl(destination);
        }
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userDetails', JSON.stringify(res.data));
      } else {
        this.showSnankbar(res);
      }
    },
    error: (err) => {
      console.error('Login request failed', err);
      this.showSnankbar(err)
    }
  });
}


  showSnankbar(res : any) {
    this.httpService.openSnankBar('Failed to Login');
      setTimeout(() => {
        this.httpService.closeSnankBar();
      }, 2000)
      }
    
}
