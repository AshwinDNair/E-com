import { Injectable } from '@angular/core';
import { ApiBaseService } from './baseapi.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiBaseService {
 
  GetProductList() { //yes
    debugger;
    const response = this.httpGet(this._serviceURL + 'items/getItems');
   
    debugger;
    return response;
  }
}
