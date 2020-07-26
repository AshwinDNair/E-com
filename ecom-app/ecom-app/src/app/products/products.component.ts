import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any=[{"itemId":1,"itemName":"HP Computer","itemPrice":60000},{"itemId":2,"itemName":"Harry Potter Book Series","itemPrice":4000},{"itemId":3,"itemName":"Apple IPAD","itemPrice":39000},{"itemId":4,"itemName":"One Plus 8","itemPrice":50000}]

  constructor() { }

  ngOnInit() {
  }

}
