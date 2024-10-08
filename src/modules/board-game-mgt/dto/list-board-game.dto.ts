import { Transform, Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class ListBoardGameDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @Transform(({ value }) => Number(value) || 1)
  currentPage?: number = 1;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  @Transform(({ value }) => Number(value) || 10)
  limit?: number = 10;

  @IsOptional()
  @IsString()
  sortBy?: string = 'id';

  @IsOptional()
  @IsIn(['ASC', 'DESC'])
  sortOrder?: 'ASC' | 'DESC' = 'ASC';

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Transform(({ value }) => Number(value) || undefined)
  minPlayers?: number;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  @Transform(({ value }) => Number(value) || undefined)
  maxPlayers?: number;

  @IsOptional()
  @IsString()
  category?: string;
}
