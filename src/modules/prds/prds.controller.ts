import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePrdDto } from './dto/create-prd.dto';
import { PrdsService } from './prds.service';
import { QueryPrdDto } from './dto/query-prd.dto';
import { plainToInstance } from 'class-transformer';
import { QueryPrdUserDto } from './dto/query-prd-user.dto';

@Controller('prds')
export class PrdsController {
  constructor(private readonly prdsService: PrdsService) {}
  @Post('save')
  async save(@Body() createPrdDto: CreatePrdDto) {
    await this.prdsService.create(createPrdDto);
    return { message: '保存成功' };
  }
  @Get()
  async findAll(): Promise<QueryPrdDto[]> {
    const allPrds = await this.prdsService.findAll();
    const prdsWithConvertUsers = allPrds.map((prd) => ({
      ...prd,
      createdBy: plainToInstance(QueryPrdUserDto, prd.createdBy),
    }));
    return plainToInstance(QueryPrdDto, prdsWithConvertUsers);
  }
}
