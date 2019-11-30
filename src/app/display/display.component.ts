import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CommonService } from '../common.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  prods;
  prod1Del = false;
  prod2Del = false;
  prod3Del = false;
  user;
  pass;
  loc;
  displayInfo = false;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    if(this.commonService.isLoggedIn() === false) {
      this.router.navigateByUrl('');
    } else {
      this.prods = this.commonService.getProducts();
    }
  }

  deleteProd(item) {
    if(item === '1') {
      this.prod1Del = true;
      let savedProducts = this.commonService.getProducts();
      this.commonService.saveProducts({
        ...savedProducts,
        product1: 0
      });
      this.showInfo();
    } else if(item === '2') {
      this.prod2Del = true;
      let savedProducts = this.commonService.getProducts();
      this.commonService.saveProducts({
        ...savedProducts,
        product2: 0
      });
      this.showInfo();
    } else {
      this.prod3Del = true;
      let savedProducts = this.commonService.getProducts();
      this.commonService.saveProducts({
        ...savedProducts,
        product3: 0
      });
      this.showInfo();
    }
  }

  showInfo() {
    this.displayInfo = true;
    this.prods = this.commonService.getProducts();
    this.user = this.commonService.getUserName();
    this.pass = this.commonService.getPassword();
    this.loc = this.commonService.getLocation();
  }

  goToLogin() {
    this.commonService.saveProducts(null);
    this.commonService.logOut();
  }

}
