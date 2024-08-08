import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  constructor(private router: Router) {

  }

  backToMainPage(event: any) {
    this.router.navigateByUrl('/')
  }

  addToCart(item: any) {
    this.router.navigateByUrl('/cart')
  }

  buyNow() {
    this.router.navigateByUrl('/weblogin')
  }
}
