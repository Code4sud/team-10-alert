import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from 'src/auth/_utils/dto/requests/register.dto';
import { Repository } from 'typeorm';
import { User } from './schemas/users.schema';

@Injectable()
export class UsersRepository {
  private readonly orFailNotFound = new NotFoundException('User not found');

  constructor(@InjectRepository(User) private readonly userModel: Repository<User>) {}

  getAllUsers = () => this.userModel.find();

  createUser = (registerDto: RegisterDto, password: string) => this.userModel.save({ ...registerDto, password });

  findOneByEmail = (email: string) => this.userModel.findOne({ where: { email } });

  updatePasswordById = (id: string, pass: string) => this.userModel.update(id, { password: pass });
}
