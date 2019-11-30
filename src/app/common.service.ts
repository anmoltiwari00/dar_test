import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loggedIn: boolean = false;
  userName: string = 'xyz00@gmail.com';
  password: string = 'Designar_123';
  products;
  location: string;
  constructor() { }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUserName() {
    return this.userName;
  }

  getPassword() {
    return this.password;
  }

  saveProducts(products) {
    this.products = products;
  }

  getProducts() {
    return this.products;
  }

  setLocation(location) {
    this.location = location;
  }

  getLocation() {
    return this.location;
  }

}
