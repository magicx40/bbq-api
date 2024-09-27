import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateUserRolesDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty({ each: true })
  roleIds: number[];
}
