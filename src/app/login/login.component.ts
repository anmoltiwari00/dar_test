import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  incorrectCredentials: boolean = false;
  loc: string = 'Mumbai';
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

  checkUsername() {
    return this.loginForm.get('email').value === this.commonService.getUserName();
  }

  checkPassword() {
    return this.loginForm.get('password').value === this.commonService.getPassword();
  }

  location(e) {
    this.loc = e.target.value;
  }

  login() {
    if(this.checkUsername() && this.checkPassword()) {
      this.commonService.setLocation(this.loc);
      this.commonService.logIn();
      this.router.navigateByUrl('products');
      this.incorrectCredentials = false
    } else {
      this.incorrectCredentials = true
    }
  }

}
