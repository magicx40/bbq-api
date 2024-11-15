import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { TagType } from './entities/tag-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, TagType])],
  controllers: [TagsController],
  providers: [TagsService],
})
export class TagsModule {}
