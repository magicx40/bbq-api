import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TagType } from './tag-type.entity';
import { Blog } from 'src/modules/blogs/entities/blog.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  icon: string;

  @Column({
    name: 'icon_dark',
    type: 'text',
    nullable: true,
  })
  iconDark: string;

  @Column({
    name: 'type_id',
    type: 'int',
    nullable: false,
  })
  typeId: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @ManyToOne(() => TagType, (tagType) => tagType.tags)
  tagType: TagType;

  @ManyToMany(() => Blog, (blog) => blog.tags)
  blogs: Blog[];
}
