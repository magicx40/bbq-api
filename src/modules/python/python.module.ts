import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chapter } from './entities/chapter.entity';
import { Content } from './entities/content.entity';
import { ChaptersService } from './chapters/chapters.service';
import { ContentsService } from './contents/contents.service';
import { ChaptersController } from './chapters/chapters.controller';
import { ContentsController } from './contents/contents.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter, Content])],
  providers: [ChaptersService, ContentsService],
  controllers: [ChaptersController, ContentsController],
})
export class PythonModule {}
