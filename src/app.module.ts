import { Module } from '@nestjs/common';
import { GamesModule } from './games/games.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GamesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
