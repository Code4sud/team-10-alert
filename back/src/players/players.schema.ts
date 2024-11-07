import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from '../users/schemas/users.schema';

@Entity()
export class Player {
  @OneToOne(() => User, (node) => node.id)
  @PrimaryColumn()
  user_id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  age: number;

  @Column()
  phoneNumber: string;

  @Column()
  parentPhoneNumber: string;

  @Column()
  postalCode: string;

  @Column()
  avatarUrl: string;

  @Column({ default: 100 })
  healthPoints: number;

  @Column({ default: 100 })
  wisePoints: number;
}
