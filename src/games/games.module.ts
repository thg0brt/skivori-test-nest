import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { RequestMiddleware } from './middleware/request.middleware';
import { Games } from 'src/games/games.controller';

//Created GamesModule to handle only the /games route.

@Module({
    imports: [],
    controllers: [Games],
    providers: [],
  })
export class GamesModule implements NestModule{
  //Middleware configuration
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestMiddleware)
      .forRoutes({ path: 'games/search-games/:search', method: RequestMethod.GET });
  }
}
