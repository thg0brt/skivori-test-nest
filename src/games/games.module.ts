import { Module } from '@nestjs/common';
import { GetGames } from 'src/games/controller/get-games.controller';
import { SearchGames } from './controller/search-games.controller';
import { PlayGame } from './controller/play-game.controller';

@Module({
    imports: [],
    controllers: [GetGames, SearchGames, PlayGame],
    providers: [],
  })
export class GamesModule {}
