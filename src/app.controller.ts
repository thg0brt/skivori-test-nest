import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Indica o tipo de metodo a ser utilizado na API
  //@Get('jogos') Indica no navegador, que a rota para acessar esse metodo é o /jogos
  getHello(): string {
    return this.appService.getHello();
  }
}
