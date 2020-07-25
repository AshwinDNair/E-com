import { Controller, Get,Request, UseGuards, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    
    console.log("app");
    return this.appService.getHello();
  }

  //@UseGuards(AuthGuard('local'))
@UseGuards(LocalAuthGuard)
  
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
