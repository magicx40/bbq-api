import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Chapter } from './chapter.entity';

@Entity({ name: 'contents' })
export class Content {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Chapter, (chapter) => chapter.contents, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter;

  @Column({ name: 'chapter_id' })
  chapterId: number;

  @Column({ name: 'function_name', type: 'varchar', length: 255 })
  functionName: string;

  @Column({ type: 'text' })
  explanation: string;

  @Column({ type: 'text' })
  example: string;

  @Column()
  type: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
