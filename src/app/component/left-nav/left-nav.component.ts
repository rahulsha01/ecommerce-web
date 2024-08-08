import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {
  isSidePanelOpen: boolean = true;
  isChild: boolean = false;
  selectedIndex:number = 0;
  selectChildIndex:number = -1;

  menuItem = [
  {'label':'Category', 'link':'/admin/category', 'isHasChild':[], 'icons':'ds', 'isActive': false},
  {'label':'Users', 'link':'/admin/user', 'isHasChild':[], 'icons':'ds', 'isActive': false},
  {'label':'Product', 'link':'/admin/product', 'isHasChild':[], 'icons':'ds', 'isActive': false},
  {'label':'Orders ', 'link':'/admin/calender', 'isHasChild':[], 'icons':'ds', 'isActive': false},
  {'label':'Payment', 'link':'/admin/lov', 'isHasChild':[], 'icons':'ds', 'isActive': false},
  {'label':'MetaData', 'link':'/admin/metadata', 'isHasChild':[], 'icons':'', 'isActive': false}
  ] ;
  userName: any;

  constructor(private cdref:ChangeDetectorRef , private router: Router , private zone: NgZone) { 
    let userData:any = sessionStorage.getItem('userDetails');
    userData = JSON.parse(userData) 
    console.log(userData);
    
    this.userName = userData.firstName;
  }
  ngOnInit(): void {
    let userData:any = sessionStorage.getItem('userDetails');
    userData = JSON.parse(userData) 
    console.log(userData);
    
    this.userName = userData.firstName;
  }

  toggle() {
    this.isSidePanelOpen = !this.isSidePanelOpen;
    this.cdref.detectChanges();
  }

  getSubMenu() {

  }
   setIndex(index: number , item: any) {
      this.router.navigateByUrl(item.link);
      this.selectedIndex = index;
   }

   getRoute(item : any) {
    this.menuItem.forEach((c)=>  {
      c.isActive == false;
    }
    );
    item.isActive = true;
    }

   setChildIndex(index:number) {
    this.selectChildIndex = index;
   }
}

export interface menuItem  {
  label:string;
  link:string,
  isHasChild:any[],
  icons:string,
}


