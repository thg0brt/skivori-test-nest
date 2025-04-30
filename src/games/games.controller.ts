import { Controller, Get, Post, Param, HttpCode} from '@nestjs/common';
import gameData from './data/game-data.json'; //imports game-data.json

@Controller('games') //default route for game requests
export class Games {

    @HttpCode(200)
    @Get('get-games') //GET endpoint for reading all games from game-data.json
    async getGames() {
        return gameData; //returns the game-data.json content
    }

    @HttpCode(200)
    @Get('search-games/:search') // GET endpoint to search games by title from game-data.json
    async searchGames(@Param('search') search : String) {
        return gameData.filter((game) => game.title.toLowerCase().indexOf(search.toLowerCase()) > -1 ) //searches in the game-data.json for the passed param.
    }

    @HttpCode(200)
    @Post('play') //POST endpoint which contains the logic of the play method .
    async playGame() {

        //Define the slot machine reels
        const reel1 = ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"];
        const reel2 = ["lemon",  "apple", "lemon", "lemon", "cherry", "apple",  "banana", "lemon"];
        const reel3 = ["lemon",  "apple", "lemon", "apple", "cherry", "lemon",  "banana", "lemon"];

        //Get the random key for each reel.
        const randomKey1 = Math.floor(Math.random() * 8);
        const randomKey2 = Math.floor(Math.random() * 8);
        const randomKey3 = Math.floor(Math.random() * 8);

        //create the array with the results of the spin.
        const results = [reel1[randomKey1], reel2[randomKey2],  reel3[randomKey3]];
        
        //Logic to define how many times the fruit appears.
        var count = 0;
        var lastFruit = "";
        results.forEach((fruit) => {
            if(count == 0){
                lastFruit = fruit;
                count++;
            }else{
                if(fruit == lastFruit){
                    count++;
                }

                if(count < 2){
                    lastFruit = fruit;
                    count = 1;
                }
            }
        });

        var coinsEarned = 0;

        //calculate the points earned/lost
        if (count == 2){
            switch(lastFruit){
                case 'cherry':
                    coinsEarned = 40;
                    break;
                case 'apple':
                    coinsEarned = 10;
                    break;
                case 'banana':
                    coinsEarned = 5;
                    break;
                case 'lemon':
                    coinsEarned = 1; //the test description dont specify the points earned for 2 lemons, but i decided to define it as 1;
                    break;
            }

        } else if (count == 3) {
            switch(lastFruit){
                case 'cherry':
                    coinsEarned = 50;
                    break;
                case 'apple':
                    coinsEarned = 20;
                    break;
                case 'banana':
                    coinsEarned = 15;
                    break;
                case 'lemon':
                    coinsEarned = 3;
                    break;
            }
        }else{
            coinsEarned = -1; //Each spin costs 1 coin.
        }
        
        return [coinsEarned, results]; //returns the coins earned/lost, and the results of the spin.
    }
}