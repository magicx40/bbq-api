import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { TagType } from './entities/tag-type.entity';
import { TagsTypeController } from './type/tags-type.controller';
import { TagsTypeService } from './type/tags-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, TagType])],
  controllers: [TagsController, TagsTypeController],
  providers: [TagsService, TagsTypeService],
})
export class TagsModule {}
