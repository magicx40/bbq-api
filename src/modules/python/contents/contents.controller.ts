import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { Content } from '../entities/content.entity';
import { CreateContentDto } from '../dto/create-content.dto';

@Controller('contents')
export class ContentsController {
  constructor(private readonly contentsService: ContentsService) {}

  @Post()
  async create(@Body() createContentDto: CreateContentDto) {
    await this.contentsService.create(createContentDto);
    return { message: '创建知识成功' };
  }

  @Get()
  findAll(): Promise<Content[]> {
    return this.contentsService.findAll();
  }

  @Post('delete')
  async deleteOne(@Body() id: number) {
    await this.contentsService.deleteOne(id);
    return { message: '删除知识成功' };
  }
}
