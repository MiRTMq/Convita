import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bankInfo')
  showBanksList(): string {
    return this.appService.getBanksList();
  }
  @Get('userInfo')
  showUsersList(): string {
    return this.appService.getUsersList();
  }
}
