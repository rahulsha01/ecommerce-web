import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.scss'
})
export class CartViewComponent {

  constructor(
    private router : Router
  ) {

  }


  backToPage(even:any) {
      this.router.navigateByUrl('/')
  }

}

