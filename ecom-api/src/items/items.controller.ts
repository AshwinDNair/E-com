import { Controller, Get } from '@nestjs/common';
import { ItemsService } from 'src/services/items.services';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

  @Get('getItems')
  getItemsList(): string {
      console.log("Items");
    return this.itemsService.getItemsList();
  }
  
}
