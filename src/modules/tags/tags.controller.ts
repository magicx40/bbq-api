import { Controller, Get, Post, Body } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagDto } from './dto/tag.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  findAll() {
    return this.tagsService.findAll();
  }

  @Post('save')
  async create(@Body() body: TagDto) {
    await this.tagsService.create(body);
    return { message: '保存成功' };
  }
}
