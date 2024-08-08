import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit  {

  usernameChar : string = 'Rahul Sharma';
  username : any = 'Rahul Sharma';
  userEmail : any = 'rahul.sohanchand.sharma@gmail.com';
  isProfileCard: boolean = true;
  color: string = '#';
  @Input() breadCrumbObject = [];
  @Input() PageTitle  = "";
  breadCrumbList: any;
  userDetails: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.breadCrumbList = this.breadCrumbObject;
    this.breadCrumbObject = this.breadCrumbObject;
    this.userDetails = sessionStorage.getItem('userDetails');
    this.userDetails = JSON.parse(this.userDetails)
    this.usernameChar = this.userDetails.firstName?.charAt(0) ? this.userDetails.firstName?.charAt(0) : '';
    this.username = this.userDetails.firstName;
    this.userEmail = this.userDetails.email;
    this.getRandomRolor();
  }


  getRandomRolor() {
    var letters = '012345'.split('');
    this.color = '#';        
    this.color += letters[Math.round(Math.random() * 5)];
    letters = '0123456789ABCDEF'.split('');
    for (var i = 0; i < 5; i++) {
        this.color += letters[Math.round(Math.random() * 15)];
    }
     return this.color;
} 

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.clear();
    this.router.navigateByUrl('admin/login');
  }

  openCard () {
    this.isProfileCard =! this.isProfileCard;
  }

   

}
