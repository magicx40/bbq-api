import { Injectable, NotFoundException } from '@nestjs/common';
import { Content } from '../entities/content.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Chapter } from '../entities/chapter.entity';
import { Repository } from 'typeorm';
import { CreateContentDto } from '../dto/create-content.dto';

@Injectable()
export class ContentsService {
  constructor(
    @InjectRepository(Content)
    private contentsRepository: Repository<Content>,
    @InjectRepository(Chapter)
    private chaptersRepository: Repository<Chapter>,
  ) {}

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const { chapterId } = createContentDto;
    const chapter = await this.chaptersRepository.findOne({
      where: { id: chapterId },
    });
    if (!chapter) {
      throw new NotFoundException(`Chapter with ID ${chapterId} not found`);
    }

    const content = this.contentsRepository.create(createContentDto);
    return this.contentsRepository.save(content);
  }

  findAll(): Promise<Content[]> {
    return this.contentsRepository.find({ relations: ['chapter'] });
  }
}
