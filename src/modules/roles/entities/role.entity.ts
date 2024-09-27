import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role_name' })
  roleName: string;

  @Column()
  description: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
