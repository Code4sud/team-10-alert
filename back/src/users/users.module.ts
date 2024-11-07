import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EncryptionModule } from 'src/encryption/encryption.module';
import { EnvironmentVariables } from '../_utils/config/environment.config';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService<EnvironmentVariables, true>) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: configService.get('JWT_SECRET') },
      }),
    }),
    forwardRef(() => JwtModule),
    EncryptionModule,
  ],
  providers: [UsersService, UsersRepository],
  controllers: [UsersController],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
