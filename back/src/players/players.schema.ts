import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from '../users/schemas/users.schema';

@Entity()
export class Player {
  @OneToOne(() => User, (node) => node.id)
  @PrimaryColumn()
  user_id: string;

  @Column()
  gameLevel: number;

  @Column()
  gender: string;

  @Column()
  avatar: string;

  @Column()
  health: number;

  @Column()
  score: number;
}
