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

  login(loginform: any)  {
    console.log(loginform.value.email);
    console.log('request for login')
    this.httpService.authenticate(loginform.value.email , loginform.value.pwd).subscribe(res => {
      console.log(res);
      if(res.status == 'success') {
        res.data.role != 'Admin' ? this.showSnankbar(res) : this.router.navigateByUrl('admin/dashboard')
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userDetails', JSON.stringify(res.data))
      } else {
        this.showSnankbar(res)
      }
      
    })
  }

  showSnankbar(res : any) {
    this.httpService.openSnankBar('Failed to Login');
      setTimeout(() => {
        this.httpService.closeSnankBar();
      }, 2000)
      }
    
}
