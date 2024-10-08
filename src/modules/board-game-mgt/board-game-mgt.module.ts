import { Module } from '@nestjs/common';
import { BoardGameMgtService } from './board-game-mgt.service';
import { BoardGameMgtController } from './board-game-mgt.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardGame } from './entities/board-game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardGame])],
  providers: [BoardGameMgtService],
  controllers: [BoardGameMgtController],
})
export class BoardGameMgtModule {}
