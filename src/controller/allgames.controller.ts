import { Controller, Get } from '@nestjs/common';

@Controller('games')
export class AllGames {

    //Esta classe getGames, deve receber o request GET, e devolver o retorno.
    @Get('all-games')
    getGames(): String {
        return "Retornando todos os jogos"; //Este return deve contem o json de retorno.
    }

}