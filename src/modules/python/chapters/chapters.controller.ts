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

  @Post('delete')
  async deleteOne(@Body('id') id: number) {
    await this.chaptersService.deleteOne(id);
    return { message: '删除章节成功' };
  }
}
