import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardGame } from './entities/board-game.entity';
import { ListBoardGameDto } from './dto/list-board-game.dto';

@Injectable()
export class BoardGameMgtService {
  constructor(
    @InjectRepository(BoardGame)
    private boardGameRepository: Repository<BoardGame>,
  ) {}

  async listBoardGames(listDto: ListBoardGameDto) {
    const {
      currentPage,
      limit,
      sortBy,
      sortOrder,
      title,
      minPlayers,
      maxPlayers,
      category,
    } = listDto;

    const query = this.boardGameRepository.createQueryBuilder('boardgame');

    // 应用筛选条件
    if (title) {
      query.andWhere('boardgame.title LIKE :title', { title: `%${title}%` });
    }
    if (minPlayers) {
      query.andWhere('boardgame.minPlayers >= :minPlayers', { minPlayers });
    }
    if (maxPlayers) {
      query.andWhere('boardgame.maxPlayers <= :maxPlayers', { maxPlayers });
    }
    if (category) {
      query.andWhere('boardgame.category = :category', { category });
    }

    // 应用排序
    query.orderBy(`boardgame.${sortBy}`, sortOrder);

    // 应用分页
    const skip = (currentPage - 1) * limit;
    query.skip(skip).take(limit);

    // 执行查询
    const [items, total] = await query.getManyAndCount();

    return {
      items,
      currentPage,
      limit,
      total,
    };
  }
}
