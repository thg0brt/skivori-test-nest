import { Module } from '@nestjs/common';
import { AllGames } from './controller/allgames.controller';

@Module({
  imports: [],
  controllers: [AllGames],
  providers: [],
})
export class AppModule {}
