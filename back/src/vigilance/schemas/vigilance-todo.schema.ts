import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserVigilanceTodo } from './user-vigilance-todo.schema';

@Entity()
export class VigilanceTodo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  task: string;

  @OneToMany(() => UserVigilanceTodo, (userVigilanceTodo) => userVigilanceTodo.vigilanceTodo)
  userVigilanceTodos: UserVigilanceTodo[];
}
