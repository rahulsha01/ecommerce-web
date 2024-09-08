import { Component } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(
    private router : Router
  ) {
      this.getProductList()
  }


  viewProductDetails(id: any) {
    this.router.navigateByUrl('product-details')
  }

  getProductList() {
    
  }

}
