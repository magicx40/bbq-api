import { Exclude } from 'class-transformer';

export class RoleDto {
  @Exclude()
  id: number;
  roleName: string;
  description: string;
  @Exclude()
  createdAt: Date;
}
