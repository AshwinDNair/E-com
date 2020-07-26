import { Component, OnInit } from '@angular/core';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount:number=0;
  cartList:any=[]
  constructor(private _cartService:CartsService) { }

  ngOnInit() {
    this.getCartList();
  }
  getCartList(){
    const response_details =  this._cartService.GetCartList();
    response_details.subscribe(result=>{
      this.cartList=result;
    
    this.getTotalAmount();
    })
  }
  getTotalAmount(){
    this.cartList.filter(item=>{
      this.totalAmount+=item.price*item.quantity;  
    })
  //  this.totalAmount
  }
 
}
