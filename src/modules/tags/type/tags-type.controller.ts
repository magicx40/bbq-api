import { Controller, Get, Post, Body } from '@nestjs/common';
import { TagsTypeService } from './tags-type.service';
import { TagTypeDto } from '../dto/tag-type.dto';

@Controller('tags-type')
export class TagsTypeController {
  constructor(private readonly tagsTypeService: TagsTypeService) {}

  @Get()
  findAll() {
    return this.tagsTypeService.findAll();
  }

  @Post('save')
  async create(@Body() body: TagTypeDto) {
    await this.tagsTypeService.create(body);
    return { message: '保存成功' };
  }
}
