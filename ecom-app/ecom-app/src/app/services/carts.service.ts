import { Injectable } from '@angular/core';
import { ApiBaseService } from './baseapi.service';
@Injectable({
  providedIn: 'root'
})
export class CartsService extends ApiBaseService {
 
  GetCartList() { //yes
    debugger;
    const response = this.httpGet(this._serviceURL + 'carts/getCartList');
   
    debugger;
    return response;
  }
}
