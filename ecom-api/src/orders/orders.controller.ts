import { Controller, Get } from '@nestjs/common';
import { OrdersService } from 'src/services/orders.service';

@Controller('orders')
export class OrdersController {

    constructor(private readonly ordersService: OrdersService) {}

    @Get('saveorder')
    saveOrder(): any {
        let order={"orderId":1,"userId":1,"items":[{"itemId":1,"quantity":1,}],"orderAmount":60500,"status":"Ordered","CreatedOn":Date.now(),"ModifiedOn":Date.now()};
      return this.ordersService.saveOrder(order);
    }
}
