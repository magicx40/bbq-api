import { Body, Controller, Post } from '@nestjs/common';
import { CreatePrdDto } from './dto/create-prd.dto';
import { PrdsService } from './prds.service';

@Controller('prds')
export class PrdsController {
  constructor(private readonly prdsService: PrdsService) {}
  @Post('save')
  async save(@Body() createPrdDto: CreatePrdDto) {
    await this.prdsService.create(createPrdDto);
    return { message: '保存成功' };
  }
}
