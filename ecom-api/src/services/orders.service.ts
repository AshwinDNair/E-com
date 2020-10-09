import { Injectable } from '@nestjs/common';
const fs = require('fs');
const path = require("path");

@Injectable()
export class OrdersService {
    saveOrder(order):any {
    fs.appendFile(path.resolve(__dirname, "../../../ecom-files/orders.json"), JSON.stringify(order), function (err) {
        if (err) throw err;
        return 'Saved';
      });
  }
}
