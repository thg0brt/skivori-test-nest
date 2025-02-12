import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    //Middleware to validate and solve the back-end performance degree, in the use of the search-games HTTP method.
    const search = req.params.search;
    const regexResult = /^[a-zA-Z0-9]+$/.test(search);
    
    // in these 2 cases, ends the request.
    // if the searched game length is lower than 2,
    // if the searched game doesnt match the regex (only alphabetic characters and numerals are allowed)
    if(search.length <= 2 || regexResult === false){
        res.sendStatus(404);
    }
    next();
  }
}
