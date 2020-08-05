import { Injectable } from '@nestjs/common';
const fs = require('fs');
const path = require("path");

@Injectable()
export class CartsService {
  getCartList(userId): any[] {
   
    let cartList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/cartItems.json"));
    let shoppingList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/ecomItems.json"));
    shoppingList=JSON.parse(shoppingList);
    cartList=JSON.parse(cartList);
    let userCart=[]
    let i=0;
    cartList.filter(cartItem=>{
        if(cartItem.isActive==true){
            i+=1;
            userCart.push({"itemId":cartItem.itemId,"itemName":"","quantity":cartItem.quantity,"price":0,"isActive":cartItem.isActive})
        }
    })
    userCart.filter(cartItem=>{
   shoppingList.filter(shoppingItem=>{
      if(shoppingItem.itemId==cartItem.itemId){
cartItem.itemName=shoppingItem.itemName;
cartItem.price=shoppingItem.itemPrice          
      }
  })   
    })
    return userCart;
  }

  removeItem(cartItem): any {
    let cartList;
    cartList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/cartItems.json"));
    cartList=JSON.parse(cartList);
    for(let i=0;i<cartList.length;i++){    
       if( cartList[i].itemId==cartItem.itemId){
        cartList[i].quantity=cartItem.quantity-1;
       if(cartList[i].quantity==0)
       cartList.splice(i, 1);    
         break;
           }
     }
       
 
       fs.truncate(path.resolve(__dirname, "../../../ecom-files/cartItems.json"), 0, function(){
         fs.writeFile(path.resolve(__dirname, "../../../ecom-files/cartItems.json"), JSON.stringify(cartList), function(){console.log('done')})
     })
       return null;
   
  }


  addItem(cartItem): any {
   let flag=0;
   let cartList;
   cartList = fs.readFileSync(path.resolve(__dirname, "../../../ecom-files/cartItems.json"));
   cartList=JSON.parse(cartList);
    for(let i=0;i<cartList.length;i++){
      
      if( cartList[i].itemId==cartItem.itemId){
     
      cartList[i].quantity=cartItem.quantity+1;
            flag=1;
        break;
          }
    }
      if(flag==0){
        cartList.push({"itemId":cartItem.itemId,"userId":1,"quantity":1,"isActive":true})
      }

      fs.truncate(path.resolve(__dirname, "../../../ecom-files/cartItems.json"), 0, function(){
        fs.writeFile(path.resolve(__dirname, "../../../ecom-files/cartItems.json"), JSON.stringify(cartList), function(){console.log('done')})
    })
      return null;
      
  }
}
