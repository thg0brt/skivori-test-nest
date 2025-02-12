import { Controller, Get } from '@nestjs/common';
import gameData from '../data/game-data.json'; //imports game-data.json

@Controller('games') //default route for game requests
export class GetGames {

    @Get('get-games') //GET endpoint for reading all games from game-data.json
    async getGames() {
        return gameData; //returns the game-data.json content
    }

}