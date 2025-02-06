import { Controller, Get, Param } from '@nestjs/common';
import gameData from '../data/game-data.json'; //imports game-data.json

@Controller('games') //default route for game requests
export class SearchGames {

    @Get('search-games/:search') //GET endpoint Route for getting all games in the game-data.json
    async getGames(@Param('search') search : String) {
        const filteredGame = gameData.filter((game) => game.title.toLowerCase().indexOf(search.toLowerCase()) > -1 )
        return filteredGame; 
    }

}