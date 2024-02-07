import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello2();
  }

  @Post()
  getHello2(req: Request, res: Response): string {
    console.log(`return gethello2`);
    console.log(`Request`);
    console.log(req);
    console.log(`Response`);
    console.log(res);
    // console.log(req.body);

    return this.appService.getHello3();
  }

  @Get('/t2')
  t2(): string {
    return this.appService.getHello2();
  }

  @Post('/t2')
  t2post(req: Request, res: Response): string {
    console.log(`return gethello2`);
    console.log(`Request`);
    console.log(req);
    console.log(`Response`);
    console.log(res);
    // console.log(req.body);

    return this.appService.getHello3();
  }

  @Post('/farcaster')
  test(req: Request): string {
    console.log(`return farcaster`);
    console.log(req.body);

    return this.appService.getHello2();
  }
}
