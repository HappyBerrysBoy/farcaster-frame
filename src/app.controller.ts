import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getHello2(req: Request, res: Response): string {
    console.log(`return gethello2`);
    console.log(`Request`);
    console.log(req);
    console.log(`Response`);
    console.log(res);
    // console.log(req.body);

    return this.appService.getHello2();
  }

  @Post('/farcaster')
  test(req: Request): string {
    console.log(`return farcaster`);
    console.log(req.body);

    return this.appService.getHello2();
  }
}
