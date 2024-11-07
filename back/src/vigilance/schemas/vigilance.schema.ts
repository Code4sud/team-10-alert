import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserVigilanceTodo } from './user-vigilance-todo.schema';

@Entity()
export class Vigilance {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  alertType: string;

  @Column()
  vigilanceType: string;

  @Column()
  alertStartDate: Date;

  @OneToMany(() => UserVigilanceTodo, (userVigilanceTodo) => userVigilanceTodo.vigilance)
  userVigilanceTodos: UserVigilanceTodo[];
}
