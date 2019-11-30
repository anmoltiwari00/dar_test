import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'display', component: DisplayComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
