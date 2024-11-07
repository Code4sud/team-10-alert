import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptionModule } from 'src/encryption/encryption.module';
import { PlayersModule } from 'src/players/players.module';
import { User } from './schemas/users.schema';
import { UsersController } from './users.controller';
import { UsersMapper } from './users.mapper';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), EncryptionModule, PlayersModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, UsersMapper],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
