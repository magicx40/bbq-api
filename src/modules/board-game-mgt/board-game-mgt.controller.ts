import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BoardGameMgtService } from './board-game-mgt.service';
import { ListBoardGameDto } from './dto/list-board-game.dto';
import { CreateBoardGameDto } from './dto/create-board-game.dto';
import { UpdateBoardGameDto } from './dto/update-board-game.dto';

@Controller('board-games')
export class BoardGameMgtController {
  constructor(private readonly boardGameMgtService: BoardGameMgtService) {}

  @Get('list')
  async listBoardGames(@Query() listDto: ListBoardGameDto) {
    return this.boardGameMgtService.listBoardGames(listDto);
  }

  @Post('save')
  async create(@Body() createBoardGameDto: CreateBoardGameDto) {
    await this.boardGameMgtService.create(createBoardGameDto);
    return { message: '创建桌游成功' };
  }

  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateBoardGameDto: UpdateBoardGameDto,
  ) {
    await this.boardGameMgtService.update(id, updateBoardGameDto);
    return { message: '更新桌游成功' };
  }
}
