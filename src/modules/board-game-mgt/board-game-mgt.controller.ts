import { Controller, Get, Query } from '@nestjs/common';
import { BoardGameMgtService } from './board-game-mgt.service';
import { ListBoardGameDto } from './dto/list-board-game.dto';

@Controller('board-games')
export class BoardGameMgtController {
  constructor(private readonly boardGameMgtService: BoardGameMgtService) {}

  @Get('list')
  async listBoardGames(@Query() listDto: ListBoardGameDto) {
    return this.boardGameMgtService.listBoardGames(listDto);
  }
}
