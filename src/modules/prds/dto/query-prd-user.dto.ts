import { Exclude } from 'class-transformer';
import { Role } from 'src/modules/roles/entities/role.entity';

export class QueryPrdUserDto {
  @Exclude()
  id: number;
  username: string;
  @Exclude()
  password: string;
  email: string;
  @Exclude()
  createdAt: Date;
  @Exclude()
  roles: Role[];
}
