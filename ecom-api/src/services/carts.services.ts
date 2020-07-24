import { Injectable } from '@nestjs/common';
const fs = require('fs');
const path = require("path");

@Injectable()
export class CartsService {
  getCartList(userId): any[] {
   
    let cartList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/cartItems.json"));
    let shoppingList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/ecomItems.json"));
    shoppingList=JSON.parse(shoppingList);
    console.log(shoppingList);
    cartList=JSON.parse(cartList);
    console.log(cartList);
    let userCart=[]
    let i=0;
    cartList.filter(cartItem=>{
        if(cartItem.isActive==true){
            i+=1;
            shoppingList.filter(shoppingItem=>{
                if(cartItem.userId==userId)
                userCart.push({"itemId":cartItem.itemId,"itemName":shoppingItem.itemName,"quantity":cartItem.quantity,"price":shoppingItem.itemPrice,"isActive":cartItem.isActive})
            })
        }
    })   
    return userCart;
  }

  updateCartList(newRecord): any {
    fs.truncate(path.resolve(__dirname, "../../../ecom-files/cartItems.json"), 0, function(){
        console.log('done')
        fs.writeFile(path.resolve(__dirname, "../../../ecom-files/cartItems.json"), JSON.stringify(newRecord), function(){console.log('done')})
    })
    return null;
  }
}
