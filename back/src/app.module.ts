import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { validateEnv } from './_utils/config/environment.config';
import { AuthModule } from './auth/auth.module';
import { DashboardNodesModule } from './dashboard-nodes/dashboard-nodes.module';
import { EncryptionModule } from './encryption/encryption.module';
import { ScenarioModule } from './scenario/scenario.module';
import { UsersModule } from './users/users.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: validateEnv, isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './database/database.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    EncryptionModule,
    ScenarioModule,
    DashboardNodesModule,
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
