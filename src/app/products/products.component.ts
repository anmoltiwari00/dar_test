import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prod1 = 0;
  prod2 = 0;
  prod3 = 0;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    if(this.commonService.isLoggedIn() === false)
      this.router.navigateByUrl('');
  }

  changeProd(item, method) {
    if(item === '1') {
      if(method === 'sub') {
        if(this.prod1 !== 0)
          this.prod1 = this.prod1 - 1;
      } else {
        this.prod1 = this.prod1 + 1;
      }
    } else if(item === '2') {
      if(method === 'sub') {
        if(this.prod2 !== 0)
          this.prod2 = this.prod2 - 1;
      } else {
        this.prod2 = this.prod2 + 1;
      }
    } else {
      if(method === 'sub') {
        if(this.prod3 !== 0)
          this.prod3 = this.prod3 - 1;
      } else {
        this.prod3 = this.prod3 + 1;
      }
    }
  }

  addToCart() {
    var prods = {
      product1: this.prod1,
      product2: this.prod2,
      product3: this.prod3
    }
    this.commonService.saveProducts(prods);
    this.router.navigateByUrl('display');
  }

}
