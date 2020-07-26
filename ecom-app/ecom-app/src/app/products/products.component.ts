import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/products.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any=[]

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this.getProductList();
  }
getProductList(){
  const response_details =  this._productService.GetProductList();
  response_details.subscribe(result=>{
    this.productList=result;
  })
}
}
