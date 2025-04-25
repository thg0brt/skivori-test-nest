import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';

//Created GamesModule to handle only the /games route.

@Module({
    imports: [DatabaseModule],
    controllers: [],
    providers: [],
  })
export class UsersModule{

}
