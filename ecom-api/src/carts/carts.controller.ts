import { Controller, Get } from '@nestjs/common';
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

    @Get('updateCartList')
    updateCartList(): any[] {
        let newRecord=[{"itemId":2,"userId":2,"quantity":2,"isActive":true}];
        console.log("Carts");
      return this.cartsService.updateCartList(newRecord);
    }
}
