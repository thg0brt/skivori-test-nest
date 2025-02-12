import { Controller, Get, Param } from '@nestjs/common';
import gameData from '../data/game-data.json'; //imports game-data.json

@Controller('games') //default route for game requests
export class SearchGames {

    @Get('search-games/:search') // GET endpoint to search for games in game-data.json
    async searchGames(@Param('search') search : String) {
        return gameData.filter((game) => game.title.toLowerCase().indexOf(search.toLowerCase()) > -1 ) //searches in the game-data.json for the passed param.
    }

}