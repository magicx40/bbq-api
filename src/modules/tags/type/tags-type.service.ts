import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagType } from '../entities/tag-type.entity';
import { TagTypeDto } from '../dto/tag-type.dto';

@Injectable()
export class TagsTypeService {
  constructor(
    @InjectRepository(TagType)
    private readonly tagTypeRepository: Repository<TagType>,
  ) {}

  async findAll(): Promise<TagType[]> {
    return this.tagTypeRepository.find();
  }

  async create(tagTypeDto: TagTypeDto): Promise<TagType> {
    const tagType = this.tagTypeRepository.create(tagTypeDto);
    return await this.tagTypeRepository.save(tagType);
  }
}
