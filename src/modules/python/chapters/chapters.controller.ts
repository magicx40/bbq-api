import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChaptersService } from './chapters.service';
import { Chapter } from '../entities/chapter.entity';

@Controller('chapters')
export class ChaptersController {
  constructor(private readonly chaptersService: ChaptersService) {}

  @Post()
  async create(@Body('title') title: string) {
    await this.chaptersService.create(title);
    return { message: '创建章节成功' };
  }

  @Get()
  findAll(): Promise<Chapter[]> {
    return this.chaptersService.findAll();
  }
}
