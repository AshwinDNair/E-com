import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { CartsService } from 'src/services/carts.services';

@Controller('carts')
export class CartsController {

    constructor(private readonly cartsService: CartsService) {}

    @Get('getCartList')
    getCartList(): any[] {
        let userId=2;
        console.log("Carts");
      return this.cartsService.getCartList(userId);
    }


    @Post('removeItemFromCart')
    removeItemFromCart(@Body()item): any {
      return this.cartsService.removeItem(item.item);
    }
    
    @Post('addItemToCart')
    addItemToCart(@Body()item): any {
      console.log("inside add cart");
      return this.cartsService.addItem(item.item);
    }
}
