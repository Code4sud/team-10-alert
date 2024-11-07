import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/schemas/users.schema';
import { Repository } from 'typeorm';
import {
  CreateUserVigilanceTodoDto,
  CreateVigilanceDto,
  CreateVigilanceTodoDto,
  UpdateUserVigilanceTodoDto,
  UpdateVigilanceDto,
  UpdateVigilanceTodoDto,
} from './_utils/dtos/requests/dto.dto';
import { UserVigilanceTodo } from './schemas/user-vigilance-todo.schema';
import { VigilanceTodo } from './schemas/vigilance-todo.schema';
import { Vigilance } from './schemas/vigilance.schema';

@Injectable()
export class VigilanceService {
  constructor(
    @InjectRepository(Vigilance)
    private vigilanceRepository: Repository<Vigilance>,
    @InjectRepository(VigilanceTodo)
    private vigilanceTodoRepository: Repository<VigilanceTodo>,
    @InjectRepository(UserVigilanceTodo)
    private userVigilanceTodoRepository: Repository<UserVigilanceTodo>,
  ) {}

  // Vigilance CRUD
  createVigilance(createVigilanceDto: CreateVigilanceDto): Promise<Vigilance> {
    const vigilance = this.vigilanceRepository.create(createVigilanceDto);
    return this.vigilanceRepository.save(vigilance);
  }

  findAllVigilances(): Promise<Vigilance[]> {
    return this.vigilanceRepository.find();
  }

  findOneVigilance(id: string): Promise<Vigilance> {
    return this.vigilanceRepository.findOneBy({ id });
  }

  async updateVigilance(id: string, updateVigilanceDto: UpdateVigilanceDto): Promise<Vigilance> {
    await this.vigilanceRepository.update(id, updateVigilanceDto);
    return this.vigilanceRepository.findOneBy({ id });
  }

  async removeVigilance(id: string): Promise<void> {
    await this.vigilanceRepository.delete(id);
  }

  // VigilanceTodo CRUD
  createVigilanceTodo(createVigilanceTodoDto: CreateVigilanceTodoDto): Promise<VigilanceTodo> {
    const vigilanceTodo = this.vigilanceTodoRepository.create(createVigilanceTodoDto);
    return this.vigilanceTodoRepository.save(vigilanceTodo);
  }

  findAllVigilanceTodos(): Promise<VigilanceTodo[]> {
    return this.vigilanceTodoRepository.find();
  }

  findOneVigilanceTodo(id: string): Promise<VigilanceTodo> {
    return this.vigilanceTodoRepository.findOneBy({ id });
  }

  async updateVigilanceTodo(id: string, updateVigilanceTodoDto: UpdateVigilanceTodoDto): Promise<VigilanceTodo> {
    await this.vigilanceTodoRepository.update(id, updateVigilanceTodoDto);
    return this.vigilanceTodoRepository.findOneBy({ id });
  }

  async removeVigilanceTodo(id: string): Promise<void> {
    await this.vigilanceTodoRepository.delete(id);
  }

  // UserVigilanceTodo CRUD
  createUserVigilanceTodo(createUserVigilanceTodoDto: CreateUserVigilanceTodoDto): Promise<UserVigilanceTodo> {
    const userVigilanceTodo = this.userVigilanceTodoRepository.create(createUserVigilanceTodoDto);
    return this.userVigilanceTodoRepository.save(userVigilanceTodo);
  }

  findAllUserVigilanceTodosForUser(user: User): Promise<UserVigilanceTodo[]> {
    return this.userVigilanceTodoRepository.find({ where: { user } });
  }

  findOneUserVigilanceTodoForUser(id: string, user: User): Promise<UserVigilanceTodo> {
    return this.userVigilanceTodoRepository.findOne({ where: { id, user } });
  }

  async updateUserVigilanceTodoForUser(
    id: string,
    updateUserVigilanceTodoDto: UpdateUserVigilanceTodoDto,
    user: User,
  ): Promise<UserVigilanceTodo> {
    await this.userVigilanceTodoRepository.update({ id, user }, updateUserVigilanceTodoDto);
    return this.userVigilanceTodoRepository.findOne({ where: { id, user } });
  }

  async removeUserVigilanceTodoForUser(id: string, user: User): Promise<void> {
    await this.userVigilanceTodoRepository.delete({ id, user });
  }
}
