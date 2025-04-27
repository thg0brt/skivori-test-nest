import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RequestMiddleware } from './middleware/request.middleware';
import { GetGames } from 'src/games/games.controller';
import { SearchGames } from './controller/search-games.controller';
import { PlayGame } from './controller/play-game.controller';

//Created GamesModule to handle only the /games route.

@Module({
    imports: [],
    controllers: [GetGames, SearchGames, PlayGame],
    providers: [],
  })
export class GamesModule implements NestModule{
  //Middleware configuration
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestMiddleware)
      .forRoutes(SearchGames);
  }
}
