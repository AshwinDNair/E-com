import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component'
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
 
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'login', component: LoginComponent },

  // { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
