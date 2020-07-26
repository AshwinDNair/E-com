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
  removeItem(itemid): any {
    let cartList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/cartItems.json"));
    cartList.filter(cartItem=>{
      if(cartItem.isActive==true && cartItem.itemId==itemid){
        cartItem.quantity=cartItem.quantity-1;
        if(cartItem.quantity==0)
        cartItem.isActive=false;
      }
  })   
    
    return null;
  }
  addItem(cartItem): any {
   let flag=0;
    let cartList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/cartItems.json"));
    cartList.filter(cartItem=>{
      if(cartItem.isActive==true && cartItem.itemId==cartItem.itemid){
        cartItem.quantity=cartItem.quantity+1;
        flag=1;
      }});

      if(flag==0){
        cartList.push({"itemId":cartItem.itemId,"itemName":cartItem.itemName,"quantity":cartItem.quantity,"price":cartItem.itemPrice,"isActive":cartItem.isActive})
      }
      return null;
      
  }
}
