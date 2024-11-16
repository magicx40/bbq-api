import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prd } from './entities/prd.entity';
import { CreatePrdDto } from './dto/create-prd.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PrdsService {
  constructor(@InjectRepository(Prd) private prdsRepository: Repository<Prd>) {}

  async create(createPrdDto: CreatePrdDto) {
    const prd = this.prdsRepository.create(createPrdDto);
    return await this.prdsRepository.save(prd);
  }

  async findAll() {
    return this.prdsRepository.find({ relations: ['createdBy'] });
  }

  async deleteOne(id: number) {
    return this.prdsRepository.delete(id);
  }
}
