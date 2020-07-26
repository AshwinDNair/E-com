import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount:number=0;
  cartList:any=[
    {
        "itemId": 2,
        "itemName": "HP Computer",
        "quantity": 2,
        "price": 60000,
        "isActive": true
    },
    {
        "itemId": 2,
        "itemName": "Harry Potter Book Series",
        "quantity": 2,
        "price": 4000,
        "isActive": true
    },
    {
        "itemId": 2,
        "itemName": "Apple IPAD",
        "quantity": 2,
        "price": 39000,
        "isActive": true
    },
    {
        "itemId": 2,
        "itemName": "One Plus 8",
        "quantity": 2,
        "price": 50000,
        "isActive": true
    }
]
  constructor() { }

  ngOnInit() {
    this.getTotalAmount();
  }
  getTotalAmount(){
    this.cartList.filter(item=>{
      this.totalAmount+=item.price*item.quantity;  
    })
    this.totalAmount
  }
 
}
