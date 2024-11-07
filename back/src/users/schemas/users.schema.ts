import { UserVigilanceTodo } from 'src/vigilance/schemas/user-vigilance-todo.schema';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum UserRoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    default: UserRoleEnum.USER,
  })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserVigilanceTodo, (userVigilanceTodo) => userVigilanceTodo.user)
  userVigilanceTodos: UserVigilanceTodo[];
}
