import { Module } from '@nestjs/common';
import { DatabaseModule } from '../db/database.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.provider';

//Created GamesModule to handle only the /games route.

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [...usersProviders, UsersService],
    exports: [UsersService],
  })
export class UsersModule{

}
