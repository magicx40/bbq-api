import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Chapter } from '../entities/chapter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(Chapter)
    private chaptersRepository: Repository<Chapter>,
  ) {}

  create(title: string): Promise<Chapter> {
    const chapter = this.chaptersRepository.create({ title });
    return this.chaptersRepository.save(chapter);
  }

  findAll(): Promise<Chapter[]> {
    return this.chaptersRepository.find({ relations: ['contents'] });
  }

  deleteOne(id: number) {
    return this.chaptersRepository.delete(id);
  }
}
