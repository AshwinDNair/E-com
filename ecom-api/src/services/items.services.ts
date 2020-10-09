import { Injectable } from '@nestjs/common';
const fs = require('fs');
const path = require("path");

@Injectable()
export class ItemsService {
  getItemsList(): string {
    let shoppingList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/ecomItems.json"));
    
    console.log(shoppingList);
    let result = JSON.parse(shoppingList);
    return result;
  }

  
}
