import { Exclude } from 'class-transformer';

export class QueryRoleDto {
  @Exclude()
  id: number;

  roleName: string;

  description: string;

  @Exclude()
  createdAt: Date;
}
