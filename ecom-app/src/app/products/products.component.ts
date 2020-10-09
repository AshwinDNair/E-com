import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/products.service'
import { CartsService } from '../services/carts.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any=[]
  public isCollapsed = false;
  constructor(private _productService:ProductService,private _cartService:CartsService) { }

  ngOnInit() {
    this.getProductList();
  }
getProductList(){
  const response_details =  this._productService.GetProductList();
  response_details.subscribe(result=>{
    this.productList=result;
    this.productList.filter(item=>{
      item.itemImage="./../assets/images/"+item.itemImage;
    })
  })
  
}
addItemToCart(item){
  debugger;
  const response_details =  this._cartService.addItemtoCart(item);
  response_details.subscribe(result=>{
    this.getProductList()
  })
}
}
