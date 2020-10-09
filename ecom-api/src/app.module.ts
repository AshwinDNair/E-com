import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './services/items.services';
import { CartsService } from './services/carts.services';
import { CartsController } from './carts/carts.controller';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './orders/orders.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, ItemsController, CartsController,OrdersController],
  providers: [AppService,ItemsService,CartsService,OrdersService],
})
export class AppModule {}
