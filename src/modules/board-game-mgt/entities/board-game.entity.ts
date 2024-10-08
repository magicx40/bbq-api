import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('board_games') // 表名
export class BoardGame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'min_players', type: 'int', nullable: true })
  minPlayers: number;

  @Column({ name: 'max_players', type: 'int', nullable: true })
  maxPlayers: number;

  @Column({ name: 'play_time', type: 'int', nullable: true })
  playTime: number;

  @Column({ name: 'age_rating', type: 'int', nullable: true })
  ageRating: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  publisher: string;

  @Column({ name: 'release_date', type: 'date', nullable: true })
  releaseDate: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  category: string;

  @Column({ name: 'image_url', type: 'varchar', length: 255, nullable: true })
  imageUrl: string;

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
}
