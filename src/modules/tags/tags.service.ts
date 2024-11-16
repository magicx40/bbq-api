import { Injectable } from '@nestjs/common';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TagDto } from './dto/tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag) private readonly tagsRepository: Repository<Tag>,
  ) {}

  async findAll(): Promise<Tag[]> {
    return this.tagsRepository.find({ relations: ['tagType'] });
  }

  async create(tagDto: TagDto): Promise<Tag> {
    const tag = this.tagsRepository.create(tagDto);
    return await this.tagsRepository.save(tag);
  }
}
