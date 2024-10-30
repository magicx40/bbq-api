import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prd } from './entities/prd.entity';
import { PrdsController } from './prds.controller';
import { PrdsService } from './prds.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prd])],
  controllers: [PrdsController],
  providers: [PrdsService],
})
export class PrdsModule {}
