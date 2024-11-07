import { User } from 'src/users/schemas/users.schema';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { VigilanceTodo } from './vigilance-todo.schema';
import { Vigilance } from './vigilance.schema';

@Entity()
export class UserVigilanceTodo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: false })
  isChecked: boolean;

  @Column({ nullable: true })
  completionDate: Date;

  @ManyToOne(() => User, (user) => user.userVigilanceTodos)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Vigilance, (vigilance) => vigilance.userVigilanceTodos)
  @JoinColumn({ name: 'vigilanceId' })
  vigilance: Vigilance;

  @ManyToOne(() => VigilanceTodo, (vigilanceTodo) => vigilanceTodo.userVigilanceTodos)
  @JoinColumn({ name: 'vigilanceTodoId' })
  vigilanceTodo: VigilanceTodo;
}
