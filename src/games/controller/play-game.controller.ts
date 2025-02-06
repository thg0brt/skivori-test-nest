import { Controller, Get, Param } from '@nestjs/common';
import gameData from '../data/game-data.json'; //imports game-data.json

@Controller('games') //default route for game requests
export class PlayGame {

    @Get('play-game/:id/:coins') 
    async playGame(@Param('id') id : String, @Param('coins') startCoins : String) {

    }

}